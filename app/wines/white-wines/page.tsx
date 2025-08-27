
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

export default function WhiteWinesPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const whiteWines = [
    {
      id: 'chablis-premier-cru',
      name: 'Chablis Premier Cru',
      description: 'Crisp and mineral white wine from Burgundy',
      price: 85.00,
      image: 'https://readdy.ai/api/search-image?query=elegant%20white%20wine%20bottle%20chablis%20premier%20cru%20with%20golden%20yellow%20wine%20in%20glass%20crisp%20mineral%20burgundy%20wine%20professional%20wine%20photography%20restaurant%20setting&width=400&height=300&seq=whitewine1&orientation=landscape'
    },
    {
      id: 'sancerre-blanc',
      name: 'Sancerre Blanc',
      description: 'Elegant Loire Valley Sauvignon Blanc',
      price: 75.00,
      image: 'https://readdy.ai/api/search-image?query=premium%20sancerre%20blanc%20sauvignon%20blanc%20from%20loire%20valley%20elegant%20white%20wine%20bottle%20with%20pale%20golden%20wine%20in%20glass%20fresh%20mineral%20taste%20professional%20sommelier%20photography&width=400&height=300&seq=whitewine2&orientation=landscape'
    },
    {
      id: 'chassagne-montrachet',
      name: 'Chassagne-Montrachet',
      description: 'Premium Burgundy Chardonnay with exceptional complexity',
      price: 120.00,
      image: 'https://readdy.ai/api/search-image?query=luxury%20chassagne%20montrachet%20burgundy%20chardonnay%20premium%20white%20wine%20bottle%20with%20rich%20golden%20wine%20complex%20elegant%20wine%20tasting%20photography%20fine%20dining%20restaurant&width=400&height=300&seq=whitewine3&orientation=landscape'
    }
  ];

  const winesByGlass = [
    {
      id: 'white-glass-1',
      name: 'Muscadet Sèvre-et-Maine',
      description: 'Fresh and crisp Loire Valley white (1 dl)',
      price: 12.00,
      image: 'https://readdy.ai/api/search-image?query=muscadet%20sevre%20et%20maine%20white%20wine%20by%20the%20glass%20fresh%20crisp%20loire%20valley%20wine%20elegant%20wine%20glass%20restaurant%20service%20professional%20photography&width=400&height=300&seq=whiteglass1&orientation=landscape'
    },
    {
      id: 'white-glass-2',
      name: 'Côtes du Rhône Blanc',
      description: 'Aromatic Rhône Valley blend (1 dl)',
      price: 14.00,
      image: 'https://readdy.ai/api/search-image?query=cotes%20du%20rhone%20blanc%20white%20wine%20by%20glass%20aromatic%20rhone%20valley%20blend%20elegant%20wine%20service%20restaurant%20photography%20professional%20lighting&width=400&height=300&seq=whiteglass2&orientation=landscape'
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
                White Wines
              </h1>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
            </div>

            {/* Premium White Wines */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Premium Selection</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whiteWines.map((wine) => (
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
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                          <i className="ri-wine-glass-line"></i>
                          <span>Premium</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors text-primary">
                        {wine.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {wine.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary" />
                          <span className="text-sm text-gray-500 font-medium">European Origin</span>
                        </div>

                        <button
                          onClick={() => handleAddToCart(wine)}
                          className="text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
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

            {/* Wines by the Glass */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Wines by the Glass</h2>
                <p className="text-gray-600">Perfect for tasting or pairing with individual dishes</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {winesByGlass.map((wine) => (
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
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                          1 dl Glass
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 transition-colors text-primary">
                        {wine.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {wine.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary" />
                          <span className="text-sm text-gray-500 font-medium">By Glass</span>
                        </div>

                        <button
                          onClick={() => handleAddToCart(wine)}
                          className="text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
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

            {/* Wine Pairing Section */}
            <div className="rounded-2xl p-8 border-2 bg-gray-50 border-primary">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                  <i className="ri-restaurant-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-primary">Perfect Pairings</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Light & Fresh Whites</h3>
                  <p className="text-gray-600 mb-4">
                    Muscadet and crisp Loire Valley wines complement our seafood curries, 
                    tandoori fish, and lighter vegetarian dishes perfectly. Their mineral notes 
                    enhance the delicate spices without overwhelming the palate.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Rich & Complex Whites</h3>
                  <p className="text-gray-600 mb-4">
                    Chassagne-Montrachet and premium Burgundy whites pair beautifully with 
                    our cream-based curries, butter chicken, and rich vegetarian dishes. 
                    Their depth matches the complexity of our signature sauces.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 italic">
                  Our sommelier is available to help you choose the perfect white wine for your meal. 
                  Please don't hesitate to ask for recommendations.
                </p>
                {/* <p className="text-sm mt-2 text-secondary">
                  Notre sommelier est disponible pour vous conseiller le vin blanc parfait pour votre repas.
                </p> */}
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
