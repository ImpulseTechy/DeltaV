import { createClient } from '@supabase/supabase-js'
import { unstable_cache } from 'next/cache'

async function fetchStudentCount(slug: string): Promise<number> {
  const adminUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
  const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder'
  const adminSupabase = createClient(adminUrl, adminKey)

  const { count } = await adminSupabase
    .from('roadmap_progress')
    .select('user_id', { count: 'exact', head: true })
    .eq('roadmap_slug', slug)
    
  return count ?? 0
}

export const getStudentCount = unstable_cache(
  async (slug: string) => fetchStudentCount(slug),
  ['roadmap-student-count'],
  { revalidate: 3600 }
)
