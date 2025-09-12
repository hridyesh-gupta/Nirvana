
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer'; // Import useInView

export default function AboutSection() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Restaurant Hours & Info Section - Deep Burgundy & Golden Yellow */}
      <div className="bg-gradient-to-r from-primary to-[#5a0e32] md:py-0">
        <div className="mx-auto">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="bg-primary text-white p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-light mb-4 font-serif tracking-wide">WE ARE OPEN <span className="font-lato">7</span> DAYS A WEEK</h2>
              <p className="mb-6 font-serif text-[17px] sm:text-[18px]">
                Lunch: <span className="font-lato">12:00 – 14:30</span> | Dinner: <span className="font-lato">19:00 – 22:30</span>
              </p>
              <a
                href="/reservations"
                className="inline-block bg-primary border-2 border-white text-white hover:bg-white hover:text-secondary px-4 py-3 rounded font-medium transition-all duration-300 cursor-pointer text-base md:px-6 md:text-lg font-serif tracking-wide"
              >
                Book Your Table
              </a>
              <p className="text-lg font-light tracking-wide font-serif"><strong>OR CALL <a href="tel:+41227821010" className="no-underline hover:no-underline"><span className="font-lato">022 782 10 10</span></a> </strong></p>
            </div>
            
            <div className="bg-secondary text-white p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-light mb-4 font-serif tracking-wide">YOUR INDIAN RESTAURANT IN MEYRIN</h2>
              <p className="mb-6 font-serif text-[17px] sm:text-[18px]">
                Discover a universe of authentic flavors and vibrant colors.
              </p>
              <a
                href="/menu"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary px-4 py-3 rounded font-medium transition-all duration-300 cursor-pointer text-base md:px-6 md:text-lg font-serif tracking-wide"
              >
                Explore Our Dishes & Menus
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Order Online Section - Blue Gradient */}
      <div 
        className="bg-white py-1"
      >
        
      </div>

      {/* Business Section - Blue Background
      <div 
        className="relative"
      >
        <div
          className="py-12 relative bg-cover bg-center" // Added bg-cover and bg-center
          style={{
            backgroundImage: 'url(/images/nirvana-noel.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
          {/* <div ref={ref1} className={`max-w-4xl mx-auto text-center px-4 relative z-10 transition-opacity duration-1000 ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}> Text container with z-index and fade-in
            <h3 className="text-3xl sm:text-3xl text-white leading-relaxed font-cursive font-light tracking-wide text-shadow-lg">
              NIRVANA welcomes you for your business meals in a cozy and colorful atmosphere.<br />
              Don't hesitate to book your table: <a href="tel:+41227821010" className="underline hover:no-underline"><span className="font-lato">022 782 10 10</span></a>
            </h3>
          </div> */}
        {/* </div> */}
      {/* </div> */}

      {/* Takeaway Info Section - Light Gray */}
      <div className="bg-primary py-8"> {/* Changed from bg-gray-300 */}
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="text-white font-serif">
          <div className="max-w-4xl mx-auto text-center px-4">
            <a
              href="/order"
              className="bg-secondary inline-block hover:opacity-90 text-white px-6 py-3 rounded-lg font-light text-base transition-all duration-300 cursor-pointer sm:px-12 sm:py-4 sm:text-xl font-serif tracking-wider"
            >
              ORDER FOR DELIVERY OR TAKEAWAY
            </a>
          </div>
            <p className="text-lg font-light tracking-wide"><strong>TAKEAWAY DISHES: <span className="font-lato">10%</span> DISCOUNT </strong></p>
            {/* <p className="text-lg font-light tracking-wide"><strong>AND FOR DELIVERY, ORDER <a href="/order" className="underline text-secondary">HERE</a></strong></p> */}
          </div>
        </div>
      </div>

      {/* Welcome Section - White Background */}
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start flex-col-reverse lg:flex-row">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-light mb-6 text-primary font-['fairdisplay']">Welcome to NIRVANA</h1>
              <div className="w-32 h-1 bg-primary" />
              
              <div className="space-y-4 text-gray-700 text-justify font-serif text-base sm:text-lg leading-relaxed">
                <p>
                  NIRVANA also offers takeaway dishes with a <span className="font-lato">10%</span> discount (payment on site).<br />
                  Order your "basket" immediately at <span className="font-lato">0227821010</span>.
                </p>
                
                <p>
                  For Delivery and Takeaway, order <a href="/order" className="underline text-primary">HERE</a>.
                </p>
                
                <p>
                  NIRVANA boasts a superb terrace that will be made available to you on beautiful days.
                </p>
              </div>
            </div>

            <div>
              <img
                src="/images/Restro 2.jpeg"
                alt="Restaurant Nirvana Interior"
                ref={ref2} className={`w-full rounded-lg shadow-lg transition-opacity duration-1000 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              />
            </div>
          </div>

          <div ref={ref3} className={`mt-16 transition-opacity duration-1000 ${inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-xl sm:text-2xl font-light text-black mb-6 font-serif tracking-wide">
              Reserve your table now:
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/reservations" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <i className="ri-calendar-line text-xl"></i>
                <span>Online Reservation</span>
              </Link>
              <a href="tel:+41227821010" className="bg-white text-primary border border-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <i className="ri-phone-line text-xl"></i>
                <span className="font-lato">022 782 10 10</span>
              </a>
            </div>
            <p className="text-gray-700 font-serif text-base sm:text-lg leading-relaxed">
              Come visit us; we will be delighted to welcome you and happy to greet our regular customers in Meyrin.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid Section - Light Gray Background */}
      {/* <div className="bg-gray-100 py-16"> */}
        {/* <div className="max-w-7xl mx-auto px-4"> */}
          {/* First Row */}
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <a href="/menu" className="group relative overflow-hidden">
              <img
                src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-11.jpg"
                alt="Menu & Dishes"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <h4 className="text-white font-light text-lg font-serif tracking-wide">Menu & Dishes</h4>
              </div>
            </a>
            
            <a href="/gallery" className="group relative overflow-hidden">
              <img
                src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-10.jpg"
                alt="Our Photo Gallery"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <h4 className="text-white font-light text-lg font-serif tracking-wide">Our Photo Gallery</h4>
              </div>
            </a>
            
            <a href="#" className="group relative overflow-hidden">
              <img
                src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-3.jpg"
                alt="The Decoration"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <h4 className="text-white font-light text-lg font-serif tracking-wide">The Decoration</h4>
              </div>
            </a>
            
            <a href="/events" className="group relative overflow-hidden">
              <img
                src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-14.jpg"
                alt="Events"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <h4 className="text-white font-light text-lg font-serif tracking-wide">Events</h4>
              </div>
            </a>
          </div> */}

          {/* Second Row */}
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <a href="/partners" className="group relative overflow-hidden">
              <img
                src="https://www.nirvana-geneve.ch/wp-content/uploads/2018/08/karishma-lounge-divonne-les-bains-salle-6.jpg"
                alt="Partners"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <h4 className="text-white font-light text-lg font-serif tracking-wide">Partners</h4>
              </div>
            </a>
            
            <a href="/wines" className="group relative overflow-hidden">
              <img
                src="https://www.nirvana-geneve.ch/wp-content/uploads/2018/05/bouteille-de-cognac.jpg"
                alt="Fine Wines & Spirits"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <h4 className="text-white font-light text-lg font-serif tracking-wide">Fine Wines & Spirits</h4>
              </div>
            </a>
            
            <a href="/fresh-produce" className="group relative overflow-hidden">
              <img
                src="https://www.nirvana-geneve.ch/wp-content/uploads/2017/12/restaurant-hero-01.jpg"
                alt="Fresh Products"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <h4 className="text-white font-light text-lg font-serif tracking-wide">Fresh Products</h4>
              </div>
            </a>
            
            <a href="/menu" className="group relative overflow-hidden">
              <img
                src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/IMG_0061.jpg"
                alt="Takeaway Sales"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <h4 className="text-white font-light text-lg font-serif tracking-wide">Takeaway Sales</h4>
              </div>
            </a>
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
}
