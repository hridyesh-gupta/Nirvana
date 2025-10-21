import type { NextConfig } from "next";

/**
 * Next.js Configuration for Nirvana Restaurant Ordering System
 * 
 * This configuration is optimized for production deployment with standalone output mode,
 * which creates a self-contained build suitable for Docker deployments and hosting platforms.
 * 
 * Key Features:
 * - output: 'standalone' - Creates minimal build in .next/standalone/ directory
 * - experimental optimizations - Improves build performance and runtime efficiency
 * - TypeScript strict mode - Ensures type safety in production builds
 * 
 * Environment Variables:
 * 
 * Build-time variables (embedded in JavaScript bundle):
 * - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY - Stripe publishable key for client-side
 * - NEXT_PUBLIC_APP_URL - Application URL for absolute URL generation
 * - NEXT_PUBLIC_DELIVERY_FEE - Delivery fee embedded in client code
 * - NEXT_PUBLIC_MIN_ORDER_AMOUNT - Minimum order amount embedded in client code
 * - DATABASE_URL - Required for Prisma client generation (connection skipped during build)
 * 
 * Runtime-only variables (only needed when running the server):
 * - STRIPE_SECRET_KEY - Server-side Stripe operations
 * - STRIPE_WEBHOOK_SECRET - Webhook signature verification
 * - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD - Email sending configuration
 * - SMTP_FROM_NAME, SMTP_FROM_EMAIL - Email sender configuration
 * - OWNER_EMAIL - Order notification recipient
 * - INTERNAL_API_KEY - API authentication
 * 
 * Deployment Instructions:
 * - For standalone builds: Run `node .next/standalone/server.js` after build
 * - Copy static files: `cp -r .next/static .next/standalone/.next/static`
 * - Copy public files: `cp -r public .next/standalone/public`
 * - Set runtime environment variables before starting the server
 */
const nextConfig: NextConfig = {
  // Standalone output mode for optimized deployments
  output: 'standalone',
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false, // Catch TypeScript errors during build
  },
  
  // Experimental features for better performance
  experimental: {
    // Increase server action body size limit for order creation
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // Optimize package imports to reduce bundle size
    // WARNING: This is experimental and should be validated after dependency upgrades
    // If issues arise, remove entries incrementally to isolate problematic packages
    optimizePackageImports: ['framer-motion', 'recharts'],
  },
  
  // Image optimization (disabled for compatibility with static hosting/CDN)
  images: {
    unoptimized: true, // Keep disabled for compatibility with static hosting
  },
  
  // Security: Remove X-Powered-By header
  poweredByHeader: false,
  
  // ESLint configuration (keep existing setting)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
