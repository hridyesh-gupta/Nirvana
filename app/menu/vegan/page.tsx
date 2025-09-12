
'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';
import { Product } from '@/lib/products';

export default function VeganPage() {
  const { items: cartItems, addItem, updateQuantity, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

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
                Vegan Delights
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Plant-based Indian cuisine with authentic flavors
              </p>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
            </div>

            {/* Vegan Curries */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
                Vegan Curries
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="https://readdy.ai/api/search-image?query=delicious%20chana%20masala%20chickpeas%20cooked%20in%20aromatic%20tomato%20and%20onion%20gravy%20with%20traditional%20spices%2C%20rich%20plant-based%20curry%20presentation%20with%20fresh%20herbs&width=400&height=250&seq=chanamasala1&orientation=landscape"
                    alt="Chana Masala"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Chana Masala</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 16.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Chickpeas cooked in aromatic tomato and onion gravy with traditional spices
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-chana-masala', name: 'Chana Masala', price: 16.50, category: 'Vegan Curries' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>Add to Cart</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src="https://readdy.ai/api/search-image?query=traditional%20dal%20tadka%20yellow%20lentils%20tempered%20with%20cumin%20mustard%20seeds%20and%20fresh%20herbs%2C%20classic%20comfort%20vegan%20food%20with%20aromatic%20spices&width=400&height=250&seq=daltadka1&orientation=landscape"
                    alt="Dal Tadka"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Dal Tadka</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 14.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Yellow lentils tempered with cumin, mustard seeds, and fresh herbs
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-dal-tadka', name: 'Dal Tadka', price: 14.50, category: 'Vegan Curries' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>Add to Cart</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="https://readdy.ai/api/search-image?query=smoky%20baingan%20bharta%20roasted%20eggplant%20mashed%20with%20onions%20tomatoes%20and%20aromatic%20spices%2C%20traditional%20preparation%20with%20vibrant%20colors%20and%20garnishes&width=400&height=250&seq=bainganb1&orientation=landscape"
                    alt="Baingan Bharta"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Baingan Bharta</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 17.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Roasted eggplant mashed with onions, tomatoes, and aromatic spices
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-baingan-bharta', name: 'Baingan Bharta', price: 17.50, category: 'Vegan Curries' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Vegan Rice & Breads */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12 text-primary">
                Rice & Breads
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src="https://readdy.ai/api/search-image?query=fragrant%20coconut%20rice%20cooked%20with%20coconut%20milk%20and%20curry%20leaves%2C%20south%20indian%20specialty%20with%20aromatic%20presentation%20and%20traditional%20garnishes&width=400&height=250&seq=coconutrice1&orientation=landscape"
                    alt="Coconut Rice"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Coconut Rice</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 12.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fragrant basmati rice cooked with coconut milk and curry leaves
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-coconut-rice', name: 'Coconut Rice', price: 12.50, category: 'Vegan Rice & Breads' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>Add to Cart</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="https://readdy.ai/api/search-image?query=fresh%20whole%20wheat%20roti%20flatbread%20made%20without%20dairy%20cooked%20on%20traditional%20tawa%2C%20perfect%20vegan%20bread%20accompaniment%20with%20rustic%20presentation&width=400&height=250&seq=veganroti1&orientation=landscape"
                    alt="Vegan Roti"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Roti (Vegan)</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 4.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Whole wheat flatbread made without dairy, cooked on traditional tawa
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-roti', name: 'Roti (Vegan)', price: 4.50, category: 'Vegan Rice & Breads' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>Add to Cart</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src="https://readdy.ai/api/search-image?query=aromatic%20vegetable%20pulao%20basmati%20rice%20with%20mixed%20vegetables%20and%20whole%20spices%2C%20complete%20vegan%20meal%20presentation%20with%20colorful%20vegetables&width=400&height=250&seq=vegpulao1&orientation=landscape"
                    alt="Vegetable Pulao"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Vegetable Pulao</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 15.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Aromatic basmati rice with mixed vegetables and whole spices
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-vegetable-pulao', name: 'Vegetable Pulao', price: 15.50, category: 'Vegan Rice & Breads' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Vegan Appetizers */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
                Vegan Appetizers
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-3000 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="https://readdy.ai/api/search-image?query=crispy%20samosa%20filled%20with%20spiced%20potatoes%20and%20peas%20served%20with%20chutneys%2C%20classic%20indian%20street%20food%20completely%20vegan%20with%20golden%20brown%20presentation&width=400&height=250&seq=vegansamosa1&orientation=landscape"
                    alt="Vegan Samosa"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Samosa (2 pcs)</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 8.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Crispy pastry filled with spiced potatoes and peas, served with chutneys
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-samosa', name: 'Samosa (2 pcs)', price: 8.50, category: 'Vegan Appetizers' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>Add to Cart</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src="https://readdy.ai/api/search-image?query=spiced%20potato%20patties%20aloo%20tikki%20pan-fried%20until%20golden%20served%20with%20mint%20chutney%2C%20crispy%20outside%20soft%20inside%20with%20appetizing%20presentation&width=400&height=250&seq=alootikki1&orientation=landscape"
                    alt="Aloo Tikki"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Aloo Tikki (3 pcs)</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 9.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Spiced potato patties pan-fried until golden, served with mint chutney
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-aloo-tikki', name: 'Aloo Tikki (3 pcs)', price: 9.50, category: 'Vegan Appetizers' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>Add to Cart</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="https://readdy.ai/api/search-image?query=mixed%20vegetable%20pakora%20assorted%20vegetables%20dipped%20in%20chickpea%20flour%20batter%20and%20deep-fried%2C%20perfect%20rainy%20day%20snack%20with%20crispy%20golden%20presentation&width=400&height=250&seq=vegpakora1&orientation=landscape"
                    alt="Mixed Vegetable Pakora"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Mixed Vegetable Pakora</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 10.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Assorted vegetables dipped in chickpea flour batter and deep-fried
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'vegan-mixed-pakora', name: 'Mixed Vegetable Pakora', price: 10.50, category: 'Vegan Appetizers' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>Add to Cart</span>
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
                <h2 className="text-3xl font-semibold mb-4 text-primary">Enjoy Our Vegan Menu</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Discover the rich flavors of plant-based Indian cuisine, prepared with authentic spices and traditional methods.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+41227821010"
                    className="text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary"
                  >
                    <i className="ri-phone-line text-xl"></i>
                    <span>Order: 022 782 10 10</span>
                  </a>
                  <a
                    href="/menu"
                    className="bg-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer border-2 flex items-center justify-center space-x-2 text-primary border-primary"
                  >
                    <i className="ri-restaurant-line text-xl"></i>
                    <span>Full Menu</span>
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