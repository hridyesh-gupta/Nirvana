
'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: '#751140' }}>
                Gallery
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover the ambiance and atmosphere of our restaurant
              </p>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#BD8E21' }} />
            </div>

            {/* Photo Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Restaurant Interior */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105" style={{ borderColor: '#751140' }}>
                <img
                  src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-25.jpg"
                  alt="Restaurant Interior"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold">Restaurant Interior</h3>
                    <p className="text-white/80 mt-2">Cozy and colorful atmosphere</p>
                  </div>
                </div>
              </div>

              {/* Dining Area */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                <img
                  src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-11.jpg"
                  alt="Dining Area"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold">Dining Area</h3>
                    <p className="text-white/80 mt-2">Perfect for family gatherings</p>
                  </div>
                </div>
              </div>

              {/* Decoration Details */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105" style={{ borderColor: '#751140' }}>
                <img
                  src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-3.jpg"
                  alt="Decoration"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold">Decoration</h3>
                    <p className="text-white/80 mt-2">Authentic Indian decor</p>
                  </div>
                </div>
              </div>

              {/* Food Presentation */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                <img
                  src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-10.jpg"
                  alt="Food Presentation"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold">Food Presentation</h3>
                    <p className="text-white/80 mt-2">Beautifully crafted dishes</p>
                  </div>
                </div>
              </div>

              {/* Event Setup */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105" style={{ borderColor: '#751140' }}>
                <img
                  src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-14.jpg"
                  alt="Event Setup"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold">Event Setup</h3>
                    <p className="text-white/80 mt-2">Special occasion arrangements</p>
                  </div>
                </div>
              </div>

              {/* Takeaway Counter */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                <img
                  src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/IMG_0061.jpg"
                  alt="Takeaway Counter"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold">Takeaway Service</h3>
                    <p className="text-white/80 mt-2">Quick and convenient</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Us Section */}
            <div className="mt-20 text-center">
              <div className="bg-white rounded-2xl p-8 border-2 shadow-lg" style={{ borderColor: '#751140' }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                  <i className="ri-camera-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4" style={{ color: '#751140' }}>Visit Our Restaurant</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Experience the authentic atmosphere and delicious Indian cuisine at Nirvana. 
                  Come and create your own beautiful memories with us.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+41227821010"
                    className="text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2"
                    style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}
                  >
                    <i className="ri-phone-line text-xl"></i>
                    <span>Reserve: 022 782 10 10</span>
                  </a>
                  <a
                    href="/menu"
                    className="bg-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer border-2 flex items-center justify-center space-x-2"
                    style={{ color: '#751140', borderColor: '#751140' }}
                  >
                    <i className="ri-restaurant-line text-xl"></i>
                    <span>View Menu</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
