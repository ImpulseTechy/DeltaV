'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, User, LogOut, LayoutDashboard } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import Button from '../ui/Button'
import { clsx } from 'clsx'

export default function Navbar() {
  const pathname = usePathname()
  const supabase = createClient()
  const [user, setUser] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    // Fetch initial session
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
    })

    // Listen to changes in auth state
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setDropdownOpen(false)
  }

  const navLinks = [
    { name: 'Courses', href: '/courses' },
    { name: 'Workshops', href: '/#workshop-topics' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'About', href: '/about' },
  ]

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-bg-primary border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-orange font-mono text-2xl font-bold">Δ</span>
              <span className="font-display text-white text-xl tracking-[0.15em] font-semibold transition-colors group-hover:text-orange">
                DELTA V
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'relative py-2 text-sm font-body font-medium transition-colors duration-200',
                    active ? 'text-white' : 'text-text-secondary hover:text-white'
                  )}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" href="/book-workshop">
              Book a Workshop
            </Button>

            {user ? (
              /* Authenticated User Dropdown */
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 text-sm font-body text-text-secondary hover:text-white focus:outline-none py-1.5 px-2 rounded-md hover:bg-bg-secondary transition-colors"
                >
                  <div className="w-8 h-8 rounded-full border border-border bg-bg-tertiary flex items-center justify-center text-orange font-mono font-bold text-xs uppercase">
                    {user.email?.charAt(0) || <User className="w-4 h-4" />}
                  </div>
                  <ChevronDown className="w-4 h-4 text-text-muted" />
                </button>

                {dropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-bg-secondary border border-border rounded-md shadow-2xl py-1 z-20">
                      <div className="px-4 py-2 border-b border-border/50 text-xs text-text-secondary font-mono truncate">
                        {user.email}
                      </div>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-white hover:bg-bg-tertiary font-body transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <LayoutDashboard className="w-4 h-4 text-orange" />
                        Dashboard
                      </Link>
                      <button
                        type="button"
                        onClick={handleSignOut}
                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-white hover:bg-bg-tertiary font-body transition-colors"
                      >
                        <LogOut className="w-4 h-4 text-orange" />
                        Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Unauthenticated Sign In */
              <Button variant="text" size="sm" href="/auth">
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-secondary hover:text-white p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-primary border-t border-border px-4 py-4 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'py-1.5 text-base font-body font-medium transition-colors',
                    active ? 'text-white border-l-2 border-orange pl-2' : 'text-text-secondary hover:text-white'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>
          <div className="pt-4 border-t border-border/50 flex flex-col gap-3">
            <Button
              variant="ghost"
              size="md"
              href="/book-workshop"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              Book a Workshop
            </Button>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center justify-center gap-2 py-2 text-sm text-text-secondary font-body border border-border/50 rounded-md hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    handleSignOut()
                    setMobileMenuOpen(false)}
                  }
                  className="flex items-center justify-center gap-2 py-2 text-sm text-orange font-body border border-orange/20 rounded-md hover:bg-orange-dim"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Button
                variant="text"
                size="md"
                href="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
