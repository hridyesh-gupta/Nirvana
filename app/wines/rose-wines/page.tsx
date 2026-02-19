
'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';
import { useLanguage } from '../../LanguageProvider';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function RoseWinesPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { language } = useLanguage();

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const swissRoseWines = [
    {
      id: 'oeil-de-perdrix-domaine-des-bossons',
      name: 'Oeil de Perdrix',
      description: 'Domaine des Bossons 2021 – Geneva',
      descriptionFr: 'Domaine des Bossons 2021 – Genève',
      price: 49.00,
      image: ''
    },
    {
      id: 'rose-de-lune-les-balisiers',
      name: 'Rosé de Lune',
      description: 'Les Balisiers 2021 – Geneva',
      descriptionFr: 'Les Balisiers 2021 – Genève',
      price: 49.00,
      image: ''
    }
  ];

  const frenchRoseWines = [
    {
      id: 'domaine-des-campaux-cotes-de-provence',
      name: 'Domaine des Campaux – Côtes de Provence',
      description: '2024 - A fruity rosé with a dominance of strawberries and red fruits, with a delicate finish and a touch of acidity. Pairing: Butter Chicken Curry',
      descriptionFr: '2024 – Rosé fruité dominé par la fraise et les fruits rouges, à la finale délicate avec une touche d’acidité. Accord recommandé : curry de poulet au beurre (Butter Chicken Curry).',
      price: 55.00,
      image: ''
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
                {language === 'fr' ? 'Vins rosés' : 'Rosé Wines'}
              </h1>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
            </div>

            {/* Swiss Rosé Wines */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">
                  {language === 'fr' ? 'Vins rosés suisses' : 'Swiss Rosé Wines'}
                </h2>
                <p className="text-gray-600">
                  {language === 'fr'
                    ? 'Découvrez notre sélection raffinée de vins rosés suisses, parfaits pour toutes les occasions.'
                    : 'Discover our exquisite selection of Swiss rosé wines, perfect for any occasion.'}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {swissRoseWines.map((wine) => (
                  <div
                    key={wine.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-primary"
                  >
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${wine.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="text-white px-4 py-2 rounded-full font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {wine.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                        {wine.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {language === 'fr' && wine.descriptionFr ? wine.descriptionFr : wine.description}
                      </p>
                      <button
                        onClick={() => handleAddToCart(wine)}
                        className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-add-line"></i>
                        </div>
                        <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* French Rosé Wines */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">
                  {language === 'fr' ? 'Vins rosés français' : 'French Rosé Wines'}
                </h2>
                <p className="text-gray-600">
                  {language === 'fr'
                    ? 'Découvrez notre sélection raffinée de vins rosés français.'
                    : 'Explore our refined selection of French rosé wines.'}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frenchRoseWines.map((wine) => (
                  <div
                    key={wine.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-secondary"
                  >
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${wine.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="text-white px-4 py-2 rounded-full font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {wine.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                        {wine.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {language === 'fr' && wine.descriptionFr ? wine.descriptionFr : wine.description}
                      </p>
                      <button
                        onClick={() => handleAddToCart(wine)}
                        className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-add-line"></i>
                        </div>
                        <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rosé Benefits Section */}
            <div className="bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl p-8 border border-primary">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                  <i className="ri-sun-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  {language === 'fr' ? 'Parfait avec la cuisine indienne' : 'Perfect for Indian Cuisine'}
                </h2>
                <div className="text-lg text-primary mb-6">
                  {language === 'fr' ? 'Parfait avec la cuisine indienne' : 'Perfect for Indian Cuisine'}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-fire-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {language === 'fr' ? 'Équilibre des épices' : 'Spice Balance'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'fr'
                      ? 'L’acidité des vins rosés aide à équilibrer la chaleur et l’intensité de nos plats épicés.'
                      : 'The acidity in rosé wines helps balance the heat and intensity of our spiced dishes'}
                  </p>
                </div>

                <div>
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-leaf-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {language === 'fr' ? 'Frais et désaltérant' : 'Fresh & Clean'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'fr'
                      ? 'Le rosé offre un rafraîchissement idéal entre les différents plats de curry.'
                      : 'Rosé provides a refreshing palate cleanser between different curry courses'}
                  </p>
                </div>

                <div>
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-restaurant-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {language === 'fr' ? 'Accord polyvalent' : 'Versatile Pairing'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'fr'
                      ? 'S’accorde à merveille aussi bien avec les plats végétariens qu’avec les préparations tandoori.'
                      : 'Works beautifully with both vegetarian dishes and tandoori preparations'}
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 italic">
                  {language === 'fr'
                    ? 'Les vins rosés offrent l’équilibre parfait entre les caractéristiques des vins rouges et blancs, ce qui en fait des compagnons idéaux pour la complexité des saveurs de la cuisine indienne.'
                    : 'Rosé wines offer the perfect balance between red and white wine characteristics, making them ideal companions for the complex flavors of Indian cuisine.'}
                </p>
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
