'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../../lib/cartStore'; // Corrected import path
// import Cart from './Cart'; // Assuming Cart component is in the same directory
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../LanguageProvider';

interface NavigationProps {
  // No longer needs cartItemsCount or onCartClick props
}

const Navigation = ({}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount, items, updateQuantity } = useCart(); // Get itemCount, items, and updateQuantity directly from the store
  // const [isCartOpen, setIsCartOpen] = useState(false); // Manage cart open state internally
  const { language } = useLanguage();

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="bg-gray-50 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 py-1 flex justify-end">
          <LanguageSwitcher />
        </div>
      </div>

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
                  {language === 'fr' ? 'Accueil' : 'Home'}
                </Link>
                
                <Link href="/menu" className="text-white hover:text-secondary font-playfair text-lg">
                  {language === 'fr' ? 'Menu' : 'Menu'}
                </Link>
                
                <Link href="/gallery" className="text-white hover:text-secondary font-playfair transition-colors text-lg">
                  {language === 'fr' ? 'Galerie' : 'Gallery'}
                </Link>
                
                <Link href="/reservations" className="text-white hover:text-secondary font-playfair transition-colors text-lg">
                  {language === 'fr' ? 'Réservation' : 'Reservation'}
                </Link>
                
                <Link href="/events" className="text-white hover:text-secondary font-playfair transition-colors text-lg">
                  {language === 'fr' ? 'Événements' : 'Events'}
                </Link>
                
                <Link href="/contact" className="text-white hover:text-secondary font-playfair transition-colors text-lg">
                  {language === 'fr' ? 'Contact' : 'Contact'}
                </Link>
                
                <Link href="/order" className="text-white hover:text-secondary font-playfair transition-colors text-lg">
                  {language === 'fr' ? 'Commander' : 'Order'}
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
                  {language === 'fr' ? 'Accueil' : 'Home'}
                </Link>
                <Link 
                  href="/menu" 
                  className="block text-white hover:text-secondary font-playfair transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'fr' ? 'Menu' : 'Menu'}
                </Link>
                <Link 
                  href="/gallery" 
                  className="block text-white hover:text-secondary font-playfair transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'fr' ? 'Galerie' : 'Gallery'}
                </Link>
                <Link 
                  href="/reservations" 
                  className="block text-white hover:text-secondary font-playfair transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'fr' ? 'Réservation' : 'Reservation'}
                </Link>
                <Link 
                  href="/events" 
                  className="block text-white hover:text-secondary font-playfair transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'fr' ? 'Événements' : 'Events'}
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-white hover:text-secondary font-playfair transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'fr' ? 'Contact' : 'Contact'}
                </Link>
                <Link 
                  href="/order" 
                  className="block text-white hover:text-secondary font-playfair transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'fr' ? 'Commander' : 'Order'}
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
