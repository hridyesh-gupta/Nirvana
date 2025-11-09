'use server'

import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-08-27.basil',
});

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  selectedSauce?: string;
  selectedFlavor?: string;
  selectedMixOption?: string;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zipcode: string;
  specialInstructions: string;
}

export interface OrderContext {
  orderType: 'delivery' | 'pickup';
  paymentMethod: 'stripe' | 'cod';
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
}

// Helper function to serialize cart items efficiently
function serializeCartItems(cartItems: CartItem[]): Record<string, string> {
  const maxLength = 450; // Leave buffer for Stripe's 500 char limit
  const maxBatches = 40; // Leave buffer for Stripe's ~50 metadata key limit
  const result: Record<string, string> = {};
  
  let currentIndex = 0;
  let currentItems: CartItem[] = [];
  let currentLength = 0;
  
  for (const item of cartItems) {
    const itemString = JSON.stringify(item);
    
    // If adding this item would exceed the limit, save current batch
    if (currentLength + itemString.length + 1 > maxLength && currentItems.length > 0) {
      result[`items_${currentIndex}`] = JSON.stringify(currentItems);
      currentIndex++;
      currentItems = [];
      currentLength = 0;
      
      // Respect Stripe's metadata key limit
      if (currentIndex >= maxBatches) {
        result.items_truncated = 'true';
        break;
      }
    }
    
    currentItems.push(item);
    currentLength += itemString.length + 1; // +1 for comma
  }
  
  // Save the last batch
  if (currentItems.length > 0 && currentIndex < maxBatches) {
    result[`items_${currentIndex}`] = JSON.stringify(currentItems);
  }
  
  result.itemsCount = cartItems.length.toString();
  return result;
}

// Helper function to format delivery address
function formatDeliveryAddress(customerInfo: CustomerInfo, orderType: 'delivery' | 'pickup'): string {
  if (orderType === 'pickup') {
    return '';
  }
  const address = `${customerInfo.zipcode} - ${customerInfo.street}, ${customerInfo.city}`;
  return address.length > 500 ? address.substring(0, 500) : address;
}

export async function fetchClientSecret(
  cartItems: CartItem[],
  customerInfo: CustomerInfo,
  orderContext: OrderContext
): Promise<string> {
  const headersList = await headers();
  const origin = headersList.get('origin') || 
                 process.env.NEXT_PUBLIC_SITE_URL || 
                 `https://${headersList.get('host')}`;

  // Create Checkout Sessions from body params.
  const lineItems = cartItems.map(item => ({
    price_data: {
      currency: 'chf',
      product_data: {
        name: item.name,
      },
      unit_amount: Math.round(item.price * 100), // Stripe expects amount in cents
    },
    quantity: item.quantity,
  }));

  // Serialize cart items for metadata
  const serializedItems = serializeCartItems(cartItems);
  
  // Format delivery address
  const deliveryAddress = formatDeliveryAddress(customerInfo, orderContext.orderType);

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: lineItems,
    mode: 'payment',
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    customer_email: customerInfo.email,
    metadata: {
      customerName: customerInfo.name,
      customerEmail: customerInfo.email,
      customerPhone: customerInfo.phone,
      deliveryAddress: deliveryAddress,
      zipcode: customerInfo.zipcode,
      orderType: orderContext.orderType,
      paymentMethod: orderContext.paymentMethod,
      subtotal: orderContext.subtotal.toFixed(2),
      deliveryFee: orderContext.deliveryFee.toFixed(2),
      discount: orderContext.discount.toFixed(2),
      total: orderContext.total.toFixed(2),
      specialInstructions: customerInfo.specialInstructions.substring(0, 500),
      ...serializedItems,
    },
  });

  if (!session.client_secret) {
    throw new Error("Failed to create Stripe Checkout Session: client_secret is null.");
  }

  return session.client_secret as string;
}