// Razorpay Integration Configuration
export const razorpayConfig = {
  keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
  keySecret: process.env.RAZORPAY_KEY_SECRET || '',
};

export interface PaymentData {
  amount: number; // in smallest currency unit (paise for INR, centimes for CHF)
  currency: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

export const createPaymentOrder = async (paymentData: PaymentData) => {
  try {
    // In a real implementation, this would be an API call to your backend
    // which would create a Razorpay order and return the order details
    const response = await fetch('/api/create-payment-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
      throw new Error('Failed to create payment order');
    }

    return await response.json();
  } catch (error) {
    console.error('Payment order creation error:', error);
    throw error;
  }
};

export const handlePaymentSuccess = async (paymentDetails: any) => {
  try {
    // Send payment confirmation to backend
    const response = await fetch('/api/confirm-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentDetails),
    });

    if (!response.ok) {
      throw new Error('Payment confirmation failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Payment confirmation error:', error);
    throw error;
  }
};