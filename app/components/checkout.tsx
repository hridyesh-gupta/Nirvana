'use client'

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CartItem } from '../../lib/cartStore'
import { fetchClientSecret } from '../actions/stripe'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

export default function Checkout() {
  function getCartItemsFromLocalStorage(): CartItem[] {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('cart') : null
      return raw ? JSON.parse(raw) as CartItem[] : []
    } catch (e) {
      console.error('Failed to parse cart from localStorage', e)
      return []
    }
  }
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret: () => fetchClientSecret(getCartItemsFromLocalStorage()) }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}