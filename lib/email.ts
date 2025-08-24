// Email notification configuration
export interface OrderNotification {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  orderType: 'delivery' | 'pickup';
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  paymentMethod: 'razorpay' | 'cod';
  address?: string;
  specialInstructions?: string;
}

export const sendOrderConfirmationEmail = async (orderData: OrderNotification) => {
  try {
    // In a real implementation, this would send emails using a service like SendGrid, Nodemailer, etc.
    const response = await fetch('/api/send-order-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: orderData.customerEmail,
        subject: `Order Confirmation - Nirvana Restaurant #${orderData.orderId}`,
        orderData,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send confirmation email');
    }

    return await response.json();
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

export const sendPaymentNotificationEmail = async (paymentData: any) => {
  try {
    // Send payment confirmation email to restaurant
    const response = await fetch('/api/send-payment-notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'orders@nirvana-geneve.ch', // Restaurant email
        subject: `Payment Received - Order #${paymentData.orderId}`,
        paymentData,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send payment notification');
    }

    return await response.json();
  } catch (error) {
    console.error('Payment notification error:', error);
    throw error;
  }
};