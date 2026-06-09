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
    const body = await request.json()
    const reason = body.reason || 'No reason provided'
    
    const supabase = createClient()
    
    // Auth Check
    /*
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single()
    if (profile?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    */

    // Update DB
    /*
    const { data: booking, error } = await supabase
      .from('workshop_bookings')
      .update({ status: 'rejected', rejection_reason: reason })
      .eq('id', id)
      .select()
      .single()
      
    if (error) throw error
    */

    const booking = {
      college_name: 'Mock College',
      contact_name: 'Mock Contact',
      workshop_topic: 'Mock Topic',
      official_email: 'mock@example.com'
    }

    // Send Email
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Delta V Workshops <bookings@deltav.in>',
        to: booking.official_email,
        subject: 'Update on Delta V Workshop Request',
        html: `
          <div style="font-family: 'DM Sans', sans-serif; color: #1a1a1a;">
            <p>Dear ${booking.contact_name},</p>
            <p>Thank you for your interest in organizing the <strong>${booking.workshop_topic}</strong> workshop at <strong>${booking.college_name}</strong>.</p>
            <p>Unfortunately, we are unable to accommodate your request at this time.</p>
            <p><strong>Reason:</strong> ${reason}</p>
            <p>We appreciate your interest and hope to collaborate in the future.</p>
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
    console.error('Reject Booking Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
