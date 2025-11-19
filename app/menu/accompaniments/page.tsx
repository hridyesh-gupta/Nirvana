
'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';
import { useLanguage } from '../../LanguageProvider';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function AccompanimentsPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { language } = useLanguage();

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
      descriptionFr: 'Riz au safran avec fruits secs et noix',
      price: 7.00,
      image: 'https://readdy.ai/api/search-image?query=aromatic%20kashmiri%20rice%20with%20golden%20saffron%20threads%20mixed%20with%20colorful%20dry%20fruits%20almonds%20raisins%20and%20cashews%20garnished%20with%20pistachios%20served%20in%20elegant%20bowl%2C%20rich%20golden%20yellow%20color%2C%20luxury%20presentation&width=400&height=300&seq=rice1&orientation=landscape'
    },
    {
      id: 'saffron-rice',
      name: 'Saffron Rice',
      description: 'Fragrant basmati rice infused with premium saffron',
      descriptionFr: 'Riz basmati parfumé infusé au safran de première qualité',
      price: 7.00,
      image: 'https://readdy.ai/api/search-image?query=premium%20saffron%20rice%20with%20golden%20basmati%20rice%20grains%20infused%20with%20saffron%20threads%20garnished%20with%20few%20saffron%20strands%20on%20top%2C%20beautiful%20golden%20yellow%20color%2C%20elegant%20indian%20restaurant%20presentation&width=400&height=300&seq=rice2&orientation=landscape'
    },
    {
      id: 'pullao-rice',
      name: 'Pulao',
      description: 'Aromatic rice with green peas, herbs, and spices',
      descriptionFr: 'Riz aromatique aux petits pois, aux herbes et aux épices',
      price: 5.00,
      image: '/images/Matar-Pulao.jpg'
    },
    {
      id: 'plain-rice',
      name: 'Plain Rice',
      description: 'Steamed basmati rice, perfectly cooked and fluffy',
      descriptionFr: 'Riz basmati cuit à la vapeur, parfaitement cuit et moelleux',
      price: 4.00,
      image: '/images/Plain-Rice.jpg'
    }
  ];

  const breadOptions = [
    {
      id: 'plain-naan',
      name: 'Plain Naan',
      description: 'Traditional Indian bread baked in tandoor',
      descriptionFr: 'Pain indien traditionnel cuit au tandoor',
      price: 4.00,
      image: 'https://readdy.ai/api/search-image?query=fresh%20plain%20naan%20bread%20with%20golden%20brown%20spots%20from%20tandoor%20oven%20soft%20and%20fluffy%20texture%20with%20characteristic%20bubbled%20surface%20served%20on%20wooden%20board%2C%20warm%20bread%20with%20steam%2C%20authentic%20indian%20bakery%20style&width=400&height=300&seq=bread1&orientation=landscape'
    },
    {
      id: 'chilli-naan',
      name: 'Chilli Naan',
      description: 'Spicy naan bread with green chilli and herbs',
      descriptionFr: 'Pain naan épicé au piment vert et aux herbes',
      price: 5.00,
      image: '/images/Chilli-Naan.jpg'
    },
    {
      id: 'garlic-naan',
      name: 'Garlic Naan',
      description: 'Aromatic naan topped with fresh garlic and herbs',
      descriptionFr: 'Naan aromatique garni d\'ail frais et d\'herbes aromatiques',
      price: 5.00,
      image: '/images/Garlic-Naan.jpg'
    },
    {
      id: 'vegetarian-naan',
      name: 'Vegetarian',
      description: 'Contains Potatoes, Herbs, and Spices',
      descriptionFr: 'Contient des pommes de terre, des herbes et des épices.',
      price: 7.00,
      image: ''
    },
    { 
      id: 'veggie-naan', 
      name: 'Veggie Naan', 
      description:'Vegetable Stuffed naan',
      descriptionFr:'Naan farci aux légumes',
      price: 8.00, 
      image:'' 
    },
    { 
      id: 'butter-naan', 
      name: 'Butter Naan',
      description:'Freshly baked light buttered naan',
      descriptionFr: 'Naan léger au beurre fraîchement cuit',
      price: 6.00, 
      image: '' 
    },
    {
      id: 'cheese-naan',
      name: 'Cheese Naan',
      description: 'Stuffed naan with melted cheese filling',
      descriptionFr: 'Naan farci au fromage fondu',
      price: 6.00,
      image: 'https://readdy.ai/api/search-image?query=delicious%20cheese%20naan%20bread%20with%20melted%20cheese%20slightly%20oozing%20from%20sides%20golden%20brown%20tandoor%20marks%20brushed%20with%20butter%20and%20garnished%20with%20cilantro%2C%20indulgent%20and%20appetizing%20presentation&width=400&height=300&seq=bread4&orientation=landscape'
    },
    {
      id: 'cheese-chilli-naan',
      name: 'Cheese, Chilli Naan',
      description: 'Spicy cheese-stuffed naan with chilli',
      descriptionFr: 'Naan farci au fromage épicé et au piment',
      price: 7.00,
      image: 'https://readdy.ai/api/search-image?query=spicy%20cheese%20and%20chilli%20naan%20with%20melted%20cheese%20filling%20and%20green%20chili%20pieces%20golden%20tandoor%20surface%20brushed%20with%20herb%20butter%2C%20fusion%20of%20cheese%20and%20spice%2C%20appetizing%20restaurant%20style&width=400&height=300&seq=bread5&orientation=landscape'
    },
    {
      id: 'cheese-garlic-naan',
      name: 'Cheese, Garlic Naan',
      description: 'Rich naan stuffed with cheese and topped with garlic',
      descriptionFr: 'Naan riche fourré au fromage et garni d\'ail',
      price: 7.00,
      image: 'https://readdy.ai/api/search-image?query=rich%20cheese%20and%20garlic%20naan%20with%20melted%20cheese%20filling%20topped%20with%20minced%20garlic%20and%20cilantro%20golden%20brown%20tandoor%20marks%20butter%20brushed%20surface%2C%20gourmet%20indian%20bread%20presentation&width=400&height=300&seq=bread6&orientation=landscape'
    },
    {
      id: 'roti-paratha',
      name: 'Roti Paratha',
      description: 'Whole wheat grain butter bread, layered and flaky',
      descriptionFr: 'Pain au beurre de blé entier, feuilleté et à plusieurs couches',
      price: 4.00,
      image: '/images/Chapati.jpg'
    },
    { 
      id: 'keema-naan', 
      name: 'Keema Naan', 
      description: 'Fluffy naan filled with flavorful keema',
      descriptionFr: 'Naan moelleux fourré de keema savoureux',
      price: 10.00, 
      image: '' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
                {language === 'fr' ? 'Accompagnements' : 'Accompaniments'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">                
                {language === 'fr'
                  ? "Parfaites votre expérience indienne avec notre sélection de plats de riz traditionnels et de pains fraîchement cuits au four, chacun préparé pour accompagner à merveille nos plats principaux."
                  : "Perfect your Indian dining experience with our selection of traditional rice dishes and freshly baked breads, each prepared to complement our main courses perfectly."}
              </p>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
            </div>

            {/* Rice Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">
                  {language === 'fr' ? 'Riz' : 'Rice'}
                </h2>
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
                      {/* <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-bold shadow-lg">
                          CHF {rice.price.toFixed(2)}
                        </span>
                      </div> */}
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                          {rice.name}
                        </h3>
                        <span className="text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {rice.price.toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {language === 'fr' && (rice as any).descriptionFr
                            ? (rice as any).descriptionFr
                            : rice.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">

                        <button
                          onClick={() => handleAddToCart(rice)}
                          className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                        >
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-add-line"></i>
                          </div>
                          <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
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
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">
                  {language === 'fr' ? 'Pains naan tandoori' : 'Naan Tandoori Breads'}
                </h2>
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
                      {/* <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-bold shadow-lg">
                          CHF {bread.price.toFixed(2)}
                        </span>
                      </div> */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                          <i className="ri-fire-line"></i>
                          <span>{language === 'fr' ? 'Fraîchement cuit' : 'Fresh'}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                          {bread.name}
                        </h3>
                        <span className="text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {bread.price.toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {language === 'fr' && (bread as any).descriptionFr
                            ? (bread as any).descriptionFr
                            : bread.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => handleAddToCart(bread)}
                          className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-add-line"></i>
                          </div>
                          <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
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
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                {language === 'fr' ? 'Accord parfait' : 'Perfect Pairing'}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {language === 'fr'
                  ? "Nos accompagnements de riz et de pains sont soigneusement préparés pour compléter vos plats principaux. Du riz au safran aromatique au naan fraîchement cuit, chaque élément enrichit votre expérience culinaire avec des saveurs et textures indiennes authentiques."
                  : "Our rice and bread accompaniments are carefully prepared to complement your main dishes. From aromatic saffron rice to freshly baked naan, each item enhances your dining experience with authentic Indian flavors and textures."}
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
        onClearCart={clearCart}
      />
    </div>
  );
}
