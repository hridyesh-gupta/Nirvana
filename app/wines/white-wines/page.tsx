
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

export default function WhiteWinesPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const handleAddVariant = (baseId: string, name: string, variant: string, price: number) => {
    const id = `${baseId}-${variant.toLowerCase().replace(/\s+/g, '-')}`;
    handleAddToCart({ id, name: `${name} (${variant})`, price });
  };

  const swissWhiteWines = [
    {
      id: 'domaine-de-la-deviniere-chasselas-sur-lies',
      name: 'Domaine de la Devinière – Chasselas sur lies',
      description: 'Willy & Camille Cretegny (Satigny, Geneva) 2017 - A very precise, luminous, slightly oxidative style.',
      image: 'https://readdy.ai/api/search-image?query=domaine%20de%20la%20devini%C3%A8re%20chasselas%20sur%20lies%20white%20wine%20bottle%20switzerland%20geneva&width=400&height=300&seq=white-swiss-1&orientation=landscape',
      variants: [
        { label: '10 cl', price: 9.00 },
        { label: '75 cl', price: 49.00 }
      ]
    },
    {
      id: 'domaine-de-beauvent-nature-blanc',
      name: 'Domaine de Beauvent – Nature Blanc',
      description: 'Jérôme Cruz (Bernex, Geneva) 2021 - Chardonnay 13.5% vol. Natural wine, no added sulfur, aged one year on lees.',
      image: 'https://readdy.ai/api/search-image?query=domaine%20de%20beauvent%20nature%20blanc%20white%20wine%20bottle%20switzerland%20geneva&width=400&height=300&seq=white-swiss-2&orientation=landscape',
      variants: [
        { label: '10 cl', price: 10.00 },
        { label: '75 cl', price: 59.00 }
      ]
    },
    {
      id: 'domaine-la-capitaine-cuvee-jeune-prodige',
      name: 'Domaine La Capitaine – Cuvée Jeune Prodige',
      description: 'Johann Parmelin (Begnins, La Côte) 2020 - Sauvignon, Pinot Gris, Viognier, Muscat. Very aromatic and expressive, a gastronomic wine, persistent finish with freshness.',
      image: 'https://readdy.ai/api/search-image?query=domaine%20la%20capitaine%20cuv%C3%A9e%20jeune%20prodige%20white%20wine%20bottle%20switzerland&width=400&height=300&seq=white-swiss-3&orientation=landscape',
      variants: [
        { label: '10 cl', price: 11.00 },
        { label: '75 cl', price: 69.00 }
      ]
    },
    {
      id: 'hirondelle-blanc-les-lolliets',
      name: 'Hirondelle Blanc, Les Lolliets',
      description: 'Geneva (Raphael Dunand à Soral, Geneva) 2022 - Dry and fruity wine, delicate aromas of white fruits and white flowers, supple and balanced on the palate, persistent finish. Pairing: Kerala Prawns Masala',
      image: 'https://readdy.ai/api/search-image?query=hirondelle%20blanc%20les%20lolliets%20white%20wine%20bottle%20switzerland%20geneva&width=400&height=300&seq=white-swiss-4&orientation=landscape',
      variants: [
        { label: 'dc', price: 10.00 },
        { label: 'bt', price: 55.00 }
      ]
    },
    {
      id: 'aligote-domaine-des-bossons',
      name: 'Aligoté – Domaine des Bossons',
      description: '2023 - Gentle bitterness, great freshness, surprising finesse and fruit.',
      price: 49.00,
      image: 'https://readdy.ai/api/search-image?query=aligot%C3%A9%20domaine%20des%20bossons%202023%20white%20wine%20bottle%20switzerland&width=400&height=300&seq=white-swiss-5&orientation=landscape'
    }
  ];

  const frenchWhiteWines = [
    {
      id: 'ventenac-chardonnay-prejuges',
      name: 'Ventenac (BIO) Chardonnay – Prejugés Maison Ventenac',
      description: '2023 - Aromas of white flowers, apple, and pear, with a delicate and fresh balance. Pairing: Butter Chicken Masala',
      price: 51.00,
      image: 'https://readdy.ai/api/search-image?query=ventenac%20chardonnay%20prejuges%20maison%20ventenac%202023%20white%20wine%20bottle%20france%20organic&width=400&height=300&seq=white-french-1&orientation=landscape'
    },
    {
      id: 'pouilly-fume-roger-pabiot',
      name: 'Pouilly Fumé – Roger Pabiot (bt)',
      description: 'Vallée de la Loire 2022 - Expressive notes of citrus fruits, delicate minerality, and an aromatic persistence characteristic of Sauvignon Blanc grown in this terroir. Pairing: Kerala Prawn Masala, King Prawn Balti',
      price: 79.00,
      image: 'https://readdy.ai/api/search-image?query=pouilly%20fum%C3%A9%20roger%20pabiot%202022%20white%20wine%20bottle%20france%20loire%20valley&width=400&height=300&seq=white-french-2&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
                White Wines
              </h1>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
            </div>

            {/* Swiss White Wines */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Swiss White Wines</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {swissWhiteWines.map((wine) => (
                  <div key={wine.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-primary">
                    <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${wine.image})` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                          {wine.name}
                        </h3>
                        {/* {!('variants' in wine) && (
                          <span className="text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                            CHF {wine.price.toFixed(2)}
                          </span>
                        )} */}
                      </div>
                      <p className="text-gray-600 mb-6">{wine.description}</p>
                      {('variants' in wine) ? (
                        <div className="grid grid-cols-1 gap-3">
                          {(wine as any).variants.map((v: any) => (
                            <button
                              key={v.label}
                              onClick={() => handleAddVariant(wine.id, wine.name, v.label, v.price)}
                              className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-between space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                            >
                              <span>Add {v.label}</span>
                              <span className="font-bold">CHF {v.price.toFixed(2)}</span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAddToCart({ id: wine.id, name: wine.name, price: wine.price })}
                          className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-between space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                        >
                          <span>Add to Cart</span>
                          <span className="font-bold">CHF {wine.price.toFixed(2)}</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* French White Wines */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">French White Wines</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frenchWhiteWines.map((wine) => (
                  <div key={wine.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-secondary">
                    <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${wine.image})` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="text-white px-4 py-2 rounded-full font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {wine.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                          {wine.name}
                      </h3>
                      <p className="text-gray-600 mb-6">{wine.description}</p>
                      <button
                        onClick={() => handleAddToCart(wine)}
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

            {/* Wine Pairing Section */}
            <div className="rounded-2xl p-8 border-2 bg-gray-50 border-primary">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                  <i className="ri-restaurant-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-primary">Perfect Pairings</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Light & Fresh Whites</h3>
                  <p className="text-gray-600 mb-4">
                    Muscadet and crisp Loire Valley wines complement our seafood curries, 
                    tandoori fish, and lighter vegetarian dishes perfectly. Their mineral notes 
                    enhance the delicate spices without overwhelming the palate.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Rich & Complex Whites</h3>
                  <p className="text-gray-600 mb-4">
                    Chassagne-Montrachet and premium Burgundy whites pair beautifully with 
                    our cream-based curries, butter chicken, and rich vegetarian dishes. 
                    Their depth matches the complexity of our signature sauces.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 italic">
                  Our sommelier is available to help you choose the perfect white wine for your meal. 
                  Please don't hesitate to ask for recommendations.
                </p>
                {/* <p className="text-sm mt-2 text-secondary">
                  Notre sommelier est disponible pour vous conseiller le vin blanc parfait pour votre repas.
                </p> */}
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
