import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { sendReservationConfirmationEmailDirect, sendOwnerReservationNotificationEmailDirect } from '@/lib/emailService'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Helper function to generate unique reservation number
function generateReservationNumber() {
  const now = new Date()
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '')
  const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `RES-${dateStr}-${randomNum}`
}

export async function POST(req: NextRequest) {
  try {
    // Parse form data (application/x-www-form-urlencoded)
    const formData = await req.formData()
    const name = formData.get('name')?.toString()
    const email = formData.get('email')?.toString()
    const phone = formData.get('phone')?.toString()
    const date = formData.get('date')?.toString()
    const time = formData.get('time')?.toString()
    const guests = formData.get('guests')?.toString()
    const requests = formData.get('requests')?.toString()

    // Validate required fields
    if (!name || name.trim() === '') {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!email || email.trim() === '') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (!phone || phone.trim() === '') {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      )
    }

    if (!date || date.trim() === '') {
      return NextResponse.json(
        { error: 'Reservation date is required' },
        { status: 400 }
      )
    }

    if (!time || time.trim() === '') {
      return NextResponse.json(
        { error: 'Reservation time is required' },
        { status: 400 }
      )
    }

    if (!guests || guests.trim() === '') {
      return NextResponse.json(
        { error: 'Number of guests is required' },
        { status: 400 }
      )
    }

    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!dateRegex.test(date)) {
      return NextResponse.json(
        { error: 'Invalid date format. Expected YYYY-MM-DD' },
        { status: 400 }
      )
    }

    // Validate time format (HH:MM)
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/
    if (!timeRegex.test(time)) {
      return NextResponse.json(
        { error: 'Invalid time format. Expected HH:MM' },
        { status: 400 }
      )
    }

    // Parse and validate date
    // Create date string in ISO format for Swiss timezone
    const reservationDateStr = `${date}T${time}:00`
    const reservationDate = new Date(reservationDateStr)
    if (isNaN(reservationDate.getTime())) {
      return NextResponse.json(
        { error: 'Invalid date or time' },
        { status: 400 }
      )
    }

    // Validate that the date is not in the past
    // Compare in Swiss timezone context
    const now = new Date()
    const nowInZurich = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Zurich' }))
    const reservationInZurich = new Date(reservationDate.toLocaleString('en-US', { timeZone: 'Europe/Zurich' }))
    
    if (reservationInZurich < nowInZurich) {
      return NextResponse.json(
        { error: 'Reservation date and time cannot be in the past' },
        { status: 400 }
      )
    }

    // Validate and parse number of guests
    const numberOfGuests = parseInt(guests, 10)
    if (isNaN(numberOfGuests) || numberOfGuests < 1 || numberOfGuests > 8) {
      return NextResponse.json(
        { error: 'Number of guests must be between 1 and 8' },
        { status: 400 }
      )
    }

    // Create reservation in database with retry logic for unique constraint collisions
    let reservation
    let reservationNumber = generateReservationNumber()
    const maxRetries = 3 // Initial attempt + 2 retries
    let lastError: any = null
    
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        reservation = await prisma.reservation.create({
          data: {
            reservationNumber,
            customerName: name.trim(),
            customerEmail: email.trim(),
            customerPhone: phone.trim(),
            reservationDate,
            reservationTime: time,
            numberOfGuests,
            specialRequests: requests && requests.trim() !== '' ? requests.trim() : null
          }
        })
        // Success - break out of retry loop
        break
      } catch (error) {
        lastError = error
        
        // Check if it's a unique constraint violation (P2002)
        if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
          // If we have retries left, regenerate reservation number and retry
          if (attempt < maxRetries - 1) {
            reservationNumber = generateReservationNumber()
            continue
          } else {
            // All retries exhausted - return 409 response
            return NextResponse.json(
              { error: 'Reservation number already exists. Please try again.' },
              { status: 409 }
            )
          }
        } else {
          // Not a P2002 error - rethrow to be handled by outer catch
          throw error
        }
      }
    }
    
    // If we get here without a reservation, something went wrong
    if (!reservation) {
      throw lastError || new Error('Failed to create reservation after retries')
    }

    // Prepare reservation data for emails
    const reservationData = {
      reservationNumber: reservation.reservationNumber,
      customerName: reservation.customerName,
      customerEmail: reservation.customerEmail,
      customerPhone: reservation.customerPhone,
      reservationDate: reservation.reservationDate,
      reservationTime: reservation.reservationTime,
      numberOfGuests: reservation.numberOfGuests,
      status: 'pending' as const,
      specialRequests: reservation.specialRequests || undefined,
      createdAt: reservation.createdAt
    }

    // Send email notifications (don't fail the API if emails fail)
    try {
      const emailResult = await sendReservationConfirmationEmailDirect(reservationData)
      if (emailResult.success) {
        console.log('Reservation confirmation email sent successfully')
      } else {
        console.error('Failed to send reservation confirmation email:', {
          reservationNumber: reservationData.reservationNumber,
          customerEmail: reservationData.customerEmail,
          error: emailResult.error,
          suggestion: 'Check SMTP configuration if error persists',
          timestamp: new Date().toISOString()
        })
      }
    } catch (emailError) {
      console.error('Failed to send reservation confirmation email:', {
        reservationNumber: reservationData.reservationNumber,
        customerEmail: reservationData.customerEmail,
        error: emailError instanceof Error ? {
          message: emailError.message,
          stack: emailError.stack
        } : emailError,
        suggestion: 'Check SMTP configuration if error persists',
        timestamp: new Date().toISOString()
      })
    }

    const ownerEmail = process.env.OWNER_EMAIL || 'orders@nirvana-geneve.ch'
    if (!process.env.OWNER_EMAIL) {
      console.warn('OWNER_EMAIL environment variable is not configured. Using fallback:', ownerEmail)
    }
    try {
      const emailResult = await sendOwnerReservationNotificationEmailDirect(reservationData)
      if (emailResult.success) {
        console.log('Owner reservation notification email sent successfully')
      } else {
        console.error('Failed to send owner reservation notification email:', {
          reservationNumber: reservationData.reservationNumber,
          ownerEmail,
          error: emailResult.error,
          timestamp: new Date().toISOString()
        })
      }
    } catch (emailError) {
      console.error('Failed to send owner reservation notification email:', {
        reservationNumber: reservationData.reservationNumber,
        ownerEmail,
        error: emailError instanceof Error ? {
          message: emailError.message,
          stack: emailError.stack
        } : emailError,
        timestamp: new Date().toISOString()
      })
    }

    // Return success response
    return NextResponse.json({
      success: true,
      reservationNumber: reservation.reservationNumber,
      reservationId: reservation.id,
      message: 'Reservation created successfully'
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating reservation:', error)
    
    // Handle Prisma errors specifically
    if (error && typeof error === 'object' && 'code' in error) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'Reservation number already exists. Please try again.' },
          { status: 409 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to create reservation. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to create reservations.' },
    { status: 405 }
  )
}

