
'use client';

import { useState } from 'react';
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

export default function AccompanimentsPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const riceOptions = [
    {
      id: 'kashmiri-rice',
      name: 'Kashmiri Rice',
      description: 'Saffron rice with dry fruits and nuts',
      descriptionFr: 'Safran, fruits secs',
      price: 10.00,
      image: 'https://readdy.ai/api/search-image?query=aromatic%20kashmiri%20rice%20with%20golden%20saffron%20threads%20mixed%20with%20colorful%20dry%20fruits%20almonds%20raisins%20and%20cashews%20garnished%20with%20pistachios%20served%20in%20elegant%20bowl%2C%20rich%20golden%20yellow%20color%2C%20luxury%20presentation&width=400&height=300&seq=rice1&orientation=landscape'
    },
    {
      id: 'saffron-rice',
      name: 'Saffron Rice',
      description: 'Fragrant basmati rice infused with premium saffron',
      descriptionFr: 'Safran',
      price: 8.00,
      image: 'https://readdy.ai/api/search-image?query=premium%20saffron%20rice%20with%20golden%20basmati%20rice%20grains%20infused%20with%20saffron%20threads%20garnished%20with%20few%20saffron%20strands%20on%20top%2C%20beautiful%20golden%20yellow%20color%2C%20elegant%20indian%20restaurant%20presentation&width=400&height=300&seq=rice2&orientation=landscape'
    },
    {
      id: 'pullao-rice',
      name: 'Pullao Rice',
      description: 'Aromatic rice with green peas, herbs, and spices',
      descriptionFr: 'Petits pois, herbes, épices',
      price: 6.00,
      image: 'https://readdy.ai/api/search-image?query=delicious%20pullao%20rice%20with%20basmati%20rice%20green%20peas%20whole%20spices%20like%20cardamom%20cinnamon%20bay%20leaves%20garnished%20with%20fried%20onions%20and%20fresh%20herbs%2C%20colorful%20and%20aromatic%2C%20traditional%20indian%20style&width=400&height=300&seq=rice3&orientation=landscape'
    },
    {
      id: 'plain-rice',
      name: 'Plain Rice',
      description: 'Steamed basmati rice, perfectly cooked and fluffy',
      descriptionFr: 'Nature',
      price: 4.00,
      image: 'https://readdy.ai/api/search-image?query=perfectly%20steamed%20plain%20basmati%20rice%20with%20fluffy%20white%20long%20grain%20rice%20in%20simple%20elegant%20bowl%20garnished%20with%20single%20cilantro%20leaf%2C%20clean%20white%20appearance%2C%20restaurant%20quality%20presentation&width=400&height=300&seq=rice4&orientation=landscape'
    }
  ];

  const breadOptions = [
    {
      id: 'plain-naan',
      name: 'Plain Naan',
      description: 'Traditional Indian bread baked in tandoor',
      descriptionFr: 'Nature',
      price: 4.00,
      image: 'https://readdy.ai/api/search-image?query=fresh%20plain%20naan%20bread%20with%20golden%20brown%20spots%20from%20tandoor%20oven%20soft%20and%20fluffy%20texture%20with%20characteristic%20bubbled%20surface%20served%20on%20wooden%20board%2C%20warm%20bread%20with%20steam%2C%20authentic%20indian%20bakery%20style&width=400&height=300&seq=bread1&orientation=landscape'
    },
    {
      id: 'chilli-naan',
      name: 'Chilli Naan',
      description: 'Spicy naan bread with green chilies and herbs',
      descriptionFr: 'Naan au piment',
      price: 6.00,
      image: 'https://readdy.ai/api/search-image?query=spicy%20chilli%20naan%20bread%20with%20visible%20green%20chili%20pieces%20and%20herbs%20baked%20in%20tandoor%20with%20golden%20brown%20spots%20garnished%20with%20fresh%20cilantro%2C%20appetizing%20texture%20with%20slight%20char%20marks&width=400&height=300&seq=bread2&orientation=landscape'
    },
    {
      id: 'garlic-naan',
      name: 'Garlic Naan',
      description: 'Aromatic naan topped with fresh garlic and herbs',
      descriptionFr: 'Ail',
      price: 6.00,
      image: 'https://readdy.ai/api/search-image?query=aromatic%20garlic%20naan%20bread%20topped%20with%20minced%20fresh%20garlic%20cilantro%20and%20butter%20brushed%20surface%20with%20golden%20tandoor%20marks%2C%20fragrant%20and%20appetizing%2C%20traditional%20indian%20bread%20presentation&width=400&height=300&seq=bread3&orientation=landscape'
    },
    {
      id: 'cheese-naan',
      name: 'Cheese Naan',
      description: 'Stuffed naan with melted cheese filling',
      descriptionFr: 'Naan au fromage',
      price: 8.00,
      image: 'https://readdy.ai/api/search-image?query=delicious%20cheese%20naan%20bread%20with%20melted%20cheese%20slightly%20oozing%20from%20sides%20golden%20brown%20tandoor%20marks%20brushed%20with%20butter%20and%20garnished%20with%20cilantro%2C%20indulgent%20and%20appetizing%20presentation&width=400&height=300&seq=bread4&orientation=landscape'
    },
    {
      id: 'cheese-chilli-naan',
      name: 'Cheese and Chilli Naan',
      description: 'Spicy cheese-stuffed naan with chilies',
      descriptionFr: 'Naan au fromage et au piment',
      price: 9.00,
      image: 'https://readdy.ai/api/search-image?query=spicy%20cheese%20and%20chilli%20naan%20with%20melted%20cheese%20filling%20and%20green%20chili%20pieces%20golden%20tandoor%20surface%20brushed%20with%20herb%20butter%2C%20fusion%20of%20cheese%20and%20spice%2C%20appetizing%20restaurant%20style&width=400&height=300&seq=bread5&orientation=landscape'
    },
    {
      id: 'cheese-garlic-naan',
      name: 'Cheese and Garlic Naan',
      description: 'Rich naan stuffed with cheese and topped with garlic',
      descriptionFr: 'Naan au fromage et à l\'ail',
      price: 9.00,
      image: 'https://readdy.ai/api/search-image?query=rich%20cheese%20and%20garlic%20naan%20with%20melted%20cheese%20filling%20topped%20with%20minced%20garlic%20and%20cilantro%20golden%20brown%20tandoor%20marks%20butter%20brushed%20surface%2C%20gourmet%20indian%20bread%20presentation&width=400&height=300&seq=bread6&orientation=landscape'
    },
    {
      id: 'roti-paratha',
      name: 'Roti Paratha',
      description: 'Whole wheat grain butter bread, layered and flaky',
      descriptionFr: 'Blé complet au beurre',
      price: 6.00,
      image: 'https://readdy.ai/api/search-image?query=traditional%20roti%20paratha%20whole%20wheat%20layered%20flatbread%20with%20visible%20flaky%20layers%20brushed%20with%20butter%20golden%20brown%20color%20served%20on%20rustic%20wooden%20board%2C%20authentic%20indian%20home%20style%20bread&width=400&height=300&seq=bread7&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Accompaniments
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full" />
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Perfect your Indian dining experience with our selection of traditional rice dishes and 
                freshly baked breads, each prepared to complement our main courses perfectly.
              </p>
            </div>

            {/* Rice Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Our Rice</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {riceOptions.map((rice) => (
                  <div
                    key={rice.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-primary"
                  >
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${rice.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-bold shadow-lg">
                          CHF {rice.price.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                        {rice.name}
                      </h3>

                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {rice.description}
                        </p>
                        <p className="text-gray-500 text-xs italic">
                          {rice.descriptionFr}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full" />
                          <span className="text-xs text-gray-500 font-medium">Basmati Rice</span>
                        </div>

                        <button
                          onClick={() => handleAddToCart(rice)}
                          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer text-sm"
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-add-line"></i>
                          </div>
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bread Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Our Breads</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {breadOptions.map((bread) => (
                  <div
                    key={bread.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-primary"
                  >
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${bread.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-bold shadow-lg">
                          CHF {bread.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                          <i className="ri-fire-line"></i>
                          <span>Fresh</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                        {bread.name}
                      </h3>

                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {bread.description}
                        </p>
                        <p className="text-gray-500 text-xs italic">
                          {bread.descriptionFr}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full" />
                          <span className="text-xs text-gray-500 font-medium">Tandoor Baked</span>
                        </div>

                        <button
                          onClick={() => handleAddToCart(bread)}
                          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer text-sm"
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-add-line"></i>
                          </div>
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="mt-20 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl p-8 border border-primary text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <i className="ri-bowl-line text-white text-3xl"></i>
              </div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Perfect Pairing</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our rice and bread accompaniments are carefully prepared to complement your main dishes. 
                From aromatic saffron rice to freshly baked naan, each item enhances your dining experience 
                with authentic Indian flavors and textures.
              </p>
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
