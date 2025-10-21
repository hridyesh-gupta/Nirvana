import { PrismaClient } from '@prisma/client'

/**
 * Build-time detection to prevent database connections during Next.js build phase
 * This prevents hanging at "Collecting page data" when Next.js attempts static analysis
 * Uses explicit SKIP_DB_CONNECT flag for reliable detection
 */
const isBuildTime = process.env.SKIP_DB_CONNECT === '1'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

/**
 * No-op proxy for build-time that throws clear errors on any access
 * Prevents any database connection attempts during build phase
 */
const buildTimeStub = new Proxy({} as PrismaClient, {
  get() {
    throw new Error('PrismaClient: Database access is disabled during build phase. This is expected behavior.')
  }
})

/**
 * Enhanced PrismaClient configuration with connection timeout and pool settings
 * 
 * Connection Parameters:
 * - connection_limit: 5 connections (reasonable for serverless/edge environments)
 * - pool_timeout: 10 seconds (prevents indefinite waiting for connections)
 * - connect_timeout: 10 seconds (prevents hanging on initial connection)
 * 
 * To modify DATABASE_URL with connection parameters, use this format:
 * DATABASE_URL="mysql://user:pass@host:port/db?connect_timeout=10&pool_timeout=10&connection_limit=5"
 */

// Validate DATABASE_URL before PrismaClient creation
if (!isBuildTime && !process.env.DATABASE_URL) {
  throw new Error('PrismaClient: DATABASE_URL environment variable is required but not set')
}

// Use singleton pattern - reuse existing instance if present
const prisma = globalForPrisma.prisma ?? (() => {
  if (isBuildTime) {
    console.warn('PrismaClient: Skipping database connection during build phase')
    return buildTimeStub
  }

  // Runtime configuration with enhanced connection settings
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    },
    log: process.env.NODE_ENV === 'development' 
      ? ['query', 'error', 'warn', 'info'] 
      : ['error', 'warn']
  })
})()

// Assign back to global for singleton pattern in non-production
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

/**
 * Helper function to ensure database connection with explicit timeout
 * Use this when you need to test the connection (e.g., health check route)
 */
export async function ensureDbConnected(): Promise<void> {
  if (isBuildTime) {
    throw new Error('Database connection test is disabled during build phase')
  }

  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required')
  }

  try {
    await Promise.race([
      prisma.$connect(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Database connection timeout after 10 seconds')), 10000)
      )
    ])
  } catch (error) {
    console.error('PrismaClient: Failed to connect to database:', error)
    throw error
  }
}

export { prisma }
