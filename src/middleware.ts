import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseUrl = rawUrl.startsWith('http') ? rawUrl : 'https://placeholder-url.supabase.co'
  const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  const supabaseAnonKey = (rawKey && !rawKey.includes('placeholder') && !rawKey.includes('your_')) ? rawKey : 'placeholder-anon-key'

  // Initialize Supabase client in middleware
  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          response = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Retrieve user session
  const { data: { user } } = await supabase.auth.getUser()

  const path = request.nextUrl.pathname

  const isDashboardRoute = path.startsWith('/dashboard')
  const isAdminRoute = path.startsWith('/admin')

  // 1. Redirect to /auth if accessing dashboard or admin and not authenticated
  if ((isDashboardRoute || isAdminRoute) && !user) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  // 2. Redirect to /dashboard if accessing admin and role is not admin in profiles table
  if (isAdminRoute && user) {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      if (error || !profile || profile.role !== 'admin') {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    } catch (err) {
      // Safeguard redirect if db check errors out
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static files (svg, png, jpg, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
