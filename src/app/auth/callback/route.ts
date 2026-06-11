import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next')

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      // Check if user has a profile
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('id, role')
          .eq('id', user.id)
          .single()

        if (!profile) {
          const redirectUrl = next ? `/onboarding?next=${encodeURIComponent(next)}` : '/onboarding'
          return NextResponse.redirect(`${origin}${redirectUrl}`)
        }

        // If user is admin and no next path is requested, redirect directly to /admin
        if (profile.role === 'admin' && !next) {
          return NextResponse.redirect(`${origin}/admin`)
        }
      }

      const redirectUrl = next ? (next.startsWith('/') ? next : `/${next}`) : '/dashboard'
      return NextResponse.redirect(`${origin}${redirectUrl}`)
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth?error=Could not authenticate user`)
}
