import nodemailer from 'nodemailer';

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

  return nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort),
    secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
    tls: {
      rejectUnauthorized: false, // For development/testing with self-signed certificates
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
  });
};

/**
 * Send email using nodemailer with SMTP configuration
 * @param params - Email parameters including recipient, subject, and content
 * @returns Promise with success status and optional error message
 */
export const sendEmail = async (params: EmailParams): Promise<EmailResponse> => {
  try {
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

    const result = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', {
      messageId: result.messageId,
      to: params.to,
      subject: params.subject,
    });

    return {
      success: true,
      messageId: result.messageId,
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    
    return {
      success: false,
      error: error instanceof Error ? 
        `Email sending failed: ${error.message}. Check SMTP configuration.` : 
        'Unknown error occurred while sending email'
    };
  }
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
 * Verify SMTP connection configuration
 * @returns Promise with verification result
 */
export const verifyEmailConfiguration = async (): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    if (!transporter) {
      console.log('SMTP not configured - using console logging mode');
      return true;
    }

    await transporter.verify();
    console.log('SMTP configuration verified successfully');
    return true;
  } catch (error) {
    console.error('SMTP configuration verification failed:', error);
    return false;
  }
};
