import nodemailer from 'nodemailer';
import { generateCustomerOrderEmail, generateCustomerOrderEmailText, generateOwnerNotificationEmail, generateOwnerNotificationEmailText } from './emailTemplates';
import type { OrderEmailData } from './types/order';

// Email sending configuration and utility functions
export interface EmailParams {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export interface EmailResponse {
  success: boolean;
  error?: string;
  messageId?: string;
}

/**
 * Check if email configuration is properly set up
 * @returns boolean indicating if email is configured
 */
export const isEmailConfigured = (): boolean => {
  return !!(process.env.SMTP_HOST && process.env.SMTP_PORT && 
            process.env.SMTP_USER && process.env.SMTP_PASSWORD);
};

// Create nodemailer transporter
const createTransporter = (): nodemailer.Transporter | null => {
  // Check if SMTP credentials are configured
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
    if (process.env.NODE_ENV === 'production') {
      console.error('CRITICAL: SMTP credentials not configured in production!');
    } else {
      console.warn('SMTP credentials not configured. Email sending will be logged to console only.');
    }
    return null;
  }

  // Configure TLS based on environment
  // In production, use strict TLS verification; in development, allow self-signed certificates
  const isProduction = process.env.NODE_ENV === 'production';
  const transportConfig: any = {
    host: smtpHost,
    port: parseInt(smtpPort),
    secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
  };
  
  // Only set rejectUnauthorized: false in non-production environments
  if (!isProduction) {
    transportConfig.tls = {
      rejectUnauthorized: false, // For development/testing with self-signed certificates
    };
    console.warn('Warning: Running with relaxed TLS verification (rejectUnauthorized: false). This should only be used in development.');
  }
  
  return nodemailer.createTransport(transportConfig);
};

/**
 * Check if an error is a transient network error that should be retried
 * @param error - The error to check
 * @returns true if the error is transient and should be retried
 */
const isTransientError = (error: any): boolean => {
  if (!error) return false;
  
  const errorCode = error.code;
  const errorMessage = error.message?.toLowerCase() || '';
  
  // Transient network errors that should be retried
  const transientErrorCodes = ['ETIMEDOUT', 'ECONNRESET', 'ECONNREFUSED', 'ENOTFOUND', 'EAI_AGAIN'];
  const transientErrorMessages = ['timeout', 'connection reset', 'connection refused', 'network', 'temporary'];
  
  // Check error code
  if (errorCode && transientErrorCodes.includes(errorCode)) {
    return true;
  }
  
  // Check error message
  if (transientErrorMessages.some(msg => errorMessage.includes(msg))) {
    return true;
  }
  
  // Do not retry authentication or validation errors
  if (errorCode === 'EAUTH' || errorMessage.includes('authentication') || 
      errorMessage.includes('invalid login') || errorMessage.includes('invalid recipient') ||
      errorMessage.includes('invalid address')) {
    return false;
  }
  
  return false;
};

/**
 * Send email using nodemailer with SMTP configuration
 * @param params - Email parameters including recipient, subject, and content
 * @returns Promise with success status and optional error message
 */
export const sendEmail = async (params: EmailParams): Promise<EmailResponse> => {
  const transporter = createTransporter();
  
  if (!transporter) {
    // Development mode - log email to console
    console.log('=== EMAIL WOULD BE SENT ===');
    console.log('To:', params.to);
    console.log('Subject:', params.subject);
    console.log('HTML Content:', params.html);
    console.log('Text Content:', params.text || 'No text version provided');
    console.log('===========================');
    
    return {
      success: true,
      messageId: 'console-log-' + Date.now(),
    };
  }

  const fromName = process.env.SMTP_FROM_NAME || 'Nirvana Restaurant';
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;
  
  const mailOptions = {
    from: `${fromName} <${fromEmail}>`,
    to: params.to,
    subject: params.subject,
    html: params.html,
    text: params.text || stripHtml(params.html),
  };

  // Retry logic for transient errors
  const maxRetries = 2;
  const retryDelays = [500, 1000]; // Exponential backoff: 500ms, 1000ms
  
  let lastError: any = null;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await transporter.sendMail(mailOptions);
      
      if (attempt > 0) {
        console.log(`Email sent successfully on retry attempt ${attempt}:`, {
          messageId: result.messageId,
          to: params.to,
          subject: params.subject,
          timestamp: new Date().toISOString()
        });
      } else {
        console.log('Email sent successfully:', {
          messageId: result.messageId,
          to: params.to,
          subject: params.subject,
        });
      }
      
      return {
        success: true,
        messageId: result.messageId,
      };
    } catch (error) {
      lastError = error;
      
      // Check if this is a transient error and we have retries left
      if (attempt < maxRetries && isTransientError(error)) {
        const delay = retryDelays[attempt];
        const timestamp = new Date().toISOString();
        
        console.warn(`Email send attempt ${attempt + 1} failed with transient error. Retrying in ${delay}ms:`, {
          timestamp,
          recipient: params.to,
          subject: params.subject,
          error: error instanceof Error ? {
            message: error.message,
            code: (error as any).code
          } : error,
          nextRetryIn: `${delay}ms`
        });
        
        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      // If not a transient error or no retries left, break and handle error
      break;
    }
  }
  
  // Handle final error (after all retries exhausted or non-transient error)
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const timestamp = new Date().toISOString();
  
  // Enhanced error logging
  console.error('Email sending failed:', {
    timestamp,
    recipient: params.to,
    subject: params.subject,
    smtpHost: smtpHost || 'NOT CONFIGURED',
    smtpPort: smtpPort || 'NOT CONFIGURED',
    smtpUser: smtpUser || 'NOT CONFIGURED',
    smtpPasswordConfigured: !!smtpPassword,
    error: lastError instanceof Error ? {
      message: lastError.message,
      code: (lastError as any).code,
      stack: lastError.stack
    } : lastError
  });
  
  // Specific error messages for common issues
  let errorMessage = 'Unknown error occurred while sending email';
  if (lastError instanceof Error) {
    const errorCode = (lastError as any).code;
    const errorMessageLower = lastError.message.toLowerCase();
    
    if (errorCode === 'EAUTH' || errorMessageLower.includes('authentication') || errorMessageLower.includes('invalid login')) {
      errorMessage = 'SMTP authentication failed. Check SMTP_USER and SMTP_PASSWORD.';
    } else if (errorCode === 'ETIMEDOUT' || errorCode === 'ECONNREFUSED' || errorMessageLower.includes('timeout') || errorMessageLower.includes('connection')) {
      errorMessage = 'SMTP connection timeout. Check SMTP_HOST and SMTP_PORT.';
    } else if (errorMessageLower.includes('invalid recipient') || errorMessageLower.includes('invalid address')) {
      errorMessage = 'Invalid recipient email address.';
    } else {
      errorMessage = `Email sending failed: ${lastError.message}. Check SMTP configuration.`;
    }
  }
  
  return {
    success: false,
    error: errorMessage
  };
};

/**
 * Simple HTML to text converter for email fallback
 * @param html - HTML string to convert
 * @returns Plain text version
 */
const stripHtml = (html: string): string => {
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace non-breaking spaces
    .replace(/&amp;/g, '&') // Replace HTML entities
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
};

/**
 * Send order confirmation email directly to customer (server-side only)
 * @param orderData - Order information to include in the confirmation email
 * @returns Promise with email sending result
 */
export const sendOrderConfirmationEmailDirect = async (orderData: OrderEmailData): Promise<EmailResponse> => {
  try {
    const htmlContent = generateCustomerOrderEmail(orderData);
    const textContent = generateCustomerOrderEmailText(orderData);
    
    const result = await sendEmail({
      to: orderData.customerEmail,
      subject: `Order Confirmation - Nirvana Restaurant #${orderData.orderNumber}`,
      html: htmlContent,
      text: textContent
    });
    
    if (!result.success) {
      console.error('Failed to send order confirmation email:', {
        orderNumber: orderData.orderNumber,
        customerEmail: orderData.customerEmail,
        error: result.error,
        timestamp: new Date().toISOString()
      });
    }
    
    return result;
  } catch (error) {
    console.error('Error in sendOrderConfirmationEmailDirect:', {
      orderNumber: orderData.orderNumber,
      customerEmail: orderData.customerEmail,
      error: error instanceof Error ? {
        message: error.message,
        stack: error.stack
      } : error,
      timestamp: new Date().toISOString()
    });
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

/**
 * Send owner notification email directly (server-side only)
 * @param orderData - Order information to include in the notification email
 * @returns Promise with email sending result
 */
export const sendOwnerNotificationEmailDirect = async (orderData: OrderEmailData): Promise<EmailResponse> => {
  try {
    const htmlContent = generateOwnerNotificationEmail(orderData);
    const textContent = generateOwnerNotificationEmailText(orderData);
    
    const ownerEmail = process.env.OWNER_EMAIL || 'orders@nirvana-geneve.ch';
    
    const result = await sendEmail({
      to: ownerEmail,
      subject: `New Order Received - Nirvana Restaurant #${orderData.orderNumber}`,
      html: htmlContent,
      text: textContent
    });
    
    if (!result.success) {
      console.error('Failed to send owner notification email:', {
        orderNumber: orderData.orderNumber,
        ownerEmail,
        error: result.error,
        timestamp: new Date().toISOString()
      });
    }
    
    return result;
  } catch (error) {
    const ownerEmail = process.env.OWNER_EMAIL || 'orders@nirvana-geneve.ch';
    
    console.error('Error in sendOwnerNotificationEmailDirect:', {
      orderNumber: orderData.orderNumber,
      ownerEmail,
      error: error instanceof Error ? {
        message: error.message,
        stack: error.stack
      } : error,
      timestamp: new Date().toISOString()
    });
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

/**
 * Verify SMTP connection configuration
 * @returns Promise with verification result
 */
export const verifyEmailConfiguration = async (): Promise<{ configured: boolean; verified: boolean; error?: string; details?: any }> => {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;
  const fromName = process.env.SMTP_FROM_NAME || 'Nirvana Restaurant';
  const ownerEmail = process.env.OWNER_EMAIL || 'orders@nirvana-geneve.ch';
  
  const details = {
    smtpHost: smtpHost || 'NOT CONFIGURED',
    smtpPort: smtpPort || 'NOT CONFIGURED',
    smtpUser: smtpUser || 'NOT CONFIGURED',
    smtpPasswordConfigured: !!smtpPassword,
    fromEmail: fromEmail || 'NOT CONFIGURED',
    fromName,
    ownerEmail
  };
  
  try {
    const transporter = createTransporter();
    
    if (!transporter) {
      console.log('SMTP not configured - using console logging mode', details);
      return {
        configured: false,
        verified: false, // SMTP is not configured, so it cannot be verified
        details
      };
    }

    await transporter.verify();
    console.log('SMTP configuration verified successfully', details);
    return {
      configured: true,
      verified: true,
      details
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('SMTP configuration verification failed:', {
      ...details,
      error: errorMessage
    });
    return {
      configured: true,
      verified: false,
      error: errorMessage,
      details
    };
  }
};
