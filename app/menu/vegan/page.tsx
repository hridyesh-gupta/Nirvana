'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';
import { Product } from '@/lib/products';
import { useLanguage } from '../../LanguageProvider';

export default function VeganPage() {
  const { items: cartItems, addItem, updateQuantity, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { language } = useLanguage();

  const handleAddToCart = (item: Product) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
                {language === 'fr' ? 'Spécialités véganes' : 'Vegan Delights'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'fr'
                  ? 'Cuisine indienne végétale aux saveurs authentiques.'
                  : 'Plant-based Indian cuisine with authentic flavors'}
              </p>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
            </div>

            {/* Vegan Curries */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
                {language === 'fr' ? 'Currys véganes' : 'Vegan Curries'}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src=""
                    alt="Baignan Bartha"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Baignan Bartha</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 21.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Classic Smoked \'Brinjal\'' : 'Aubergine fumée classique'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-baingan-bartha', name: 'Baignan Bartha', price: 21.00, category: 'Vegan Curries' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src="/images/Bhindi-Masala.jpg"
                    alt="Bhindi Masala"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Bhindi Masala</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 21.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Gombos mijotés avec oignons, cumin et coriandre' : 'Simmered Lady Fingers with Onions; Cumin; Coriander'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-bhindi-masala', name: 'Bhindi Masala', price: 21.00, category: 'Vegan Curries' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src=""
                    alt="Daal Tarka"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Daal Tarka</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 19.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'À l\'indienne ; Lentilles jaunes ; Coriandre' : 'Indian Style; Yellow Lentils; Coriander'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-daal-tarka', name: 'Daal Tarka', price: 19.00, category: 'Vegan Curries' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src=""
                    alt="Chana Masala"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Chana Masala</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 19.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Masala de pois chiches traditionnel; Curry; Coriandre' : 'Traditional Chickpea Masala; Curry; Coriander'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-chana-masala', name: 'Chana Masala', price: 19.00, category: 'Vegan Curries' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="/images/Palak-Aloo.jpg"
                    alt="Palak Aloo"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Palak Aloo</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 21.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Pommes de terre mijotées; Spinach' : 'Simmered Potatoes; Spinach'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-palak-aloo', name: 'Palak Aloo', price: 21.00, category: 'Vegan Curries' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src="/images/Aloo-Gobi.jpg"
                    alt="Aloo Gobi"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Aloo Gobi</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 21.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Pommes de terre mijotées; Chou-fleur; Coriandre' : 'Simmered Potatoes; Cauliflowers; Coriander'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-aloo-gobi', name: 'Aloo Gobi', price: 21.00, category: 'Vegan Curries' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src=""
                    alt="Dam Aloo"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Dam Aloo</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 19.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Pommes de terre nouvelles cuites au cumin ; feuilles de curry' : 'Baby Potatoes cooked with Cumin; Curry Leaves'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-dam-aloo', name: 'Dam Aloo', price: 19.00, category: 'Vegan Curries' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Order Section */}
            <div className="mt-20 text-center">
              <div className="bg-white rounded-2xl p-8 border-2 shadow-lg border-primary">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                  <i className="ri-leaf-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-primary">
                  {language === 'fr' ? 'Profitez de notre menu végan' : 'Enjoy Our Vegan Menu'}
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  {language === 'fr'
                    ? 'Découvrez la richesse des saveurs de la cuisine indienne végétale, préparée avec des épices authentiques et des méthodes traditionnelles.'
                    : 'Discover the rich flavors of plant-based Indian cuisine, prepared with authentic spices and traditional methods.'}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+41227821010"
                    className="text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary"
                  >
                    <i className="ri-phone-line text-xl"></i>
                    <span>{language === 'fr' ? 'Commande : 022 782 10 10' : 'Order: 022 782 10 10'}</span>
                  </a>
                  <a
                    href="/menu"
                    className="bg-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer border-2 flex items-center justify-center space-x-2 text-primary border-primary"
                  >
                    <i className="ri-restaurant-line text-xl"></i>
                    <span>{language === 'fr' ? 'Menu complet' : 'Full Menu'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={clearCart}
      />
    </div>
  );
}