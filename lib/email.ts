// Import the shared order data type
import { OrderEmailData } from './types/order';

/**
 * Get base URL for API calls (works both client-side and server-side)
 */
const getBaseUrl = (): string => {
  if (typeof window !== 'undefined') return '';
  const vercel = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
  const app = process.env.NEXT_PUBLIC_APP_URL; // e.g., https://nirvana.example.com
  return app || vercel || 'http://localhost:3000';
};

/**
 * Send order confirmation email to customer
 * @param orderData - Order information to include in the confirmation email
 * @returns Promise with email sending result
 */
export const sendOrderConfirmationEmail = async (orderData: OrderEmailData): Promise<{ success: boolean; error?: string; messageId?: string }> => {
  try {
    console.log('Sending order confirmation email:', {
      orderNumber: orderData.orderNumber,
      customerEmail: orderData.customerEmail,
    });

    const base = getBaseUrl();
    const response = await fetch(`${base}/api/send-order-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(typeof window === 'undefined' && process.env.INTERNAL_API_KEY && {
          'X-Internal-Key': process.env.INTERNAL_API_KEY,
        }),
      },
      body: JSON.stringify({
        to: orderData.customerEmail,
        subject: `Order Confirmation - Nirvana Restaurant #${orderData.orderNumber}`,
        orderData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${response.status}: Failed to send confirmation email`);
    }

    const result = await response.json();
    console.log('Order confirmation email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('Order confirmation email sending error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};

/**
 * Send order notification email to restaurant owner
 * @param orderData - Order information to include in the notification email
 * @returns Promise with email sending result
 */
export const sendOwnerNotificationEmail = async (orderData: OrderEmailData): Promise<{ success: boolean; error?: string; messageId?: string }> => {
  try {
    console.log('Sending owner notification email:', {
      orderNumber: orderData.orderNumber,
      customerName: orderData.customerName,
    });

    const base = getBaseUrl();
    const response = await fetch(`${base}/api/send-notification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(typeof window === 'undefined' && process.env.INTERNAL_API_KEY && {
          'X-Internal-Key': process.env.INTERNAL_API_KEY,
        }),
      },
      body: JSON.stringify({
        to: process.env.OWNER_EMAIL || 'orders@nirvana-geneve.ch',
        subject: `New Order Received - Nirvana Restaurant #${orderData.orderNumber}`,
        orderData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${response.status}: Failed to send owner notification`);
    }

    const result = await response.json();
    console.log('Owner notification email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('Owner notification email sending error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};

/**
 * Helper function to format order data from database for email templates
 * @param dbOrder - Order data from database (Prisma Order model)
 * @returns Formatted order data for email templates
 */
export const formatOrderDataForEmail = (dbOrder: any): OrderEmailData => {
  return {
    orderNumber: dbOrder.orderNumber,
    customerName: dbOrder.customerName,
    customerEmail: dbOrder.customerEmail,
    customerPhone: dbOrder.customerPhone,
    orderType: dbOrder.orderType,
    items: dbOrder.items.map((item: any) => ({
      name: item.productName,
      quantity: item.quantity,
      price: parseFloat(item.price.toString()),
      selectedSauce: item.selectedSauce,
      selectedFlavor: item.selectedFlavor,
      selectedMixOption: item.selectedMixOption,
    })),
    subtotal: parseFloat(dbOrder.subtotal.toString()),
    deliveryFee: parseFloat(dbOrder.deliveryFee.toString()),
    discount: parseFloat(dbOrder.discount.toString()),
    total: parseFloat(dbOrder.total.toString()),
    deliveryAddress: dbOrder.deliveryAddress ? 
      `${dbOrder.deliveryAddress}${dbOrder.city ? `, ${dbOrder.city}` : ''}${dbOrder.postalCode ? ` ${dbOrder.postalCode}` : ''}` : 
      undefined,
    specialInstructions: dbOrder.specialInstructions,
    paymentMethod: dbOrder.paymentMethod,
    paymentStatus: dbOrder.paymentStatus,
    createdAt: dbOrder.createdAt,
  };
};