import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const orderId = searchParams.get('orderId')

    if (!orderId) {
      return NextResponse.json({ error: 'Missing orderId' }, { status: 400 })
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Query enrollments joined with payments to check if the specific razorpay_order_id has resulted in an enrollment
    const { data: enrollment, error } = await supabase
      .from('enrollments')
      .select('id, payments!inner(razorpay_order_id), cohorts!inner(course_id)')
      .eq('user_id', user.id)
      .eq('payments.razorpay_order_id', orderId)
      .single()

    if (error || !enrollment) {
      // If no enrollment is found, they are not yet enrolled
      return NextResponse.json({ enrolled: false, courseSlug: null })
    }

    return NextResponse.json({ 
      enrolled: true, 
      courseSlug: (enrollment as any).cohorts?.course_id || null 
    })

  } catch (error) {
    console.error('Enrollment status check error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
