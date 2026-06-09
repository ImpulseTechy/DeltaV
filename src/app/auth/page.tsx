'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Button from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'

type AuthStep = 'EMAIL' | 'OTP'

export default function AuthPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const nextParam = searchParams.get('next')

  const [step, setStep] = useState<AuthStep>('EMAIL')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [timer, setTimer] = useState(45)
  const [canResend, setCanResend] = useState(false)

  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const supabase = createClient()

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (step === 'OTP' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
    } else if (timer === 0) {
      setCanResend(true)
    }
    return () => clearInterval(interval)
  }, [step, timer])

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithOtp({ 
      email,
      options: {
        shouldCreateUser: true
      }
    })

    setIsLoading(false)

    if (error) {
      setError(error.message)
    } else {
      setStep('OTP')
      setTimer(45)
      setCanResend(false)
      // Focus first input automatically
      setTimeout(() => inputRefs.current[0]?.focus(), 100)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    setError(null)
    
    let redirectUrl = window.location.origin + '/auth/callback'
    if (nextParam) {
      redirectUrl += `?next=${encodeURIComponent(nextParam)}`
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl
      }
    })

    if (error) {
      setError(error.message)
      setIsLoading(false)
    }
    // Note: redirect happens automatically, so loading state stays true
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = otp.join('')
    if (token.length !== 6) return

    setIsLoading(true)
    setError(null)

    const { error } = await supabase.auth.verifyOtp({ 
      email, 
      token, 
      type: 'email' 
    })

    if (error) {
      setError(error.message)
      setIsLoading(false)
    } else {
      // verification successful, redirect logic handled by router
      const nextUrl = nextParam ? `/${nextParam}` : '/dashboard'
      // We still need to check profiles table, but the prompt says auth/callback handles OAuth
      // Actually, for OTP, verifyOtp logs the user in immediately on the client.
      // So we should check the profile right here to decide where to go.
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data: profile } = await supabase.from('profiles').select('id').eq('id', user.id).single()
        if (profile) {
          router.push(nextUrl)
        } else {
          router.push(`/onboarding${nextParam ? `?next=${nextParam}` : ''}`)
        }
      } else {
         router.push(nextUrl)
      }
    }
  }

  const handleOtpChange = (index: number, value: string) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(-1) // Take only last digit if multiple were entered
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').trim()
    
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.slice(0, 6).split('')
      const newOtp = [...otp]
      digits.forEach((digit, i) => {
        if (i < 6) newOtp[i] = digit
      })
      setOtp(newOtp)
      
      // Focus the next empty input or the last one
      const nextIndex = Math.min(digits.length, 5)
      inputRefs.current[nextIndex]?.focus()
    }
  }

  return (
    <div className="min-h-screen flex items-start justify-center pt-20 px-4 bg-[#121212]">
      <div className="w-full max-w-[420px] bg-[#1A1A1A] border border-[#3F3F46] rounded-xl p-8 shadow-xl">
        <div className="flex flex-col items-center mb-8">
          <div className="text-orange text-3xl font-display font-bold flex items-center gap-2 mb-4">
            <span className="text-4xl">Δ</span> DELTA V
          </div>
          <h1 className="text-white text-2xl font-display font-semibold mb-2">
            Sign in to Delta V
          </h1>
          <p className="text-[#A1A1AA] text-[13px] text-center max-w-[280px]">
            New to Delta V? An account is created automatically on your first sign in.
          </p>
        </div>

        {step === 'EMAIL' && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1.5">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="yourname@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full bg-[#242424] border border-[#3F3F46] text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange disabled:opacity-50"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <Button type="submit" className="w-full" disabled={isLoading || !email}>
              {isLoading ? 'Sending...' : 'Send OTP →'}
            </Button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#52525B]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#1A1A1A] text-[#A1A1AA]">or</span>
              </div>
            </div>

            <Button
              type="button"
              variant="ghost"
              className="w-full bg-white hover:bg-gray-100 text-[#121212] border-[#3F3F46] !font-medium"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </Button>
          </form>
        )}

        {step === 'OTP' && (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div className="text-center">
              <p className="text-[#A1A1AA] text-sm mb-4">
                We sent a 6-digit code to <br/>
                <span className="text-white font-medium">{email}</span>
              </p>

              <div className="flex justify-center gap-2 mb-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el
                    }}
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    disabled={isLoading}
                    className="w-[44px] h-[52px] bg-[#242424] border border-[#3F3F46] rounded-md text-white text-xl text-center font-semibold focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange disabled:opacity-50"
                  />
                ))}
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <Button type="submit" className="w-full" disabled={isLoading || otp.join('').length !== 6}>
              {isLoading ? 'Verifying...' : 'Verify Code →'}
            </Button>

            <div className="flex flex-col items-center gap-3 mt-4 text-sm">
              {canResend ? (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="text-orange hover:underline"
                  disabled={isLoading}
                >
                  Resend code
                </button>
              ) : (
                <p className="text-[#A1A1AA]">
                  Didn&apos;t receive it? Resend in 00:{timer.toString().padStart(2, '0')}
                </p>
              )}
              
              <button
                type="button"
                onClick={() => setStep('EMAIL')}
                className="text-[#A1A1AA] hover:text-white transition-colors"
                disabled={isLoading}
              >
                ← Back / use different email
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
