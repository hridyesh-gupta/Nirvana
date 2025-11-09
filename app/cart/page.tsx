
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../../lib/cartStore';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StripeCheckoutModal from '../components/StripeCheckoutModal';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { fetchClientSecret } from '../actions/stripe';
import { DELIVERY_ZONES, getDeliveryFeeByZone, getZoneByZipcode, validateMinimumOrder } from '../../lib/deliveryZones';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function CartPage() {
  const router = useRouter();
  const { items, updateQuantity, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'cod'>('stripe');
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [showStripeCheckout, setShowStripeCheckout] = useState(false);
  
  // Customer information state
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    zipcode: '',
    street: '',
    city: '',
    specialInstructions: ''
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [hasAttemptedCheckout, setHasAttemptedCheckout] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);
  const [minimumOrderError, setMinimumOrderError] = useState<string | null>(null);

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = orderType === 'delivery'
    ? (() => {
        if (!customerInfo.zipcode) {
          return 0;
        }
        const zoneInfo = getZoneByZipcode(customerInfo.zipcode);
        return zoneInfo ? getDeliveryFeeByZone(zoneInfo.zone) : 0;
      })()
    : 0;
  const discount = orderType === 'pickup' ? subtotal * 0.1 : 0;
  const total = subtotal + deliveryFee - discount;

  // Order context object
  const orderContext = {
    orderType,
    paymentMethod,
    subtotal,
    deliveryFee,
    discount,
    total,
  };

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // International phone format: + followed by country code (1-3 digits) and 7-14 digits total
    // Accept both + and 00 prefixes, and local Swiss numbers (0XXXXXXXXX)
    // Note: For more robust international phone validation (format verification per country, 
    // mobile vs landline detection, etc.), consider using libphonenumber-js library
    
    // Comment 1: Broader sanitization - remove all non-digit characters except + at start
    let cleanPhone = phone.replace(/[^\d+]/g, '');
    
    // Comment 2: Normalize 00 prefix to + for international numbers
    if (cleanPhone.startsWith('00')) {
      cleanPhone = '+' + cleanPhone.substring(2);
    }
    
    // Enforce single leading plus: strip extra + signs to avoid false negatives
    if (cleanPhone.startsWith('+')) {
      cleanPhone = '+' + cleanPhone.slice(1).replace(/\+/g, '');
    } else {
      cleanPhone = cleanPhone.replace(/\+/g, '');
    }
    
    // Comment 3: Support both international (+) and local Swiss (0) formats
    const internationalRegex = /^\+[1-9]\d{9,14}$/;
    const swissLocalRegex = /^0\d{9}$/;
    
    return internationalRegex.test(cleanPhone) || swissLocalRegex.test(cleanPhone);
  };

  // Pure function that returns errors without side effects
  const getErrors = (customerInfo: { name: string; email: string; phone: string; zipcode: string; street: string; city: string; specialInstructions: string }, orderType: 'delivery' | 'pickup'): Record<string, string> => {
    const errors: Record<string, string> = {};
    
    // Required fields for all orders
    if (!customerInfo.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!customerInfo.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(customerInfo.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!customerInfo.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!validatePhone(customerInfo.phone)) {
      errors.phone = 'Please enter a valid phone number (+ or 00 for international, 0 for Swiss local)';
    }
    
    // Address fields required only for delivery
    if (orderType === 'delivery') {
      if (!customerInfo.zipcode.trim()) {
        errors.zipcode = 'Zipcode is required for delivery';
      }
      if (!customerInfo.street.trim()) {
        errors.street = 'Street address is required for delivery';
      }
      
      if (!customerInfo.city.trim()) {
        errors.city = 'City is required for delivery';
      }
    }
    
    return errors;
  };

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
    // Mark field as touched
    setTouched(prev => ({ ...prev, [field]: true }));
    // Clear order error when user modifies form
    setOrderError(null);
  };

  const handleFieldBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  // Compute form validity without mutating formErrors
  useEffect(() => {
    const errors = getErrors(customerInfo, orderType);
    setIsFormValid(Object.keys(errors).length === 0);
  }, [customerInfo, orderType]);

  useEffect(() => {
    if (orderType !== 'delivery') {
      setMinimumOrderError(null);
      return;
    }

    if (!customerInfo.zipcode) {
      setMinimumOrderError(null);
      return;
    }

    const zoneInfo = getZoneByZipcode(customerInfo.zipcode);
    if (!zoneInfo) {
      setMinimumOrderError(null);
      return;
    }

    const validation = validateMinimumOrder(zoneInfo.zone, subtotal);
    if (!validation.isValid) {
      setMinimumOrderError(
        `Minimum order for this zone is CHF ${validation.minimumRequired.toFixed(2)}. Current subtotal: CHF ${subtotal.toFixed(2)}`
      );
    } else {
      setMinimumOrderError(null);
    }
  }, [customerInfo.zipcode, subtotal, orderType]);

  const handleCloseStripeCheckout = () => {
    setShowStripeCheckout(false);
  };

  const handleCheckout = async () => {
    if (items.length === 0) return;
    
    // Mark that user has attempted checkout
    setHasAttemptedCheckout(true);
    
    // Get current errors and set them
    const errors = getErrors(customerInfo, orderType);
    setFormErrors(errors);
    
    // If form is invalid, don't proceed
    if (Object.keys(errors).length > 0) {
      return;
    }

    if (orderType === 'delivery' && customerInfo.zipcode) {
      const zoneInfo = getZoneByZipcode(customerInfo.zipcode);
      if (zoneInfo) {
        const validation = validateMinimumOrder(zoneInfo.zone, subtotal);
        if (!validation.isValid) {
          setMinimumOrderError(
            `Minimum order for this zone is CHF ${validation.minimumRequired.toFixed(2)}. Current subtotal: CHF ${subtotal.toFixed(2)}`
          );
          return;
        }
      }
    }
    
    if (paymentMethod === 'stripe') {
      setShowStripeCheckout(true);
    } else {
      // Cash on delivery - create order via API
      setIsProcessingOrder(true);
      setOrderError(null);
      
      try {
        const response = await fetch('/api/orders/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customerInfo,
            cartItems: items,
            orderContext
          })
        });
        
        if (response.ok) {
          const result = await response.json();
          // Clear the cart
          clearCart();
          // Reset customer info form
          setCustomerInfo({
            name: '',
            email: '',
            phone: '',
            zipcode: '',
            street: '',
            city: '',
            specialInstructions: ''
          });
          setFormErrors({});
          setHasAttemptedCheckout(false);
          setTouched({});
          setMinimumOrderError(null);
          // Redirect to confirmation page with order number
          router.push(`/return?orderNumber=${result.orderNumber}`);
        } else {
          const errorData = await response.json();
          setOrderError(errorData.error || 'Failed to create order. Please try again.');
          console.error('Order creation failed:', errorData);
        }
      } catch (error) {
        setOrderError('Network error. Please check your connection and try again.');
        console.error('Network error during order creation:', error);
      } finally {
        setIsProcessingOrder(false);
      }
    }
  };

  const handleClearCart = () => {
    clearCart();
    // Reset customer info when cart is cleared
    setCustomerInfo({
      name: '',
      email: '',
      phone: '',
      zipcode: '',
      street: '',
      city: '',
      specialInstructions: ''
    });
    setFormErrors({});
    setHasAttemptedCheckout(false);
    setTouched({});
    setIsProcessingOrder(false);
    setOrderError(null);
    setMinimumOrderError(null);
  };

  return (
    <div className="min-h-screen bg-white-100">
      <Navigation/>
      <main className="pt-1">
        <div className="w-full">
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
                        <h3 className="font-semibold text-gray-800">{item.name}{item.selectedSauce && ` (${item.selectedSauce})`}{item.selectedFlavor && ` (${item.selectedFlavor})`}{item.selectedMixOption && ` (${item.selectedMixOption})`}</h3>
                        <p className="text-sm text-gray-600">CHF {item.price}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSauce, item.selectedFlavor, item.selectedMixOption)}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer"
                        >
                          <i className="ri-subtract-line text-sm"></i>
                        </button>
                        <span className="font-medium text-gray-800 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSauce, item.selectedFlavor, item.selectedMixOption)}
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
                        onClick={() => {
                          setOrderType('delivery');
                          setOrderError(null);
                        }}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                          orderType === 'delivery'
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Delivery
                      </button>
                      <button
                        onClick={() => {
                          setOrderType('pickup');
                          setOrderError(null);
                        }}
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
                        onClick={() => setPaymentMethod('stripe')}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                          paymentMethod === 'stripe'
                            ? 'bg-secondary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Online (Stripe)
                      </button>
                      {(
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

                {/* Customer Information Form */}
                <div className="space-y-6 border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800">Customer Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={customerInfo.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onBlur={() => handleFieldBlur('name')}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-primary transition-all"
                        placeholder="Enter your full name"
                      />
                      {(touched.name || hasAttemptedCheckout) && formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => handleFieldBlur('email')}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-primary transition-all"
                        placeholder="Enter your email address"
                      />
                      {(touched.email || hasAttemptedCheckout) && formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={customerInfo.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        onBlur={() => handleFieldBlur('phone')}
                        className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-primary transition-all"
                        placeholder="e.g., +41 12 345 67 89, 00 41 12 345 67 89, or 012 345 67 89"
                      />
                      {(touched.phone || hasAttemptedCheckout) && formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Delivery Address Section - Only show for delivery orders */}
                  {orderType === 'delivery' && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800">Delivery Address</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Delivery Zipcode *
                        </label>
                        <select
                          value={customerInfo.zipcode}
                          onChange={(e) => handleInputChange('zipcode', e.target.value)}
                          onBlur={() => handleFieldBlur('zipcode')}
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-primary transition-all"
                        >
                          <option value="" disabled>
                            Select your zipcode
                          </option>
                          {DELIVERY_ZONES.map((zoneInfo) => (
                            <optgroup
                              key={zoneInfo.zone}
                              label={`Zone ${zoneInfo.zone} - Min Order CHF ${zoneInfo.minimumOrder.toFixed(2)}, Delivery CHF ${zoneInfo.deliveryFee.toFixed(2)}`}
                            >
                              {zoneInfo.zipcodes.map((zipcode) => (
                                <option key={zipcode} value={zipcode}>
                                  {zipcode}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                        {(touched.zipcode || hasAttemptedCheckout) && formErrors.zipcode && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.zipcode}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          value={customerInfo.street}
                          onChange={(e) => handleInputChange('street', e.target.value)}
                          onBlur={() => handleFieldBlur('street')}
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-primary transition-all"
                          placeholder="Enter street address"
                        />
                        {(touched.street || hasAttemptedCheckout) && formErrors.street && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.street}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          value={customerInfo.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          onBlur={() => handleFieldBlur('city')}
                          className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-primary transition-all"
                          placeholder="Enter city"
                        />
                        {(touched.city || hasAttemptedCheckout) && formErrors.city && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Special Instructions */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Instructions ({customerInfo.specialInstructions.length}/500)
                    </label>
                    <textarea
                      value={customerInfo.specialInstructions}
                      onChange={(e) => {
                        if (e.target.value.length <= 500) {
                          handleInputChange('specialInstructions', e.target.value);
                        }
                      }}
                      rows={3}
                      maxLength={500}
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-primary transition-all resize-none"
                      placeholder="Any special delivery instructions, dietary requirements, or notes..."
                    />
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

                {minimumOrderError && (
                  <div className="text-center text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                    Minimum order requirement not met: {minimumOrderError}
                  </div>
                )}

                {/* Form validation message */}
                {hasAttemptedCheckout && !isFormValid && items.length > 0 && (
                  <div className="text-center text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                    Please fill in all required customer information to proceed with checkout.
                  </div>
                )}

                {/* Order error message */}
                {orderError && (
                  <div className="text-center text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                    <strong>Order Failed:</strong> {orderError}
                  </div>
                )}

                <div className="flex justify-center">
                  {!showStripeCheckout && paymentMethod === 'stripe' && (
                    <button
                      onClick={handleCheckout}
                      disabled={!isFormValid || items.length === 0 || !!minimumOrderError}
                      className="w-1/3 mx-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      Pay Now (Stripe)
                    </button>
                  )}
                  <StripeCheckoutModal
                    show={showStripeCheckout && paymentMethod === 'stripe'}
                    onClose={handleCloseStripeCheckout}
                    cartItems={items}
                    customerInfo={customerInfo}
                    orderContext={orderContext}
                  />
                  {paymentMethod === 'cod' && (
                    <button
                      onClick={handleCheckout}
                      disabled={!isFormValid || items.length === 0 || isProcessingOrder || !!minimumOrderError}
                      className="w-1/3 mx-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isProcessingOrder ? (
                        <span className="flex items-center justify-center">
                          <i className="ri-loader-4-line animate-spin mr-2"></i>
                          Processing Order...
                        </span>
                      ) : (
                        'Place Order (COD)'
                      )}
                    </button>
                  )}
                  <button
                    onClick={handleClearCart}
                    className="w-1/3 mx-auto bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
