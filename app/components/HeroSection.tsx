
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isMounted, setIsMounted] = useState(false); // Removed isMounted

  const heroImages = [
    '/images/Food 2.jpeg',
    '/images/Restro.jpeg',
    '/images/Restro 3.jpeg',
    '/images/Restro 5.jpeg',
  ];

  // Removed handleScroll function

  // Removed useEffect for scroll events

  // Removed isMounted useEffect

  useEffect(() => {
    // if (!isMounted) return; // Removed isMounted condition
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]); // Removed isMounted from dependency array

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white font-serif overflow-hidden">
      {/* Background Image Slideshow with img tag */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img 
            key={image}
            src={image}
            alt="Nirvana Restaurant"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="font-playfair font-light mb-6 leading-tight tracking-wide" style={{ fontSize: '50px' }}>
          Discover the Indian Restaurant<br />
          and Bar-Lounge
        </h1>
        
        {/* Temporary Index Display for debugging */}
        {/* <p className="text-white text-4xl mb-4">Current Index: {currentIndex}</p> */}
        
        {/* Slideshow Navigation Buttons */}
        {/* <div className="absolute inset-y-0 left-0 flex items-center">
          <button 
            onClick={goToPrevious}
            className="bg-black/50 text-white p-2 rounded-r-lg focus:outline-none hover:bg-black/75 transition-colors"
          >
            &lt;
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button 
            onClick={goToNext}
            className="bg-black/50 text-white p-2 rounded-l-lg focus:outline-none hover:bg-black/75 transition-colors"
          >
            &gt;
          </button>
        </div> */}
        
        <div className="mb-8 text-lg md:text-xl font-serif leading-relaxed">
          <p className="mb-4 text-lg font-light tracking-wide">
            Come discover our new establishment in a cozy and warm environment. 
            Nirvana Geneva is the new meeting place for all of Geneva residents.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/reservations" 
            className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded font-medium transition-all duration-300 cursor-pointer whitespace-nowrap font-serif text-lg tracking-wide"
          >
            Reservation
          </Link>
          <Link 
            href="/order" 
            className="bg-secondary hover:opacity-90 text-white px-8 py-3 rounded font-medium transition-all duration-300 cursor-pointer whitespace-nowrap font-serif text-lg tracking-wide"
          >
            Order
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
