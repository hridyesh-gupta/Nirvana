import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/emailService';
import { generateCustomerOrderEmail, generateCustomerOrderEmailText } from '@/lib/emailTemplates';
import { OrderEmailData } from '@/lib/types/order';

export async function POST(request: NextRequest) {
  try {
    // Check for internal API key authentication
    const internalKey = request.headers.get('X-Internal-Key');
    const expectedKey = process.env.INTERNAL_API_KEY;
    
    if (expectedKey && internalKey !== expectedKey) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Unauthorized: Invalid internal API key' 
        },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    // Validate required fields
    if (!body.to || !body.subject || !body.orderData) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields: to, subject, and orderData are required' 
        },
        { status: 400 }
      );
    }

    const { to, subject, orderData } = body;

    // Validate orderData structure
    if (!orderData.orderNumber || !orderData.customerName || !orderData.customerEmail) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid orderData: orderNumber, customerName, and customerEmail are required' 
        },
        { status: 400 }
      );
    }

    // Generate HTML email content
    const htmlContent = generateCustomerOrderEmail(orderData as OrderEmailData);
    
    // Generate plain text fallback
    const textContent = generateCustomerOrderEmailText(orderData as OrderEmailData);

    // Send email
    const result = await sendEmail({
      to,
      subject,
      html: htmlContent,
      text: textContent,
    });

    if (!result.success) {
      console.error('Failed to send order confirmation email:', {
        orderNumber: orderData.orderNumber,
        customerEmail: to,
        error: result.error,
      });
      
      return NextResponse.json(
        { 
          success: false, 
          error: result.error || 'Failed to send email' 
        },
        { status: 500 }
      );
    }

    // Log successful email sending
    console.log('Order confirmation email sent successfully:', {
      orderNumber: orderData.orderNumber,
      customerEmail: to,
      messageId: result.messageId,
    });

    return NextResponse.json({
      success: true,
      message: 'Order confirmation email sent successfully',
      messageId: result.messageId,
    });

  } catch (error) {
    console.error('Error in send-order-email API:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { 
      success: false, 
      error: 'Method not allowed. Use POST to send emails.' 
    },
    { status: 405 }
  );
}
