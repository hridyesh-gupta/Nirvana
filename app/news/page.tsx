'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-['fairdisplay']">
                News & Updates
              </h1>
              <div className="text-2xl text-primary mb-8">News</div>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full" />
            </div>

            {/* Press Coverage */}
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-primary">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <i className="ri-newspaper-line text-white text-3xl"></i>
                  </div>
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">Press Coverage</h2>
                  <div className="text-lg text-primary">Press Coverage</div>
                </div>
                
                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-6">
                    Nirvana Restaurant has been featured in local and international press for our authentic Indian cuisine and exceptional dining experience.
                  </p>
                  <a
                    href="https://www.nirvana-geneve.ch/wp-content/uploads/2019/12/Nirvan-Coupure_presse.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-download-line text-xl"></i>
                    <span>Download Press Coverage</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Latest News */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Latest Updates</h2>
                <div className="text-lg text-primary">Latest News</div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-primary">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-restaurant-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">New Menu Items Available</h3>
                      <p className="text-gray-600 mb-4">
                        We're excited to announce new additions to our menu, featuring seasonal specialties and 
                        traditional recipes from different regions of India. Come and discover new flavors!
                      </p>
                      <div className="text-sm text-primary">January 2024</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-primary">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-award-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Award Recognition</h3>
                      <p className="text-gray-600 mb-4">
                        Nirvana Restaurant has been recognized for excellence in Indian cuisine and outstanding customer service. 
                        Thank you to all our loyal customers for your continued support.
                      </p>
                      <div className="text-sm text-primary">December 2023</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-primary">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-gift-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Special Holiday Menus</h3>
                      <p className="text-gray-600 mb-4">
                        Join us for special holiday celebrations with exclusive menus featuring festive dishes 
                        and traditional Indian celebration foods. Perfect for family gatherings and special occasions.
                      </p>
                      <div className="text-sm text-primary">Ongoing</div>
                    </div>
                  </div>
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