
'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function MainCoursesPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const classicDishes = [
    {
      id: 'king-prawns-balti',
      name: 'King Prawns Balti',
      price: 39.00,
      description: 'Tomato sauce; fresh herbs with spicy flavours',
      frenchDescription: 'Gambas sautées à l\'Ail; Sauce Tomate épicée; Herbes Fraîches',
      image: 'https://readdy.ai/api/search-image?query=king%20prawns%20balti%20large%20succulent%20prawns%20cooked%20in%20rich%20tomato%20sauce%20with%20fresh%20herbs%20and%20aromatic%20spices%20served%20in%20traditional%20balti%20dish%20garnished%20with%20coriander%20and%20green%20chilies%2C%20vibrant%20red%20sauce&width=400&height=300&seq=main1&orientation=landscape'
    },
    {
      id: 'kerala-prawns-masala',
      name: 'Kerala Prawns Masala',
      price: 39.00,
      description: 'Prawns (shelled); fine Masala curry with coconut flavours',
      frenchDescription: 'Gambas (décortiquées) aux épices; Feuilles de Curry; Lait de Coco',
      image: 'https://readdy.ai/api/search-image?query=kerala%20prawns%20masala%20shelled%20prawns%20in%20coconut%20curry%20with%20curry%20leaves%20mustard%20seeds%20and%20south%20indian%20spices%20creamy%20white%20coconut%20gravy%20garnished%20with%20fresh%20curry%20leaves%20and%20red%20chilies&width=400&height=300&seq=main2&orientation=landscape'
    },
    {
      id: 'butter-chicken',
      name: 'Butter Chicken',
      price: 33.00,
      description: 'Grilled Chicken; cinnamon creamy almonds sauce',
      frenchDescription: 'Suprême Grillé; Sauce à la crème d\'Amandes; Cannelles aux épices',
      image: 'https://readdy.ai/api/search-image?query=butter%20chicken%20tender%20grilled%20chicken%20pieces%20in%20rich%20creamy%20orange%20tomato%20sauce%20with%20almonds%20and%20cinnamon%20garnished%20with%20fresh%20cream%20swirl%20and%20coriander%20leaves%2C%20luxurious%20orange%20color&width=400&height=300&seq=main3&orientation=landscape'
    },
    {
      id: 'chicken-tikka-masala',
      name: 'Chicken Tikka Masala',
      price: 33.00,
      description: 'Grilled Chicken; Tikka Masala sauce; ginger; green chilies; coriander',
      frenchDescription: 'Parts de Suprêmes Grillés; Sauce Tikka Masala; Saveur épicées',
      image: 'https://readdy.ai/api/search-image?query=chicken%20tikka%20masala%20grilled%20chicken%20pieces%20in%20vibrant%20orange%20tikka%20masala%20sauce%20with%20ginger%20green%20chilies%20and%20fresh%20coriander%20served%20in%20traditional%20copper%20bowl%2C%20rich%20orange-red%20color&width=400&height=300&seq=main4&orientation=landscape'
    }
  ];

  const traditionalDishes = [
    {
      id: 'chicken-traditional',
      name: 'Chicken',
      price: 32.00,
      description: 'Traditional chicken curry',
      frenchDescription: 'Poulet traditionnel',
      image: 'https://readdy.ai/api/search-image?query=traditional%20chicken%20curry%20tender%20chicken%20pieces%20in%20authentic%20indian%20spice%20gravy%20with%20onions%20tomatoes%20and%20aromatic%20herbs%20garnished%20with%20fresh%20coriander%2C%20rich%20brown%20curry%20sauce&width=400&height=300&seq=main5&orientation=landscape'
    },
    {
      id: 'beef-traditional',
      name: 'Beef',
      price: 35.00,
      description: 'Traditional beef curry',
      frenchDescription: 'Bœuf traditionnel',
      image: 'https://readdy.ai/api/search-image?query=traditional%20beef%20curry%20tender%20beef%20chunks%20in%20rich%20spiced%20gravy%20with%20onions%20ginger%20garlic%20and%20indian%20spices%20slow%20cooked%20to%20perfection%20garnished%20with%20fresh%20herbs%2C%20dark%20rich%20curry%20sauce&width=400&height=300&seq=main6&orientation=landscape'
    },
    {
      id: 'lamb-traditional',
      name: 'Lamb',
      price: 37.00,
      description: 'Traditional lamb curry',
      frenchDescription: 'Agneau traditionnel',
      image: 'https://readdy.ai/api/search-image?query=traditional%20lamb%20curry%20succulent%20lamb%20pieces%20in%20aromatic%20indian%20curry%20sauce%20with%20whole%20spices%20bay%20leaves%20and%20fresh%20herbs%20slow%20cooked%20for%20tender%20texture%2C%20rich%20brown%20gravy&width=400&height=300&seq=main7&orientation=landscape'
    }
  ];

  const chefSpecials = [
    {
      id: 'lamb-chops',
      name: 'Lamb Chops',
      price: 48.00,
      description: 'Marinated Lamb chops grilled (~300g) - Sauce on your Choice: Rogan; Vindaloo; Korma; Jalfrezi; Madras',
      frenchDescription: 'En Marinade Grillées (~300g) - Sauce au Choix : Rogan; Vindaloo; Korma; Jalfrezi; Madras',
      image: 'https://readdy.ai/api/search-image?query=grilled%20lamb%20chops%20marinated%20lamb%20chops%20with%20perfect%20char%20marks%20served%20on%20sizzling%20platter%20with%20choice%20of%20curry%20sauce%20and%20grilled%20vegetables%20garnished%20with%20rosemary%20and%20lemon%20wedges&width=400&height=300&seq=main8&orientation=landscape'
    },
    {
      id: 'lamb-shank',
      name: 'Lamb Shank',
      price: 48.00,
      description: 'Slow cooked lamb Shank; Traditional Kashmiri sauce flavours herbs',
      frenchDescription: 'Souris d\'Agneau cuite à basse température; curry traditionnel du Cachemire',
      image: 'https://readdy.ai/api/search-image?query=slow%20cooked%20lamb%20shank%20tender%20lamb%20shank%20in%20traditional%20kashmiri%20sauce%20with%20aromatic%20herbs%20and%20spices%20fall-off-the-bone%20texture%20garnished%20with%20saffron%20and%20almonds%2C%20rich%20reddish%20curry&width=400&height=300&seq=main9&orientation=landscape'
    },
    {
      id: 'grilled-sea-bream',
      name: 'Grilled Sea Bream Filets',
      price: 45.00,
      description: 'Grilled Sea Bream Filets garnished with coconut sauce',
      frenchDescription: 'Filet de Dorade Grillés; Sauce à la Noix de Coco',
      image: 'https://readdy.ai/api/search-image?query=grilled%20sea%20bream%20fillets%20perfectly%20cooked%20fish%20with%20light%20char%20marks%20served%20with%20creamy%20coconut%20curry%20sauce%20garnished%20with%20curry%20leaves%20and%20lime%20wedges%2C%20white%20fish%20with%20coconut%20cream&width=400&height=300&seq=main10&orientation=landscape'
    },
    {
      id: 'omble-chevalier',
      name: 'Omble Chevalier',
      price: 49.00,
      description: 'Grilled Omble Chevalier filets; curry sauce',
      frenchDescription: 'Filet d\'Omble Chevalier Grillés à l\'uni latéral, sauce au curry - selon arrivage de la Pêche',
      image: 'https://readdy.ai/api/search-image?query=grilled%20omble%20chevalier%20arctic%20char%20fillets%20with%20golden%20crust%20served%20with%20aromatic%20curry%20sauce%20and%20seasonal%20vegetables%20garnished%20with%20microgreens%20and%20lemon%2C%20premium%20fish%20presentation&width=400&height=300&seq=main11&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation cartItemsCount={itemCount} onCartClick={() => setIsCartOpen(true)} />

      <main className="pt-20">
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ color: '#751140' }}>
                Main Courses
              </h1>
              <div className="text-2xl mb-8" style={{ color: '#BD8E21' }}>Plats Principaux</div>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }} />
            </div>

            {/* Classic Dishes */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Classic Dishes</h2>
                <div className="text-lg text-purple-600">Grands Classiques</div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {classicDishes.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2" style={{ borderColor: '#751140' }}>
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="text-white px-4 py-2 rounded-full font-bold shadow-lg" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                          CHF {item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 transition-colors" style={{ color: '#751140' }}>
                        {item.name}
                      </h3>

                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-sm italic" style={{ color: '#BD8E21' }}>{item.frenchDescription}</p>
                      </div>

                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
                        style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}
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
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Traditional Dishes</h2>
                <div className="text-lg text-purple-600 mb-4">Plats Traditionnels</div>
                <p className="text-gray-600 mb-8">Choose your main dishes with your favorite sauce... Enjoy!</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {traditionalDishes.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2" style={{ borderColor: '#BD8E21' }}>
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="text-white px-4 py-2 rounded-full font-bold shadow-lg" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                          CHF {item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 transition-colors" style={{ color: '#751140' }}>
                        {item.name}
                      </h3>

                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-sm italic" style={{ color: '#BD8E21' }}>{item.frenchDescription}</p>
                      </div>

                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
                        style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}
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
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Chef's Specials</h2>
                <div className="text-lg text-purple-600">Les Incontournables</div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {chefSpecials.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2" style={{ borderColor: '#751140' }}>
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="text-white px-4 py-2 rounded-full font-bold shadow-lg" style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}>
                          CHF {item.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                          <i className="ri-star-fill"></i>
                          <span>Chef's Special</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 transition-colors" style={{ color: '#751140' }}>
                        {item.name}
                      </h3>

                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-sm italic" style={{ color: '#BD8E21' }}>{item.frenchDescription}</p>
                      </div>

                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
                        style={{ background: `linear-gradient(to right, #751140, #BD8E21)` }}
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
      />
    </div>
  );
}
