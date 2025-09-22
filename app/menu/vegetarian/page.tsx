
'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';
import { Product } from '@/lib/products';

export default function VegetarianPage() {
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
                Vegetarian Specialties
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Rich and flavorful vegetarian dishes from across India
              </p>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
            </div>

            {/* Paneer Dishes */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
                Paneer Specialties
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="/images/Matar-Paneer.jpg"
                    alt="Matar Paneer"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Matar Paneer</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 25.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Creamy green peas sauce, onions, ginger, masala
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'veg-matar-paneer', name: 'Matar Paneer', price: 25.00, category: 'Paneer Specialties' })}
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
                    src="https://readdy.ai/api/search-image?query=palak%20paneer%20simmered%20spinach%20with%20paneer%20and%20spices%20coriander%20green%20creamy%20curry&width=400&height=250&seq=palakpaneer2&orientation=landscape"
                    alt="Palak Paneer"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Palak Paneer</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 25.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Simmered spinach; paneer; spices; coriander
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'veg-palak-paneer', name: 'Palak Paneer', price: 25.00, category: 'Paneer Specialties' })}
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
                    src="https://readdy.ai/api/search-image?query=paneer%20makhani%20cheese%20in%20cinnamon%20creamy%20sauce%20rich%20buttery%20tomato%20base&width=400&height=250&seq=paneermakhani1&orientation=landscape"
                    alt="Paneer Makhani"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Paneer Makhani</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 22.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Cheese in a cinnamon creamy sauce
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'veg-paneer-makhani', name: 'Paneer Makhani', price: 22.00, category: 'Paneer Specialties' })}
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
                    src="https://readdy.ai/api/search-image?query=paneer%20tikka%20masala%20grilled%20cheese%20served%20in%20medium%20spicy%20masala%20sauce%20restaurant%20style&width=400&height=250&seq=paneertikkamasala1&orientation=landscape"
                    alt="Paneer Tikka Masala"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Paneer Tikka Masala</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 22.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Grilled cheese served in a medium spicy sauce
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'veg-paneer-tikka-masala', name: 'Paneer Tikka Masala', price: 22.00, category: 'Paneer Specialties' })}
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

            {/* Dal & Lentil Dishes */}
            {/* <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12 text-primary">
                Dal & Lentils
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src="https://readdy.ai/api/search-image?query=rich%20dal%20makhani%20black%20lentils%20slow-cooked%20with%20butter%20cream%20and%20aromatic%20spices%2C%20royal%20punjabi%20specialty%20with%20creamy%20presentation&width=400&height=250&seq=dalmakhani1&orientation=landscape"
                    alt="Dal Makhani"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Dal Makhani</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 16.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Black lentils slow-cooked with butter, cream, and aromatic spices
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'veg-dal-makhani', name: 'Dal Makhani', price: 16.50, category: 'Dal & Lentils' })}
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
                    src="https://readdy.ai/api/search-image?query=comforting%20dal%20fry%20mixed%20lentils%20tempered%20with%20cumin%20onions%20tomatoes%20and%20fresh%20coriander%2C%20comfort%20food%20presentation%20with%20garnishes&width=400&height=250&seq=dalfry1&orientation=landscape"
                    alt="Dal Fry"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Dal Fry</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 14.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Mixed lentils tempered with cumin, onions, tomatoes, and fresh coriander
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'veg-dal-fry', name: 'Dal Fry', price: 14.50, category: 'Dal & Lentils' })}
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
                    src="https://readdy.ai/api/search-image?query=hearty%20rajma%20red%20kidney%20beans%20cooked%20in%20spiced%20tomato%20gravy%20with%20traditional%20herbs%2C%20north%20indian%20home-style%20favorite%20presentation&width=400&height=250&seq=rajma1&orientation=landscape"
                    alt="Rajma"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Rajma</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 15.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Red kidney beans cooked in spiced tomato gravy with traditional herbs
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'veg-rajma', name: 'Rajma', price: 15.50, category: 'Dal & Lentils' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div> */}

            {/* Vegetable Curries */}
            {/* <div>
              <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
                Vegetable Curries
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="https://readdy.ai/api/search-image?query=classic%20aloo%20gobi%20potatoes%20and%20cauliflower%20cooked%20with%20turmeric%20cumin%20and%20fresh%20herbs%2C%20dry%20curry%20perfectly%20spiced%20with%20vibrant%20colors&width=400&height=250&seq=aloogobi1&orientation=landscape"
                    alt="Aloo Gobi"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Aloo Gobi</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 16.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Potatoes and cauliflower cooked with turmeric, cumin, and fresh herbs
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'veg-aloo-gobi', name: 'Aloo Gobi', price: 16.50, category: 'Vegetable Curries' })}
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
                    src="https://readdy.ai/api/search-image?query=crispy%20bhindi%20masala%20fresh%20okra%20saut%C3%A9ed%20with%20onions%20tomatoes%20and%20aromatic%20indian%20spices%2C%20flavorful%20preparation%20with%20appealing%20presentation&width=400&height=250&seq=bhindimasala1&orientation=landscape"
                    alt="Bhindi Masala"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Bhindi Masala</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 17.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fresh okra sautéed with onions, tomatoes, and aromatic Indian spices
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'veg-bhindi-masala', name: 'Bhindi Masala', price: 17.50, category: 'Vegetable Curries' })}
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
                    src="https://readdy.ai/api/search-image?query=healthy%20mixed%20vegetable%20curry%20seasonal%20vegetables%20cooked%20in%20coconut-based%20curry%20with%20south%20indian%20spices%2C%20medley%20of%20fresh%20vegetables%20presentation&width=400&height=250&seq=mixedvegcurry1&orientation=landscape"
                    alt="Mixed Vegetable Curry"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Mixed Vegetable Curry</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 18.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Seasonal vegetables cooked in coconut-based curry with South Indian spices
                  </p>
                  <button
                    onClick={() => handleAddToCart({ id: 'veg-mixed-vegetable-curry', name: 'Mixed Vegetable Curry', price: 18.00, category: 'Vegetable Curries' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div> */}

            {/* Order Section */}
            <div className="mt-20 text-center">
              <div className="bg-white rounded-2xl p-8 border-2 shadow-lg border-primary">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                  <i className="ri-plant-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-primary">Savor Our Vegetarian Delights</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Experience the rich tradition of Indian vegetarian cuisine with our authentic recipes and fresh ingredients.
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