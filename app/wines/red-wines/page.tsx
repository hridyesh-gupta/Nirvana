
'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';

export default function RedWinesPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const wineRegions = [
    {
      id: 'burgundy-chalonnaise',
      name: 'Burgundy Côte Chalonnaise',
      description: 'Elegant Pinot Noir wines from the southern Burgundy region',
      price: 45.00,
      image: 'https://readdy.ai/api/search-image?query=burgundy%20cote%20chalonnaise%20red%20wine%20bottle%20with%20elegant%20pinot%20noir%20in%20crystal%20glass%20with%20vineyard%20landscape%20background%20and%20grape%20clusters%2C%20deep%20ruby%20red%20wine%20color&width=400&height=300&seq=wine1&orientation=landscape'
    },
    {
      id: 'burgundy-beaune',
      name: 'Burgundy Côte de Beaune',
      description: 'Premier and Grand Cru wines from the prestigious Côte de Beaune',
      price: 85.00,
      image: 'https://readdy.ai/api/search-image?query=burgundy%20cote%20de%20beaune%20premier%20cru%20red%20wine%20bottle%20with%20grand%20cru%20label%20in%20elegant%20wine%20glass%20with%20french%20vineyard%20terroir%20background%2C%20premium%20ruby%20red%20color&width=400&height=300&seq=wine2&orientation=landscape'
    },
    {
      id: 'burgundy-nuits',
      name: 'Burgundy Côte de Nuits',
      description: 'World-renowned red wines from the heart of Burgundy',
      price: 95.00,
      image: 'https://readdy.ai/api/search-image?query=burgundy%20cote%20de%20nuits%20grand%20cru%20red%20wine%20bottle%20with%20prestigious%20label%20in%20crystal%20glass%20with%20burgundy%20vineyard%20slopes%20background%2C%20deep%20garnet%20red%20wine&width=400&height=300&seq=wine3&orientation=landscape'
    },
    {
      id: 'beaujolais',
      name: 'Beaujolais',
      description: 'Fresh and fruity wines made from Gamay grapes',
      price: 32.00,
      image: 'https://readdy.ai/api/search-image?query=beaujolais%20red%20wine%20bottle%20with%20gamay%20grapes%20in%20wine%20glass%20with%20rolling%20hills%20vineyard%20background%20and%20fresh%20grape%20clusters%2C%20bright%20cherry%20red%20color&width=400&height=300&seq=wine4&orientation=landscape'
    },
    {
      id: 'rhone-valley',
      name: 'Rhône Valley',
      description: 'Full-bodied wines from Northern and Southern Rhône appellations',
      price: 55.00,
      image: 'https://readdy.ai/api/search-image?query=rhone%20valley%20red%20wine%20bottle%20with%20syrah%20grapes%20in%20wine%20glass%20with%20terraced%20vineyard%20slopes%20background%2C%20full-bodied%20dark%20purple%20red%20wine&width=400&height=300&seq=wine5&orientation=landscape'
    },
    {
      id: 'languedoc-roussillon',
      name: 'Languedoc Roussillon',
      description: 'Rich Mediterranean wines with excellent value',
      price: 38.00,
      image: 'https://readdy.ai/api/search-image?query=languedoc%20roussillon%20red%20wine%20bottle%20with%20mediterranean%20vineyard%20landscape%20in%20wine%20glass%20with%20lavender%20fields%20background%2C%20rich%20dark%20red%20wine%20color&width=400&height=300&seq=wine6&orientation=landscape'
    }
  ];

  const bordeauxRegions = [
    {
      id: 'bordeaux-saint-emilion',
      name: 'Bordeaux Saint Emilion',
      description: 'Merlot-dominant wines from the Right Bank of Bordeaux',
      price: 75.00,
      image: 'https://readdy.ai/api/search-image?query=bordeaux%20saint%20emilion%20red%20wine%20bottle%20with%20merlot%20grapes%20in%20elegant%20glass%20with%20chateau%20vineyard%20background%2C%20deep%20ruby%20bordeaux%20wine%20color&width=400&height=300&seq=wine7&orientation=landscape'
    },
    {
      id: 'bordeaux-graves',
      name: 'Bordeaux Graves Pessac Léognan',
      description: 'Complex blends from the prestigious Graves region',
      price: 82.00,
      image: 'https://readdy.ai/api/search-image?query=bordeaux%20graves%20pessac%20leognan%20red%20wine%20bottle%20with%20grand%20cru%20classe%20label%20in%20crystal%20glass%20with%20chateau%20background%2C%20elegant%20bordeaux%20blend%20wine&width=400&height=300&seq=wine8&orientation=landscape'
    },
    {
      id: 'bordeaux-margaux',
      name: 'Bordeaux Margaux',
      description: 'Elegant and refined wines from the famous Margaux appellation',
      price: 120.00,
      image: 'https://readdy.ai/api/search-image?query=bordeaux%20margaux%20premium%20red%20wine%20bottle%20with%20prestigious%20appellation%20label%20in%20fine%20crystal%20glass%20with%20elegant%20chateau%20vineyard%2C%20refined%20bordeaux%20wine&width=400&height=300&seq=wine9&orientation=landscape'
    },
    {
      id: 'bordeaux-pauillac',
      name: 'Bordeaux Pauillac',
      description: 'Home to three First Growth châteaux, producing exceptional wines',
      price: 150.00,
      image: 'https://readdy.ai/api/search-image?query=bordeaux%20pauillac%20first%20growth%20red%20wine%20bottle%20with%20prestigious%20chateau%20label%20in%20luxury%20crystal%20glass%20with%20grand%20cru%20vineyard%20background%2C%20exceptional%20bordeaux%20wine&width=400&height=300&seq=wine10&orientation=landscape'
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
                Red Wines
              </h1>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Discover our exceptional selection of red wines from France's most prestigious regions. Each bottle has been carefully chosen to complement our Indian cuisine perfectly.
              </p>
            </div>

            {/* French Wine Regions */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">French Wine Regions</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wineRegions.map((wine) => (
                  <div key={wine.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-primary">
                    <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${wine.image})` }}>
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

                      <p className="text-gray-600 mb-6">{wine.description}</p>

                      <button
                        onClick={() => handleAddToCart(wine)}
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

            {/* Bordeaux Appellations */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Bordeaux Appellations</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {bordeauxRegions.map((wine) => (
                  <div key={wine.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-secondary">
                    <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${wine.image})` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="text-white px-4 py-2 rounded-full font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {wine.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                          Premium
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                        {wine.name}
                      </h3>

                      <p className="text-gray-600 mb-6">{wine.description}</p>

                      <button
                        onClick={() => handleAddToCart(wine)}
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

            {/* Wine Pairing Section */}
            <div className="rounded-2xl p-8 border-2 bg-gray-50 border-primary">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                  <i className="ri-restaurant-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-primary">
                  Perfect Pairings
                </h2>
                <div className="text-lg mb-6 text-secondary">
                  Perfect Pairings
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Light to Medium Reds
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Beaujolais and lighter Burgundies pair beautifully with our tandoori dishes, tikka preparations, and vegetarian curries. Their fresh acidity complements the spices perfectly.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Full-Bodied Reds
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Bordeaux blends and Rhône Valley wines are excellent with our lamb specialties, rich curry dishes, and aged beef preparations. Their tannins balance the richness of our sauces.
                  </p>
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
