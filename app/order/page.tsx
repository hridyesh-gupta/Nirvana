'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../lib/cartStore';
import { products, Product } from '../../lib/products';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SauceSelectionModal from '../components/SauceSelectionModal';
import IceCreamFlavorSelectionModal from '../components/IceCreamFlavorSelectionModal';
import MixOptionSelectionModal from '../components/MixOptionSelectionModal';

interface GroupedProducts {
  [key: string]: Product[];
}

export default function OrderPage() {
  const { addItem } = useCart();
  const [showSauceSelectionModal, setShowSauceSelectionModal] = useState(false);
  const [selectedDishForSauce, setSelectedDishForSauce] = useState<Product | null>(null);
  const [showFlavorSelectionModal, setShowFlavorSelectionModal] = useState(false);
  const [selectedIceCreamForFlavor, setSelectedIceCreamForFlavor] = useState<Product | null>(null);
  const [showMixOptionSelectionModal, setShowMixOptionSelectionModal] = useState(false);
  const [selectedDishForMixOption, setSelectedDishForMixOption] = useState<Product | null>(null);

  const handleAddToCart = (item: Product, selectedSauce: string | null = null, selectedFlavor: string | null = null, selectedMixOption: string | null = null) => {
    if (item.requiresSauce && !selectedSauce) {
      setSelectedDishForSauce(item);
      setShowSauceSelectionModal(true);
    } else if (item.requiresFlavor && !selectedFlavor) {
      setSelectedIceCreamForFlavor(item);
      setShowFlavorSelectionModal(true);
    } else if (item.requiresMixOption && !selectedMixOption) {
      setSelectedDishForMixOption(item);
      setShowMixOptionSelectionModal(true);
    } else {
      addItem({ ...item, selectedSauce: selectedSauce || undefined, selectedFlavor: selectedFlavor || undefined, selectedMixOption: selectedMixOption || undefined });
    }
  };

  const groupedProducts: GroupedProducts = products.reduce((acc: GroupedProducts, product: Product) => {
    if (product.category === 'Desserts' && product.id.startsWith('dessert-ice-') && product.id !== 'dessert-ice-cream-flavours') {
      return acc; // Skip individual ice cream flavors
    }
    (acc[product.category] = acc[product.category] || []).push(product);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">Our Dishes</h1>
          <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>
        {Object.keys(groupedProducts).map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-3xl font-playfair text-secondary mb-6 border-b-2 border-secondary pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {groupedProducts[category].map((product: Product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between p-6">
                  <h3 className="text-xl font-playfair text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">CHF {product.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors mt-auto"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
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
      {showFlavorSelectionModal && selectedIceCreamForFlavor && (
        <IceCreamFlavorSelectionModal
          dish={selectedIceCreamForFlavor}
          onClose={() => setShowFlavorSelectionModal(false)}
          onSelectFlavor={(flavor) => {
            handleAddToCart(selectedIceCreamForFlavor, null, flavor);
            setShowFlavorSelectionModal(false);
            setSelectedIceCreamForFlavor(null);
          }}
          flavors={selectedIceCreamForFlavor.flavors || []}
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
