
'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../LanguageProvider';

export default function GalleryPage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
                {language === 'fr' ? 'Galerie' : 'Gallery'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'fr'
                  ? "Découvrez l’ambiance et l’atmosphère de notre restaurant"
                  : 'Discover the ambiance and atmosphere of our restaurant'}
              </p>
              <div className="w-32 h-1 mx-auto rounded-full bg-secondary" />
            </div>

            {/* Photo Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Restaurant Interior */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-primary">
                <img
                  src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-25.jpg"
                  alt="Restaurant Interior"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold">{language === 'fr' ? 'Intérieur du restaurant' : 'Restaurant Interior'}</h3>
                    <p className="text-white/80 mt-2">
                      {language === 'fr' ? 'Ambiance chaleureuse et colorée' : 'Cozy and colorful atmosphere'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dining Area */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-secondary">
                <img
                  src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-11.jpg"
                  alt="Dining Area"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold">{language === 'fr' ? 'Intérieur du restaurant' : 'Restaurant Interior'}</h3>
                    <p className="text-white/80 mt-2">{language === 'fr' ? 'Ambiance chaleureuse et colorée':'Cozy and colorful atmosphere'}</p>
                  </div>
                </div>
              </div>

              {/* Decoration Details */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-primary">
                <img
                  src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-3.jpg"
                  alt="Decoration"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold"> {language === 'fr' ? 'Intérieur du restaurant' : 'Restaurant Interior'}</h3>
                    <p className="text-white/80 mt-2">{language === 'fr' ? 'Décoration indienne authentique':'Authentic Indian decor'}</p>
                  </div>
                </div>
              </div>

              {/* Food Presentation */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-secondary">
                <img
                  src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-10.jpg"
                  alt="Food Presentation"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold">{language === 'fr' ? 'Présentation des aliments' : 'Food Presentation'}</h3>
                    <p className="text-white/80 mt-2">{language === 'fr' ? 'Des plats magnifiquement préparés':'Beautifully crafted dishes'}</p>
                  </div>
                </div>
              </div>

              {/* Event Setup */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-primary">
                <img
                  src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/nirvana-14.jpg"
                  alt="Event Setup"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold">{language === 'fr' ? 'Configuration de l\'événement' : 'Event Setup'}</h3>
                    <p className="text-white/80 mt-2">{language === 'fr' ? 'Arrangements pour occasions spéciales':'Special occasion arrangements'}</p>
                  </div>
                </div>
              </div>

              {/* Takeaway Counter */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-secondary">
                <img
                  src="https://www.nirvana-geneve.ch/wp-content/uploads/2019/02/IMG_0061.jpg"
                  alt="Takeaway Counter"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold">{language === 'fr' ? 'Service de plats à emporter' : 'Takeaway Service'}</h3>
                    <p className="text-white/80 mt-2">{language === 'fr' ? 'Rapide et pratique':'Quick and convenient'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Us Section */}
            <div className="mt-20 text-center">
              <div className="bg-white rounded-2xl p-8 border-2 shadow-lg border-primary">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                  <i className="ri-camera-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-primary">
                  {language === 'fr' ? 'Visitez notre restaurant' : 'Visit Our Restaurant'}
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  {language === 'fr' ? 'Expériencez l\'ambiance authentique et la cuisine indienne délicieuse à Nirvana. Venez et créez vos propres belles souvenirs avec nous.' : 'Experience the authentic atmosphere and delicious Indian cuisine at Nirvana. Come and create your own beautiful memories with us.'}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+41227821010"
                    className="text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary"
                  >
                    <i className="ri-phone-line text-xl"></i>
                    <span>{language === 'fr' ? 'Réserver : +41 22 782 10 10' : 'Reserve: +41 22 782 10 10'}</span>
                  </a>
                  <a
                    href="/menu"
                    className="bg-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer border-2 flex items-center justify-center space-x-2 text-primary border-primary"
                  >
                    <i className="ri-restaurant-line text-xl"></i>
                    <span>{language === 'fr' ? 'Voir le menu' : 'View Menu'}</span>
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
