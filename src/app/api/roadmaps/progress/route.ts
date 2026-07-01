import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { roadmapSlug, nodeId, status } = await req.json()

    if (!roadmapSlug || !nodeId || !status) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const validStatuses = ['pending', 'in_progress', 'done']
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    // Upsert into roadmap_progress
    const { error } = await supabase.from('roadmap_progress').upsert(
      {
        user_id: user.id,
        roadmap_slug: roadmapSlug,
        node_id: nodeId,
        status: status,
        updated_at: new Date().toISOString()
      },
      { onConflict: 'user_id,roadmap_slug,node_id' }
    )

    if (error) {
      console.error('Supabase error saving progress:', error)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({ success: true, updated: { nodeId, status } })
  } catch (err: any) {
    console.error('Error in progress POST:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
