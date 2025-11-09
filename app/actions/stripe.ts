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

// Helper function to create a minimal cart item without large fields for metadata
function createMinimalCartItem(item: any): CartItem {
  // Remove image, description, category and other large fields that aren't needed for order processing
  // Keep only essential fields: id, name, price, quantity, selectedSauce, selectedFlavor, selectedMixOption
  const minimalItem: CartItem = {
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
  };
  
  // Add optional fields if they exist
  if (item.selectedSauce) minimalItem.selectedSauce = item.selectedSauce;
  if (item.selectedFlavor) minimalItem.selectedFlavor = item.selectedFlavor;
  if (item.selectedMixOption) minimalItem.selectedMixOption = item.selectedMixOption;
  
  return minimalItem;
}

// Helper function to serialize cart items efficiently
function serializeCartItems(cartItems: any[]): Record<string, string> {
  const maxLength = 500; // Stripe's metadata value limit
  const maxBatches = 40; // Leave buffer for Stripe's ~50 metadata key limit
  const result: Record<string, string> = {};
  
  let currentIndex = 0;
  let currentItems: CartItem[] = [];
  
  for (const item of cartItems) {
    // Create minimal version without image URL to reduce size
    const minimalItem = createMinimalCartItem(item);
    
    // Test if adding this item would exceed the limit
    const testItems = [...currentItems, minimalItem];
    const testString = JSON.stringify(testItems);
    
    // If adding this item would exceed the limit, save current batch
    if (testString.length > maxLength && currentItems.length > 0) {
      const batchString = JSON.stringify(currentItems);
      // Safety check: ensure it doesn't exceed limit
      result[`items_${currentIndex}`] = batchString.length > maxLength 
        ? batchString.substring(0, maxLength) 
        : batchString;
      currentIndex++;
      currentItems = [minimalItem]; // Start new batch with current item
      
      // Respect Stripe's metadata key limit
      if (currentIndex >= maxBatches) {
        result.items_truncated = 'true';
        break;
      }
    } else {
      currentItems.push(minimalItem);
    }
  }
  
  // Save the last batch
  if (currentItems.length > 0 && currentIndex < maxBatches) {
    const batchString = JSON.stringify(currentItems);
    // Safety check: ensure it doesn't exceed limit
    result[`items_${currentIndex}`] = batchString.length > maxLength 
      ? batchString.substring(0, maxLength) 
      : batchString;
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

  // Helper function to ensure metadata values don't exceed 500 characters
  const truncateMetadata = (value: string, maxLength: number = 500): string => {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value.length > maxLength ? value.substring(0, maxLength) : value;
  };

  // Prepare metadata with all values truncated to 500 characters
  const metadata: Record<string, string> = {
    customerName: truncateMetadata(customerInfo.name),
    customerEmail: truncateMetadata(customerInfo.email),
    customerPhone: truncateMetadata(customerInfo.phone),
    deliveryAddress: truncateMetadata(deliveryAddress),
    zipcode: truncateMetadata(customerInfo.zipcode),
    orderType: truncateMetadata(orderContext.orderType),
    paymentMethod: truncateMetadata(orderContext.paymentMethod),
    subtotal: truncateMetadata(orderContext.subtotal.toFixed(2)),
    deliveryFee: truncateMetadata(orderContext.deliveryFee.toFixed(2)),
    discount: truncateMetadata(orderContext.discount.toFixed(2)),
    total: truncateMetadata(orderContext.total.toFixed(2)),
    specialInstructions: truncateMetadata(customerInfo.specialInstructions),
  };

  // Add serialized items with safety truncation
  for (const [key, value] of Object.entries(serializedItems)) {
    metadata[key] = truncateMetadata(String(value));
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: lineItems,
    mode: 'payment',
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    customer_email: customerInfo.email,
    metadata,
  });

  if (!session.client_secret) {
    throw new Error("Failed to create Stripe Checkout Session: client_secret is null.");
  }

  return session.client_secret as string;
}