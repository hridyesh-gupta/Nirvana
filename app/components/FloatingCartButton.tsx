'use client';

import { useCart } from '../../lib/cartStore';
import Link from 'next/link'; // Import Link

export default function FloatingCartButton() {
  const { itemCount } = useCart();

  if (itemCount === 0) return null; // Only show button if items are in cart

  return (
    <Link href="/cart" className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-colors duration-300 z-50">
      <i className="ri-shopping-cart-2-line text-2xl"></i>
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
