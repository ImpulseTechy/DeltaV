import React from 'react'
import { clsx } from 'clsx'

interface BadgeProps {
  variant?: 'open' | 'upcoming' | 'closed' | 'pending' | 'confirmed' | 'success' | 'destructive' | 'warning' | 'default'
  label?: string
  children?: React.ReactNode
  className?: string
  id?: string
}

export default function Badge({ variant = 'default', label, children, className, id }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-mono border transition-colors'

  const variantClasses = {
    open: 'bg-emerald-500/15 border-emerald-600 text-emerald-400',
    upcoming: 'bg-[#FF6B00]/15 border-[#FF6B00] text-[#FF6B00]',
    closed: 'bg-zinc-800/40 border-zinc-700 text-zinc-500',
    pending: 'bg-yellow-500/10 border-yellow-600/50 text-yellow-500',
    confirmed: 'bg-emerald-500/15 border-emerald-500 text-emerald-400',
    success: 'bg-emerald-500/15 border-emerald-500 text-emerald-400',
    destructive: 'bg-red-500/15 border-red-500 text-red-400',
    warning: 'bg-yellow-500/10 border-yellow-600/50 text-yellow-500',
    default: 'bg-zinc-800/40 border-zinc-700 text-zinc-500',
  }

  return (
    <span className={clsx(baseClasses, variantClasses[variant], className)} id={id}>
      {children || label}
    </span>
  )
}
