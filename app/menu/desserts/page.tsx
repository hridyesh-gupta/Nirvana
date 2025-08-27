
'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function DessertsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
                Indian Desserts
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Sweet endings with traditional Indian confections
              </p>
              <div className="w-32 h-1 mx-auto rounded-full bg-secondary" />
            </div>

            {/* Traditional Sweets */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
                Traditional Sweets
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="https://readdy.ai/api/search-image?query=delicious%20gulab%20jamun%20soft%20milk%20dumplings%20soaked%20in%20cardamom-flavored%20sugar%20syrup%2C%20most%20beloved%20indian%20dessert%20served%20warm%20with%20golden%20brown%20color&width=400&height=250&seq=gulabjamun1&orientation=landscape"
                    alt="Gulab Jamun"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Gulab Jamun (2 pcs)</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
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

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src="https://readdy.ai/api/search-image?query=exquisite%20rasmalai%20soft%20cottage%20cheese%20dumplings%20in%20creamy%20cardamom-pistachio%20milk%2C%20bengali%20delicacy%20rich%20and%20creamy%20dessert%20presentation&width=400&height=250&seq=rasmalai1&orientation=landscape"
                    alt="Rasmalai"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Rasmalai (2 pcs)</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
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

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="https://readdy.ai/api/search-image?query=classic%20kheer%20rice%20pudding%20cooked%20in%20milk%20with%20cardamom%20almonds%20and%20raisins%2C%20comfort%20dessert%20served%20chilled%20with%20nuts%20garnish&width=400&height=250&seq=kheer1&orientation=landscape"
                    alt="Kheer"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Kheer</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
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
              <h2 className="text-4xl font-bold text-center mb-12 text-primary">
                Cold Desserts
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src="https://readdy.ai/api/search-image?query=traditional%20kulfi%20indian%20ice%20cream%20flavored%20with%20cardamom%20and%20pistachios%2C%20dense%20and%20creamy%20unlike%20regular%20ice%20cream%20with%20authentic%20presentation&width=400&height=250&seq=kulfi1&orientation=landscape"
                    alt="Kulfi"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Kulfi</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
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

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="https://readdy.ai/api/search-image?query=refreshing%20falooda%20cold%20dessert%20drink%20with%20vermicelli%20basil%20seeds%20rose%20syrup%20and%20ice%20cream%2C%20summer%20treat%20with%20multiple%20textures%20and%20colorful%20layers&width=400&height=250&seq=falooda1&orientation=landscape"
                    alt="Falooda"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Falooda</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
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

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src="https://readdy.ai/api/search-image?query=perfect%20lassi%20chilled%20yogurt%20drink%20available%20in%20sweet%20or%20fresh%20mango%20flavor%2C%20refreshing%20drink%20for%20any%20meal%20with%20creamy%20presentation&width=400&height=250&seq=lassi1&orientation=landscape"
                    alt="Lassi"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Lassi (Sweet/Mango)</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
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
              <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
                Specialty Desserts
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="https://readdy.ai/api/search-image?query=warm%20gajar%20halwa%20grated%20carrots%20cooked%20in%20milk%20ghee%20and%20sugar%20garnished%20with%20nuts%2C%20winter%20specialty%20dessert%20with%20rich%20orange%20color&width=400&height=250&seq=gajarhalwa1&orientation=landscape"
                    alt="Gajar Halwa"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Gajar Halwa</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
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

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src="https://readdy.ai/api/search-image?query=innovative%20ras%20malai%20cake%20fusion%20dessert%20combining%20traditional%20ras%20malai%20with%20modern%20cake%20layers%2C%20chef%20special%20creation%20with%20elegant%20presentation&width=400&height=250&seq=rasmalaicake1&orientation=landscape"
                    alt="Ras Malai Cake"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Ras Malai Cake</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
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

                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="https://readdy.ai/api/search-image?query=crispy%20jalebi%20with%20rabri%20spiral%20sweets%20served%20with%20thick%20sweetened%20milk%20cream%2C%20perfect%20combination%20of%20textures%20and%20flavors%20with%20golden%20presentation&width=400&height=250&seq=jalebirabri1&orientation=landscape"
                    alt="Jalebi with Rabri"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Jalebi with Rabri</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
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
              <div className="bg-white rounded-2xl p-8 border-2 shadow-lg border-primary">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                  <i className="ri-cake-3-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-primary">Sweet Endings Await</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Complete your meal with our authentic Indian desserts, made fresh daily with traditional recipes and the finest ingredients.
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
    </div>
  );
}