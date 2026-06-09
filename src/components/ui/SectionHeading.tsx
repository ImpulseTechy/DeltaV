import React from 'react'
import { clsx } from 'clsx'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  className?: string
  id?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={clsx('flex flex-col mb-10', className)} id={id}>
      <span className="font-mono text-[11px] text-orange tracking-widest uppercase mb-2">
        {label}
      </span>
      <h2 className="font-display text-3xl md:text-4xl text-white font-semibold leading-tight mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-base text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
