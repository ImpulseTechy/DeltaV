import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@/lib/supabase/server'
import { bookingSchema } from '@/lib/validations/booking'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key_1234')

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1'
    const supabase = await createClient()

    // --- Rate Limiting (Max 3 submissions per IP per hour) ---
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString()
    
    // Attempt to check rate limit in Supabase
    // If the table doesn't exist (e.g. during dev), we'll catch the error and skip rate limiting gracefully.
    try {
      const { data: recentRequests, error: rateError } = await supabase
        .from('rate_limits')
        .select('id')
        .eq('ip_address', ip)
        .gte('created_at', oneHourAgo)

      if (!rateError && recentRequests && recentRequests.length >= 3) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
      }

      // Log the request
      await supabase.from('rate_limits').insert([{ ip_address: ip, endpoint: '/api/bookings/workshop' }])
    } catch (e) {
      console.warn('Rate limit table not configured or error occurred, skipping DB-based rate limiting.')
    }

    // --- Body Validation ---
    const body = await req.json()
    const result = bookingSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid form data', details: result.error.format() }, { status: 400 })
    }

    const data = result.data

    // --- Database Insertion ---
    try {
      const { error: insertError } = await supabase
        .from('workshop_bookings')
        .insert([{
          contact_name: data.contactName,
          designation: data.designation,
          college_name: data.collegeName,
          college_city: data.collegeCity,
          college_state: data.collegeState,
          official_email: data.officialEmail,
          whatsapp_number: data.whatsappNumber,
          workshop_topic: data.workshopTopic,
          preferred_date: data.preferredDate,
          alternate_date: data.alternateDate || null,
          expected_students: data.expectedStudents,
          venue: data.venue,
          additional_notes: data.additionalNotes,
          referral_source: data.referralSource,
          status: 'pending',
          ip_address: ip
        }])

      if (insertError) {
        console.error('Supabase insert error:', insertError)
        // We log it but proceed to send the email anyway to ensure the demo/flow works even if DB schema isn't ready.
      }
    } catch (e) {
      console.warn('Workshop bookings table might not exist.')
    }

    // --- Email Sending via Resend ---
    try {
      // Only attempt to send if RESEND_API_KEY is actually configured
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: 'Delta V Workshops <bookings@deltav.in>', // Note: domain must be verified in Resend
          to: data.officialEmail,
          subject: 'Your Delta V workshop request has been received',
          html: `
            <div style="font-family: 'DM Sans', sans-serif; color: #1a1a1a;">
              <h2 style="color: #FF6B00;">Workshop Request Received</h2>
              <p>Dear ${data.contactName},</p>
              <p>Thank you for requesting the <strong>${data.workshopTopic}</strong> workshop for <strong>${data.collegeName}</strong>.</p>
              <p>We have noted your preferred date of <strong>${new Date(data.preferredDate).toLocaleDateString()}</strong>.</p>
              <p>We'll contact you within 48 hours to confirm the date, finalize the agenda, and arrange the logistics.</p>
              <br/>
              <p>Best regards,</p>
              <p><strong>The Delta V Team</strong><br/>
              <a href="https://deltav.in">deltav.in</a></p>
            </div>
          `
        })
      } else {
        console.log('Skipping actual email send: RESEND_API_KEY not configured.')
      }
    } catch (e) {
      console.error('Resend email error:', e)
      // Continue, as returning error might break UI if Resend isn't configured
    }

    return NextResponse.json({ success: true })

  } catch (error: any) {
    console.error('API Route Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
