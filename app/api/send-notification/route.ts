import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/emailService';
import { generateOwnerNotificationEmail, generateOwnerNotificationEmailText } from '@/lib/emailTemplates';
import { OrderEmailData } from '@/lib/types/order';

export async function POST(request: NextRequest) {
  try {
    // Check for internal API key authentication
    const internalKey = request.headers.get('X-Internal-Key');
    const expectedKey = process.env.INTERNAL_API_KEY;
    
    // Enforce authentication unconditionally in production
    if (process.env.NODE_ENV === 'production') {
      if (!expectedKey) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Server misconfiguration: INTERNAL_API_KEY is required in production' 
          },
          { status: 500 }
        );
      }
      
      if (internalKey !== expectedKey) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Unauthorized: Invalid internal API key' 
          },
          { status: 401 }
        );
      }
    } else {
      // Development mode: warn if key is missing but allow requests for local testing
      if (!expectedKey) {
        console.warn('Warning: INTERNAL_API_KEY is not set. Allowing unauthenticated access in development mode.');
      } else if (internalKey !== expectedKey) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Unauthorized: Invalid internal API key' 
          },
          { status: 401 }
        );
      }
    }

    const body = await request.json();
    
    // Validate required fields
    if (!body.orderData) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required field: orderData is required' 
        },
        { status: 400 }
      );
    }

    const { to, subject, orderData } = body;

    // Use provided email or fallback to environment variable
    const recipientEmail = to || process.env.OWNER_EMAIL || 'orders@nirvana-geneve.ch';
    
    // Use provided subject or generate default
    const emailSubject = subject || `New Order Received - Nirvana Restaurant #${orderData.orderNumber}`;

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

    // Generate HTML email content for owner notification
    const htmlContent = generateOwnerNotificationEmail(orderData as OrderEmailData);
    
    // Generate plain text fallback
    const textContent = generateOwnerNotificationEmailText(orderData as OrderEmailData);

    // Send email
    const result = await sendEmail({
      to: recipientEmail,
      subject: emailSubject,
      html: htmlContent,
      text: textContent,
    });

    if (!result.success) {
      console.error('Failed to send owner notification email:', {
        orderNumber: orderData.orderNumber,
        ownerEmail: recipientEmail,
        error: result.error,
      });
      
      return NextResponse.json(
        { 
          success: false, 
          error: result.error || 'Failed to send notification email' 
        },
        { status: 500 }
      );
    }

    // Log successful email sending
    console.log('Owner notification email sent successfully:', {
      orderNumber: orderData.orderNumber,
      ownerEmail: recipientEmail,
      messageId: result.messageId,
    });

    return NextResponse.json({
      success: true,
      message: 'Owner notification email sent successfully',
      messageId: result.messageId,
    });

  } catch (error) {
    console.error('Error in send-notification API:', error);
    
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
      error: 'Method not allowed. Use POST to send notifications.' 
    },
    { status: 405 }
  );
}
