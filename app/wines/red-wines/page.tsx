
'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';

export default function RedWinesPage() {
  const { items: cartItems, itemCount, addItem, updateQuantity, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: any) => {
    addItem(item);
  };

  const handleAddVariant = (baseId: string, name: string, variant: string, price: number) => {
    const id = `${baseId}-${variant.toLowerCase().replace(/\s+/g, '-')}`;
    handleAddToCart({ id, name: `${name} (${variant})`, price });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const swissRedWines = [
    {
      id: 'jerome-cruz',
      name: 'Jérôme Cruz – Domaine de Beauvent',
      description: 'Bernex, Geneva 2021 (Nature Rouge) - Aromas of red fruits, supple and fresh palate with fine tannins.',
      image: 'https://readdy.ai/api/search-image?query=j%C3%A9r%C3%B4me%20cruz%20domaine%20de%20beauvent%20bernex%20geneva%202021%20nature%20rouge%20red%20wine%20bottle%20vineyard%20background%20switzerland&width=400&height=300&seq=wine-swiss-1&orientation=landscape',
      variants: [
        { label: '10 cl', price: 11.00 },
        { label: '75 cl', price: 59.00 }
      ]
    },
    {
      id: 'johan-parmelin',
      name: 'Johan Parmelin – Domaine La Capitaine',
      description: 'La Côte 2020 (Cuvée Jeune Prodige) - Fruity wine with supple tannins, hints of spice, smooth and well-balanced.',
      image: 'https://readdy.ai/api/search-image?query=johan%20parmelin%20domaine%20la%20capitaine%20la%20c%C3%B4te%202020%20cuv%C3%A9e%20jeune%20prodige%20red%20wine%20bottle%20switzerland&width=400&height=300&seq=wine-swiss-2&orientation=landscape',
      variants: [
        { label: '10 cl', price: 12.00 },
        { label: '75 cl', price: 69.00 }
      ]
    },
    {
      id: 'christophe-pillon',
      name: 'Christophe Pillon – Domaine des Balisiers',
      description: 'Satigny-Geneva 2017 (Cuvée Matisse, Cabernet Sauvignon) - Intense aromas of black fruits, notes of spices and licorice. A structured and persistent wine. Organic certified.',
      image: 'https://readdy.ai/api/search-image?query=christophe%20pillon%20domaine%20des%20balisiers%20satigny%20geneva%202017%20cuv%C3%A9e%20matisse%20cabernet%20sauvignon%20red%20wine%20bottle%20switzerland%20organic&width=400&height=300&seq=wine-swiss-3&orientation=landscape',
      variants: [
        { label: '10 cl', price: 13.00 },
        { label: '75 cl', price: 79.00 }
      ]
    },
    {
      id: 'domaine-des-bossons-gamareve',
      name: 'Domaine des Bossons – Gamareve',
      description: '2022 - Fruity red wine with freshness and supple tannins.',
      price: 65.00,
      image: 'https://readdy.ai/api/search-image?query=domaine%20des%20bossons%20gamareve%202022%20red%20wine%20bottle%20switzerland&width=400&height=300&seq=wine-swiss-4&orientation=landscape'
    },
    {
      id: 'domaine-des-bossons-pinot-noir',
      name: 'Domaine des Bossons – Pinot Noir',
      description: '2023 - Light, fruity, and elegant Pinot Noir with fine tannins.',
      price: 59.00,
      image: 'https://readdy.ai/api/search-image?query=domaine%20des%20bossons%20pinot%20noir%202023%20red%20wine%20bottle%20switzerland&width=400&height=300&seq=wine-swiss-5&orientation=landscape'
    },
    {
      id: 'les-balisiers-dame-noire',
      name: 'Les Balisiers – Dame Noire',
      description: 'Deep and structured red wine, intense and elegant.',
      price: 65.00,
      image: 'https://readdy.ai/api/search-image?query=les%20balisiers%20dame%20noire%20red%20wine%20bottle%20switzerland&width=400&height=300&seq=wine-swiss-6&orientation=landscape'
    },
    {
      id: 'les-balisiers-cuvee-matisse',
      name: 'Les Balisiers – Cuvée Matisse',
      description: 'Blend of red grape varieties, rich and complex with aromatic depth.',
      price: 79.00,
      image: 'https://readdy.ai/api/search-image?query=les%20balisiers%20cuv%C3%A9e%20matisse%20red%20wine%20bottle%20switzerland&width=400&height=300&seq=wine-swiss-7&orientation=landscape'
    }
  ];

  const frenchRedWines = [
    {
      id: 'bordeaux-le-haut-medoc-de-giscours',
      name: 'Bordeaux – Le Haut Médoc de Giscours',
      description: '2018 - A well-balanced wine with soft tannins and elegant character.',
      price: 85.00,
      image: 'https://readdy.ai/api/search-image?query=bordeaux%20le%20haut%20m%C3%A9doc%20de%20giscours%202018%20red%20wine%20bottle%20france&width=400&height=300&seq=wine-french-1&orientation=landscape'
    },
    {
      id: 'pic-saint-loup-lavabre',
      name: 'Pic Saint Loup – Lavabre',
      description: '2020 - Produced by Domaine de l’Hortus in the heart of Pic Saint Loup (Languedoc). This wine offers aromas of ripe red fruits, blackcurrant, and blackberry, with a delicate touch of spice and garrigue. Perfectly balanced with soft tannins and a persistent finish.',
      price: 95.00,
      image: 'https://readdy.ai/api/search-image?query=pic%20saint%20loup%20lavabre%202020%20red%20wine%20bottle%20france&width=400&height=300&seq=wine-french-2&orientation=landscape'
    },
    {
      id: 'chateauneuf-du-pape-telegramme',
      name: 'Châteauneuf-du-Pape – Télégramme',
      description: '2021 - A generous and harmonious wine with great aromatic complexity.',
      price: 129.00,
      image: 'https://readdy.ai/api/search-image?query=ch%C3%A2teauneuf%20du%20pape%20t%C3%A9l%C3%A9gramme%202021%20red%20wine%20bottle%20france&width=400&height=300&seq=wine-french-3&orientation=landscape'
    },
    {
      id: 'la-reserve-de-jeanne',
      name: 'La Réserve de Jeanne – Maison Ventenac',
      description: '2023 - IGP Cité de Carcassonne. A Grenache and Syrah blend, expressive and fruity, with fine tannins, a perfect balance between power and freshness.',
      price: 55.00,
      image: 'https://readdy.ai/api/search-image?query=la%20r%C3%A9serve%20de%20jeanne%20maison%20ventenac%202023%20red%20wine%20bottle%20france&width=400&height=300&seq=wine-french-4&orientation=landscape'
    },
    {
      id: 'cotes-du-rhone-domaine-la-florane',
      name: 'Côtes du Rhône – Domaine la Florane',
      description: '2023 (Organic) - From a family estate certified organic. This wine reveals aromas of ripe fruits and spices, with a fresh and elegant structure.',
      price: 59.00,
      image: 'https://readdy.ai/api/search-image?query=c%C3%B4tes%20du%20rh%C3%B4ne%20domaine%20la%20florane%202023%20red%20wine%20bottle%20france%20organic&width=400&height=300&seq=wine-french-5&orientation=landscape'
    },
    {
      id: 'sancerre-rouge-pierre-prieur',
      name: 'Sancerre Rouge – Pierre Prieur',
      description: '2019 (Organic) - Elegant Pinot Noir with aromas of red berries and subtle tannins. Fresh, lively, and balanced.',
      price: 65.00,
      image: 'https://readdy.ai/api/search-image?query=sancerre%20rouge%20pierre%20prieur%202019%20red%20wine%20bottle%20france%20organic&width=400&height=300&seq=wine-french-6&orientation=landscape'
    }
  ];

  const worldRedWines = [
    {
      id: 'rioja-doc-rivaey-crianza',
      name: 'Rioja DOC Rivaey Crianza',
      description: 'Spain 2015',
      price: 69.00,
      image: 'https://readdy.ai/api/search-image?query=rioja%20doc%20rivaey%20crianza%202015%20red%20wine%20bottle%20spain&width=400&height=300&seq=wine-world-1&orientation=landscape'
    },
    {
      id: 'cantine-paolini-sicilia-doc-nero-davola',
      name: 'Cantine Paolini Sicilia DOC Nero d’Avola',
      description: 'Italy 2019',
      price: 65.00,
      image: 'https://readdy.ai/api/search-image?query=cantine%20paolini%20sicilia%20doc%202019%20nero%20d%E2%80%99avola%20red%20wine%20bottle%20italy&width=400&height=300&seq=wine-world-2&orientation=landscape'
    },
    {
      id: 'diamandes-de-perlilla-malbec-syrah',
      name: 'Diamandes de Perlilla Malbec–Syrah',
      description: 'Valle de Uco, Mendoza 2019/18 - Argentina',
      price: 59.00,
      image: 'https://readdy.ai/api/search-image?query=diamandes%20de%20perlilla%20malbec%20syrah%20valle%20de%20uco%20mendoza%202019%2F18%20red%20wine%20bottle%20argentina&width=400&height=300&seq=wine-world-3&orientation=landscape'
    },
    {
      id: 'montes-reserva-cabernet-sauvignon',
      name: 'Montes Reserva Cabernet Sauvignon',
      description: 'Valle de Colchagua D.O. 2018 - Chile',
      price: 65.00,
      image: 'https://readdy.ai/api/search-image?query=montes%20reserva%202018%20cabernet%20sauvignon%20valle%20de%20colchagua%20d.o.%20red%20wine%20bottle%20chile&width=400&height=300&seq=wine-world-4&orientation=landscape'
    },
    {
      id: 'sula-vineyards-shiraz',
      name: 'Sula Vineyards Shiraz',
      description: '2019 Conversion BIO - India',
      price: 49.00,
      image: 'https://readdy.ai/api/search-image?query=sula%20vineyards%20shiraz%202019%20conversion%20bio%20red%20wine%20bottle%20india&width=400&height=300&seq=wine-world-5&orientation=landscape'
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
                Red Wines
              </h1>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
              <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                Discover our exceptional selection of red wines from around the world. Each bottle has been carefully chosen to complement our Indian cuisine perfectly.
              </p>
            </div>

            {/* Swiss Red Wines */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">Swiss Red Wines</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {swissRedWines.map((wine) => (
                  <div key={wine.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-primary">
                    <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${wine.image})` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                          {wine.name}
                        </h3>
                        {!('variants' in wine) && (
                          <span className="text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                            CHF {wine.price.toFixed(2)}
                          </span>
                        )}
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

            {/* French Red Wines */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">French Red Wines</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frenchRedWines.map((wine) => (
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

            {/* World Red Wines */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl text-primary font-semibold text-gray-800 mb-4">World Red Wines</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {worldRedWines.map((wine) => (
                  <div key={wine.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border-2 border-primary">
                    <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${wine.image})` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold mb-3 transition-colors text-primary">
                          {wine.name}
                        </h3>
                        <span className="text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg bg-gradient-to-r from-primary to-secondary">
                          CHF {wine.price.toFixed(2)}
                        </span>
                      </div>
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
                <h2 className="text-3xl font-semibold mb-4 text-primary">
                  Perfect Pairings
                </h2>
                <div className="text-lg mb-6 text-secondary">
                  Perfect Pairings
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Light to Medium Reds
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Beaujolais and lighter Burgundies pair beautifully with our tandoori dishes, tikka preparations, and vegetarian curries. Their fresh acidity complements the spices perfectly.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Full-Bodied Reds
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Bordeaux blends and Rhône Valley wines are excellent with our lamb specialties, rich curry dishes, and aged beef preparations. Their tannins balance the richness of our sauces.
                  </p>
                </div>
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
