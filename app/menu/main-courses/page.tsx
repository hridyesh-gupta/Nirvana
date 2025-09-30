
'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';
import SauceSelectionModal from '../../components/SauceSelectionModal';
import { products, Product } from '../../../lib/products';
import MixOptionSelectionModal from '../../components/MixOptionSelectionModal';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  selectedSauce?: string; // Add this line
}

export default function MainCoursesPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSauceSelectionModal, setShowSauceSelectionModal] = useState(false);
  const [selectedDishForSauce, setSelectedDishForSauce] = useState<any | null>(null);
  const [showMixOptionSelectionModal, setShowMixOptionSelectionModal] = useState(false);
  const [selectedDishForMixOption, setSelectedDishForMixOption] = useState<Product | null>(null);

  const handleAddToCart = (item: Product, selectedSauce: string | null = null, selectedFlavor: string | null = null, selectedMixOption: string | null = null) => {
    if (item.requiresSauce && !selectedSauce) {
      setSelectedDishForSauce(item);
      setShowSauceSelectionModal(true);
    } else if (item.requiresMixOption && !selectedMixOption) {
      setSelectedDishForMixOption(item);
      setShowMixOptionSelectionModal(true);
    } else {
      addItem({ ...item, selectedSauce: selectedSauce || undefined, selectedFlavor: selectedFlavor || undefined, selectedMixOption: selectedMixOption || undefined });
    }
  };

  const handleUpdateQuantity = (id: string, quantity: number, selectedSauce?: string, selectedFlavor?: string, selectedMixOption?: string) => {
    updateQuantity(id, quantity, selectedSauce, selectedFlavor, selectedMixOption);
  };

  const classicDishes = products.filter(product => product.category === 'Classic Dishes');

  const traditionalDishes = products.filter(product => product.category === 'Traditional Dishes');

  const chefSpecials = [
    {
      id: 'lamb-chops',
      name: 'Lamb Chops',
      price: 48.00,
      description: 'Marinated lamb chops grilled (~300g), with sauce of choice (Rogan Josh, Vindaloo, Korma, Jalfrezi, Madras)',
      frenchDescription: 'En Marinade Grillées (~300g) - Sauce au Choix : Rogan; Vindaloo; Korma; Jalfrezi; Madras',
      image: 'https://readdy.ai/api/search-image?query=grilled%20lamb%20chops%20marinated%20lamb%20chops%20with%20perfect%20char%20marks%20served%20on%20sizzling%20platter%20with%20choice%20of%20curry%20sauce%20and%20grilled%20vegetables%20garnished%20with%20rosemary%20and%20lemon%20wedges&width=400&height=300&seq=main8&orientation=landscape'
    },
    {
      id: 'lamb-shank',
      name: 'Lamb Shank',
      price: 48.00,
      description: 'Slow-cooked lamb shank in traditional Kashmiri sauce',
      frenchDescription: 'Souris d\'Agneau cuite à basse température; curry traditionnel du Cachemire',
      image: 'https://readdy.ai/api/search-image?query=slow%20cooked%20lamb%20shank%20tender%20lamb%20shank%20in%20traditional%20kashmiri%20sauce%20with%20aromatic%20herbs%20and%20spices%20fall-off-the-bone%20texture%20garnished%20with%20saffron%20and%20almonds%2C%20rich%20reddish%20curry&width=400&height=300&seq=main9&orientation=landscape'
    },
    {
      id: 'grilled-sea-bream',
      name: 'Grilled Sea Bream Filets',
      price: 45.00,
      description: 'Garnished with coconut sauce',
      frenchDescription: 'Filet de Dorade Grillés; Sauce à la Noix de Coco',
      image: 'https://readdy.ai/api/search-image?query=grilled%20sea%20bream%20fillets%20perfectly%20cooked%20fish%20with%20light%20char%20marks%20served%20with%20creamy%20coconut%20curry%20sauce%20garnished%20with%20curry%20leaves%20and%20lime%20wedges%2C%20white%20fish%20with%20coconut%20cream&width=400&height=300&seq=main10&orientation=landscape'
    },
    {
      id: 'omble-chevalier',
      name: 'Omble Chevalier',
      price: 49.00,
      description: 'Grilled Omble Chevalier filets with curry sauce',
      frenchDescription: 'Filet d\'Omble Chevalier Grillés à l\'uni latéral, sauce au curry - selon arrivage de la Pêche',
      image: 'https://readdy.ai/api/search-image?query=grilled%20omble%20chevalier%20arctic%20char%20fillets%20with%20golden%20crust%20served%20with%20aromatic%20curry%20sauce%20and%20seasonal%20vegetables%20garnished%20with%20microgreens%20and%20lemon%2C%20premium%20fish%20presentation&width=400&height=300&seq=main11&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-primary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
                Main Courses
              </h1>
              {/* <div className="text-2xl mb-8 text-secondary">Main Courses</div> */}
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
            </div>

            {/* Classic Dishes */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Classic Dishes</h2>
                {/* <div className="text-lg text-primary">Classic Dishes</div> */}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {classicDishes.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-primary">
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {/* <div className="absolute top-4 right-4">
                        <span className="text-white px-4 py-2 rounded-full font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {item.price.toFixed(2)}
                        </span>
                      </div> */}
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                          {item.name}
                        </h3>
                        <span className="text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {item.price.toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600">{item.description}</p>
                        {/* <p className="text-sm italic text-secondary">{item.frenchDescription}</p> */}
                      </div>

                      <button
                        onClick={() => handleAddToCart(item)}
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

            {/* Traditional Dishes */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Traditional Dishes</h2>
                <p className="text-gray-700 mb-2">Choose your main dish with one of the following sauces:</p>
                <div className="max-w-3xl mx-auto text-left text-gray-600">
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="font-medium text-gray-700">Korma</span> – Creamy sauce of almonds and cashew nuts</li>
                    <li><span className="font-medium text-gray-700">Karahi</span> – Coriander, ginger, green chilli, onion sauce</li>
                    <li><span className="font-medium text-gray-700">Madras</span> – Madras curry sauce, coriander</li>
                    <li><span className="font-medium text-gray-700">Vindaloo</span> – Goan vindaloo curry, coriander</li>
                    <li><span className="font-medium text-gray-700">Jalfrezi</span> – Coriander, ginger, green chillies, hot spices Jalfrezi sauce</li>
                    <li><span className="font-medium text-gray-700">Sagwala</span> – Spinach stir-fry, fenugreek sauce with spicy flavours</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {traditionalDishes.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-secondary">
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {/* <div className="absolute top-4 right-4">
                        <span className="text-white px-4 py-2 rounded-full font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {item.price.toFixed(2)}
                        </span>
                      </div> */}
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                          {item.name}
                        </h3>
                        <span className="text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {item.price.toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600">{item.description}</p>
                        {/* <p className="text-sm italic text-secondary">{item.frenchDescription}</p> */}
                      </div>

                      <button
                        onClick={() => handleAddToCart(item)}
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

            {/* Chef's Specials */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Chef's Specials</h2>
                {/* <div className="text-lg text-primary">Chef's Specials</div> */}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {chefSpecials.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-primary">
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {/* <div className="absolute top-4 right-4">
                        <span className="text-white px-4 py-2 rounded-full font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {item.price.toFixed(2)}
                        </span>
                      </div> */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                          <i className="ri-star-fill"></i>
                          <span>Chef's Special</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                          {item.name}
                        </h3>
                        <span className="text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {item.price.toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600">{item.description}</p>
                        {/* <p className="text-sm italic text-secondary">{item.frenchDescription}</p> */}
                      </div>

                      <button
                        onClick={() => handleAddToCart(item)}
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

      {showSauceSelectionModal && selectedDishForSauce && (
        <SauceSelectionModal
          dish={selectedDishForSauce}
          onClose={() => setShowSauceSelectionModal(false)}
          onSelectSauce={(sauce) => {
            handleAddToCart(selectedDishForSauce, sauce);
            setShowSauceSelectionModal(false);
            setSelectedDishForSauce(null);
          }}
          sauces={selectedDishForSauce.sauces || []}
        />
      )}

      {showMixOptionSelectionModal && selectedDishForMixOption && (
        <MixOptionSelectionModal
          dish={selectedDishForMixOption}
          onClose={() => setShowMixOptionSelectionModal(false)}
          onSelectMixOption={(mixOption) => {
            handleAddToCart(selectedDishForMixOption, null, null, mixOption);
            setShowMixOptionSelectionModal(false);
            setSelectedDishForMixOption(null);
          }}
          mixOptions={selectedDishForMixOption.mixOptions || []}
        />
      )}
    </div>
  );
}
