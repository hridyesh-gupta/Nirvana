import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import Stripe from 'stripe'
import { prisma } from '@/lib/db'
import { sendOrderConfirmationEmailDirect, sendOwnerNotificationEmailDirect, verifyEmailConfiguration } from '@/lib/emailService'
import { getZoneByZipcode } from '@/lib/deliveryZones'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
})

// Verify SMTP configuration on startup
verifyEmailConfiguration().then(result => {
  if (!result.configured) {
    console.warn('SMTP is not configured. Email sending will be logged to console only.')
  } else if (result.configured && !result.verified) {
    console.warn('SMTP configuration verification failed:', result.error)
  } else if (result.configured && result.verified) {
    console.log('SMTP configuration verified successfully')
  }
}).catch(err => {
  console.error('Error verifying SMTP configuration:', err)
})

// Helper function to deserialize cart items from batched metadata
function deserializeCartItems(metadata) {
  try {
    // Check for truncation warning
    if (metadata.items_truncated === 'true') {
      console.warn('Cart items were truncated due to Stripe metadata limits')
    }
    
    const cartItems = []
    let i = 0
    
    // Iterate over existing items_{i} keys until we find a gap
    while (metadata[`items_${i}`]) {
      const batch = JSON.parse(metadata[`items_${i}`])
      cartItems.push(...batch)
      i++
    }
    
    return cartItems
  } catch (error) {
    console.error('Error deserializing cart items:', error)
    return []
  }
}

// Helper function to parse delivery address
function parseDeliveryAddress(addressString, orderType) {
  if (orderType === 'pickup') {
    return { zipcode: null, street: null, city: null, postalCode: null }
  }
  
  try {
    if (!addressString) {
      return { zipcode: null, street: null, city: null, postalCode: null }
    }
    
    let zipcode = null
    let remainingAddress = addressString

    if (addressString.includes(' - ')) {
      const [zipPart, rest] = addressString.split(' - ')
      zipcode = zipPart?.trim() || null
      remainingAddress = (rest || '').trim()
    }

    const parts = remainingAddress.split(',').map(part => part.trim())
    const street = parts[0] || null
    const city = parts[1] || null
    const postalCode = parts[2] || null
    
    return { zipcode: zipcode || null, street, city, postalCode }
  } catch (error) {
    console.error('Error parsing delivery address:', error)
    return { zipcode: null, street: null, city: null, postalCode: null }
  }
}

// Helper function to generate unique order number
function generateOrderNumber() {
  const now = new Date()
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '')
  const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `ORD-${dateStr}-${randomNum}`
}

export async function POST(req) {
  let event

  try {
    event = stripe.webhooks.constructEvent(
      await req.text(),
      (await headers()).get('stripe-signature'),
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    const errorMessage = err.message
    // On error, log and return the error message.
    if (err) console.log(err)
    console.log(`Error message: ${errorMessage}`)
    return NextResponse.json(
      { message: `Webhook Error: ${errorMessage}` },
      { status: 400 }
    )
  }

  const permittedEvents = ['checkout.session.completed']

  if (permittedEvents.includes(event.type)) {
    let data

    // Add webhook event logging
    console.log('Webhook event received:', {
      type: event.type,
      id: event.id,
      created: new Date(event.created * 1000).toISOString()
    });

    try {
      switch (event.type) {
        case 'checkout.session.completed':
          data = event.data.object
          console.log(`CheckoutSession status: ${data.payment_status}`)
          
          let session
          try {
            // Retrieve full session with metadata
            session = await stripe.checkout.sessions.retrieve(data.id)
            
            console.log('Processing order for session:', session.id)
            console.log('Customer email:', session.metadata?.customerEmail)
            
            // Validate essential metadata before DB write
            if (!session.metadata?.customerName || !session.metadata?.customerEmail || 
                !session.metadata?.customerPhone || !session.metadata?.orderType || 
                !session.metadata?.paymentMethod) {
              console.error('Missing required metadata fields:', {
                customerName: !!session.metadata?.customerName,
                customerEmail: !!session.metadata?.customerEmail,
                customerPhone: !!session.metadata?.customerPhone,
                orderType: !!session.metadata?.orderType,
                paymentMethod: !!session.metadata?.paymentMethod
              })
              return NextResponse.json(
                { message: 'Missing required metadata' },
                { status: 500 }
              )
            }
            
            // Validate numeric fields
            const subtotal = parseFloat(session.metadata.subtotal || '0')
            const deliveryFee = parseFloat(session.metadata.deliveryFee || '0')
            const discount = parseFloat(session.metadata.discount || '0')
            const total = parseFloat(session.metadata.total || '0')
            
            if (isNaN(subtotal) || isNaN(deliveryFee) || isNaN(discount) || isNaN(total)) {
              console.error('Invalid numeric values in metadata:', {
                subtotal: session.metadata.subtotal,
                deliveryFee: session.metadata.deliveryFee,
                discount: session.metadata.discount,
                total: session.metadata.total
              })
              return NextResponse.json(
                { message: 'Invalid numeric values' },
                { status: 500 }
              )
            }
            
            // Check if order already exists (idempotency)
            const existingOrder = await prisma.order.findFirst({
              where: { stripeSessionId: session.id }
            })
            
            if (existingOrder) {
              console.log('Order already exists for session:', session.id)
              return NextResponse.json({ message: 'Order already processed' }, { status: 200 })
            }
            
            // Log metadata size
            const metadataSize = JSON.stringify(session.metadata).length;
            console.log('Metadata size:', metadataSize, 'bytes');
            if (metadataSize > 45000) {
              console.warn('Metadata approaching Stripe limit (50KB)');
            }

            // Extract and deserialize cart items
            const cartItems = deserializeCartItems(session.metadata)
            console.log('Deserialized cart items:', cartItems.length)
            
            const metadataZipcode = session.metadata.zipcode?.trim() || null
            const parsedAddress = parseDeliveryAddress(
              session.metadata.deliveryAddress,
              session.metadata.orderType
            )
            const zipcode = metadataZipcode || parsedAddress.zipcode
            const { street, city, postalCode } = parsedAddress

            console.log('Parsed delivery info:', { zipcode, street, city, postalCode })

            let persistedDeliveryFee = deliveryFee

            // Validate delivery fee matches zone (if zipcode provided)
            if (session.metadata.orderType === 'delivery' && zipcode) {
              const zoneInfo = getZoneByZipcode(zipcode)

              if (zoneInfo) {
                const epsilon = 0.01

                if (Math.abs(deliveryFee - zoneInfo.deliveryFee) > epsilon) {
                  console.warn('Delivery fee mismatch:', {
                    expected: zoneInfo.deliveryFee,
                    received: deliveryFee,
                    zipcode,
                    zone: zoneInfo.zone
                  })
                }

                persistedDeliveryFee = zoneInfo.deliveryFee
              } else {
                console.warn('Zipcode not found in delivery zones:', zipcode)
              }
            }
            
            // Generate unique order number
            const orderNumber = generateOrderNumber()
            console.log('Generated order number:', orderNumber)
            
            // Map payment status
            const paymentStatusMap = {
              'paid': 'paid',
              'unpaid': 'pending',
              'no_payment_required': 'paid'
            }
            const paymentStatus = paymentStatusMap[session.payment_status] || 'pending'
            
            // Create order and order items in a transaction with idempotency handling
            let order
            const startTime = Date.now();
            try {
              order = await prisma.$transaction(async (tx) => {
                // Create the order
                const newOrder = await tx.order.create({
                  data: {
                    orderNumber,
                    customerName: session.metadata.customerName,
                    customerEmail: session.metadata.customerEmail,
                    customerPhone: session.metadata.customerPhone,
                    deliveryAddress: street,
                    city,
                    postalCode: zipcode,
                    orderType: session.metadata.orderType,
                    paymentMethod: session.metadata.paymentMethod,
                    paymentStatus,
                    stripeSessionId: session.id,
                    subtotal,
                    deliveryFee: persistedDeliveryFee,
                    discount,
                    total,
                    specialInstructions: session.metadata.specialInstructions || null,
                    status: 'pending'
                  }
                })
                
                // Create order items
                const orderItems = cartItems.map(item => ({
                  orderId: newOrder.id,
                  productId: item.id,
                  productName: item.name,
                  price: parseFloat(item.price),
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
              console.log('Order created in', Date.now() - startTime, 'ms');
            } catch (dbError) {
              console.error('Database transaction failed after', Date.now() - startTime, 'ms');
              // Handle unique constraint violation (P2002) as idempotent success
              if (dbError.code === 'P2002' && dbError.meta?.target?.includes('stripeSessionId')) {
                console.log('Order already exists (unique constraint):', session.id)
                return NextResponse.json({ message: 'Order already processed' }, { status: 200 })
              }
              throw dbError
            }
            
            console.log('Order created successfully:', order.orderNumber)
            
            // Prepare order data for emails
            // Format delivery address as a single string when order type is delivery and all parts are present
            const deliveryAddress = order.orderType === 'delivery' && order.deliveryAddress && order.city
              ? `${order.deliveryAddress}, ${order.city}${order.postalCode ? `, ${order.postalCode}` : ''}`
              : order.orderType === 'delivery' && order.deliveryAddress
              ? order.deliveryAddress
              : undefined;
            
            const orderData = {
              orderNumber: order.orderNumber,
              customerName: order.customerName,
              customerEmail: order.customerEmail,
              customerPhone: order.customerPhone,
              deliveryAddress,
              postalCode: order.postalCode || undefined,
              orderType: order.orderType,
              paymentMethod: order.paymentMethod,
              paymentStatus: order.paymentStatus,
              subtotal: order.subtotal,
              deliveryFee: order.deliveryFee,
              discount: order.discount,
              total: order.total,
              specialInstructions: order.specialInstructions,
              items: cartItems,
              createdAt: order.createdAt
            }
            
            // Send email notifications (don't fail webhook if emails fail)
            const emailStartTime = Date.now();
            try {
              const emailResult = await sendOrderConfirmationEmailDirect(orderData)
              if (emailResult.success) {
                console.log('Customer email sent in', Date.now() - emailStartTime, 'ms');
              } else {
                console.error('Customer email failed after', Date.now() - emailStartTime, 'ms:', {
                  orderNumber: orderData.orderNumber,
                  customerEmail: orderData.customerEmail,
                  error: emailResult.error,
                  timestamp: new Date().toISOString()
                })
              }
            } catch (emailError) {
              console.error('Customer email failed after', Date.now() - emailStartTime, 'ms:', {
                orderNumber: orderData.orderNumber,
                customerEmail: orderData.customerEmail,
                error: emailError instanceof Error ? {
                  message: emailError.message,
                  stack: emailError.stack
                } : emailError,
                timestamp: new Date().toISOString()
              })
            }
            
            const ownerEmailStartTime = Date.now();
            const ownerEmail = process.env.OWNER_EMAIL || 'orders@nirvana-geneve.ch';
            if (!process.env.OWNER_EMAIL) {
              console.warn('OWNER_EMAIL environment variable is not configured. Using fallback:', ownerEmail)
            }
            try {
              const emailResult = await sendOwnerNotificationEmailDirect(orderData)
              if (emailResult.success) {
                console.log('Owner email sent in', Date.now() - ownerEmailStartTime, 'ms');
              } else {
                console.error('Owner email failed after', Date.now() - ownerEmailStartTime, 'ms:', {
                  orderNumber: orderData.orderNumber,
                  ownerEmail,
                  error: emailResult.error,
                  timestamp: new Date().toISOString()
                })
              }
            } catch (emailError) {
              console.error('Owner email failed after', Date.now() - ownerEmailStartTime, 'ms:', {
                orderNumber: orderData.orderNumber,
                ownerEmail,
                error: emailError instanceof Error ? {
                  message: emailError.message,
                  stack: emailError.stack
                } : emailError,
                timestamp: new Date().toISOString()
              })
            }
            
            console.log('Order processing completed successfully for:', order.orderNumber)
            
          } catch (orderError) {
            console.error('Error processing order:', orderError)
            console.error('Session ID:', data.id)
            console.error('Customer email:', data?.customer_email || session?.metadata?.customerEmail)
            return NextResponse.json(
              { message: 'Order processing failed' },
              { status: 500 }
            )
          }
          break
        default:
          throw new Error(`Unhandled event: ${event.type}`)
      }
    } catch (error) {
      console.log(error)
      return NextResponse.json(
        { message: 'Webhook handler failed' },
        { status: 500 }
      )
    }
  }
  // Return a response to acknowledge receipt of the event.
  return NextResponse.json({ message: 'Received' }, { status: 200 })
}