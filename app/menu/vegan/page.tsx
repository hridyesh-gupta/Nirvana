
'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function VeganPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: '#751140' }}>
                Vegan Delights
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Plant-based Indian cuisine with authentic flavors
              </p>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#BD8E21' }} />
            </div>

            {/* Vegan Curries */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#BD8E21' }}>
                Vegan Curries
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Chana Masala</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 16.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Chickpeas cooked in aromatic tomato and onion gravy with traditional spices
                  </p>
                  <div className="text-sm text-gray-500">
                    High in protein and completely plant-based
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Dal Tadka</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 14.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Yellow lentils tempered with cumin, mustard seeds, and fresh herbs
                  </p>
                  <div className="text-sm text-gray-500">
                    Classic comfort food, naturally vegan
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Baingan Bharta</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 17.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Roasted eggplant mashed with onions, tomatoes, and aromatic spices
                  </p>
                  <div className="text-sm text-gray-500">
                    Smoky flavors from traditional preparation
                  </div>
                </div>
              </div>
            </div>

            {/* Vegan Rice & Breads */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#751140' }}>
                Rice & Breads
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Coconut Rice</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 12.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fragrant basmati rice cooked with coconut milk and curry leaves
                  </p>
                  <div className="text-sm text-gray-500">
                    South Indian specialty, completely plant-based
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Roti (Vegan)</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 4.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Whole wheat flatbread made without dairy, cooked on traditional tawa
                  </p>
                  <div className="text-sm text-gray-500">
                    Perfect accompaniment to curries
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Vegetable Pulao</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 15.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Aromatic basmati rice with mixed vegetables and whole spices
                  </p>
                  <div className="text-sm text-gray-500">
                    Complete meal in itself
                  </div>
                </div>
              </div>
            </div>

            {/* Vegan Appetizers */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#BD8E21' }}>
                Vegan Appetizers
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Samosa (2 pcs)</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 8.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Crispy pastry filled with spiced potatoes and peas, served with chutneys
                  </p>
                  <div className="text-sm text-gray-500">
                    Classic Indian street food, completely vegan
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Aloo Tikki (3 pcs)</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 9.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Spiced potato patties pan-fried until golden, served with mint chutney
                  </p>
                  <div className="text-sm text-gray-500">
                    Crispy outside, soft inside
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Mixed Vegetable Pakora</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 10.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Assorted vegetables dipped in chickpea flour batter and deep-fried
                  </p>
                  <div className="text-sm text-gray-500">
                    Perfect rainy day snack
                  </div>
                </div>
              </div>
            </div>

            {/* Order Section */}
            <div className="mt-20 text-center">
              <div className="bg-white rounded-2xl p-8 border-2 shadow-lg" style={{ borderColor: '#751140' }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                  <i className="ri-leaf-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4" style={{ color: '#751140' }}>Enjoy Our Vegan Menu</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Discover the rich flavors of plant-based Indian cuisine, prepared with authentic spices and traditional methods.
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
