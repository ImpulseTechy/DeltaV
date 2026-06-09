'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'

import EnrollModal from '@/components/enrollment/EnrollModal'

interface EnrollButtonProps {
  slug: string
  price: number
  isCompact?: boolean
  courseTitle?: string
  duration?: string
}

const COHORT_MAP: Record<string, string> = {
  'esp32-iot-fundamentals': 'esp32-july-2026',
  'embedded-systems-rtos': 'rtos-august-2026',
  'plc-industrial-automation': 'plc-august-2026'
}

export default function EnrollButton({ slug, price, isCompact = false, courseTitle = 'Course', duration = 'Self-paced' }: EnrollButtonProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const [showModal, setShowModal] = useState(false)

  const handleEnrollClick = async () => {
    setLoading(true)
    try {
      const supabase = createClient()
      const { data: { session } } = await supabase.auth.getSession()

      if (session) {
        setShowModal(true)
      } else {
        // Not logged in, redirect to auth with next param
        router.push(`/auth?next=/courses/${slug}`)
      }
    } catch (error) {
      console.error('Error checking session:', error)
    } finally {
      setLoading(false)
    }
  }

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)

  const cohortId = COHORT_MAP[slug] || 'esp32-july-2026'

  return (
    <>
      <Button 
        variant="primary" 
        size={isCompact ? 'md' : 'lg'} 
        className={isCompact ? '' : 'w-full py-3'}
        onClick={handleEnrollClick}
        loading={loading}
      >
        {isCompact ? 'Enroll Now →' : `Enroll Now — ${formattedPrice}`}
      </Button>

      {showModal && (
        <EnrollModal
          courseTitle={courseTitle}
          cohortDates="Starts Next Week" // Hardcoded mock
          duration={duration}
          price={price}
          cohortId={cohortId}
          slug={slug}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}
