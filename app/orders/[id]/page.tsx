import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import Link from 'next/link';
import {
  OrderTrackingText,
  OrderStatusLabel,
  OrderStatusDescription,
  OrderTypeText,
  OrderPaymentMethodText,
  OrderPaymentStatusText,
} from '../../components/OrderTrackingTexts';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

interface OrderTrackingPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Order status timeline configuration (labels/descriptions are provided by OrderTrackingTexts)
const orderStatusTimeline = [
  { status: 'pending' },
  { status: 'confirmed' },
  { status: 'preparing' },
  { status: 'out_for_delivery' },
  { status: 'delivered' },
  { status: 'cancelled' },
];

const getStatusIndex = (status: string): number => {
  return orderStatusTimeline.findIndex(item => item.status === status);
};

const formatCurrency = (amount: number): string => {
  return `CHF ${amount.toFixed(2)}`;
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export default async function OrderTrackingPage({ params }: OrderTrackingPageProps) {
  try {
    const { id } = await params;
    // Fetch order with items from database
    const order = await prisma.order.findUnique({
      where: { id },
      include: { items: true }
    });

    if (!order) {
      notFound();
    }

    const currentStatusIndex = getStatusIndex(order.status);
    const isCompleted = order.status === 'delivered' || order.status === 'cancelled';

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              <OrderTrackingText id="header.title" />
            </h1>
            <p className="text-gray-600">
              <OrderTrackingText id="header.subtitle" />
            </p>
          </div>

          {/* Order Summary Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  <OrderTrackingText id="summary.orderLabel" /> #{order.orderNumber}
                </h2>
                <p className="text-gray-600">
                  <OrderTrackingText id="summary.placedOn" /> {formatDate(order.createdAt)}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  isCompleted 
                    ? order.status === 'delivered' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  <OrderStatusLabel status={order.status} fallback={order.status} />
                </span>
              </div>
            </div>

            {/* Customer Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  <OrderTrackingText id="customer.title" />
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-600">
                    <span className="font-medium">
                      <OrderTrackingText id="customer.nameLabel" />
                    </span>{' '}
                    {order.customerName}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">
                      <OrderTrackingText id="customer.emailLabel" />
                    </span>{' '}
                    {order.customerEmail}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">
                      <OrderTrackingText id="customer.phoneLabel" />
                    </span>{' '}
                    {order.customerPhone}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  <OrderTrackingText id="details.title" />
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-600">
                    <span className="font-medium">
                      <OrderTrackingText id="details.typeLabel" />
                    </span>{' '}
                    <OrderTypeText orderType={order.orderType} />
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">
                      <OrderTrackingText id="details.paymentLabel" />
                    </span>{' '}
                    <OrderPaymentMethodText method={order.paymentMethod} />
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">
                      <OrderTrackingText id="details.paymentStatusLabel" />
                    </span>{' '}
                    <OrderPaymentStatusText status={order.paymentStatus} />
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Address (if applicable) */}
            {order.orderType === 'delivery' && order.deliveryAddress && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  <OrderTrackingText id="delivery.title" />
                </h3>
                <p className="text-gray-600">
                  {order.deliveryAddress}
                  {order.city && `, ${order.city}`}
                  {order.postalCode && ` ${order.postalCode}`}
                </p>
              </div>
            )}

            {/* Special Instructions */}
            {order.specialInstructions && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  <OrderTrackingText id="special.title" />
                </h3>
                <p className="text-gray-600">{order.specialInstructions}</p>
              </div>
            )}
          </div>

          {/* Order Status Timeline */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              <OrderTrackingText id="timeline.title" />
            </h3>
            <div className="space-y-4">
              {orderStatusTimeline.map((item, index) => {
                const isActive = index <= currentStatusIndex;
                const isCurrent = index === currentStatusIndex;
                
                return (
                  <div key={item.status} className="flex items-start">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isActive 
                        ? isCurrent 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {isActive ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="text-xs font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div className="ml-4">
                      <p className={`font-medium ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                        <OrderStatusLabel status={item.status} />
                      </p>
                      <p className={`text-sm ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                        <OrderStatusDescription status={item.status} />
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              <OrderTrackingText id="items.title" />
            </h3>
            <div className="space-y-4">
              {order.items.map((item: any) => (
                <div key={item.id} className="flex justify-between items-start border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.productName}</h4>
                    <p className="text-sm text-gray-600">
                      <OrderTrackingText id="items.quantityLabel" /> {item.quantity}
                    </p>
                    {item.selectedSauce && (
                      <p className="text-sm text-gray-600">
                        <OrderTrackingText id="items.sauceLabel" /> {item.selectedSauce}
                      </p>
                    )}
                    {item.selectedFlavor && (
                      <p className="text-sm text-gray-600">
                        <OrderTrackingText id="items.flavorLabel" /> {item.selectedFlavor}
                      </p>
                    )}
                    {item.selectedMixOption && (
                      <p className="text-sm text-gray-600">
                        <OrderTrackingText id="items.mixLabel" /> {item.selectedMixOption}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{formatCurrency(parseFloat(item.price.toString()))}</p>
                    <p className="text-sm text-gray-600">× {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Totals */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    <OrderTrackingText id="totals.subtotalLabel" />
                  </span>
                  <span className="text-gray-900">{formatCurrency(parseFloat(order.subtotal.toString()))}</span>
                </div>
                {parseFloat(order.deliveryFee.toString()) > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      <OrderTrackingText id="totals.deliveryFeeLabel" />
                    </span>
                    <span className="text-gray-900">{formatCurrency(parseFloat(order.deliveryFee.toString()))}</span>
                  </div>
                )}
                {parseFloat(order.discount.toString()) > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      <OrderTrackingText id="totals.discountLabel" />
                    </span>
                    <span className="text-gray-900">-{formatCurrency(parseFloat(order.discount.toString()))}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-200">
                  <span>
                    <OrderTrackingText id="totals.totalLabel" />
                  </span>
                  <span>{formatCurrency(parseFloat(order.total.toString()))}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              <OrderTrackingText id="actions.backToMenu" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              <OrderTrackingText id="actions.contactUs" />
            </Link>
          </div>

          {/* Auto-refresh notice */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              <OrderTrackingText id="autoRefresh.notice" />
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching order:', error);
    notFound();
  }
}
