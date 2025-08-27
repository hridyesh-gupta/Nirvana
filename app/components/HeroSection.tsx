
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle = {
    backgroundImage: 'url(/images/main.png)',
    backgroundPositionY: `-${scrollPosition * 0.5}px`, // Adjust 0.5 for desired parallax speed
    backgroundAttachment: 'fixed',
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white font-serif">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={parallaxStyle}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="font-playfair font-light mb-6 leading-tight tracking-wide" style={{ fontSize: '50px' }}>
          Discover the Indian Restaurant<br />
          and Bar-Lounge
        </h1>
        
        <div className="mb-8 text-lg md:text-xl font-serif leading-relaxed">
          <p className="mb-4 text-lg font-light tracking-wide">
            Come discover our new establishment in a cozy and warm environment. 
            Nirvana Geneva is the new meeting place for all of Geneva
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/reservations" 
            className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded font-medium transition-all duration-300 cursor-pointer whitespace-nowrap font-serif text-lg tracking-wide"
          >
            Reserve Table
          </Link>
          <Link 
            href="/menu" 
            className="bg-secondary hover:opacity-90 text-white px-8 py-3 rounded font-medium transition-all duration-300 cursor-pointer whitespace-nowrap font-serif text-lg tracking-wide"
          >
            Order Online
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
