import { NextRequest, NextResponse } from 'next/server';
import { sendOrderConfirmationEmail, sendOwnerNotificationEmail } from '@/lib/email';
import { sendOrderConfirmationEmailDirect, sendOwnerNotificationEmailDirect, isEmailConfigured } from '@/lib/emailService';
import { OrderEmailData } from '@/lib/types/order';

interface TestEmailRequest {
  to: string;
  type: 'customer' | 'owner';
  useDirect?: boolean; // Default: true
}

// Mock order data for testing
const createMockOrderData = (): OrderEmailData => ({
  orderNumber: 'TEST-' + Date.now().toString().slice(-6),
  customerName: 'Test Customer',
  customerEmail: 'test@example.com',
  customerPhone: '+41 22 123 45 67',
  orderType: 'delivery',
  items: [
    {
      name: 'Butter Chicken',
      quantity: 2,
      price: 18.50,
      selectedSauce: 'Medium Spicy',
    },
    {
      name: 'Garlic Naan',
      quantity: 1,
      price: 4.50,
    },
    {
      name: 'Pista Kulfi',
      quantity: 1,
      price: 6.00,
      selectedFlavor: 'Pistachio',
    }
  ],
  subtotal: 47.50,
  deliveryFee: 3.00,
  discount: 0.00,
  total: 50.50,
  deliveryAddress: 'Test Street 123, 1200 Geneva, Switzerland',
  specialInstructions: 'Please ring the doorbell twice. This is a test order.',
  paymentMethod: 'stripe',
  paymentStatus: 'paid',
  createdAt: new Date(),
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Check authentication
    const authHeader = request.headers.get('X-Internal-Key');
    const expectedKey = process.env.INTERNAL_API_KEY;
    
    if (!expectedKey) {
      return NextResponse.json(
        { success: false, error: 'INTERNAL_API_KEY not configured' },
        { status: 500 }
      );
    }
    
    if (!authHeader || authHeader !== expectedKey) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized. Valid X-Internal-Key header required.' },
        { status: 401 }
      );
    }

    // Parse request body
    const body: TestEmailRequest = await request.json();
    const { to, type, useDirect = true } = body;

    // Validate request
    if (!to || !type) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: to, type' },
        { status: 400 }
      );
    }

    if (!['customer', 'owner'].includes(type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid type. Must be "customer" or "owner"' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create mock order data
    const mockOrderData = createMockOrderData();
    
    // Override email for testing
    if (type === 'customer') {
      mockOrderData.customerEmail = to;
    }

    console.log(`Sending test ${type} email to:`, to, `using ${useDirect ? 'direct' : 'HTTP'} method`);

    // Send appropriate email
    let result;
    const method = useDirect ? 'direct' : 'HTTP';
    
    if (type === 'customer') {
      if (useDirect) {
        result = await sendOrderConfirmationEmailDirect(mockOrderData);
      } else {
        result = await sendOrderConfirmationEmail(mockOrderData);
      }
    } else {
      if (useDirect) {
        result = await sendOwnerNotificationEmailDirect(mockOrderData);
      } else {
        result = await sendOwnerNotificationEmail(mockOrderData);
      }
    }

    // Get diagnostic information
    const smtpConfigured = isEmailConfigured();
    const ownerEmail = process.env.OWNER_EMAIL || 'orders@nirvana-geneve.ch';
    const timestamp = new Date().toISOString();

    if (result.success) {
      return NextResponse.json({
        success: true,
        messageId: result.messageId,
        message: `Test ${type} email sent successfully to ${to}`,
        orderNumber: mockOrderData.orderNumber,
        diagnostics: {
          method,
          smtpConfigured,
          ownerEmail,
          timestamp
        }
      });
    } else {
      return NextResponse.json(
        { 
          success: false, 
          error: result.error || 'Failed to send test email',
          message: `Test ${type} email failed: ${result.error}`,
          diagnostics: {
            method,
            smtpConfigured,
            ownerEmail,
            timestamp
          }
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Test email endpoint error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        message: 'Test email endpoint failed' 
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { 
      success: false, 
      error: 'Method not allowed. Use POST with X-Internal-Key header.',
      message: 'This endpoint requires POST method with authentication' 
    },
    { status: 405 }
  );
}
