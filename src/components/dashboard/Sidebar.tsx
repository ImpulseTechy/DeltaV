'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Image from 'next/image'
import { 
  LayoutDashboard, 
  BookOpen, 
  Award, 
  User, 
  LogOut, 
  Menu, 
  X, 
  ShieldCheck 
} from 'lucide-react'
import { clsx } from 'clsx'

type SidebarProps = {
  role?: string
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const links = [
    { name: 'Home', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Courses', href: '/dashboard/courses', icon: BookOpen },
    { name: 'Certificates', href: '/dashboard/certificates', icon: Award },
    { name: 'Profile', href: '/dashboard/profile', icon: User },
  ]

  if (role === 'admin') {
    links.push({ name: 'Admin', href: '/dashboard/admin', icon: ShieldCheck })
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#0D0D0D] border-r border-[#3F3F46]">
      <div className="h-16 flex items-center px-6 border-b border-[#3F3F46]">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <Image 
            src="/logo-cropped.png" 
            alt="Delta V Logo" 
            width={299} 
            height={179} 
            className="h-6 w-auto object-contain"
          />
          <span className="font-display text-white text-lg tracking-[0.15em] font-semibold transition-colors group-hover:text-orange">
            DELTA V
          </span>
        </Link>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/dashboard' && pathname.startsWith(link.href))
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-[15px] transition-colors',
                isActive
                  ? 'bg-[rgba(255,107,0,0.12)] border-l-[3px] border-orange text-white pl-[9px]'
                  : 'text-[#A1A1AA] hover:bg-[#1A1A1A] hover:text-white'
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {link.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-[#3F3F46]">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg font-body text-[15px] text-[#A1A1AA] hover:bg-[#1A1A1A] hover:text-red-500 transition-colors"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          Log Out
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0D0D0D] border-b border-[#3F3F46] flex items-center justify-between px-4 z-40">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-orange text-xl font-bold">Δ</span>
          <span className="text-white font-display font-semibold tracking-wider text-lg">DELTA V</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 hover:bg-[#1A1A1A] rounded-md transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          'lg:hidden fixed inset-0 z-30 transition-opacity',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div
          className={clsx(
            'absolute inset-y-0 left-0 w-64 bg-[#0D0D0D] transform transition-transform duration-300 ease-in-out',
            isOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="pt-16 h-full">
            <SidebarContent />
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-[240px] z-30">
        <SidebarContent />
      </div>
    </>
  )
}
