import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export async function POST(request: Request) {
  // Initialize Supabase with service role key to bypass RLS for webhook
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseUrl = rawUrl.startsWith('http') ? rawUrl : 'https://placeholder-url.supabase.co'
  const rawKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key'
  const supabaseServiceKey = (rawKey && !rawKey.includes('placeholder') && !rawKey.includes('your_')) ? rawKey : 'placeholder-key'
  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder-key')
  try {
    const rawBody = await request.text()
    const signature = request.headers.get('X-Razorpay-Signature')

    if (!signature) {
      return NextResponse.json({ error: 'Missing Razorpay signature' }, { status: 400 })
    }

    const secret = process.env.RAZORPAY_WEBHOOK_SECRET!
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(rawBody)
      .digest('hex')

    if (expectedSignature !== signature) {
      console.error('Invalid Razorpay signature')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const event = JSON.parse(rawBody)

    // Only process payment captured events
    if (event.event === 'payment.captured') {
      const paymentEntity = event.payload.payment.entity
      const razorpay_order_id = paymentEntity.order_id
      const razorpay_payment_id = paymentEntity.id
      const amount = paymentEntity.amount / 100 // Convert paise to INR

      // ENROLLMENT CREATED HERE ONLY — NOT ON FRONTEND

      // 1. Find the payment record
      const { data: paymentRecord, error: paymentFetchError } = await supabase
        .from('payments')
        .select('*')
        .eq('razorpay_order_id', razorpay_order_id)
        .single()

      if (paymentFetchError || !paymentRecord) {
        console.error('Payment record not found:', razorpay_order_id)
        return NextResponse.json({ error: 'Payment record not found' }, { status: 404 })
      }

      // Check if it's already processed to ensure idempotency
      if (paymentRecord.status === 'captured') {
        return NextResponse.json({ received: true, message: 'Already processed' })
      }

      // 2. Update payment status
      const { error: paymentUpdateError } = await supabase
        .from('payments')
        .update({
          status: 'captured',
          razorpay_payment_id,
        })
        .eq('id', paymentRecord.id)

      if (paymentUpdateError) {
        console.error('Failed to update payment status', paymentUpdateError)
        return NextResponse.json({ error: 'Failed to update payment' }, { status: 500 })
      }

      // 3. Create enrollment record
      const { error: enrollmentError } = await supabase
        .from('enrollments')
        .insert({
          user_id: paymentRecord.user_id,
          cohort_id: paymentRecord.cohort_id,
          payment_id: paymentRecord.id,
          status: 'active'
        })

      if (enrollmentError) {
        // If it's a unique constraint violation, they might already be enrolled.
        // Still return 200 so Razorpay stops retrying.
        console.error('Failed to create enrollment record', enrollmentError)
        // We do not return 500 here to prevent Razorpay from retrying a successful payment
      } else {
        // 4. Send Confirmation Email
        // Fetch user email to send confirmation
        const { data: userData } = await supabase.auth.admin.getUserById(paymentRecord.user_id)
        const email = userData?.user?.email

        if (email) {
          try {
            await resend.emails.send({
              from: 'Delta V <hello@deltav.in>', // Use appropriate verified domain
              to: [email],
              subject: "You're enrolled! Here's what's next.",
              html: `
                <h2>Welcome to Delta V!</h2>
                <p>Your payment of ₹${amount} was successful, and your enrollment is confirmed.</p>
                <p>We're excited to have you on board. You can access your course materials and dashboard via the link below:</p>
                <p><a href="https://deltav.in/dashboard">Go to Dashboard</a></p>
                <br/>
                <p>If you have any questions, reply to this email or reach out to support.</p>
              `
            })
          } catch (emailError) {
            console.error('Failed to send confirmation email', emailError)
            // Continue processing, don't fail webhook
          }
        }
      }
    }

    return NextResponse.json({ received: true })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
