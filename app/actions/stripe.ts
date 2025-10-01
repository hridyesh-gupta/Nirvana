'use server'

import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-08-27.basil',
});

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export async function fetchClientSecret(cartItems: CartItem[]): Promise<string> {
  const origin = (await headers()).get('origin');

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

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: lineItems,
    mode: 'payment',
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  if (!session.client_secret) {
    throw new Error("Failed to create Stripe Checkout Session: client_secret is null.");
  }

  return session.client_secret as string;
}