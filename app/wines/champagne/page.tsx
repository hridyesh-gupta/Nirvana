
'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function ChampagnePage() {
  const { items: cartItems, itemCount, addItem, updateQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const champagnes = [
    {
      id: 'dom-perignon',
      name: 'Dom Pérignon Vintage',
      description: 'Legendary prestige cuvée champagne with exceptional elegance',
      price: 280.00,
      image: 'https://readdy.ai/api/search-image?query=dom%20perignon%20vintage%20champagne%20legendary%20prestige%20cuvee%20elegant%20bottle%20luxury%20champagne%20service%20fine%20dining%20restaurant%20professional%20photography%20golden%20bubbles&width=400&height=300&seq=champagne1&orientation=landscape'
    },
    {
      id: 'krug-grande-cuvee',
      name: 'Krug Grande Cuvée',
      description: 'Complex and rich champagne with multiple vintage blend',
      price: 220.00,
      image: 'https://readdy.ai/api/search-image?query=krug%20grande%20cuvee%20champagne%20complex%20rich%20multiple%20vintage%20blend%20luxury%20champagne%20bottle%20elegant%20flute%20glass%20professional%20sommelier%20photography&width=400&height=300&seq=champagne2&orientation=landscape'
    },
    {
      id: 'cristal-roederer',
      name: 'Louis Roederer Cristal',
      description: 'Premium champagne with crystal-clear bottle and exceptional purity',
      price: 350.00,
      image: 'https://readdy.ai/api/search-image?query=louis%20roederer%20cristal%20champagne%20premium%20crystal%20clear%20bottle%20exceptional%20purity%20luxury%20champagne%20service%20elegant%20restaurant%20presentation%20professional&width=400&height=300&seq=champagne3&orientation=landscape'
    },
    {
      id: 'bollinger-special',
      name: 'Bollinger Special Cuvée',
      description: 'Full-bodied champagne with distinctive character and depth',
      price: 120.00,
      image: 'https://readdy.ai/api/search-image?query=bollinger%20special%20cuvee%20champagne%20full%20bodied%20distinctive%20character%20depth%20elegant%20champagne%20bottle%20professional%20restaurant%20service%20bubbles&width=400&height=300&seq=champagne4&orientation=landscape'
    },
    {
      id: 'laurent-perrier-rose',
      name: 'Laurent-Perrier Rosé',
      description: 'Elegant rosé champagne with delicate salmon color',
      price: 150.00,
      image: 'https://readdy.ai/api/search-image?query=laurent%20perrier%20rose%20champagne%20elegant%20salmon%20color%20delicate%20pink%20bubbles%20luxury%20champagne%20bottle%20fine%20dining%20restaurant%20professional%20photography&width=400&height=300&seq=champagne5&orientation=landscape'
    },
    {
      id: 'veuve-clicquot',
      name: 'Veuve Clicquot Brut',
      description: 'Classic champagne with perfect balance and crisp finish',
      price: 95.00,
      image: 'https://readdy.ai/api/search-image?query=veuve%20clicquot%20brut%20champagne%20classic%20perfect%20balance%20crisp%20finish%20iconic%20orange%20label%20champagne%20bottle%20elegant%20service%20professional%20photography&width=400&height=300&seq=champagne6&orientation=landscape'
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
                Champagnes
              </h1>
              <div className="text-2xl mb-8 text-secondary">Champagne Selection</div>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Celebrate special moments with our prestigious champagne collection, featuring
                the world's finest houses and their most exceptional cuvées.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {champagnes.map((champagne) => (
                <div
                  key={champagne.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-secondary"
                >
                  <div
                    className="h-56 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${champagne.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="text-white px-4 py-2 rounded-full font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                        CHF {champagne.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <i className="ri-goblet-fill"></i>
                        <span>Prestige</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                      {champagne.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {champagne.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary" />
                        <span className="text-sm text-gray-500 font-medium">Champagne AOC</span>
                      </div>

                      <button
                        onClick={() => handleAddToCart(champagne)}
                        className="text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-add-line"></i>
                        </div>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-8 border-2 mb-16 bg-gray-50 border-secondary">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                  <i className="ri-award-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-primary">The Art of Champagne</h2>
                <div className="text-lg mb-6 text-secondary">The Art of Champagne</div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-star-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Méthode Champenoise</h3>
                  <p className="text-gray-600">Traditional method of secondary fermentation creating the signature bubbles and complexity</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-map-pin-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Champagne Region</h3>
                  <p className="text-gray-600">Protected designation from the historic Champagne region in northeastern France</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-time-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Aging Process</h3>
                  <p className="text-gray-600">Minimum aging on lees for exceptional depth and character development</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-12 text-white text-center bg-gradient-to-r from-primary to-secondary">
              <div className="max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <i className="ri-restaurant-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold mb-6">Champagne & Indian Cuisine</h2>
                <p className="text-xl mb-8 opacity-90">
                  The effervescence and acidity of champagne create an excellent palate cleanser
                  between courses, while the complexity of our premium cuvées complements the
                  intricate spice blends in our dishes. Perfect for celebrations and special occasions.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Perfect Pairings:</h3>
                    <ul className="space-y-1 text-sm opacity-90">
                      <li>• Tandoori appetizers</li>
                      <li>• Mild curry dishes</li>
                      <li>• Vegetarian specialties</li>
                      <li>• Celebration feasts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Service Style:</h3>
                    <ul className="space-y-1 text-sm opacity-90">
                      <li>• Served in champagne flutes</li>
                      <li>• Chilled to 6-8°C</li>
                      <li>• Available by bottle</li>
                      <li>• Professional service</li>
                    </ul>
                  </div>
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
      />
    </div>
  );
}
