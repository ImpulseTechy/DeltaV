'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  ClipboardList, 
  Video, 
  Users, 
  CreditCard, 
  Award, 
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { clsx } from 'clsx'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'
import { useToast } from '@/components/ui/Toast'
import Image from 'next/image'

const NAV_LINKS = [
  { name: 'Overview', href: '/admin', icon: LayoutDashboard },
  { name: 'Courses', href: '/admin/courses', icon: BookOpen },
  { name: 'Cohorts', href: '/admin/cohorts', icon: Calendar },
  { name: 'Workshop Bookings', href: '/admin/workshop-bookings', icon: ClipboardList },
  { name: 'Webinar Bookings', href: '/admin/webinar-bookings', icon: Video },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Payments', href: '/admin/payments', icon: CreditCard },
  { name: 'Certificates', href: '/admin/certificates', icon: Award },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast(error.message, 'error')
    } else {
      router.push('/')
      router.refresh()
    }
  }

  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#0D0D0D] border-b border-[#3F3F46]">
        <div className="flex items-center gap-2">
          <Link href="/admin" className="font-heading font-bold text-2xl tracking-wide text-white flex items-center gap-2">
            <Image src="/logo-cropped.png" alt="Logo" width={299} height={179} className="h-6 w-auto" /> DELTA V
          </Link>
          <span className="bg-brand-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            ADMIN
          </span>
        </div>
        <button onClick={() => setIsOpen(true)} className="text-white p-1">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={clsx(
        "fixed inset-y-0 left-0 z-50 w-64 bg-[#0D0D0D] border-r border-[#3F3F46] flex flex-col transform transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 flex items-center justify-between lg:justify-start gap-2 border-b border-[#3F3F46] lg:border-none">
          <div className="flex items-center gap-2">
            <Link href="/admin" className="font-heading font-bold text-2xl tracking-wide text-white flex items-center gap-2">
              <Image src="/logo-cropped.png" alt="Logo" width={299} height={179} className="h-6 w-auto" /> DELTA V
            </Link>
            <span className="bg-brand-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              ADMIN
            </span>
          </div>
          <button onClick={closeSidebar} className="lg:hidden text-[#A1A1AA]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    onClick={closeSidebar}
                    className={clsx(
                      "flex items-center gap-3 px-6 py-3 text-sm transition-colors",
                      isActive 
                        ? "bg-[rgba(255,107,0,0.12)] border-l-4 border-brand-primary text-white font-medium" 
                        : "text-[#A1A1AA] hover:text-white hover:bg-[#1A1A1A] border-l-4 border-transparent"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-[#3F3F46]">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-2 py-2 text-sm text-[#A1A1AA] hover:text-red-500 transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </>
  )
}
