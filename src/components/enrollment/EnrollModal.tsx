'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'
import { fireEnrollmentCompleted } from '@/components/analytics/Analytics'

interface EnrollModalProps {
  courseTitle: string
  cohortDates: string
  duration: string
  price: number
  cohortId: string
  slug: string
  onClose: () => void
}

export default function EnrollModal({
  courseTitle,
  cohortDates,
  duration,
  price,
  cohortId,
  slug,
  onClose
}: EnrollModalProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'timeout'>('idle')
  const [error, setError] = useState<string | null>(null)

  const gst = Math.round(price * 0.18)
  const total = price + gst

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const startPolling = (orderId: string) => {
    setPaymentStatus('processing')
    let attempts = 0
    const maxAttempts = 20 // 20 * 3s = 60 seconds

    const pollInterval = setInterval(async () => {
      attempts++
      try {
        const res = await fetch(`/api/enrollments/status?orderId=${orderId}`)
        const data = await res.json()
        
        if (data.enrolled) {
          clearInterval(pollInterval)
          setPaymentStatus('success')
          
          // Fire Analytics on successful enrollment
          fireEnrollmentCompleted(slug, total)

          router.push(`/dashboard/courses/${slug}`)
        } else if (attempts >= maxAttempts) {
          clearInterval(pollInterval)
          setPaymentStatus('timeout')
        }
      } catch (err) {
        console.error('Polling error:', err)
      }
    }, 3000)
  }

  const handlePayment = async () => {
    setLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push(`/auth?next=/courses/${slug}`)
        return
      }

      // Create Order
      const res = await fetch('/api/orders/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cohortId, courseSlug: slug })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create order')
      }

      // Initialize Razorpay Options
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: 'Delta V',
        description: `Enrollment: ${courseTitle}`,
        order_id: data.orderId,
        handler: function (response: any) {
          // DO NOT grant access here. Webhook will do it.
          // Start polling for backend confirmation
          startPolling(data.orderId)
        },
        prefill: {
          email: session.user.email
        },
        theme: {
          color: '#FF6B00'
        },
        modal: {
          ondismiss: function () {
            setLoading(false)
          }
        }
      }

      const rzp = new (window as any).Razorpay(options)
      rzp.on('payment.failed', function (response: any) {
        console.error(response.error)
        setError(response.error.description || 'Payment failed')
        setLoading(false)
      })

      rzp.open()
    } catch (err: any) {
      console.error(err)
      setError(err.message)
      setLoading(false)
    }
  }

  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(total)

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-xl w-full max-w-[480px] shadow-2xl relative flex flex-col">
        {paymentStatus === 'idle' && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-[#A1A1AA] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="p-6 md:p-8">
          {paymentStatus === 'idle' && (
            <>
              <h2 className="font-display font-semibold text-2xl text-white mb-6">Order Summary</h2>
              
              <div className="mb-6 space-y-1">
                <h3 className="text-white font-medium text-lg leading-tight">{courseTitle}</h3>
                <p className="text-[#A1A1AA] text-sm">{cohortDates} • {duration}</p>
              </div>

              <div className="bg-[#242424] border border-[#3F3F46] rounded-lg p-4 space-y-3 mb-6">
                <div className="flex justify-between text-[#A1A1AA] text-sm">
                  <span>Course fee</span>
                  <span>₹{price.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[#A1A1AA] text-sm">
                  <span>GST (18%)</span>
                  <span>₹{gst.toLocaleString('en-IN')}</span>
                </div>
                <div className="w-full h-[1px] bg-[#3F3F46] my-2"></div>
                <div className="flex justify-between text-white font-medium text-lg">
                  <span>Total</span>
                  <span>{formattedTotal}</span>
                </div>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded text-red-500 text-sm">
                  {error}
                </div>
              )}

              <Button 
                onClick={handlePayment} 
                loading={loading}
                className="w-full mb-4 py-3"
              >
                Pay {formattedTotal} via Razorpay →
              </Button>

              <div className="flex flex-col gap-3 text-center">
                <div className="flex items-center justify-center gap-1.5 text-text-muted text-[12px]">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Secured by Razorpay. Delta V does not store your card details.</span>
                </div>
                <p className="text-text-muted text-[12px]">
                  Refund policy: Full refund available 48 hrs before first session.
                </p>
              </div>
            </>
          )}

          {paymentStatus === 'processing' && (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange mb-6"></div>
              <h2 className="text-white font-display text-2xl font-semibold mb-2">Processing Payment</h2>
              <p className="text-[#A1A1AA] text-sm">
                Please do not close this window or click back.<br/>We are confirming your enrollment.
              </p>
            </div>
          )}

          {paymentStatus === 'success' && (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-white font-display text-2xl font-semibold mb-2">Enrollment Confirmed!</h2>
              <p className="text-[#A1A1AA] text-sm mb-6">Redirecting you to the dashboard...</p>
            </div>
          )}

          {paymentStatus === 'timeout' && (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="w-16 h-16 bg-orange/20 text-orange rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-white font-display text-2xl font-semibold mb-2">Payment Received</h2>
              <p className="text-[#A1A1AA] text-sm mb-6">
                Your enrollment is being processed. Check your email or visit your dashboard in a few minutes.
              </p>
              <Button href="/dashboard" className="w-full">
                Go to Dashboard
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
