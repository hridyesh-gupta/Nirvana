
'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderMode, setOrderMode] = useState<'delivery' | 'pickup'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zipCode: ''
  });

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = orderMode === 'pickup' ? subtotal * 0.1 : 0;
  const deliveryFee = orderMode === 'delivery' ? 5.00 : 0;
  const total = subtotal - discount + deliveryFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }

    if (paymentMethod === 'razorpay') {
      alert('Redirecting to payment gateway...');
    } else {
      alert('Order placed successfully! We will call you to confirm the order.');
    }

    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      <main className="pt-20">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6" style={{ background: 'linear-gradient(to right, #751140, #BD8E21)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Your Cart
              </h1>
              <div className="w-32 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #751140, #BD8E21)' }} />
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <i className="ri-shopping-cart-line text-gray-400 text-6xl"></i>
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
                <p className="text-gray-600 mb-8">Start adding some delicious items to your cart!</p>
                <a href="/menu" className="text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all duration-300 inline-flex items-center space-x-2" style={{ background: 'linear-gradient(to right, #751140, #BD8E21)' }}>
                  <i className="ri-restaurant-line"></i>
                  <span>Browse Menu</span>
                </a>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-lg p-8" style={{ border: '1px solid #751140' }}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cart Items</h2>
                    
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                          <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-gray-600">CHF {item.price.toFixed(2)}</p>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                            >
                              <i className="ri-subtract-line"></i>
                            </button>
                            
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                            >
                              <i className="ri-add-line"></i>
                            </button>
                          </div>
                          
                          <div className="text-lg font-semibold text-gray-800">
                            CHF {(item.price * item.quantity).toFixed(2)}
                          </div>
                          
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-8 h-8 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-colors"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Order Summary & Checkout */}
                <div className="space-y-8">
                  {/* Order Mode Selection */}
                  <div className="bg-white rounded-2xl shadow-lg p-6" style={{ border: '1px solid #751140' }}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Mode</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="orderMode"
                          value="delivery"
                          checked={orderMode === 'delivery'}
                          onChange={(e) => setOrderMode(e.target.value as 'delivery')}
                          style={{ accentColor: '#751140' }}
                        />
                        <span className="text-gray-700">🚚 Delivery (CHF 5.00)</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="orderMode"
                          value="pickup"
                          checked={orderMode === 'pickup'}
                          onChange={(e) => setOrderMode(e.target.value as 'pickup')}
                          style={{ accentColor: '#751140' }}
                        />
                        <span className="text-gray-700">🏪 Pickup (10% Discount)</span>
                      </label>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-white rounded-2xl shadow-lg p-6" style={{ border: '1px solid #751140' }}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="razorpay"
                          checked={paymentMethod === 'razorpay'}
                          onChange={(e) => setPaymentMethod(e.target.value as 'razorpay')}
                          style={{ accentColor: '#751140' }}
                        />
                        <span className="text-gray-700">💳 Online Payment (Razorpay)</span>
                      </label>
                      {orderMode === 'delivery' && (
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            checked={paymentMethod === 'cod'}
                            onChange={(e) => setPaymentMethod(e.target.value as 'cod')}
                            style={{ accentColor: '#751140' }}
                          />
                          <span className="text-gray-700">💰 Cash on Delivery</span>
                        </label>
                      )}
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-white rounded-2xl shadow-lg p-6" style={{ border: '1px solid #751140' }}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-medium">CHF {subtotal.toFixed(2)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between" style={{ color: '#BD8E21' }}>
                          <span>Pickup Discount (10%):</span>
                          <span>-CHF {discount.toFixed(2)}</span>
                        </div>
                      )}
                      {deliveryFee > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Fee:</span>
                          <span className="font-medium">CHF {deliveryFee.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="border-t pt-3">
                        <div className="flex justify-between text-xl font-bold">
                          <span>Total:</span>
                          <span>CHF {total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Customer Information Form */}
                  <div className="bg-white rounded-2xl shadow-lg p-6" style={{ border: '1px solid #751140' }}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Information</h3>
                    <form onSubmit={handleSubmitOrder} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name *"
                          required
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number *"
                          required
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={customerInfo.email}
                          onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all"
                        />
                      </div>
                      
                      {orderMode === 'delivery' && (
                        <>
                          <div>
                            <input
                              type="text"
                              placeholder="Delivery Address *"
                              required
                              value={customerInfo.address}
                              onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <input
                              type="text"
                              placeholder="City *"
                              required
                              value={customerInfo.city}
                              onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all"
                            />
                            <input
                              type="text"
                              placeholder="ZIP Code *"
                              required
                              value={customerInfo.zipCode}
                              onChange={(e) => setCustomerInfo({...customerInfo, zipCode: e.target.value})}
                              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all"
                            />
                          </div>
                        </>
                      )}
                      
                      <button
                        type="submit"
                        className="w-full text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 shadow-lg whitespace-nowrap cursor-pointer"
                        style={{ background: 'linear-gradient(to right, #751140, #BD8E21)' }}
                      >
                        {paymentMethod === 'razorpay' ? 'Proceed to Payment' : 'Place Order'}
                      </button>
                    </form>
                  </div>
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
