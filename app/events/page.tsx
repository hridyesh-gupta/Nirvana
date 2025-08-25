
'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation cartItemsCount={0} onCartClick={() => {}} />
      
      <main className="pt-20">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: '#751140' }}>
                Events & Celebrations
              </h1>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#BD8E21' }} />
            </div>

            {/* Event Organization Services */}
            <div className="mb-16">
              <div className="rounded-2xl shadow-xl p-8 text-white" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-20 h-20 bg-white/20 rounded-full mb-6 flex items-center justify-center">
                      <i className="ri-calendar-event-line text-white text-3xl"></i>
                    </div>
                    <h2 className="text-3xl font-semibold mb-4">Nirvana Event Organizer</h2>
                    
                    <p className="text-lg opacity-90 mb-6">
                      Do you have a project to organize a family event, birthday, baptism, communion, or wedding? 
                      We have special packages to offer you.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="tel:+41227821010"
                        className="bg-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2"
                        style={{ color: '#751140' }}
                      >
                        <i className="ri-phone-line text-xl"></i>
                        <span>Call: 022 782 10 10</span>
                      </a>
                      <a
                        href="/contact"
                        className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer border border-white/30 flex items-center justify-center space-x-2"
                      >
                        <i className="ri-mail-line text-xl"></i>
                        <span>Contact Us</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://www.nirvana-geneve.ch/wp-content/uploads/2018/08/karishma-lounge-divonne-les-bains-table-1.jpg"
                      alt="Event Setup"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Event Information */}
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2" style={{ borderColor: '#751140' }}>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6" style={{ color: '#751140' }}>What We Offer</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        NIRVANA is organized to receive groups for birthdays, corporate meals, 
                        and family events such as baptisms, communions, and weddings.
                      </p>
                      <p className="text-gray-600">
                        Our other establishments that you will find at the bottom of the Restaurant page 
                        offer you other possibilities and alternatives.
                      </p>
                      <p className="text-gray-600">
                        We also have comprehensive offers with catering service, luxury car rental, and music.
                      </p>
                      <p className="text-gray-600">
                        Musically, we can organize a performance with traditional music or DJ.
                      </p>
                      <p className="text-gray-600">
                        It is possible to privatize one of our establishments.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-6" style={{ color: '#751140' }}>Contact Information</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Don't hesitate to ask us about this subject:
                      </p>
                      <a 
                        href="tel:+41227821010" 
                        className="text-2xl font-bold hover:opacity-80 transition-colors block"
                        style={{ color: '#BD8E21' }}
                      >
                        022 782 10 10
                      </a>
                      <p className="text-gray-600">
                        For more information:
                      </p>
                      <div className="flex flex-col space-y-2">
                        <a 
                          href="tel:+41227821010" 
                          className="text-lg hover:opacity-80 transition-colors"
                          style={{ color: '#751140' }}
                        >
                          📞 022 782 10 10
                        </a>
                        <a 
                          href="/contact" 
                          className="text-lg hover:opacity-80 transition-colors"
                          style={{ color: '#751140' }}
                        >
                          ✉️ Contact Form
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Types */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4" style={{ color: '#751140' }}>Event Types We Organize</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                    <i className="ri-cake-3-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#751140' }}>Birthdays</h3>
                  <p className="text-gray-600 text-sm">Special celebrations</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                    <i className="ri-hearts-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#BD8E21' }}>Weddings</h3>
                  <p className="text-gray-600 text-sm">Dream celebrations</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                    <i className="ri-group-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#751140' }}>Family Events</h3>
                  <p className="text-gray-600 text-sm">Memorable moments</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                    <i className="ri-briefcase-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#BD8E21' }}>Corporate Events</h3>
                  <p className="text-gray-600 text-sm">Professional gatherings</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 border-2" style={{ borderColor: '#751140' }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                  <i className="ri-calendar-check-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4" style={{ color: '#751140' }}>Ready to Plan Your Event?</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss your event requirements and let us create 
                  a memorable experience for you and your guests.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+41227821010"
                    className="text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2"
                    style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}
                  >
                    <i className="ri-phone-line text-xl"></i>
                    <span>Call Now: 022 782 10 10</span>
                  </a>
                  <a
                    href="/contact"
                    className="bg-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer border-2 flex items-center justify-center space-x-2"
                    style={{ color: '#751140', borderColor: '#751140' }}
                  >
                    <i className="ri-mail-line text-xl"></i>
                    <span>Send Message</span>
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
