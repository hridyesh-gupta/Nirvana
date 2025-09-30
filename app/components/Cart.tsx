'use client';

import { useState } from 'react';
import { CartItem } from '../../lib/cartStore'; // Import CartItem interface

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[]; // Changed from any[] to CartItem[]
  onUpdateQuantity: (id: string, quantity: number, sauce?: string) => void;
  onClearCart: () => void; // Add onClearCart prop
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onClearCart }: CartProps) {
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

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-primary to-secondary">
          <h2 className="text-2xl font-semibold text-white">Your Cart</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

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
                    <h3 className="font-semibold text-gray-800">
                      {item.name} {item.selectedSauce && `(${item.selectedSauce} sauce)`}
                    </h3>
                    <p className="text-sm text-gray-600">CHF {item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1, item.selectedSauce)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer"
                    >
                      <i className="ri-subtract-line text-sm"></i>
                    </button>
                    <span className="font-medium text-gray-800 min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1, item.selectedSauce)}
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

            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              {paymentMethod === 'razorpay' ? 'Pay Now' : 'Place Order (COD)'}
            </button>
            <button
              onClick={onClearCart}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer mt-4"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}