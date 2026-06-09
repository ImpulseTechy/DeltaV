import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import Sidebar from '@/components/dashboard/Sidebar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  // TEMPORARY UI TESTING MOCK
  const session = { user: { id: 'mock' } }
  // if (!session) {
  //   const headersList = await headers()
  //   const url = headersList.get('x-url') || ''
  //   const pathMatch = url.match(/https?:\/\/[^\/]+(\/.*)/)
  //   const currentPath = pathMatch ? pathMatch[1] : '/dashboard'
  //   
  //   redirect(`/auth?next=${encodeURIComponent(currentPath)}`)
  // }

  // MOCK PROFILE
  const profile = { role: 'student' }

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col lg:flex-row">
      <Sidebar role={profile?.role} />
      <div className="flex-1 lg:ml-[240px] pt-16 lg:pt-0">
        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  )
}
