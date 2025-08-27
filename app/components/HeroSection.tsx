
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white font-serif">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/main.png)'
        }}
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
            href="/menu" 
            className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded font-medium transition-all duration-300 cursor-pointer whitespace-nowrap font-serif text-lg tracking-wide"
          >
            Menu & Dishes
          </Link>
          <Link 
            href="/contact" 
            className="bg-secondary hover:opacity-90 text-white px-8 py-3 rounded font-medium transition-all duration-300 cursor-pointer whitespace-nowrap font-serif text-lg tracking-wide"
          >
            Contact Us
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
