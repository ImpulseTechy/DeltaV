import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { bookingSchema } from '@/lib/validations/booking'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key_1234')

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1'
    
    // --- Body Validation ---
    const body = await req.json()
    const result = bookingSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid form data', details: result.error.format() }, { status: 400 })
    }

    const data = result.data

    // --- Google Sheets Insertion ---
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          // Note: using text/plain prevents CORS preflight issues when calling Apps Script directly from browsers,
          // but since this is server-side we can safely use application/json.
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ip_address: ip,
            contact_name: data.contactName,
            designation: data.designation,
            college_name: data.collegeName,
            college_city: data.collegeCity,
            college_state: data.collegeState,
            official_email: data.officialEmail,
            whatsapp_number: data.whatsappNumber,
            workshop_topic: data.workshopTopic,
            preferred_date: data.preferredDate,
            alternate_date: data.alternateDate || '',
            expected_students: data.expectedStudents,
            venue: data.venue,
            additional_notes: data.additionalNotes || '',
            referral_source: data.referralSource || ''
          })
        })
        if (!response.ok) {
          console.error('Failed to save to Google Sheets:', await response.text())
        }
      } catch (e) {
        console.error('Error sending to Google Sheets Webhook:', e)
      }
    } else {
      console.warn('GOOGLE_SHEET_WEBHOOK_URL is not set. Skipping Google Sheets insertion.')
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
