
'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PartnersPage() {
  const partners = [
    {
      name: 'Kamiko',
      url: 'http://www.junoon.fr/',
      image: 'https://www.nirvana-geneve.ch/wp-content/uploads/2017/04/kamiko.png'
    },
    {
      name: 'Karishma Lounge',
      url: 'http://www.karishma-lounge.com/',
      image: 'https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/karishma-lounge-1.jpg'
    },
    {
      name: 'Karma Lounge',
      url: 'http://www.karma-lounge.fr/',
      image: 'https://www.nirvana-geneve.ch/wp-content/uploads/2017/04/karma-lounge.jpg'
    },
    {
      name: 'Kiran Geneva',
      url: 'https://www.kiran-geneve.com',
      image: 'https://www.nirvana-geneve.ch/wp-content/uploads/2018/08/btn-kiran.jpg'
    },
    {
      name: 'Morjana Restaurant',
      url: 'http://www.morjanarestaurant.com/',
      image: 'https://www.nirvana-geneve.ch/wp-content/uploads/2017/04/morjana.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      <main className="pt-20">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
                Our Partners
              </h1>
              <div className="text-2xl text-purple-600 mb-8">Partenaires</div>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-green-500 to-purple-600 mx-auto rounded-full" />
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                <strong>NIRVANA</strong> is not an isolated establishment. It is part of a group of restaurants 
                that bring you diversity and expand the possibilities of services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner, index) => (
                <div key={index} className="group">
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-purple-100 hover:scale-105"
                  >
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="w-full h-full object-contain bg-white p-4 group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                        {partner.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-500 font-medium">Partner Restaurant</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-purple-600 font-medium">
                          <span className="text-sm">Visit</span>
                          <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-external-link-line"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-green-600 rounded-2xl p-12 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <i className="ri-group-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold mb-6">For More Information</h2>
                <p className="text-xl mb-8 opacity-90">
                  For more information about the possibilities of each establishment and our group services, 
                  please don't hesitate to contact us. We're here to help you discover the best of our culinary offerings.
                </p>
                <a 
                  href="tel:+41227821010" 
                  className="inline-flex items-center space-x-3 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  <i className="ri-phone-line"></i>
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
