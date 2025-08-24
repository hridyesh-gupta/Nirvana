
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

export default function WorldWinesPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const wineRegions = [
    {
      region: 'South Africa',
      regionFr: 'Afrique du Sud',
      wines: [
        {
          id: 'chenin-blanc-sa',
          name: 'Chenin Blanc - Stellenbosch',
          description: 'Crisp and aromatic South African white wine',
          price: 55.00,
          image: 'https://readdy.ai/api/search-image?query=south%20african%20chenin%20blanc%20stellenbosch%20white%20wine%20bottle%20crisp%20aromatic%20wine%20elegant%20glass%20professional%20wine%20photography%20restaurant%20setting&width=400&height=300&seq=sawine1&orientation=landscape'
        }
      ]
    },
    {
      region: 'Chile',
      regionFr: 'Chili',
      wines: [
        {
          id: 'carmenere-chile',
          name: 'Carmenère - Colchagua Valley',
          description: 'Rich and spicy Chilean red wine with unique character',
          price: 60.00,
          image: 'https://readdy.ai/api/search-image?query=chilean%20carmenere%20colchagua%20valley%20red%20wine%20rich%20spicy%20unique%20character%20wine%20bottle%20elegant%20presentation%20professional%20restaurant%20photography&width=400&height=300&seq=chilewine1&orientation=landscape'
        }
      ]
    },
    {
      region: 'Argentina',
      regionFr: 'Argentine',
      wines: [
        {
          id: 'malbec-mendoza',
          name: 'Malbec - Mendoza',
          description: 'Bold and full-bodied Argentinian Malbec',
          price: 65.00,
          image: 'https://readdy.ai/api/search-image?query=argentinian%20malbec%20mendoza%20bold%20full%20bodied%20red%20wine%20dark%20purple%20wine%20bottle%20professional%20sommelier%20photography%20fine%20dining%20restaurant&width=400&height=300&seq=argentinawine1&orientation=landscape'
        }
      ]
    },
    {
      region: 'Spain',
      regionFr: 'Espagne',
      wines: [
        {
          id: 'tempranillo-rioja',
          name: 'Tempranillo - Rioja',
          description: 'Classic Spanish red wine with elegant tannins',
          price: 70.00,
          image: 'https://readdy.ai/api/search-image?query=spanish%20tempranillo%20rioja%20classic%20red%20wine%20elegant%20tannins%20wine%20bottle%20traditional%20spanish%20style%20professional%20wine%20photography%20restaurant%20service&width=400&height=300&seq=spainwine1&orientation=landscape'
        }
      ]
    },
    {
      region: 'India',
      regionFr: 'Inde',
      wines: [
        {
          id: 'shiraz-india',
          name: 'Shiraz - Nashik Valley',
          description: 'Premium Indian red wine from Maharashtra',
          price: 75.00,
          image: 'https://readdy.ai/api/search-image?query=indian%20shiraz%20nashik%20valley%20premium%20red%20wine%20maharashtra%20wine%20bottle%20exotic%20indian%20wine%20elegant%20presentation%20restaurant%20photography%20professional&width=400&height=300&seq=indiawine1&orientation=landscape'
        }
      ]
    },
    {
      region: 'Lebanon',
      regionFr: 'Liban',
      wines: [
        {
          id: 'lebanese-blend',
          name: 'Château Musar - Bekaa Valley',
          description: 'Legendary Lebanese red blend with ancient heritage',
          price: 95.00,
          image: 'https://readdy.ai/api/search-image?query=chateau%20musar%20lebanese%20red%20wine%20bekaa%20valley%20legendary%20ancient%20heritage%20wine%20bottle%20middle%20eastern%20wine%20elegant%20restaurant%20presentation%20professional%20photography&width=400&height=300&seq=lebanonwine1&orientation=landscape'
        }
      ]
    },
    {
      region: 'Kosher Wines',
      regionFr: 'Kasher',
      wines: [
        {
          id: 'kosher-cabernet',
          name: 'Kosher Cabernet Sauvignon',
          description: 'Premium kosher wine with rich fruit flavors',
          price: 80.00,
          image: 'https://readdy.ai/api/search-image?query=kosher%20cabernet%20sauvignon%20premium%20wine%20rich%20fruit%20flavors%20kosher%20certified%20wine%20bottle%20elegant%20kosher%20wine%20service%20restaurant%20photography&width=400&height=300&seq=kosherwine1&orientation=landscape'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: '#751140' }}>
                World Wines
              </h1>
              <div className="text-2xl mb-8" style={{ color: '#BD8E21' }}>Vins du monde</div>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }} />
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Discover exceptional wines from around the globe, each bringing unique characteristics 
                and flavors that complement the diverse and aromatic nature of Indian cuisine.
              </p>
            </div>

            {/* Wine Regions */}
            <div className="space-y-16">
              {wineRegions.map((regionData, index) => (
                <div key={regionData.region} className="mb-16">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">{regionData.region}</h2>
                    <div className="text-lg text-blue-600 mb-8">{regionData.regionFr}</div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regionData.wines.map((wine) => (
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
                            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                              <i className="ri-earth-line"></i>
                              <span>World</span>
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
                              <span className="text-sm text-gray-500 font-medium">{regionData.region}</span>
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
              ))}
            </div>

            {/* Global Wine Culture Section */}
            <div className="mt-20 rounded-2xl p-8 border-2" style={{ backgroundColor: '#f9f9f9', borderColor: '#751140' }}>
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                  <i className="ri-global-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4" style={{ color: '#751140' }}>Global Wine Heritage</h2>
                <div className="text-lg mb-6" style={{ color: '#BD8E21' }}>Patrimoine Viticole Mondial</div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#751140' }}>New World Innovation</h3>
                  <p className="text-gray-600 mb-4">
                    Our selection from South America, South Africa, and India showcases the innovation 
                    and bold flavors of New World winemaking. These wines bring fresh perspectives 
                    that pair wonderfully with the boldness of Indian spices.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#751140' }}>Ancient Traditions</h3>
                  <p className="text-gray-600 mb-4">
                    Lebanese wines represent some of the world's oldest winemaking traditions, 
                    while our kosher selections maintain time-honored practices. These wines 
                    offer depth and history that complement our traditional recipes.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 italic">
                  Each wine in our world collection has been carefully selected to offer 
                  unique pairing opportunities with different aspects of Indian cuisine, 
                  from delicate vegetarian dishes to robust meat preparations.
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
