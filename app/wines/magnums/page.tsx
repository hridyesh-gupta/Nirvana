
'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';

export default function MagnumsPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const magnumCategories = [
    {
      category: 'Champagnes',
      wines: [
        {
          id: 'dom-perignon-magnum',
          name: 'Dom Pérignon Vintage Magnum',
          description: 'Prestigious champagne in elegant 1.5L magnum format',
          price: 580.00,
          image: 'https://readdy.ai/api/search-image?query=dom%20perignon%20vintage%20magnum%20champagne%201.5L%20large%20format%20bottle%20prestigious%20elegant%20champagne%20luxury%20restaurant%20service%20professional%20photography&width=400&height=300&seq=magnumchamp1&orientation=landscape'
        },
        {
          id: 'krug-magnum',
          name: 'Krug Grande Cuvée Magnum',
          description: 'Complex champagne blend in impressive magnum presentation',
          price: 450.00,
          image: 'https://readdy.ai/api/search-image?query=krug%20grande%20cuvee%20magnum%20champagne%201.5L%20complex%20blend%20impressive%20presentation%20luxury%20large%20format%20champagne%20bottle%20professional%20sommelier%20photography&width=400&height=300&seq=magnumchamp2&orientation=landscape'
        }
      ]
    },
    {
      category: 'Chassagne Montrachet',
      wines: [
        {
          id: 'chassagne-magnum',
          name: 'Chassagne-Montrachet Magnum',
          description: 'Premium Burgundy white wine in collector magnum format',
          price: 320.00,
          image: 'https://readdy.ai/api/search-image?query=chassagne%20montrachet%20magnum%20burgundy%20white%20wine%201.5L%20collector%20format%20premium%20burgundy%20wine%20bottle%20elegant%20presentation%20fine%20dining%20restaurant&width=400&height=300&seq=magnumburg1&orientation=landscape'
        }
      ]
    },
    {
      category: 'Pommard',
      wines: [
        {
          id: 'pommard-magnum',
          name: 'Pommard Premier Cru Magnum',
          description: 'Elegant Burgundy red wine in prestigious magnum size',
          price: 380.00,
          image: 'https://readdy.ai/api/search-image?query=pommard%20premier%20cru%20magnum%20burgundy%20red%20wine%201.5L%20prestigious%20size%20elegant%20burgundy%20wine%20bottle%20professional%20wine%20service%20restaurant%20photography%20fine%20dining&width=400&height=300&seq=magnumburg2&orientation=landscape'
        }
      ]
    },
    {
      category: 'Bordeaux',
      wines: [
        {
          id: 'bordeaux-saint-emilion-magnum',
          name: 'Saint-Émilion Grand Cru Magnum',
          description: 'Exceptional Right Bank Bordeaux in magnum format',
          price: 420.00,
          image: 'https://readdy.ai/api/search-image?query=saint%20emilion%20grand%20cru%20magnum%20bordeaux%201.5L%20exceptional%20right%20bank%20wine%20bottle%20prestigious%20magnum%20format%20fine%20wine%20restaurant%20service&width=400&height=300&seq=magnumbord1&orientation=landscape'
        },
        {
          id: 'bordeaux-pauillac-magnum',
          name: 'Pauillac Magnum',
          description: 'Left Bank Bordeaux blend in impressive magnum presentation',
          price: 480.00,
          image: 'https://readdy.ai/api/search-image?query=pauillac%20magnum%20bordeaux%201.5L%20left%20bank%20blend%20impressive%20presentation%20luxury%20bordeaux%20wine%20bottle%20professional%20sommelier%20photography%20fine%20dining&width=400&height=300&seq=magnumbord2&orientation=landscape'
        }
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
                Magnums
              </h1>
              <div className="text-2xl mb-8 text-secondary">
                Our Magnums
              </div>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Discover our prestigious collection of magnum bottles (1.5L), perfect for celebrations
                and special occasions. Large format wines age more gracefully and make impressive presentations.
              </p>
            </div>

            {/* Magnum Categories */}
            <div className="space-y-16">
              {magnumCategories.map((categoryData, index) => (
                <div key={categoryData.category} className="mb-16">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">{categoryData.category}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryData.wines.map((wine) => (
                      <div
                        key={wine.id}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-primary"
                      >
                        <div
                          className="h-56 bg-cover bg-center relative"
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
                              <i className="ri-wine-glass-fill"></i>
                              <span>1.5L</span>
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                            {wine.name}
                          </h3>

                          <p className="text-gray-600 leading-relaxed mb-6">
                            {wine.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary" />
                              <span className="text-sm text-gray-500 font-medium">Magnum 1.5L</span>
                            </div>

                            <button
                              onClick={() => handleAddToCart(wine)}
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
                </div>
              ))}
            </div>

            {/* Magnum Benefits Section */}
            <div className="rounded-2xl p-8 border-2 mb-16 bg-gray-50 border-primary">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                  <i className="ri-award-fill text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-primary">
                  Why Choose Magnums?
                </h2>
                <div className="text-lg mb-6 text-secondary">
                  Why Choose Magnums?
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-time-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    Superior Aging
                  </h3>
                  <p className="text-gray-600">
                    Large format bottles age more slowly and gracefully, developing complex flavors over time
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-group-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    Perfect for Sharing
                  </h3>
                  <p className="text-gray-600">
                    Ideal for celebrations, dinner parties, and special occasions with family and friends
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-star-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    Impressive Presentation
                  </h3>
                  <p className="text-gray-600">
                    Makes a statement at the table and creates memorable dining experiences
                  </p>
                </div>
              </div>
            </div>

            {/* Special Occasions Section */}
            <div className="rounded-2xl p-12 text-white text-center bg-gradient-to-r from-primary to-secondary">
              <div className="max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <i className="ri-gift-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Perfect for Special Celebrations
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Our magnum collection is perfect for anniversaries, corporate events,
                  wedding celebrations, and milestone birthdays. Each bottle serves 8-10 glasses
                  and creates an unforgettable centerpiece for your special Indian dining experience.
                </p>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-4">
                    Advance Notice Recommended
                  </h3>
                  <p className="text-sm opacity-90">
                    Due to the exclusive nature of our magnum collection, we recommend placing orders
                    48 hours in advance for special events. Our sommelier will ensure proper service
                    and presentation for your celebration.
                  </p>
                  <a
                    href="tel:+41227821010"
                    className="inline-flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-full font-semibold mt-4 hover:bg-gray-100 transition-colors"
                  >
                    <i className="ri-phone-line"></i>
                    <span>Reserve Now</span>
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
