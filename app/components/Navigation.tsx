
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../../lib/cartStore'; // Corrected import path
// import Cart from './Cart'; // Assuming Cart component is in the same directory

interface NavigationProps {
  // No longer needs cartItemsCount or onCartClick props
}

const Navigation = ({}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount, items, updateQuantity } = useCart(); // Get itemCount, items, and updateQuantity directly from the store
  // const [isCartOpen, setIsCartOpen] = useState(false); // Manage cart open state internally

  return (
    <header className="bg-white shadow-lg relative z-50">
      {/* Top burgundy bar */}
      <div className="bg-primary h-2"></div>
      
      {/* Logo Section */}
      {/* <div className="bg-primary py-4 justify-center hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 justify-center text-center">
          <Link href="/" className="inline-block">
            <img 
              src='/images/logo.png'
              alt="Nirvana" 
              className="h-20 w-auto mx-auto"
            />
          </Link>
        </div>
      </div> */}
      <hr className="border-white/20" />
      {/* Navigation Menu */}
      <div className="bg-primary py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="inline-block">
            <img 
              src='/images/logo.png'
              alt="Nirvana" 
              className="h-20 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center space-x-12">
            <Link href="/" className="text-white hover:text-secondary font-playfair text-lg">
              Home
            </Link>
            
            <Link href="/menu" className="text-white hover:text-secondary font-playfair text-lg">
              Menu
            </Link>
            
            <Link href="/gallery" className="text-white hover:text-secondary font-playfair transition-colors text-lg">
              Gallery
            </Link>
            
            <Link href="/reservations" className="text-white hover:text-secondary font-playfair transition-colors text-lg">
              Reservation
            </Link>
            
            <Link href="/events" className="text-white hover:text-secondary font-playfair transition-colors text-lg">
              Events
            </Link>
            
            <Link href="/contact" className="text-white hover:text-secondary font-playfair transition-colors text-lg">
              Contact
            </Link>
            
            <Link href="/order" className="text-white hover:text-secondary font-playfair transition-colors text-lg">
              Order
            </Link>
          </nav>

          {/* Mobile menu button and cart icon */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link href="/order" className="text-white hover:text-secondary font-playfair transition-colors text-lg">
              <i className="ri-shopping-cart-line text-3xl"></i>
            </Link>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <i className="ri-close-line text-3xl"></i>
              ) : (
                <i className="ri-menu-3-line text-3xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-primary border-t border-secondary/20 transition-all duration-300 ease-in ${isMenuOpen ? 'max-h-screen opacity-100 py-3' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 space-y-3">
            <Link 
              href="/" 
              className="block text-white hover:text-secondary font-playfair transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className="block text-white hover:text-secondary font-playfair transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="/gallery" 
              className="block text-white hover:text-secondary font-playfair transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/reservations" 
              className="block text-white hover:text-secondary font-playfair transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservation
            </Link>
            <Link 
              href="/events" 
              className="block text-white hover:text-secondary font-playfair transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/contact" 
              className="block text-white hover:text-secondary font-playfair transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/order" 
              className="block text-white hover:text-secondary font-playfair transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Order
            </Link>
          </div>
        </div>

      {/* Cart Modal */}
      {/* <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
      /> */}
    </header>
  );
};

export default Navigation;
