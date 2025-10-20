'use client'

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CartItem } from '../../lib/cartStore'

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

  // Create a wrapper function that handles the fetchClientSecret call
  const fetchClientSecretWrapper = async () => {
    const cartItems = getCartItemsFromLocalStorage()
    
    // For now, return a placeholder - this component needs to be integrated with the full checkout flow
    // that includes customer info and order context
    throw new Error('This checkout component needs to be integrated with the full checkout flow')
  }

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret: fetchClientSecretWrapper }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}