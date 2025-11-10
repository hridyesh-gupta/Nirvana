
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

  const handleAddVariant = (baseId: string, name: string, variant: string, price: number) => {
    const id = `${baseId}-${variant.toLowerCase()}`.replace(/\s+/g, '-');
    handleAddToCart({ id, name: `${name} (${variant})`, price });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const vegetarianStarters = [
    { id: 'veggie-soup', 
      name: 'Veggie Soup', 
      price: 9.00, 
      description: 'Vegetable Soup', 
      image:'' },
    {
      id: 'daal-soup',
      name: 'Daal Soup',
      price: 9.00,
      description: 'Lentil soup',
      image: ''
    },
    {
      id: 'onions-bhaji',
      name: 'Onions Bhaji',
      price: 9.00,
      description: 'Fried onions',
      image: 'https://readdy.ai/api/search-image?query=crispy%20onion%20bhaji%20golden%20fried%20onion%20fritters%20with%20chickpea%20batter%20and%20aromatic%20spices%20served%20hot%20with%20mint%20chutney%20garnished%20with%20fresh%20coriander%20leaves%2C%20appetizing%20golden%20brown%20color&width=400&height=300&seq=start1&orientation=landscape'
    },
    {
      id: 'matar-Tikki',
      name: 'Matar Tikki',
      price: 10.00,
      description: 'Fried green peas, potatoes, bread crumbs',
      image: 'https://readdy.ai/api/search-image?query=crispy%20matar%20tiki%20green%20pea%20and%20potato%20cutlets%20coated%20with%20golden%20breadcrumbs%20served%20with%20tamarind%20chutney%20and%20mint%20sauce%20garnished%20with%20chopped%20onions%20and%20coriander%2C%20appetizing%20golden%20exterior&width=400&height=300&seq=start2&orientation=landscape'
    },
    {
      id: 'traditional-samosa',
      name: 'Traditional Samosa',
      price: 10.00,
      description: 'Stuffed with potatoes, curry leaves, herbs',
      image: 'https://readdy.ai/api/search-image?query=traditional%20samosas%20golden%20triangular%20pastries%20stuffed%20with%20spiced%20potatoes%20curry%20leaves%20and%20fresh%20herbs%20served%20with%20tangy%20tamarind%20chutney%20and%20mint%20sauce%2C%20crispy%20golden%20brown%20exterior&width=400&height=300&seq=start3&orientation=landscape'
    },
    {
      id: 'raita',
      name: 'Raita',
      price: 8.00,
      description: 'Yoghurt, cucumbers, fresh coriander, spices',
      image: 'https://readdy.ai/api/search-image?query=fresh%20raita%20yogurt%20cucumber%20salad%20with%20diced%20cucumbers%20fresh%20coriander%20leaves%20and%20aromatic%20spices%20in%20white%20bowl%20garnished%20with%20mint%20leaves%20and%20black%20mustard%20seeds%2C%20cooling%20white%20and%20green%20colors&width=400&height=300&seq=start4&orientation=landscape'
    },
    {
      id: 'raita-aubergines',
      name: 'Raita Aubergines',
      price: 12.00,
      description: 'Tandoori smoked brinjals with yoghurt, herbs, spices',
      image: '/images/Raita-Eggplant.jpg'
    },
    {
      id: 'paneer-tikka',
      name: 'Paneer Tikka',
      price: 19.00,
      description: 'Indian cheese marinated, grilled in tandoor',
      image: 'https://readdy.ai/api/search-image?query=grilled%20paneer%20tikka%20marinated%20cottage%20cheese%20cubes%20with%20bell%20peppers%20and%20onions%20cooked%20in%20tandoor%20oven%20with%20char%20marks%20served%20on%20skewers%20garnished%20with%20lemon%20wedges%20and%20mint%20chutney&width=400&height=300&seq=start6&orientation=landscape'
    },
    {
      id: 'nirvana-veg-platter',
      name: 'Nirvana Vegetarian Platter',
      price: 25.00,
      description: 'Onions Bhaji, Samosa, Matar Tikki, Paneer Tikka',
      image: '',
      variants: [
        { label: 'For one guest', price: 19.00 },
        { label: 'For two guests', price: 27.00 }
      ]
    }
  ];

  const tandooriGrills = [
    {
      id: 'chicken-tandoori',
      name: 'Chicken Tandoori',
      price: 16.00,
      description: 'Marinated chicken grilled in tandoor',
      image: 'https://readdy.ai/api/search-image?query=tandoori%20chicken%20leg%20pieces%20marinated%20in%20yogurt%20and%20spices%20with%20vibrant%20red%20color%20from%20tandoori%20masala%20grilled%20in%20clay%20oven%20with%20char%20marks%20served%20with%20sliced%20onions%20and%20lemon%20wedges&width=400&height=300&seq=start7&orientation=landscape',
      // While uncommenting also include comma after image line
      // variants: [
      //   { label: 'Starter', price: 15.00 },
      //   { label: 'Main', price: 25.00 }
      // ]
    },
    {
      id: 'black-pepper-chicken-tikka',
      name: 'Black Pepper Chicken Tikka',
      price: 25.00,
      description: 'Black pepper marinated, grilled chicken breast',
      image: 'https://readdy.ai/api/search-image?query=black%20pepper%20chicken%20tikka%20grilled%20chicken%20breast%20pieces%20marinated%20with%20crushed%20black%20pepper%20and%20aromatic%20spices%20cooked%20in%20tandoor%20with%20char%20marks%20served%20on%20sizzling%20platter%20with%20bell%20peppers&width=400&height=300&seq=start8&orientation=landscape'
      // While uncommenting also include comma after image line
      // variants: [
      //   { label: 'Starter', price: 25.00 },
      //   { label: 'Main', price: 29.00 }
      // ]
    },
    {
      id: 'gilafi-seekh-kebab',
      name: 'Gilafi Seekh Kebab',
      price: 21.00,
      description: 'Minced lamb kebab',
      image: 'https://readdy.ai/api/search-image?query=gilafi%20seekh%20kebab%20minced%20lamb%20skewers%20wrapped%20with%20colorful%20bell%20pepper%20strips%20grilled%20in%20tandoor%20oven%20served%20on%20metal%20skewers%20with%20sliced%20red%20onions%20and%20mint%20chutney%2C%20appetizing%20presentation&width=400&height=300&seq=start9&orientation=landscape'
      // While uncommenting also include comma after image line
      // variants: [
      //   { label: 'Starter', price: 25.00 },
      //   { label: 'Main', price: 33.00 }
      // ]
    },
    {
      id: 'salmon-tikka',
      name: 'Fish Filet Tikka',
      description: 'Marinated dorade or bar fish filets in seasonal herbs, spicy flavours',
      image: 'https://readdy.ai/api/search-image?query=salmon%20tikka%20marinated%20norwegian%20salmon%20fillets%20with%20fresh%20herbs%20and%20spices%20grilled%20in%20tandooor%20with%20light%20char%20marks%20served%20with%20cucumber%20ribbons%20and%20herb%20garnish%2C%20orange-pink%20salmon%20color&width=400&height=300&seq=start10&orientation=landscape',
      variants: [
        { label: 'Starter', price: 25.00 },
        { label: 'Main', price: 35.00 }
      ]
    },
    {
      id: 'prawns-tandoori',
      name: 'Prawns Tandoori',
      price: 27.00,
      description: 'Grilled king prawns marinated, spicy flavours (shelled pieces)',
      image: '/images/Prawns-Tandoori.jpg'
      // While uncommenting also include comma after image line
      // variants: [
      //   { label: 'Starter', price: 29.00 },
      //   { label: 'Main', price: 39.00 }
      // ]
    },
    {
      id: 'nirvana-platter',
      name: 'Nirvana Platter',
      description: 'Includes Samosa, Matar Tikki, Seekh Kebab, Black Pepper Chicken Tikka',
      image: '/images/Nirvana-Platter-1-person.jpg',
      variants: [
        { label: 'Starter', price: 21.00 },
        { label: 'Main', price: 29.00 }
      ]
    },
    {
      id: 'tandoori-platter',
      name: 'Tandoori Platter',
      description: 'Includes Seekh Kebab, Black Pepper Chicken Tikka, Prawns Tandoori, Paneer Tikka',
      image: 'https://readdy.ai/api/search-image?query=tandoori%20prawns%20large%20king%20prawns%20marinated%20in%20spicy%20yogurt%20marinade%20grilled%20in%20tandoor%20with%20char%20marks%20served%20on%20banana%20leaf%20with%20lemon%20wedges%20and%20green%20chutney%2C%20vibrant%20orange-red%20color&width=400&height=300&seq=start11&orientation=landscape',
      variants: [
        { label: 'Starter', price: 22.00 },
        { label: 'Main', price: 29.00 }
      ]
    },
    { id: 'chicken-soup', 
      name: 'Chicken Soup', 
      price: 13.00, 
      description: 'Perfectly seasoned chicken soup', 
      image:'' },
  ];

  const saladsChoice = [
    {
      id: 'salads-prawns-tandoori',
      name: 'Prawns Tandoori (Salad)',
      description: 'Grilled gambas and prawns marinated in spices',
      image: '/images/Indian-Prawns-Salad.jpg',
      variants: [
        { label: 'Starter', price: 29.00 },
        { label: 'Main', price: 39.00 }
      ]
    },
    {
      id: 'salads-the-salmon-tikka',
      name: 'Fish Filet Tikka (Salad)',
      price: 27.00,
      description: 'Marinated grilled dorade or bar fish with fresh salad',
      image: '',
      // While uncommenting also include comma after image line
      // variants: [
      //   { label: 'Starter', price: 27.00 },
      //   { label: 'Main', price: 37.00 }
      // ]
    },
    {
      id: 'salads-chicken-tikka-black-pepper',
      name: 'Chicken Tikka Black Pepper',
      description: 'Chicken tikka grilled, marinated with cashew and black pepper',
      image: '/images/Black-Pepper-Chicken-Tikka.jpg',
      variants: [
        { label: 'Starter', price: 22.00 },
        { label: 'Main', price: 29.00 }
      ]
    },
    {
      id: 'salads-paneer-tikka',
      name: 'Paneer Tikka',
      price: 14.00,
      description: 'Grilled marinated Indian cheese',
      image: '/images/Grilled-Paneer-Tikka.jpg',
      // While uncommenting also include comma after image line
      // variants: [
      //   { label: 'Starter', price: 19.00 },
      //   { label: 'Main', price: 25.00 }
      // ]
    },
    {
      id: 'fresh-mixed-salad',
      name: 'Fresh Mixed Salad',
      description: 'Mixed salads',
      image: '',
      variants: [
        { label: 'Starter', price: 10.00 },
        { label: 'Main', price: 15.00 }
      ]
    },
    {
      id: 'indian-mixed-salad',
      name: 'Indian Mixed Salad',
      price: 9.00,
      description: 'Made with cucumber, green chilli, onions, and tomatoes',
      image: '',
      // While uncommenting also include comma after image line
      // variants: [
      //   { label: 'Starter', price: 10.00 },
      //   { label: 'Main', price: 15.00 }
      // ]
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
                        {/* {!('variants' in item) && (
                          <span className="text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                            CHF {item.price.toFixed(2)}
                          </span>
                        )} */}
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600">{item.description}</p>
                      </div>

                      {('variants' in item) ? (
                        <div className="grid grid-cols-1 gap-3">
                          {(item as any).variants.map((v: any) => (
                            <button
                              key={v.label}
                              onClick={() => handleAddVariant(item.id, item.name, v.label, v.price)}
                              className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-between space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                            >
                              <span>Add {v.label}</span>
                              <span className="font-bold">CHF {v.price.toFixed(2)}</span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddToCart({ id: item.id, name: item.name, price: item.price })}
                          className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-between space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                        >
                          <span>Add to Cart</span>
                          <span className="font-bold">CHF {item.price.toFixed(2)}</span>
                        </button>
                      )}
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
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600">{item.description}</p>
                      </div>

                      {('variants' in item && (item as any).variants) ? (
                        <div className="grid grid-cols-1 gap-3">
                          {(item as any).variants.map((v: any) => (
                            <button
                              key={v.label}
                              onClick={() => handleAddVariant(item.id, item.name, v.label, v.price)}
                              className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-between space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                            >
                              <span>Add {v.label}</span>
                              <span className="font-bold">CHF {v.price.toFixed(2)}</span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddToCart({ id: item.id, name: item.name, price: item.price || 0 })}
                          className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-between space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                        >
                          <span>Add to Cart</span>
                          <span className="font-bold">CHF {(item.price || 0).toFixed(2)}</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Salads & Grills of Choice */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Salads & Grills of Choice</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {saladsChoice.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-primary">
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-800 transition-colors text-primary">
                          {item.name}
                        </h3>
                      </div>

                      <div className="space-y-2 mb-6">
                        <p className="text-gray-600">{item.description}</p>
                      </div>

                      {('variants' in item && (item as any).variants) ? (
                        <div className="grid grid-cols-1 gap-3">
                          {(item as any).variants.map((v: any) => (
                            <button
                              key={v.label}
                              onClick={() => handleAddVariant(item.id, item.name, v.label, v.price)}
                              className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-between space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                            >
                              <span>Add {v.label}</span>
                              <span className="font-bold">CHF {v.price.toFixed(2)}</span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddToCart({ id: item.id, name: item.name, price: item.price || 0 })}
                          className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-between space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                        >
                          <span>Add to Cart</span>
                          <span className="font-bold">CHF {(item.price || 0).toFixed(2)}</span>
                        </button>
                      )}
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
