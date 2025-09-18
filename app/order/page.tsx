'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../../lib/cartStore';
import { products, Product } from '../../lib/products'; // Reverted .ts extension change
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


interface GroupedProducts {
  [key: string]: Product[];
}

export default function OrderPage() {
  const { addItem } = useCart();

  const groupedProducts: GroupedProducts = products.reduce((acc: GroupedProducts, product: Product) => {
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
                  onClick={() => addItem(product)}
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
    </div>
  );
}
