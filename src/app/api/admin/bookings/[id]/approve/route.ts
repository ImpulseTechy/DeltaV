import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key_1234')

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = createClient()
    
    // Auth Check
    /*
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single()
    if (profile?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    */

    // Update DB (Mocked for now since DB might not be ready)
    /*
    const { data: booking, error } = await supabase
      .from('workshop_bookings')
      .update({ status: 'confirmed' })
      .eq('id', id)
      .select()
      .single()
      
    if (error) throw error
    */

    // Mock Booking Data for email
    const booking = {
      college_name: 'Mock College',
      contact_name: 'Mock Contact',
      workshop_topic: 'Mock Topic',
      preferred_date: new Date().toISOString(),
      official_email: 'mock@example.com'
    }

    // Send Email
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Delta V Workshops <bookings@deltav.in>',
        to: booking.official_email,
        subject: 'Confirmed: Delta V Workshop at ' + booking.college_name,
        html: `
          <div style="font-family: 'DM Sans', sans-serif; color: #1a1a1a;">
            <h2 style="color: #10B981;">Workshop Confirmed</h2>
            <p>Dear ${booking.contact_name},</p>
            <p>We are excited to confirm the <strong>${booking.workshop_topic}</strong> workshop for <strong>${booking.college_name}</strong>.</p>
            <p><strong>Date:</strong> ${new Date(booking.preferred_date).toLocaleDateString()}</p>
            <p>Our team will reach out shortly to finalize the agenda and logistics.</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>The Delta V Team</strong><br/>
            <a href="https://deltav.in">deltav.in</a></p>
          </div>
        `
      })
    }

    return NextResponse.json({ success: true, booking })

  } catch (error: any) {
    console.error('Approve Booking Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
