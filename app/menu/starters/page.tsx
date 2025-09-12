
'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';

export default function StartersPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const vegetarianStarters = [
    {
      id: 'onions-bhaji',
      name: 'Onions Bhaji',
      price: 15.00,
      description: 'Fried Onions',
      frenchDescription: 'Oignons frits',
      image: 'https://readdy.ai/api/search-image?query=crispy%20onion%20bhaji%20golden%20fried%20onion%20fritters%20with%20chickpea%20batter%20and%20aromatic%20spices%20served%20hot%20with%20mint%20chutney%20garnished%20with%20fresh%20coriander%20leaves%2C%20appetizing%20golden%20brown%20color&width=400&height=300&seq=start1&orientation=landscape'
    },
    {
      id: 'matar-tiki',
      name: 'Matar Tiki',
      price: 15.00,
      description: 'Fried Green Peas; Potatoes; Bread crumbs',
      frenchDescription: 'Croustillant aux Petits Pois; Pommes de Terre; Crumble',
      image: 'https://readdy.ai/api/search-image?query=crispy%20matar%20tiki%20green%20pea%20and%20potato%20cutlets%20coated%20with%20golden%20breadcrumbs%20served%20with%20tamarind%20chutney%20and%20mint%20sauce%20garnished%20with%20chopped%20onions%20and%20coriander%2C%20appetizing%20golden%20exterior&width=400&height=300&seq=start2&orientation=landscape'
    },
    {
      id: 'samosa-traditionnels',
      name: 'Samosa Traditionnels',
      price: 15.00,
      description: 'Stuffed with potatoes; curry leaves; Herbs',
      frenchDescription: 'Farcies de Pommes de Terre, Feuilles de Curry',
      image: 'https://readdy.ai/api/search-image?query=traditional%20samosas%20golden%20triangular%20pastries%20stuffed%20with%20spiced%20potatoes%20curry%20leaves%20and%20fresh%20herbs%20served%20with%20tangy%20tamarind%20chutney%20and%20mint%20sauce%2C%20crispy%20golden%20brown%20exterior&width=400&height=300&seq=start3&orientation=landscape'
    },
    {
      id: 'raita',
      name: 'Raïta',
      price: 15.00,
      description: 'Yoghurt; cucumbers; Fresh coriander; Spices',
      frenchDescription: 'Yaourt; Concombres; Pincée d\'épices; Coriandre Fraîche',
      image: 'https://readdy.ai/api/search-image?query=fresh%20raita%20yogurt%20cucumber%20salad%20with%20diced%20cucumbers%20fresh%20coriander%20leaves%20and%20aromatic%20spices%20in%20white%20bowl%20garnished%20with%20mint%20leaves%20and%20black%20mustard%20seeds%2C%20cooling%20white%20and%20green%20colors&width=400&height=300&seq=start4&orientation=landscape'
    },
    {
      id: 'raita-aubergines',
      name: 'Raïta Aubergines',
      price: 17.00,
      description: 'Tandoori Smoked Brenjals; yoghurt; Herbs; Spices',
      frenchDescription: 'Aubergines fumées au Four; Pincée d\'épices; Yaourt',
      image: 'https://readdy.ai/api/search-image?query=smoky%20baingan%20raita%20with%20tandoori%20roasted%20eggplant%20mixed%20with%20creamy%20yogurt%20fresh%20herbs%20and%20aromatic%20spices%20garnished%20with%20pomegranate%20seeds%20and%20mint%20leaves%2C%20creamy%20texture%20with%20charred%20eggplant%20pieces&width=400&height=300&seq=start5&orientation=landscape'
    },
    {
      id: 'paneer-tikka',
      name: 'Paneer Tikka',
      price: 19.00,
      description: 'Indian cheese marinated; grilled in tandoor',
      frenchDescription: 'Fromage Indien Mariné; Grillé au Four',
      image: 'https://readdy.ai/api/search-image?query=grilled%20paneer%20tikka%20marinated%20cottage%20cheese%20cubes%20with%20bell%20peppers%20and%20onions%20cooked%20in%20tandoor%20oven%20with%20char%20marks%20served%20on%20skewers%20garnished%20with%20lemon%20wedges%20and%20mint%20chutney&width=400&height=300&seq=start6&orientation=landscape'
    }
  ];

  const tandooriGrills = [
    {
      id: 'chicken-tandoori-starter',
      name: 'Chicken Tandoori',
      price: 15.00,
      description: 'Marinated chicken Grilled in Tandoor',
      frenchDescription: 'Cuisse(s) de Poulet Marinée(s) puis Grillée(s) au four',
      image: 'https://readdy.ai/api/search-image?query=tandoori%20chicken%20leg%20pieces%20marinated%20in%20yogurt%20and%20spices%20with%20vibrant%20red%20color%20from%20tandoori%20masala%20grilled%20in%20clay%20oven%20with%20char%20marks%20served%20with%20sliced%20onions%20and%20lemon%20wedges&width=400&height=300&seq=start7&orientation=landscape'
    },
    {
      id: 'black-pepper-chicken-tikka',
      name: 'Black Pepper Chicken Tikka',
      price: 25.00,
      description: 'Black Pepper Marinated; Grilled chicken breast',
      frenchDescription: 'Blanc de Poulet Marinés au Poivre Noir',
      image: 'https://readdy.ai/api/search-image?query=black%20pepper%20chicken%20tikka%20grilled%20chicken%20breast%20pieces%20marinated%20with%20crushed%20black%20pepper%20and%20aromatic%20spices%20cooked%20in%20tandoor%20with%20char%20marks%20served%20on%20sizzling%20platter%20with%20bell%20peppers&width=400&height=300&seq=start8&orientation=landscape'
    },
    {
      id: 'gilafi-seekh-kebab',
      name: 'Gilafi Seekh Kebab',
      price: 25.00,
      description: 'Minced lamb kebab',
      frenchDescription: 'Gigot d\'Agneau Haché; Mariné; Grillé; Servi en Brochettes',
      image: 'https://readdy.ai/api/search-image?query=gilafi%20seekh%20kebab%20minced%20lamb%20skewers%20wrapped%20with%20colorful%20bell%20pepper%20strips%20grilled%20in%20tandoor%20oven%20served%20on%20metal%20skewers%20with%20sliced%20red%20onions%20and%20mint%20chutney%2C%20appetizing%20presentation&width=400&height=300&seq=start9&orientation=landscape'
    },
    {
      id: 'salmon-tikka',
      name: 'Salmon Tikka',
      price: 25.00,
      description: 'Marinated norwegian salmon filets in seasonal herbs; spicy flavours',
      frenchDescription: 'Filets de Saumon Norvégien Marinés aux Herbes de Saison; Pincé d\'épices',
      image: 'https://readdy.ai/api/search-image?query=salmon%20tikka%20marinated%20norwegian%20salmon%20fillets%20with%20fresh%20herbs%20and%20spices%20grilled%20in%20tandooor%20with%20light%20char%20marks%20served%20with%20cucumber%20ribbons%20and%20herb%20garnish%2C%20orange-pink%20salmon%20color&width=400&height=300&seq=start10&orientation=landscape'
    },
    {
      id: 'prawns-tandoori',
      name: 'Prawns Tandoori',
      price: 29.00,
      description: 'Grilled king prawns marinated; spicy flavours (shelled pieces)',
      frenchDescription: 'Gambas Marinées aux épices (pièces décortiquées)',
      image: 'https://readdy.ai/api/search-image?query=tandoori%20prawns%20large%20king%20prawns%20marinated%20in%20spicy%20yogurt%20marinade%20grilled%20in%20tandoor%20with%20char%20marks%20served%20on%20banana%20leaf%20with%20lemon%20wedges%20and%20green%20chutney%2C%20vibrant%20orange-red%20color&width=400&height=300&seq=start11&orientation=landscape'
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
                Starters
              </h1>
              {/* <div className="text-2xl mb-8 text-secondary">Our Starters</div> */}
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
            </div>

            {/* Vegetarian Starters */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Vegetarian Starters</h2>
                {/* <div className="text-lg text-primary">Vegetarian Starters</div> */}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vegetarianStarters.map((item) => (
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
                        <h3 className="text-xl font-semibold text-gray-800 transition-colors text-primary">
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

            {/* Tandoori Grills */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Tandoori Grills</h2>
                {/* <div className="text-lg text-primary">Tandoori Grills</div> */}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tandooriGrills.map((item) => (
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
                        <h3 className="text-xl font-semibold text-gray-800 transition-colors text-primary">
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
    </div>
  );
}
