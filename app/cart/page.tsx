
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../lib/cartStore'; // Assuming cartStore is here
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CartPage() {
  const { items, updateQuantity } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = orderType === 'delivery' ? 3.5 : 0;
  const discount = orderType === 'pickup' ? subtotal * 0.1 : 0;
  const total = subtotal + deliveryFee - discount;

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    if (paymentMethod === 'razorpay') {
      // Integrate Razorpay payment
      alert('Redirecting to Razorpay payment gateway...');
    } else {
      // Cash on delivery
      alert('Order placed! You will receive a confirmation email shortly.');
    }
  };

  return (
    <div className="min-h-screen bg-white-100">
      <Navigation />
      <main className="pt-1">
        <div className="w-full">
          {/* Centralized Heading for Cart Page */}
          <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
              Your Cart
            </h1>
            <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>
          
          <div className="bg-white w-full overflow-hidden max-w-7xl mx-auto">
            <div className="overflow-y-auto max-h-[60vh]">
              {items.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-shopping-cart-line text-4xl text-gray-400"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
                  <p className="text-gray-600">Add some delicious items from our menu!</p>
                </div>
              ) : (
                <div className="p-6 space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">CHF {item.price}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer"
                        >
                          <i className="ri-subtract-line text-sm"></i>
                        </button>
                        <span className="font-medium text-gray-800 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer"
                        >
                          <i className="ri-add-line text-sm"></i>
                        </button>
                      </div>
                      
                      <div className="font-semibold text-gray-800">
                        CHF {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-200 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Order Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setOrderType('delivery')}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                          orderType === 'delivery'
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Delivery
                      </button>
                      <button
                        onClick={() => setOrderType('pickup')}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                          orderType === 'pickup'
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Pickup
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setPaymentMethod('razorpay')}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                          paymentMethod === 'razorpay'
                            ? 'bg-secondary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Online
                      </button>
                      {orderType === 'delivery' && (
                        <button
                          onClick={() => setPaymentMethod('cod')}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                            paymentMethod === 'cod'
                              ? 'bg-secondary text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          COD
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">CHF {subtotal.toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee:</span>
                      <span className="font-medium">CHF {deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  {orderType === 'pickup' && discount > 0 && (
                    <div className="flex justify-between text-secondary">
                      <span>Pickup Discount (10%):</span>
                      <span className="font-medium">-CHF {discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>CHF {total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleCheckout}
                    className="w-1/3 mx-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
                  >
                    {paymentMethod === 'razorpay' ? 'Pay Now' : 'Place Order (COD)'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
