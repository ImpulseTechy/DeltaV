'use client'

import React from 'react'
import EnrollButton from './EnrollButton'

interface MobileEnrollBarProps {
  slug: string
  price: number
  seatsLeft: number
  courseTitle?: string
  duration?: string
}

export default function MobileEnrollBar({ slug, price, seatsLeft, courseTitle, duration }: MobileEnrollBarProps) {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-bg-secondary border-t border-border px-4 py-3 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col">
        <span className="text-white font-body font-bold text-lg leading-tight">{formattedPrice}</span>
        <span className="text-orange font-body text-xs font-medium">{seatsLeft} seats left</span>
      </div>
      <EnrollButton slug={slug} price={price} isCompact={true} courseTitle={courseTitle} duration={duration} />
    </div>
  )
}
