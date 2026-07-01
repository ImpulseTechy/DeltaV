import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(req: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const roadmapSlug = searchParams.get('roadmapSlug')

    if (!roadmapSlug) {
      return NextResponse.json({ error: 'Missing roadmapSlug parameter' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('roadmap_progress')
      .select('node_id, status')
      .eq('user_id', user.id)
      .eq('roadmap_slug', roadmapSlug)

    if (error) {
      console.error('Supabase error fetching bulk progress:', error)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    const progressMap: Record<string, string> = {}
    if (data) {
      data.forEach((row) => {
        progressMap[row.node_id] = row.status
      })
    }

    return NextResponse.json({ progress: progressMap })
  } catch (err: any) {
    console.error('Error in progress bulk GET:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
