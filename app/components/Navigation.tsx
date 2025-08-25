
'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavigationProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Navigation = ({ cartItemsCount, onCartClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg relative z-50">
      {/* Top burgundy bar */}
      <div className="bg-[#751140] h-2"></div>
      
      {/* Logo Section */}
      <div className="bg-[#751140] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href="/" className="inline-block">
            <img 
              src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/logo-1.png" 
              alt="Nirvana" 
              className="h-20 w-auto mx-auto"
            />
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-[#751140] py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="hidden lg:flex items-center justify-center space-x-12">
            <Link href="/" className="text-white hover:text-[#BD8E21] font-medium transition-colors text-lg">
              Home
            </Link>
            
            <div className="relative group">
              <Link href="/menu" className="text-white hover:text-[#BD8E21] font-medium transition-colors flex items-center text-lg">
                Menu
                <i className="ri-arrow-down-s-line ml-1"></i>
              </Link>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/menu/starters" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    Starters
                  </Link>
                  <Link href="/menu/main-courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    Main Courses
                  </Link>
                  <Link href="/menu/thalis-biryani" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    Thalis / Biryani
                  </Link>
                  <Link href="/menu/vegan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    Vegan
                  </Link>
                  <Link href="/menu/accompaniments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    Accompaniments
                  </Link>
                  <Link href="/menu/vegetarian" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    Vegetarian
                  </Link>
                  <Link href="/menu/desserts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    Desserts
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link href="/wines" className="text-white hover:text-[#BD8E21] font-medium transition-colors flex items-center text-lg">
                Wines
                <i className="ri-arrow-down-s-line ml-1"></i>
              </Link>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/wines/white-wines" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    White Wines
                  </Link>
                  <Link href="/wines/rose-wines" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    Rosé Wines
                  </Link>
                  <Link href="/wines/red-wines" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    Red Wines
                  </Link>
                  <Link href="/wines/world-wines" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    World Wines
                  </Link>
                  <Link href="/wines/champagne" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    Champagnes
                  </Link>
                  <Link href="/wines/magnums" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#751140] hover:bg-opacity-10 hover:text-[#751140] transition-colors">
                    Magnums
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/gallery" className="text-white hover:text-[#BD8E21] font-medium transition-colors text-lg">
              Gallery
            </Link>
            
            <Link href="/events" className="text-white hover:text-[#BD8E21] font-medium transition-colors text-lg">
              Events
            </Link>
            
            <Link href="/contact" className="text-white hover:text-[#BD8E21] font-medium transition-colors text-lg">
              Contact
            </Link>
            
            <Link href="/news" className="text-white hover:text-[#BD8E21] font-medium transition-colors text-lg">
              News
            </Link>
            
            <Link href="/reservations" className="text-white hover:text-[#BD8E21] font-medium transition-colors text-lg">
              Reservations
            </Link>
            
            <Link href="/fresh-produce" className="text-white hover:text-[#BD8E21] font-medium transition-colors text-lg">
              Fresh Produce
            </Link>
            
            {/* Shopping Cart Icon */}
            <div className="relative">
              <button 
                className="text-white hover:text-[#BD8E21] transition-colors relative"
                onClick={onCartClick}
              >
                <i className="ri-shopping-cart-2-line text-2xl"></i>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center justify-between">
            <Link href="/">
              <img 
                src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/logo-1.png" 
                alt="Nirvana" 
                className="h-16 w-auto"
              />
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
      {isMenuOpen && (
        <div className="lg:hidden bg-[#751140] border-t border-[#BD8E21]/20">
          <div className="px-4 py-3 space-y-3">
            <Link 
              href="/" 
              className="block text-white hover:text-[#BD8E21] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className="block text-white hover:text-[#BD8E21] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="/wines" 
              className="block text-white hover:text-[#BD8E21] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Wines
            </Link>
            <Link 
              href="/gallery" 
              className="block text-white hover:text-[#BD8E21] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/events" 
              className="block text-white hover:text-[#BD8E21] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/contact" 
              className="block text-white hover:text-[#BD8E21] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
