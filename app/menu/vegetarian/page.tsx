
'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function VegetarianPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: '#751140' }}>
                Vegetarian Specialties
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Rich and flavorful vegetarian dishes from across India
              </p>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#BD8E21' }} />
            </div>

            {/* Paneer Dishes */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#BD8E21' }}>
                Paneer Specialties
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Paneer Butter Masala</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 19.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Cottage cheese cubes in rich tomato and butter gravy with aromatic spices
                  </p>
                  <div className="text-sm text-gray-500">
                    Our most popular paneer dish
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Palak Paneer</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 18.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fresh cottage cheese cooked in creamy spinach gravy with garlic and ginger
                  </p>
                  <div className="text-sm text-gray-500">
                    Nutritious and delicious combination
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Kadai Paneer</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 19.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Paneer cooked with bell peppers and onions in spicy tomato-based gravy
                  </p>
                  <div className="text-sm text-gray-500">
                    Cooked in traditional iron wok for authentic flavor
                  </div>
                </div>
              </div>
            </div>

            {/* Dal & Lentil Dishes */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#751140' }}>
                Dal & Lentils
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Dal Makhani</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 16.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Black lentils slow-cooked with butter, cream, and aromatic spices
                  </p>
                  <div className="text-sm text-gray-500">
                    Royal Punjabi specialty, rich and creamy
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Dal Fry</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 14.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Mixed lentils tempered with cumin, onions, tomatoes, and fresh coriander
                  </p>
                  <div className="text-sm text-gray-500">
                    Comfort food at its best
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Rajma</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 15.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Red kidney beans cooked in spiced tomato gravy with traditional herbs
                  </p>
                  <div className="text-sm text-gray-500">
                    North Indian home-style favorite
                  </div>
                </div>
              </div>
            </div>

            {/* Vegetable Curries */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#BD8E21' }}>
                Vegetable Curries
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Aloo Gobi</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 16.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Potatoes and cauliflower cooked with turmeric, cumin, and fresh herbs
                  </p>
                  <div className="text-sm text-gray-500">
                    Classic dry curry, perfectly spiced
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Bhindi Masala</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 17.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fresh okra sautéed with onions, tomatoes, and aromatic Indian spices
                  </p>
                  <div className="text-sm text-gray-500">
                    Crispy and flavorful preparation
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Mixed Vegetable Curry</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 18.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Seasonal vegetables cooked in coconut-based curry with South Indian spices
                  </p>
                  <div className="text-sm text-gray-500">
                    Healthy medley of fresh vegetables
                  </div>
                </div>
              </div>
            </div>

            {/* Order Section */}
            <div className="mt-20 text-center">
              <div className="bg-white rounded-2xl p-8 border-2 shadow-lg" style={{ borderColor: '#751140' }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                  <i className="ri-plant-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4" style={{ color: '#751140' }}>Savor Our Vegetarian Delights</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Experience the rich tradition of Indian vegetarian cuisine with our authentic recipes and fresh ingredients.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+41227821010"
                    className="text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2"
                    style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}
                  >
                    <i className="ri-phone-line text-xl"></i>
                    <span>Order: 022 782 10 10</span>
                  </a>
                  <a
                    href="/menu"
                    className="bg-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer border-2 flex items-center justify-center space-x-2"
                    style={{ color: '#751140', borderColor: '#751140' }}
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
    </div>
  );
}
