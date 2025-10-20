import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

interface HealthCheck {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  checks: {
    database: { status: 'ok' | 'error'; message: string };
    email: { status: 'ok' | 'error'; message: string };
    stripe: { status: 'ok' | 'error'; message: string };
    environment: { status: 'ok' | 'error'; message: string };
  };
}

export async function GET(): Promise<NextResponse<HealthCheck>> {
  const timestamp = new Date().toISOString();
  const checks: HealthCheck['checks'] = {
    database: { status: 'error', message: 'Not checked' },
    email: { status: 'error', message: 'Not checked' },
    stripe: { status: 'error', message: 'Not checked' },
    environment: { status: 'error', message: 'Not checked' }
  };

  // Check database connectivity
  try {
    await prisma.$queryRaw`SELECT 1`;
    checks.database = { status: 'ok', message: 'Connected to MySQL' };
  } catch (error) {
    checks.database = { 
      status: 'error', 
      message: `Database connection failed: ${error instanceof Error ? error.message : 'Unknown error'}` 
    };
  }

  // Check email configuration
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const ownerEmail = process.env.OWNER_EMAIL;

  if (smtpHost && smtpPort && smtpUser && smtpPassword && ownerEmail) {
    checks.email = { status: 'ok', message: 'SMTP configured' };
  } else {
    const missing = [];
    if (!smtpHost) missing.push('SMTP_HOST');
    if (!smtpPort) missing.push('SMTP_PORT');
    if (!smtpUser) missing.push('SMTP_USER');
    if (!smtpPassword) missing.push('SMTP_PASSWORD');
    if (!ownerEmail) missing.push('OWNER_EMAIL');
    checks.email = { 
      status: 'error', 
      message: `Missing email configuration: ${missing.join(', ')}` 
    };
  }

  // Check Stripe configuration
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (stripeSecretKey && stripePublishableKey && stripeWebhookSecret) {
    checks.stripe = { status: 'ok', message: 'API keys present' };
  } else {
    const missing = [];
    if (!stripeSecretKey) missing.push('STRIPE_SECRET_KEY');
    if (!stripePublishableKey) missing.push('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY');
    if (!stripeWebhookSecret) missing.push('STRIPE_WEBHOOK_SECRET');
    checks.stripe = { 
      status: 'error', 
      message: `Missing Stripe configuration: ${missing.join(', ')}` 
    };
  }

  // Check environment variables
  const databaseUrl = process.env.DATABASE_URL;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const internalApiKey = process.env.INTERNAL_API_KEY;

  if (databaseUrl && appUrl && internalApiKey) {
    checks.environment = { status: 'ok', message: 'All variables set' };
  } else {
    const missing = [];
    if (!databaseUrl) missing.push('DATABASE_URL');
    if (!appUrl) missing.push('NEXT_PUBLIC_APP_URL');
    if (!internalApiKey) missing.push('INTERNAL_API_KEY');
    checks.environment = { 
      status: 'error', 
      message: `Missing environment variables: ${missing.join(', ')}` 
    };
  }

  // Determine overall status
  const hasErrors = Object.values(checks).some(check => check.status === 'error');
  const hasWarnings = Object.values(checks).some(check => check.status === 'error');
  
  let status: 'healthy' | 'degraded' | 'unhealthy';
  if (hasErrors) {
    status = 'unhealthy';
  } else if (hasWarnings) {
    status = 'degraded';
  } else {
    status = 'healthy';
  }

  const healthCheck: HealthCheck = {
    status,
    timestamp,
    checks
  };

  // Return appropriate HTTP status code
  const httpStatus = status === 'healthy' ? 200 : status === 'degraded' ? 200 : 503;
  
  return NextResponse.json(healthCheck, { status: httpStatus });
}
