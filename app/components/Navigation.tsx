
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
      <div className="bg-primary py-4 justify-center hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 justify-center text-center">
          <Link href="/" className="inline-block">
            <img 
              src='/images/logo.png'
              alt="Nirvana" 
              className="h-20 w-auto mx-auto"
            />
          </Link>
        </div>
      </div>
      <hr className="border-white/20" />
      {/* Navigation Menu */}
      <div className="bg-primary py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="hidden lg:flex items-center justify-center space-x-12">
            <Link href="/" className="text-white hover:text-secondary font-playfair text-lg">
              The Restaurant
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
            <Link href="/cart" className="text-white hover:text-secondary font-playfair transition-colors text-lg hidden md:block">
              Cart
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <div className="flex-1"></div>
            <Link href="/" className="font-playfair">
              <img 
                src='/images/logo.png'
                alt="Nirvana" 
                className="h-16 w-auto"
              />
            </Link>
            <div className="flex-1 text-right">
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-secondary/20">
          <div className="px-4 py-3 space-y-3">
            <Link 
              href="/" 
              className="block text-white hover:text-secondary font-playfair transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              The Restaurant
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
              href="/cart" 
              className="block text-white hover:text-secondary font-playfair transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
          </div>
        </div>
      )}

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
