
'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer'; // Re-confirming import path
import { useLanguage } from '../LanguageProvider';

export default function FreshProducePage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-['fairdisplay']">
                {language === 'fr' ? 'Produits frais' : 'Fresh Products'}
              </h1>
              <div className="text-2xl text-primary mb-8">
                {language === 'fr' ? 'Produits frais' : 'Fresh Products'}
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-leaf-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        {language === 'fr' ? 'La qualité avant tout' : 'Quality First'}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        <strong>NIRVANA</strong> {language === 'fr' ? 'prioritise les produits frais, locaux et les meilleurs de chaque région.' : 'prioritizes fresh, local products, and the best from each region.'}
                        {language === 'fr' ? 'Nous croyons à la source des meilleurs ingrédients pour créer des saveurs indiennes authentiques qui vous transportent au cœur de l’Inde.' : 'We believe in sourcing the finest ingredients to create authentic Indian flavors that transport you to the heart of India.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl p-8 border border-primary">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    {language === 'fr' ? 'Notre engagement' : 'Our Commitment'}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-white"></i>
                      </div>
                      <span className="text-gray-700">
                        {language === 'fr' ? 'Ingrédients frais sélectionnés chaque jour' : 'Fresh ingredients sourced daily'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-white"></i>
                      </div>
                      <span className="text-gray-700">
                        {language === 'fr' ? 'Fournisseurs locaux et spécialités régionales' : 'Local suppliers and regional specialties'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-white"></i>
                      </div>
                      <span className="text-gray-700">
                        {language === 'fr' ? 'Épices authentiques importées d’Inde' : 'Authentic spices imported from India'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-white"></i>
                      </div>
                      <span className="text-gray-700">
                        {language === 'fr' ? 'Approvisionnement durable et éthique' : 'Sustainable and ethical sourcing practices'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://www.nirvana-geneve.ch/wp-content/uploads/2018/08/karishma-lounge-divonne-les-bains-terrasse-5.jpg" 
                    alt="Fresh ingredients and spices" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl font-semibold mb-2">
                      {language === 'fr' ? 'De la ferme à la table' : 'Farm to Table'}
                    </h3>
                    <p className="text-white/90">
                      {language === 'fr' ? 'Frais, local et le meilleur de chaque région' : 'Fresh, local, and the best from each region'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <i className="ri-restaurant-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  {language === 'fr' ? 'Découvrez les saveurs de l’Inde sans voyager' : 'Discover Indian Flavors Without Traveling'}
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  {language === 'fr' ? 'NIRVANA est toujours prêt à vous permettre de découvrir les saveurs authentiques de l’Inde sans quitter la Suisse. ' : 'NIRVANA is always ready to let you discover authentic Indian flavors without leaving Switzerland. '}
                  {language === 'fr' ? 'Expérimenter les traditions culinaires riche de l’Inde avec nos plats soigneusement préparés.' : 'Experience the rich culinary traditions of India with our carefully prepared dishes.'}
                </p>
                <a 
                  href="tel:+41227821010" 
                  className="inline-flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  <i className="ri-phone-line"></i>
                  <span>{language === 'fr' ? 'Contactez-nous' : 'Contact Us'}</span>
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
