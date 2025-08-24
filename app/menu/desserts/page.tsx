
'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function DessertsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: '#751140' }}>
                Indian Desserts
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Sweet endings with traditional Indian confections
              </p>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#BD8E21' }} />
            </div>

            {/* Traditional Sweets */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#BD8E21' }}>
                Traditional Sweets
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Gulab Jamun (2 pcs)</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 8.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Soft milk dumplings soaked in cardamom-flavored sugar syrup
                  </p>
                  <div className="text-sm text-gray-500">
                    Most beloved Indian dessert, served warm
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Rasmalai (2 pcs)</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 9.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Soft cottage cheese dumplings in creamy cardamom-pistachio milk
                  </p>
                  <div className="text-sm text-gray-500">
                    Bengali delicacy, rich and creamy
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Kheer</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 7.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Rice pudding cooked in milk with cardamom, almonds, and raisins
                  </p>
                  <div className="text-sm text-gray-500">
                    Classic comfort dessert, served chilled
                  </div>
                </div>
              </div>
            </div>

            {/* Ice Creams & Cold Desserts */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#751140' }}>
                Cold Desserts
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Kulfi</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 6.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Traditional Indian ice cream flavored with cardamom and pistachios
                  </p>
                  <div className="text-sm text-gray-500">
                    Dense and creamy, unlike regular ice cream
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Falooda</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 8.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Cold dessert drink with vermicelli, basil seeds, rose syrup, and ice cream
                  </p>
                  <div className="text-sm text-gray-500">
                    Refreshing summer treat with multiple textures
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Lassi (Sweet/Mango)</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 5.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Chilled yogurt drink, available in sweet or fresh mango flavor
                  </p>
                  <div className="text-sm text-gray-500">
                    Perfect refreshing drink for any meal
                  </div>
                </div>
              </div>
            </div>

            {/* Special Desserts */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#BD8E21' }}>
                Specialty Desserts
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Gajar Halwa</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 9.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Grated carrots cooked in milk, ghee, and sugar, garnished with nuts
                  </p>
                  <div className="text-sm text-gray-500">
                    Winter specialty, served warm
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#BD8E21' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#BD8E21' }}>Ras Malai Cake</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #BD8E21, #751140)` }}>
                      CHF 10.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fusion dessert combining traditional ras malai with modern cake layers
                  </p>
                  <div className="text-sm text-gray-500">
                    Chef's special creation
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105" style={{ borderColor: '#751140' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: '#751140' }}>Jalebi with Rabri</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                      CHF 11.50
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Crispy spiral sweets served with thick sweetened milk cream
                  </p>
                  <div className="text-sm text-gray-500">
                    Perfect combination of textures and flavors
                  </div>
                </div>
              </div>
            </div>

            {/* Order Section */}
            <div className="mt-20 text-center">
              <div className="bg-white rounded-2xl p-8 border-2 shadow-lg" style={{ borderColor: '#751140' }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                  <i className="ri-cake-3-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4" style={{ color: '#751140' }}>Sweet Endings Await</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Complete your meal with our authentic Indian desserts, made fresh daily with traditional recipes and the finest ingredients.
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
