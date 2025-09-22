
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
  const { items: cartItems, itemCount, addItem, updateQuantity, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const handleAddVariant = (baseId: string, name: string, variant: string, price: number) => {
    const id = `${baseId}-${variant.toLowerCase().replace(/\s+/g, '-')}`;
    handleAddToCart({ id, name: `${name} (${variant})`, price });
  };

  const champagnesList = [
    {
      id: 'deutz-brut-classic',
      name: 'Deutz Brut Classic',
      description: '',
      price: 95.00,
      image: 'https://readdy.ai/api/search-image?query=deutz%20brut%20classic%20champagne%20bottle&width=400&height=300&seq=champagne-1&orientation=landscape'
    },
    {
      id: 'deutz-brut-rose',
      name: 'Deutz Brut Rosé',
      description: '',
      price: 139.00,
      image: 'https://readdy.ai/api/search-image?query=deutz%20brut%20rose%20champagne%20bottle&width=400&height=300&seq=champagne-2&orientation=landscape'
    },
    {
      id: 'gosset-extra-brut',
      name: 'Gosset Extra Brut',
      description: '',
      price: 145.00,
      image: 'https://readdy.ai/api/search-image?query=gosset%20extra%20brut%20champagne%20bottle&width=400&height=300&seq=champagne-3&orientation=landscape'
    },
    {
      id: 'gosset-la-grande-cuvee',
      name: 'Gosset La Grande Cuvée (BT 37.5 DL)',
      description: '',
      price: 59.00,
      image: 'https://readdy.ai/api/search-image?query=gosset%20la%20grande%20cuvee%20champagne%20bottle&width=400&height=300&seq=champagne-4&orientation=landscape'
    },
    {
      id: 'veuve-clicquot-cuvee-la-grande-dame',
      name: 'Veuve Clicquot Cuvée La Grande Dame 2004',
      description: '',
      price: 299.00,
      image: 'https://readdy.ai/api/search-image?query=veuve%20clicquot%20cuvee%20la%20grande%20dame%202004%20champagne%20bottle&width=400&height=300&seq=champagne-5&orientation=landscape'
    }
  ];

  const proseccoList = [
    {
      id: 'prosecco-risteri-bresolin-enrico',
      name: 'Prosecco Risseri – Bresolin Enrico',
      description: 'Maser, Province of Treviso 2021 (Nature Blanc). Pale straw yellow, very fine and abundant bubbles. Intense aroma with notes of apple and citrus fruits, accompanied by a floral hint of acacia. On the palate, fresh expression, delicate, and elegant with a saline finish. Certified Organic and Vegan.',
      image: 'https://readdy.ai/api/search-image?query=prosecco%20risteri%20bresolin%20enrico%20maser%202021%20nature%20blanc%20organic%20vegan%20bottle&width=400&height=300&seq=prosecco-1&orientation=landscape',
      variants: [
        { label: '10 cl', price: 9.00 },
        { label: '75 cl', price: 55.00 }
      ]
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
                Champagnes & Sparkling Wines
              </h1>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Celebrate special moments with our prestigious champagne collection and delightful sparkling wines.
              </p>
            </div>

            {/* Champagnes */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Champagnes</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {champagnesList.map((champagne) => (
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
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                        {champagne.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {champagne.description}
                      </p>

                      <button
                        onClick={() => handleAddToCart(champagne)}
                        className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-add-line"></i>
                        </div>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sparkling Wines (Prosecco) */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Sparkling Wines</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {proseccoList.map((prosecco) => (
                  <div
                    key={prosecco.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-primary"
                  >
                    <div
                      className="h-56 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${prosecco.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                          {prosecco.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6">{prosecco.description}</p>
                      {('variants' in prosecco) ? (
                        <div className="grid grid-cols-1 gap-3">
                          {(prosecco as any).variants.map((v: any) => (
                            <button
                              key={v.label}
                              onClick={() => handleAddVariant(prosecco.id, prosecco.name, v.label, v.price)}
                              className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-between space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                            >
                              <span>Add {v.label}</span>
                              <span className="font-bold">CHF {v.price.toFixed(2)}</span>
                            </button>
                          ))}
                        </div>
                      ) : (null)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Art of Champagne Section */}
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

            {/* Champagne & Indian Cuisine Section */}
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
        onClearCart={clearCart}
      />
    </div>
  );
}
