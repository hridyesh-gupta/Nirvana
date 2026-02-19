'use client';

import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { fetchClientSecret } from '../actions/stripe';
import type { CartItem, CustomerInfo, OrderContext } from '../actions/stripe';
import { useEffect } from 'react';
import { useLanguage } from '../LanguageProvider';

interface StripeCheckoutModalProps {
  show: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  customerInfo: CustomerInfo;
  orderContext: OrderContext;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function StripeCheckoutModal({
  show,
  onClose,
  cartItems,
  customerInfo,
  orderContext,
}: StripeCheckoutModalProps) {
  const { language } = useLanguage();
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {language === 'fr' ? 'Finalisez votre achat' : 'Complete Your Purchase'}
        </h2>
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ fetchClientSecret: () => fetchClientSecret(cartItems, customerInfo, orderContext) }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
}
