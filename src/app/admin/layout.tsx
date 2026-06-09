import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AdminSidebar from '@/components/admin/AdminSidebar'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  
  // MOCK FOR UI TESTING (since auth is bypassed locally)
  // To enable real auth, uncomment below and comment out mock
  /*
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth?next=/admin')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single()

  if (profile?.role !== 'admin') {
    redirect('/dashboard')
  }
  */
  
  // MOCK ADMIN ROLE FOR UI TESTING
  const profile = { role: 'admin' }

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col lg:flex-row">
      <AdminSidebar />
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen overflow-x-hidden">
        <div className="flex-1 p-4 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
