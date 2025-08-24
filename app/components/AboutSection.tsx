
'use client';

export default function AboutSection() {
  return (
    <>
      {/* Restaurant Hours & Info Section - Deep Burgundy & Golden Yellow */}
      <div style={{ background: `linear-gradient(to right, #751140, #5a0e32)` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div style={{ backgroundColor: '#751140' }} className="text-white p-8 text-center">
              <h2 className="text-2xl font-light mb-4 font-serif tracking-wide">THE RESTAURANT IS OPEN 7 DAYS A WEEK</h2>
              <p className="mb-6 font-serif text-lg">
                Lunch: 12:00 – 14:30 and Dinner: 19:00 – 22:30
              </p>
              <a
                href="tel:+41227821010"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#751140] px-6 py-3 rounded font-medium transition-all duration-300 cursor-pointer whitespace-nowrap font-serif tracking-wide"
              >
                Reservation: 022 782 10 10
              </a>
            </div>
            
            <div style={{ backgroundColor: '#BD8E21' }} className="text-white p-8 text-center">
              <h2 className="text-2xl font-light mb-4 font-serif tracking-wide">Your Indian Restaurant in Meyrin</h2>
              <p className="mb-6 font-serif text-lg">
                Discover a universe full of colors and flavors
              </p>
              <a
                href="/menu"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#BD8E21] px-6 py-3 rounded font-medium transition-all duration-300 cursor-pointer whitespace-nowrap font-serif tracking-wide"
              >
                Discover Our Dishes & Menus
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Order Online Section - Blue Gradient */}
      <div 
        className="py-6"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="#order"
            style={{ backgroundColor: '#BD8E21' }}
            className="inline-block hover:opacity-90 text-white px-12 py-4 rounded-lg font-light text-xl transition-all duration-300 cursor-pointer whitespace-nowrap font-serif tracking-wider"
          >
            ORDER for DELIVERY or TAKEAWAY
          </a>
        </div>
      </div>

      {/* Business Section - Blue Background */}
      <div 
        className="py-12"
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl text-white leading-relaxed font-serif font-light tracking-wide">
            NIRVANA welcomes you for your business meals in a cozy and colorful atmosphere.<br />
            Don't hesitate to book: <a href="tel:0041227821010" className="underline hover:no-underline">022 782 10 10</a>
          </h3>
        </div>
      </div>

      {/* Takeaway Info Section - Light Gray */}
      <div className="bg-gray-300 py-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="text-black font-serif">
            <p className="text-lg font-light tracking-wide"><strong>TAKEAWAY DISHES: – 10% (Payment on site)</strong></p>
            <p className="text-lg font-light tracking-wide"><strong>AND DELIVERY <a href="#" style={{ color: '#751140' }} className="underline">HERE</a></strong></p>
          </div>
        </div>
      </div>

      {/* Welcome Section - White Background */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h1 className="text-4xl font-light text-black mb-6 font-serif tracking-wider">Welcome to NIRVANA</h1>
              <div className="w-32 h-1" style={{ backgroundColor: '#751140' }} />
              
              <div className="space-y-4 text-gray-700 text-justify font-serif text-lg leading-relaxed">
                <p>
                  NIRVANA also offers takeaway dishes with a 10% discount (payment on site).<br />
                  Order your "basket" immediately at 022 782 10 10.
                </p>
                
                <p>
                  Also for Delivery and Takeaway <strong><a href="#" style={{ color: '#751140' }} className="underline">HERE</a></strong>
                </p>
                
                <p>
                  NIRVANA has a superb terrace that will be made available to you on beautiful days.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-25.jpg"
                alt="Restaurant Nirvana Interior"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-light text-black mb-6 font-serif tracking-wide">
              Think about booking now at <a href="tel:+41227821010" style={{ color: '#751140' }} className="underline">022 782 10 10</a>
            </h2>
            <p className="text-gray-700 font-serif text-lg leading-relaxed">
              Come visit us, we will be delighted to welcome you, and are happy to greet our regular customers in Meyrin.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid Section - Light Gray Background */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
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
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
          </div>
        </div>
      </div>
    </>
  );
}
