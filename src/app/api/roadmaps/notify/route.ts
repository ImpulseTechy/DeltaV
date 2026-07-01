import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: Request) {
  try {
    const { roadmapSlug, email } = await req.json()

    if (!roadmapSlug || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Initialize admin client to bypass RLS for inserting suggestions
    const adminUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-url.supabase.co'
    const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key'
    const supabase = createClient(adminUrl, adminKey)

    const { error } = await supabase.from('roadmap_suggestions').insert([
      { branch_name: roadmapSlug, email: email }
    ])

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Failed to save subscription' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Notify API error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
