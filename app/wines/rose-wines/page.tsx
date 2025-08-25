
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

export default function RoseWinesPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const roseWines = [
    {
      id: 'provence-rose',
      name: 'Côtes de Provence Rosé',
      description: 'Elegant and dry rosé from the heart of Provence',
      price: 65.00,
      image: 'https://readdy.ai/api/search-image?query=elegant%20cotes%20de%20provence%20rose%20wine%20bottle%20with%20pale%20pink%20wine%20in%20glass%20dry%20provence%20rose%20professional%20wine%20photography%20restaurant%20setting%20summer%20vibes&width=400&height=300&seq=rosewine1&orientation=landscape'
    },
    {
      id: 'bandol-rose',
      name: 'Bandol Rosé',
      description: 'Premium rosé with exceptional depth and complexity',
      price: 85.00,
      image: 'https://readdy.ai/api/search-image?query=premium%20bandol%20rose%20wine%20complex%20depth%20pale%20salmon%20color%20wine%20bottle%20elegant%20glass%20sophisticated%20wine%20photography%20fine%20dining%20restaurant%20luxury&width=400&height=300&seq=rosewine2&orientation=landscape'
    },
    {
      id: 'tavel-rose',
      name: 'Tavel Rosé',
      description: 'Full-bodied rosé from the Rhône Valley',
      price: 70.00,
      image: 'https://readdy.ai/api/search-image?query=tavel%20rose%20rhone%20valley%20full%20bodied%20rose%20wine%20rich%20pink%20color%20wine%20bottle%20professional%20sommelier%20photography%20restaurant%20wine%20service%20elegant%20presentation&width=400&height=300&seq=rosewine3&orientation=landscape'
    }
  ];

  const roseByGlass = [
    {
      id: 'rose-glass-1',
      name: 'Côtes du Rhône Rosé',
      description: 'Fresh and fruity Rhône Valley rosé (1 dl)',
      price: 13.00,
      image: 'https://readdy.ai/api/search-image?query=cotes%20du%20rhone%20rose%20by%20glass%20fresh%20fruity%20rhone%20valley%20wine%20elegant%20wine%20glass%20restaurant%20service%20professional%20photography%20pink%20wine&width=400&height=300&seq=roseglass1&orientation=landscape'
    },
    {
      id: 'rose-glass-2',
      name: 'Languedoc Rosé',
      description: 'Mediterranean-style rosé with vibrant fruit flavors (1 dl)',
      price: 12.00,
      image: 'https://readdy.ai/api/search-image?query=languedoc%20rose%20mediterranean%20style%20wine%20by%20glass%20vibrant%20fruit%20flavors%20pink%20wine%20elegant%20service%20restaurant%20photography%20professional%20lighting&width=400&height=300&seq=roseglass2&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation cartItemsCount={itemCount} onCartClick={() => setIsCartOpen(true)} />

      <main className="pt-20">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: '#751140' }}>
                Rosé Wines
              </h1>
              <div className="text-2xl mb-8" style={{ color: '#BD8E21' }}>
                Les vins rosés
              </div>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }} />

              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Experience our refreshing selection of rosé wines, offering delicate flavors
                and elegant pink hues that complement the vibrant spices of Indian cuisine.
              </p>
            </div>

            {/* Premium Rosé Wines */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Premium Rosé Collection</h2>
                <div className="text-lg text-pink-600">Collection Rosé Premium</div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {roseWines.map((wine) => (
                  <div
                    key={wine.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2"
                    style={{ borderColor: '#751140' }}
                  >
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${wine.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="text-white px-4 py-2 rounded-full font-bold shadow-lg" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                          CHF {wine.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                          <i className="ri-heart-line"></i>
                          <span>Rosé</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 transition-colors" style={{ color: '#751140' }}>
                        {wine.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {wine.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }} />
                          <span className="text-sm text-gray-500 font-medium">French Rosé</span>
                        </div>

                        <button
                          onClick={() => handleAddToCart(wine)}
                          className="text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer"
                          style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}
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
            </div>

            {/* Rosé by the Glass */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Rosé by the Glass</h2>
                <div className="text-lg text-pink-600 mb-4">Vins rosés au verre (1 dl)</div>
                <p className="text-gray-600">Perfect for a refreshing start to your meal</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {roseByGlass.map((wine) => (
                  <div
                    key={wine.id}
                    className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-pink-200"
                  >
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${wine.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                          CHF {wine.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          1 dl Glass
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                        {wine.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {wine.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full" />
                          <span className="text-sm text-gray-500 font-medium">By Glass</span>
                        </div>

                        <button
                          onClick={() => handleAddToCart(wine)}
                          className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer"
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
            </div>

            {/* Rosé Benefits Section */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className="ri-sun-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Perfect for Indian Cuisine</h2>
                <div className="text-lg text-pink-600 mb-6">Parfait pour la Cuisine Indienne</div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-fire-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Spice Balance</h3>
                  <p className="text-gray-600">The acidity in rosé wines helps balance the heat and intensity of our spiced dishes</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-leaf-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh & Clean</h3>
                  <p className="text-gray-600">Rosé provides a refreshing palate cleanser between different curry courses</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-restaurant-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Versatile Pairing</h3>
                  <p className="text-gray-600">Works beautifully with both vegetarian dishes and tandoori preparations</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 italic">
                  Rosé wines offer the perfect balance between red and white wine characteristics,
                  making them ideal companions for the complex flavors of Indian cuisine.
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
      />
    </div>
  );
}
