'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'

export default function OnboardingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const nextParam = searchParams.get('next')

  const [isLoading, setIsLoading] = useState(false)
  const [isFetchingUser, setIsFetchingUser] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState('')
  const [college, setCollege] = useState('')
  const [year, setYear] = useState('')
  const [branch, setBranch] = useState('')

  const supabase = createClient()

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        // Autofill name from Google OAuth if available
        if (user.user_metadata?.full_name) {
          setName(user.user_metadata.full_name)
        } else if (user.user_metadata?.name) {
          setName(user.user_metadata.name)
        }
      } else {
        // If not logged in, redirect to auth
        router.push('/auth')
      }
      setIsFetchingUser(false)
    }

    fetchUser()
  }, [router, supabase.auth])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setError('You must be logged in to complete your profile.')
      setIsLoading(false)
      return
    }

    const { error: upsertError } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        name,
        college,
        year,
        branch,
        onboarded: true
      })

    if (upsertError) {
      setError(upsertError.message)
      setIsLoading(false)
    } else {
      const nextUrl = nextParam ? `/${nextParam}` : '/dashboard'
      router.push(nextUrl)
    }
  }

  if (isFetchingUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-start justify-center pt-20 px-4 bg-[#121212]">
      <div className="w-full max-w-[420px] bg-[#1A1A1A] border border-[#3F3F46] rounded-xl p-8 shadow-xl">
        <div className="flex flex-col mb-8 text-center">
          <h1 className="text-white text-2xl font-display font-semibold mb-2">
            Complete your profile
          </h1>
          <p className="text-[#A1A1AA] text-[13px]">
            This helps us personalize your experience.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1.5">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
              className="w-full bg-[#242424] border border-[#3F3F46] text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="college" className="block text-sm font-medium text-white mb-1.5">
              College Name
            </label>
            <input
              id="college"
              type="text"
              required
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              disabled={isLoading}
              className="w-full bg-[#242424] border border-[#3F3F46] text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium text-white mb-1.5">
              Year of Study
            </label>
            <select
              id="year"
              required
              value={year}
              onChange={(e) => setYear(e.target.value)}
              disabled={isLoading}
              className="w-full bg-[#242424] border border-[#3F3F46] text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange disabled:opacity-50 appearance-none"
            >
              <option value="" disabled>Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
              <option value="Final Year">Final Year</option>
            </select>
          </div>

          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-white mb-1.5">
              Branch
            </label>
            <select
              id="branch"
              required
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              disabled={isLoading}
              className="w-full bg-[#242424] border border-[#3F3F46] text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange disabled:opacity-50 appearance-none"
            >
              <option value="" disabled>Select Branch</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="Electrical">Electrical</option>
              <option value="Electronics">Electronics</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <div className="pt-2 flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isLoading || !name || !college || !year || !branch}>
              {isLoading ? 'Saving...' : 'Complete Profile →'}
            </Button>
            
            <div className="text-center">
              <Link 
                href="/dashboard" 
                className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
              >
                Skip for now →
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
