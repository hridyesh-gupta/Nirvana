import { redirect } from 'next/navigation';
import { prisma } from '@/lib/db';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import RefreshButton from '../components/RefreshButton';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Return({ searchParams }: { searchParams?: Promise<Record<string, string | string[] | undefined>> }) {
  const resolvedSearchParams = await searchParams;
  const sessionIdParam = resolvedSearchParams?.session_id;
  const orderNumberParam = resolvedSearchParams?.orderNumber;
  const session_id = Array.isArray(sessionIdParam) ? sessionIdParam[0] : sessionIdParam;
  const orderNumber = Array.isArray(orderNumberParam) ? orderNumberParam[0] : orderNumberParam;

  if (!session_id && !orderNumber) {
    redirect('/'); // Redirect to home if no session ID or order number
  }

  // CHF currency formatter
  const chf = new Intl.NumberFormat('de-CH', { style: 'currency', currency: 'CHF' });

  try {
    // Query order from database - use session_id for Stripe orders, orderNumber for COD orders
    let order;
    if (session_id) {
      order = await prisma.order.findUnique({
        where: { stripeSessionId: session_id },
        include: { items: true }
      });
    } else if (orderNumber) {
      order = await prisma.order.findUnique({
        where: { orderNumber: orderNumber },
        include: { items: true }
      });
    }

    if (!order) {
      // Order not found - might be webhook processing delay (for Stripe) or order not found
      return (
        <div className="min-h-screen bg-white">
          <Navigation />
          <main className="pt-1">
            <div className="w-full">
              <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-loader-4-line text-4xl text-blue-600 animate-spin"></i>
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Processing Your Order</h1>
                <p className="text-lg text-gray-600 mb-4">We're retrieving your order details...</p>
                <p className="text-sm text-gray-500 mb-8">If it's taking too long, please refresh the page using the button below.
                </p>
                <div className="space-x-4">
                  <Link href="/" className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:from-primary/90 hover:to-secondary/90 transition-all">
                    Go to Home
                  </Link>
                  {session_id && <RefreshButton sessionId={session_id} />}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    }

    // Calculate estimated time
    const now = new Date();
    const estimatedDeliveryTime = new Date(now.getTime() + (order.orderType === 'delivery' ? 45 : 20) * 60000);
    const timeString = estimatedDeliveryTime.toLocaleTimeString('en-CH', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false,
      timeZone: 'Europe/Zurich'
    });

    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-1">
          <div className="w-full">
            <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-primary font-['fairdisplay']">
                Order Confirmed!
              </h1>
              <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
            </div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
              {/* Success Header */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-3xl text-green-600"></i>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-green-800 text-center mb-2">
                  {order.paymentMethod === 'stripe' ? 'Payment Successful!' : 'Order Confirmed!'}
                </h2>
                <p className="text-green-700 text-center">Your order has been confirmed and is being prepared.</p>
              </div>

              {/* Order Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Order Info */}
                <div className="space-y-6">
                  {/* Order Number & Timestamp */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Order Number:</span>
                        <span className="font-semibold text-gray-800">{order.orderNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Order Date:</span>
                        <span className="font-medium text-gray-800">
                          {order.createdAt.toLocaleDateString('en-CH', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            timeZone: 'Europe/Zurich'
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Order Time:</span>
                        <span className="font-medium text-gray-800">
                          {order.createdAt.toLocaleTimeString('en-CH', { 
                            hour: '2-digit', 
                            minute: '2-digit',
                            hour12: false,
                            timeZone: 'Europe/Zurich'
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Order Type:</span>
                        <span className="font-medium text-gray-800 capitalize">{order.orderType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Information</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-gray-600">Name:</span>
                        <p className="font-medium text-gray-800">{order.customerName}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Email:</span>
                        <p className="font-medium text-gray-800">{order.customerEmail}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Phone:</span>
                        <p className="font-medium text-gray-800">{order.customerPhone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Address (if delivery) */}
                  {order.orderType === 'delivery' && order.deliveryAddress && (
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <i className="ri-map-pin-line text-primary mr-2"></i>
                        Delivery Address
                      </h3>
                      <div className="space-y-2">
                        <p className="font-medium text-gray-800">{order.deliveryAddress}</p>
                        <p className="text-gray-600">{order.postalCode} {order.city}</p>
                        {order.specialInstructions && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <span className="text-gray-600 text-sm">Special Instructions:</span>
                            <p className="text-gray-800 text-sm mt-1">{order.specialInstructions}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Payment Information */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payment Method:</span>
                        <span className="font-medium text-gray-800 capitalize">
                          {order.paymentMethod === 'stripe' ? 'Online Payment (Stripe)' : 'Cash on Delivery'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payment Status:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                          order.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                        </span>
                      </div>
                      {order.paymentMethod === 'cod' && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-3">
                          <p className="text-yellow-800 text-sm">
                            <i className="ri-information-line mr-1"></i>
                            Please prepare cash payment for when your order arrives.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - Order Items & Summary */}
                <div className="space-y-6">
                  {/* Order Items */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Items</h3>
                    <div className="space-y-4">
                      {order.items.map((item: typeof order.items[number]) => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 bg-white rounded-xl">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">
                              {item.productName}
                              {item.selectedSauce && ` (${item.selectedSauce})`}
                              {item.selectedFlavor && ` (${item.selectedFlavor})`}
                              {item.selectedMixOption && ` (${item.selectedMixOption})`}
                            </h4>
                            <p className="text-sm text-gray-600">{chf.format(Number(item.price))} each</p>
                          </div>
                          <div className="text-center">
                            <span className="font-medium text-gray-800">×{item.quantity}</span>
                          </div>
                          <div className="font-semibold text-gray-800 min-w-[80px] text-right">
                            {chf.format(Number(item.price) * item.quantity)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Summary */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-medium">{chf.format(Number(order.subtotal))}</span>
                      </div>
                      {order.orderType === 'delivery' && Number(order.deliveryFee) > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Fee:</span>
                          <span className="font-medium">{chf.format(Number(order.deliveryFee))}</span>
                        </div>
                      )}
                      {Number(order.discount) > 0 && (
                        <div className="flex justify-between text-secondary">
                          <span>Discount:</span>
                          <span className="font-medium">-{chf.format(Number(order.discount))}</span>
                        </div>
                      )}
                      <div className="border-t border-gray-200 pt-2">
                        <div className="flex justify-between font-semibold text-lg">
                          <span>Total:</span>
                          <span>{chf.format(Number(order.total))}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Estimated Time */}
                  <div className={`rounded-xl p-6 ${
                    order.orderType === 'delivery' ? 'bg-blue-50 border border-blue-200' : 'bg-green-50 border border-green-200'
                  }`}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <i className={`ri-${order.orderType === 'delivery' ? 'truck' : 'store'}-line mr-2 ${
                        order.orderType === 'delivery' ? 'text-blue-600' : 'text-green-600'
                      }`}></i>
                      {order.orderType === 'delivery' ? 'Estimated Delivery' : 'Ready for Pickup'}
                    </h3>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-800 mb-2">{timeString}</p>
                      <p className="text-gray-600">
                        {order.orderType === 'delivery' 
                          ? 'Your order will be delivered within 30-45 minutes'
                          : 'Your order will be ready for pickup in 15-20 minutes'
                        }
                      </p>
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">What's Next?</h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      {order.orderType === 'delivery' ? (
                        <>
                          <p>• Your order is being prepared by our kitchen team</p>
                          <p>• We'll contact you when your order is out for delivery</p>
                          <p>• Please ensure someone is available to receive the order</p>
                        </>
                      ) : (
                        <>
                          <p>• Your order is being prepared by our kitchen team</p>
                          <p>• We'll contact you when it's ready for pickup</p>
                          <p>• Please arrive at our location to collect your order</p>
                          <div className="mt-4 p-3 bg-white rounded-lg">
                            <p className="font-medium text-gray-800">Nirvana Restaurant</p>
                            <p className="text-gray-600">375, Route de Meyrin</p>
                            <p className="text-gray-600">1217 Meyrin, Geneva, Switzerland</p>
                            <p className="text-gray-600">Phone: 022 782 10 10</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mt-8">
                <Link 
                  href="/" 
                  className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Go to Home
                </Link>
                <Link 
                  href="/menu" 
                  className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  View Menu
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );

  } catch (error) {
    console.error('Error retrieving order:', error);
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-1">
          <div className="w-full">
            <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-error-warning-line text-4xl text-red-600"></i>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Something went wrong</h1>
              <p className="text-lg text-gray-600 mb-4">We encountered an error retrieving your order details.</p>
              <p className="text-sm text-gray-500 mb-8">
                {session_id ? `Session ID: ${session_id}` : orderNumber ? `Order Number: ${orderNumber}` : ''}
              </p>
              <div className="space-x-4">
                <Link href="/" className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:from-primary/90 hover:to-secondary/90 transition-all">
                  Go to Home
                </Link>
                <Link href="/contact" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}