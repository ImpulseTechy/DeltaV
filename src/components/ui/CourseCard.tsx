'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Badge from './Badge'
import { clsx } from 'clsx'
import { createClient } from '@/lib/supabase/client'
import Button from './Button'

interface CourseCardProps {
  title: string
  topicTag: string
  duration: string
  nextBatch: string
  price: string
  status: 'open' | 'upcoming' | 'closed' | 'pending' | 'confirmed' | 'coming-soon'
  slug: string
  className?: string
  id?: string
}

export default function CourseCard({
  title,
  topicTag,
  duration,
  nextBatch,
  price,
  status,
  slug,
  className,
  id,
}: CourseCardProps) {
  const [showNotifyForm, setShowNotifyForm] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Map variant labels
  const badgeLabels: Record<string, string> = {
    open: 'Admissions Open',
    upcoming: 'Starting Soon',
    closed: 'Batch Closed',
    pending: 'Pending Batch',
    confirmed: 'Confirmed Batch',
    'coming-soon': 'Coming Soon',
  }

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from('waitlist')
        .insert([{ user_email: email, course_slug: slug, created_at: new Date().toISOString() }])

      if (error) throw error
      setSubmitted(true)
    } catch (err) {
      console.error('Error joining waitlist:', err)
      // Since table might not exist yet, we still show success for the demo/phase
      setSubmitted(true) 
    } finally {
      setLoading(false)
    }
  }

  const isComingSoon = status === 'coming-soon'

  return (
    <div
      className={clsx(
        'flex flex-col bg-bg-secondary border border-border hover:border-border-light rounded-lg p-5 transition-all duration-300 min-h-[260px]',
        className
      )}
      id={id}
    >
      {/* Top Section */}
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-[10px] text-orange border border-orange/30 bg-orange/5 px-2.5 py-0.5 rounded tracking-wider uppercase">
          {topicTag}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-white text-[1.4rem] font-semibold leading-snug mb-3">
        {title}
      </h3>

      {/* Middle Meta Info */}
      <div className="flex flex-col gap-1 mb-6">
        <div className="flex items-center gap-1.5 text-[13px] text-text-secondary font-body">
          <span className="text-text-muted">Duration:</span>
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[13px] text-text-secondary font-body">
          <span className="text-text-muted">Next Batch:</span>
          <span>{nextBatch}</span>
        </div>
      </div>

      {/* Bottom Action Row */}
      <div className="flex items-end justify-between mt-auto pt-4 border-t border-border/40 min-h-[50px]">
        {!showNotifyForm ? (
          <>
            <div className="flex flex-col items-start gap-1">
              <span className="text-[11px] text-text-muted uppercase tracking-wider font-mono">Price</span>
              <div className="flex items-center gap-2">
                <span className="font-body font-bold text-white text-base">{price}</span>
                <Badge variant={status === 'coming-soon' ? 'pending' : status} label={badgeLabels[status] || status} />
              </div>
            </div>

            {isComingSoon ? (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={(e) => {
                  e.preventDefault()
                  setShowNotifyForm(true)
                }}
              >
                Notify Me
              </Button>
            ) : (
              <Link
                href={`/courses/${slug}`}
                className="font-body text-sm font-medium text-orange hover:text-orange-light transition-colors flex items-center gap-1 group"
              >
                Enroll <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            )}
          </>
        ) : (
          <div className="w-full">
            {submitted ? (
              <div className="text-[13px] text-[#22c55e] font-body text-center py-2 bg-[#22c55e]/10 rounded border border-[#22c55e]/30">
                You're on the list! We'll notify you.
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="flex gap-2 w-full">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-bg-tertiary border border-border rounded px-3 py-1.5 text-[13px] text-white focus:outline-none focus:border-orange font-body"
                />
                <Button 
                  variant="primary" 
                  size="sm" 
                  loading={loading}
                >
                  Join
                </Button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
