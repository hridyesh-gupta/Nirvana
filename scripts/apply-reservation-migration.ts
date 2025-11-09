/**
 * Script to apply the reservation migration using PrismaClient
 * This bypasses the Prisma CLI migration system and applies the SQL directly
 * 
 * Usage: npx tsx scripts/apply-reservation-migration.ts
 */

import { prisma } from '../lib/db'

const migrationSQL = `
-- CreateTable
CREATE TABLE IF NOT EXISTS \`reservations\` (
    \`id\` CHAR(36) NOT NULL,
    \`reservationNumber\` VARCHAR(50) NOT NULL,
    \`customerName\` VARCHAR(255) NOT NULL,
    \`customerEmail\` VARCHAR(320) NOT NULL,
    \`customerPhone\` VARCHAR(20) NOT NULL,
    \`reservationDate\` TIMESTAMP(3) NOT NULL,
    \`reservationTime\` VARCHAR(10) NOT NULL,
    \`numberOfGuests\` INTEGER NOT NULL,
    \`specialRequests\` VARCHAR(1000) NULL,
    \`status\` ENUM('pending', 'confirmed', 'cancelled') NOT NULL DEFAULT 'pending',
    \`createdAt\` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    \`updatedAt\` TIMESTAMP(3) NOT NULL,

    UNIQUE INDEX \`reservations_reservationNumber_key\`(\`reservationNumber\`),
    INDEX \`reservations_customerEmail_idx\`(\`customerEmail\`),
    INDEX \`reservations_reservationDate_idx\`(\`reservationDate\`),
    INDEX \`reservations_status_idx\`(\`status\`),
    INDEX \`reservations_reservationDate_reservationTime_idx\`(\`reservationDate\`, \`reservationTime\`),
    PRIMARY KEY (\`id\`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
`

async function applyMigration() {
  try {
    console.log('Connecting to database...')
    await prisma.$connect()
    console.log('Connected successfully!')
    
    console.log('Applying reservation migration...')
    await prisma.$executeRawUnsafe(migrationSQL)
    
    console.log('✅ Migration applied successfully!')
    console.log('The reservations table has been created with all indexes.')
    
    // Verify the table was created
    const tables = await prisma.$queryRaw<Array<{ Tables_in_ve63m_nirvana: string }>>`
      SHOW TABLES LIKE 'reservations'
    `
    
    if (tables.length > 0) {
      console.log('✅ Verification: reservations table exists')
    } else {
      console.warn('⚠️  Warning: Could not verify table creation')
    }
    
  } catch (error: any) {
    if (error.code === 'P2010' || error.message?.includes('already exists')) {
      console.log('ℹ️  Table already exists. Migration may have already been applied.')
    } else {
      console.error('❌ Error applying migration:', error)
      process.exit(1)
    }
  } finally {
    await prisma.$disconnect()
  }
}

applyMigration()

