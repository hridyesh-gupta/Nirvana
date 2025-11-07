import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { sendOrderConfirmationEmailDirect, sendOwnerNotificationEmailDirect } from '@/lib/emailService'
import type { CartItem } from '@/lib/cartStore'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Helper function to generate unique order number
function generateOrderNumber() {
  const now = new Date()
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '')
  const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `ORD-${dateStr}-${randomNum}`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { customerInfo, cartItems, orderContext } = body

    // Validate request data
    if (!customerInfo || !cartItems || !orderContext) {
      return NextResponse.json(
        { error: 'Missing required fields: customerInfo, cartItems, or orderContext' },
        { status: 400 }
      )
    }

    // Validate customer info
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      return NextResponse.json(
        { error: 'Missing required customer information: name, email, or phone' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(customerInfo.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate phone format (Swiss format)
    const cleanPhone = customerInfo.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^(\+41\d{9}|0\d{9})$/;
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone format. Please use Swiss phone number format' },
        { status: 400 }
      )
    }

    // Validate cart items
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      )
    }

    // Validate order context
    if (!orderContext.orderType || !orderContext.paymentMethod || 
        orderContext.subtotal === undefined || orderContext.total === undefined) {
      return NextResponse.json(
        { error: 'Missing required order context fields' },
        { status: 400 }
      )
    }

    // If orderType is 'delivery', validate address fields
    if (orderContext.orderType === 'delivery') {
      if (!customerInfo.street || !customerInfo.city || !customerInfo.postalCode) {
        return NextResponse.json(
          { error: 'Delivery address is required for delivery orders' },
          { status: 400 }
        )
      }
    }

    // Validate numeric values
    const subtotal = Number(orderContext.subtotal);
    const deliveryFee = Number(orderContext.deliveryFee ?? 0);
    const discount = Number(orderContext.discount ?? 0);
    const total = Number(orderContext.total);
    if ([subtotal, deliveryFee, discount, total].some((n) => Number.isNaN(n))) {
      return NextResponse.json({ error: 'Invalid numeric values in order context' }, { status: 400 });
    }

    // Server-side total validation to prevent tampering
    const computedSubtotal = cartItems.reduce((sum: number, i: CartItem) => sum + Number(i.price) * Number(i.quantity), 0);
    const expectedDeliveryFee = orderContext.orderType === 'delivery' ? 3.5 : 0;
    const expectedDiscount = orderContext.orderType === 'pickup' ? computedSubtotal * 0.1 : 0;
    const computedTotal = computedSubtotal + expectedDeliveryFee - expectedDiscount;

    const epsilon = 0.01;
    if (Math.abs(subtotal - computedSubtotal) > epsilon || Math.abs(total - computedTotal) > epsilon) {
      return NextResponse.json({ error: 'Totals mismatch' }, { status: 400 });
    }

    // Generate unique order number
    const orderNumber = generateOrderNumber()

    // Create order in database using Prisma transaction
    const order = await prisma.$transaction(async (tx) => {
      // Create the order
      const newOrder = await tx.order.create({
        data: {
          orderNumber,
          customerName: customerInfo.name,
          customerEmail: customerInfo.email,
          customerPhone: customerInfo.phone,
          deliveryAddress: orderContext.orderType === 'delivery' ? customerInfo.street : null,
          city: orderContext.orderType === 'delivery' ? customerInfo.city : null,
          postalCode: orderContext.orderType === 'delivery' ? customerInfo.postalCode : null,
          orderType: orderContext.orderType,
          paymentMethod: 'cod',
          paymentStatus: 'pending',
          stripeSessionId: null,
          subtotal,
          deliveryFee,
          discount,
          total,
          specialInstructions: customerInfo.specialInstructions || null,
          status: 'pending'
        }
      })

      // Create order items
      const orderItems = cartItems.map((item: CartItem) => ({
        orderId: newOrder.id,
        productId: item.id,
        productName: item.name,
        price: parseFloat(item.price.toString()),
        quantity: item.quantity,
        selectedSauce: item.selectedSauce || null,
        selectedFlavor: item.selectedFlavor || null,
        selectedMixOption: item.selectedMixOption || null
      }))

      await tx.orderItem.createMany({
        data: orderItems
      })

      return newOrder
    })

    // Prepare order data for emails
    const orderData = {
      orderNumber: order.orderNumber,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      customerPhone: order.customerPhone,
      orderType: order.orderType,
      paymentMethod: 'cod' as const,
      paymentStatus: 'pending' as const,
      subtotal: parseFloat(order.subtotal.toString()),
      deliveryFee: parseFloat(order.deliveryFee.toString()),
      discount: parseFloat(order.discount.toString()),
      total: parseFloat(order.total.toString()),
      deliveryAddress: order.orderType === 'delivery' && order.deliveryAddress && order.city && order.postalCode
        ? `${order.deliveryAddress}, ${order.city}, ${order.postalCode}`
        : undefined,
      specialInstructions: order.specialInstructions || undefined,
      items: cartItems.map((item: CartItem) => ({
        name: item.name,
        quantity: item.quantity,
        price: parseFloat(item.price.toString()),
        selectedSauce: item.selectedSauce,
        selectedFlavor: item.selectedFlavor,
        selectedMixOption: item.selectedMixOption
      })),
      createdAt: order.createdAt
    }

    // Send email notifications (don't fail the API if emails fail)
    try {
      const emailResult = await sendOrderConfirmationEmailDirect(orderData)
      if (emailResult.success) {
        console.log('Order confirmation email sent successfully')
      } else {
        console.error('Failed to send order confirmation email:', {
          orderNumber: orderData.orderNumber,
          customerEmail: orderData.customerEmail,
          error: emailResult.error,
          suggestion: 'Check SMTP configuration if error persists',
          timestamp: new Date().toISOString()
        })
      }
    } catch (emailError) {
      console.error('Failed to send order confirmation email:', {
        orderNumber: orderData.orderNumber,
        customerEmail: orderData.customerEmail,
        error: emailError instanceof Error ? {
          message: emailError.message,
          stack: emailError.stack
        } : emailError,
        suggestion: 'Check SMTP configuration if error persists',
        timestamp: new Date().toISOString()
      })
    }

    const ownerEmail = process.env.OWNER_EMAIL || 'orders@nirvana-geneve.ch';
    if (!process.env.OWNER_EMAIL) {
      console.warn('OWNER_EMAIL environment variable is not configured. Using fallback:', ownerEmail)
    }
    try {
      const emailResult = await sendOwnerNotificationEmailDirect(orderData)
      if (emailResult.success) {
        console.log('Owner notification email sent successfully')
      } else {
        console.error('Failed to send owner notification email:', {
          orderNumber: orderData.orderNumber,
          ownerEmail,
          error: emailResult.error,
          timestamp: new Date().toISOString()
        })
      }
    } catch (emailError) {
      console.error('Failed to send owner notification email:', {
        orderNumber: orderData.orderNumber,
        ownerEmail,
        error: emailError instanceof Error ? {
          message: emailError.message,
          stack: emailError.stack
        } : emailError,
        timestamp: new Date().toISOString()
      })
    }

    // Return success response
    return NextResponse.json({
      success: true,
      orderNumber: order.orderNumber,
      orderId: order.id,
      message: 'Order created successfully'
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating COD order:', error)
    
    // Handle Prisma errors specifically
    if (error && typeof error === 'object' && 'code' in error) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'Order number already exists. Please try again.' },
          { status: 409 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to create order. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to create orders.' },
    { status: 405 }
  )
}
