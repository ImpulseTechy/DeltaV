import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import Razorpay from 'razorpay'

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { cohortId, courseSlug } = body

    if (!cohortId || !courseSlug) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // 1. Check if already enrolled
    const { data: existingEnrollment } = await supabase
      .from('enrollments')
      .select('id')
      .eq('user_id', user.id)
      .eq('cohort_id', cohortId)
      .single()

    if (existingEnrollment) {
      return NextResponse.json({ error: 'You are already enrolled in this cohort.' }, { status: 400 })
    }

    // 2. Fetch cohort price
    const { data: cohort, error: cohortError } = await supabase
      .from('cohorts')
      .select('price')
      .eq('id', cohortId)
      .single()

    if (cohortError || !cohort) {
      return NextResponse.json({ error: 'Cohort not found.' }, { status: 404 })
    }

    // Calculate total including 18% GST
    const price = cohort.price
    const gst = Math.round(price * 0.18)
    const total = price + gst

    // 3. Create Razorpay order
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!
    })

    const rzpOrder = await razorpay.orders.create({
      amount: total * 100, // Amount in paise
      currency: 'INR',
      receipt: `dv_${user.id}_${cohortId}`.slice(0, 40) // receipt has max length
    })

    if (!rzpOrder || !rzpOrder.id) {
      throw new Error('Failed to create Razorpay order')
    }

    // 4. Save pending order to Supabase
    const { error: paymentError } = await supabase
      .from('payments')
      .insert({
        user_id: user.id,
        cohort_id: cohortId,
        razorpay_order_id: rzpOrder.id,
        amount: total,
        status: 'created'
      })

    if (paymentError) {
      console.error('Error saving payment record:', paymentError)
      return NextResponse.json({ error: 'Failed to initialize payment' }, { status: 500 })
    }

    return NextResponse.json({
      orderId: rzpOrder.id,
      amount: rzpOrder.amount,
      currency: rzpOrder.currency,
      keyId: process.env.RAZORPAY_KEY_ID
    })

  } catch (error: any) {
    console.error('Create Order Error:', error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
