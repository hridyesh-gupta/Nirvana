'use client';

import { useCart } from '../../lib/cartStore';
import Link from 'next/link'; // Import Link

export default function FloatingCartButton() {
  const { itemCount } = useCart();

  return (
    <>
      {/* WhatsApp Icon */}
      <a 
        href="https://wa.me/+41788432132?text=Hello%20Nirvana,%20I%20have%20a%20question: " 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-4 left-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </a>

      {/* Cart Icon (conditionally rendered) */}
      {itemCount > 0 && (
        <Link href="/cart" className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-colors duration-300 z-50">
          <i className="ri-shopping-cart-2-line text-2xl"></i>
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        </Link>
      )}
    </>
  );
}
