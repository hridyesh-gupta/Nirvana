
'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function ThalisBiryaniPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: '#751140' }}>
                Thalis & Biryani
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Traditional complete meals and aromatic rice dishes
              </p>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#BD8E21' }} />
            </div>

            {/* Thali Section */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#BD8E21' }}>
                Traditional Thalis
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Vegetarian Thali</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 22.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Complete vegetarian meal with dal, vegetables, rice, bread, raita, and dessert
                  </p>
                  <div className="text-sm text-gray-500">
                    Traditional Indian platter with authentic flavors
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Non-Vegetarian Thali</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 26.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Complete meal with chicken curry, dal, vegetables, rice, bread, and sides
                  </p>
                  <div className="text-sm text-gray-500">
                    Perfect combination of meat and vegetarian dishes
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Royal Thali</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 32.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Premium selection with multiple curries, tandoori items, rice, breads, and sweets
                  </p>
                  <div className="text-sm text-gray-500">
                    Our most elaborate traditional meal experience
                  </div>
                </div>
              </div>
            </div>

            {/* Biryani Section */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#751140' }}>
                Aromatic Biryanis
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Vegetable Biryani</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 18.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fragrant basmati rice cooked with mixed vegetables and aromatic spices
                  </p>
                  <div className="text-sm text-gray-500">
                    Served with raita and boiled egg
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Chicken Biryani</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 22.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Tender chicken pieces layered with spiced basmati rice and slow-cooked
                  </p>
                  <div className="text-sm text-gray-500">
                    Our signature biryani with authentic Hyderabadi flavors
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Mutton Biryani</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 26.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Succulent mutton cooked with premium basmati rice and traditional spices
                  </p>
                  <div className="text-sm text-gray-500">
                    Rich and flavorful, a true delicacy
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Prawn Biryani</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 24.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fresh prawns cooked with aromatic rice and coastal spices
                  </p>
                  <div className="text-sm text-gray-500">
                    A coastal specialty with unique flavors
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Special Mix Biryani</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 28.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Combination of chicken, mutton, and prawns with fragrant basmati rice
                  </p>
                  <div className="text-sm text-gray-500">
                    The ultimate biryani experience
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Egg Biryani</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 16.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Boiled eggs cooked with spiced basmati rice and aromatic herbs
                  </p>
                  <div className="text-sm text-gray-500">
                    Simple yet flavorful option
                  </div>
                </div>
              </div>
            </div>

            {/* Order Section */}
            <div className="mt-20 text-center">
              <div className="bg-white rounded-2xl p-8 border-2 shadow-lg" style={{ borderColor: '#751140' }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                  <i className="ri-bowl-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4" style={{ color: '#751140' }}>Order Your Favorite Thali or Biryani</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Experience the authentic taste of traditional Indian complete meals and aromatic rice dishes.
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
                    href="/cart"
                    className="bg-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer border-2 flex items-center justify-center space-x-2"
                    style={{ color: '#751140', borderColor: '#751140' }}
                  >
                    <i className="ri-shopping-cart-line text-xl"></i>
                    <span>View Cart</span>
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
