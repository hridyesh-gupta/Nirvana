
'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { useCart } from '../../../lib/cartStore';
import { products, Product } from '../../../lib/products';
import IceCreamFlavorSelectionModal from '../../components/IceCreamFlavorSelectionModal';
import { useLanguage } from '../../LanguageProvider';

export default function DessertsPage() {
  const { items: cartItems, addItem, updateQuantity, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showFlavorSelectionModal, setShowFlavorSelectionModal] = useState(false);
  const [selectedIceCreamForFlavor, setSelectedIceCreamForFlavor] = useState<Product | null>(null);
  const { language } = useLanguage();

  const handleAddToCart = (item: Product, selectedFlavor: string | null = null) => {
    if (item.requiresFlavor && !selectedFlavor) {
      setSelectedIceCreamForFlavor(item);
      setShowFlavorSelectionModal(true);
    } else {
      addItem({ ...item, selectedFlavor: selectedFlavor || undefined });
    }
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const desserts = products.filter(product => product.category === 'Desserts');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-1">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
                {language === 'fr' ? 'Desserts indiens' : 'Indian Desserts'}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'fr'
                  ? 'Des douceurs de fin de repas avec des confiseries indiennes traditionnelles.'
                  : 'Sweet endings with traditional Indian confections'}
              </p>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
            </div>

            {/* Desserts Grid (updated) */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
                {language === 'fr' ? 'Desserts' : 'Desserts'}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Kheer */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src="https://readdy.ai/api/search-image?query=classic%20kheer%20rice%20pudding%20cooked%20in%20milk%20with%20cardamom%20almonds%20and%20raisins%2C%20comfort%20dessert%20served%20chilled%20with%20nuts%20garnish&width=400&height=250&seq=kheer1&orientation=landscape"
                    alt="Kheer"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Kheer</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 8.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Riz au lait':'Rice pudding'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'dessert-kheer', name: 'Kheer', price: 8.00, category: 'Desserts' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                {/* Halwa */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src=""
                    alt="Halwa"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Halwa</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 8.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Gâteau de semoule' : 'Semolina cake'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'dessert-halwa', name: 'Halwa', price: 8.00, category: 'Desserts' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                {/* Gulab Jamun */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src=""
                    alt="Gulab Jamun"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Gulab Jamun</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 10.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Douceurs indiennes' : 'Indian sweets'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'dessert-gulab-jamun', name: 'Gulab Jamun', price: 10.00, category: 'Desserts' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                {/* Pista Kulfi */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src="/images/Pista-Kulfi.jpg"
                    alt="Pista Kulfi"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Pista Kulfi</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 12.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Glace maison au lait, aux pistaches et à la cardamome' : 'Homemade ice cream with milk, pistachios, and cardamom'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'dessert-pista-kulfi', name: 'Pista Kulfi', price: 12.00, category: 'Desserts' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                {/* Gulab Jamun Flambé */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src=""
                    alt="Gulab Jamun Flambé"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Gulab Jamun Flambé</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 14.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Douceurs indiennes flambées' : 'Indian sweets flambéed'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'dessert-gulab-jamun-flambe', name: 'Gulab Jamun Flambé', price: 14.00, category: 'Desserts' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                {/* Mango Ice Cream */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src=""
                    alt="Mango Ice Cream"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Mango Ice Cream</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 12.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Avec un coulis de mangue et des amandes glacées' : 'With mango coulis and glazed almonds'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'dessert-mango-ice-cream', name: 'Mango Ice Cream', price: 12.00, category: 'Desserts' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                {/* Mango Fresh */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src=""
                    alt="Mango Fresh"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Mango Fresh</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 12.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Mangue fraîche de Pakistan' : 'Fresh mango from Pakistan'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'dessert-mango-fresh', name: 'Mango Fresh', price: 12.00, category: 'Desserts' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                {/* Nirvana */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src=""
                    alt="Nirvana"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Nirvana</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 14.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Fruits exotiques et sorbet de mangue avec liqueur de gingembre' : 'Exotic fresh fruit and mango sorbet with ginger liqueur'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'dessert-nirvana', name: 'Nirvana', price: 14.00, category: 'Desserts' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                {/* Orange Carpaccio */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src=""
                    alt="Orange Carpaccio"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Orange Carpaccio</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 9.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Avec cannelle' : 'With cinnamon'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'dessert-orange-carpaccio', name: 'Orange Carpaccio', price: 9.00, category: 'Desserts' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                {/* Dame Blanche */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src=""
                    alt="Dame Blanche"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Dame Blanche</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 12.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Glace à la vanille avec sauce au chocolat et crème fouettée' : 'Vanilla ice cream with chocolate sauce and whipped cream'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'dessert-dame-blanche', name: 'Dame Blanche', price: 12.00, category: 'Desserts' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                {/* Sorbets and Alcoholic Ice Creams */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-primary">
                  <img
                    src=""
                    alt="Sorbets and Alcoholic Ice Creams"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary">Sorbets and Alcoholic Ice Creams</h3>
                    <span className="block w-auto text-center text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-primary to-secondary">
                      CHF 14.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{language === 'fr' ? 'Sorbet poire au brandy, glace aux pruneaux au whisky' : 'Pear sorbet with brandy, prune ice cream with whisky'}</p>
                  <button
                    onClick={() => handleAddToCart({ id: 'dessert-sorbets-alcoholic', name: 'Sorbets and Alcoholic Ice Creams', price: 14.00, category: 'Desserts' })}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-primary to-secondary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>

                {/* Mango Ice Cream Flavours */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 hover:scale-105 overflow-hidden border-secondary">
                  <img
                    src=""
                    alt="Ice Cream Flavours"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Ice Cream Flavours</h3>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-secondary to-primary">
                      CHF 6.00
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">Raspberry & Strawberry, Passion fruit & mango, Lemon and lime, Espresso Crunch, Swiss Chocolate, Vanilla Dream, Pear</p>
                  <button
                    onClick={() => handleAddToCart(desserts.find(d => d.id === 'dessert-ice-cream-flavours') as Product)}
                    className="w-full text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer bg-gradient-to-r from-secondary to-primary"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-add-line"></i>
                    </div>
                    <span>{language === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Order Section */}
            <div className="mt-20 text-center">
              <div className="bg-white rounded-2xl p-8 border-2 shadow-lg border-primary">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                  <i className="ri-cake-3-line text-white text-3xl"></i>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-primary">
                  {language === 'fr' ? 'Une douce fin de repas' : 'Sweet Endings Await'}
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  {language === 'fr'
                    ? 'Complétez votre repas avec nos desserts indiens authentiques, préparés chaque jour avec des recettes traditionnelles et des ingrédients de première qualité.'
                    : 'Complete your meal with our authentic Indian desserts, made fresh daily with traditional recipes and the finest ingredients.'}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+41227821010"
                    className="text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary"
                  >
                    <i className="ri-phone-line text-xl"></i>
                    <span>{language === 'fr' ? 'Commande : 022 782 10 10' : 'Order: 022 782 10 10'}</span>
                  </a>
                  <a
                    href="/menu"
                    className="bg-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer border-2 flex items-center justify-center space-x-2 text-primary border-primary"
                  >
                    <i className="ri-restaurant-line text-xl"></i>
                    <span>{language === 'fr' ? 'Menu complet' : 'Full Menu'}</span>
                  </a>
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

      {showFlavorSelectionModal && selectedIceCreamForFlavor && (
        <IceCreamFlavorSelectionModal
          dish={selectedIceCreamForFlavor}
          onClose={() => setShowFlavorSelectionModal(false)}
          onSelectFlavor={(flavor) => {
            handleAddToCart(selectedIceCreamForFlavor, flavor);
            setShowFlavorSelectionModal(false);
            setSelectedIceCreamForFlavor(null);
          }}
          flavors={selectedIceCreamForFlavor.flavors || []}
        />
      )}
    </div>
  );
}