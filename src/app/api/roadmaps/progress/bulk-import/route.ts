import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { roadmapSlug, progress } = await req.json()

    if (!roadmapSlug || !progress || typeof progress !== 'object') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    const updates = Object.entries(progress).map(([nodeId, status]) => ({
      user_id: user.id,
      roadmap_slug: roadmapSlug,
      node_id: nodeId,
      status: status as string,
      updated_at: new Date().toISOString()
    }))

    if (updates.length > 0) {
      const { error } = await supabase.from('roadmap_progress').upsert(updates, {
        onConflict: 'user_id,roadmap_slug,node_id'
      })

      if (error) {
        console.error('Bulk import error:', error)
        return NextResponse.json({ error: 'Database error' }, { status: 500 })
      }
    }

    return NextResponse.json({ success: true, imported: updates.length })
  } catch (err: any) {
    console.error('Error in bulk import:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
