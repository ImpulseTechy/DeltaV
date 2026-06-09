import React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'text'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  href?: string
  disabled?: boolean
  loading?: boolean
  className?: string
  id?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  disabled = false,
  loading = false,
  className,
  id,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-body font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 disabled:opacity-50 disabled:pointer-events-none'

  const variantClasses = {
    primary: 'bg-orange hover:bg-orange-light text-white rounded-md',
    ghost: 'bg-transparent border border-orange text-orange hover:bg-orange-dim rounded-md',
    text: 'text-orange hover:underline bg-transparent border-none p-0',
  }

  const sizeClasses = {
    sm: variant === 'text' ? 'text-xs' : 'text-xs py-1.5 px-3',
    md: variant === 'text' ? 'text-sm' : 'text-sm py-2 px-4',
    lg: variant === 'text' ? 'text-base' : 'text-base py-3 px-6',
  }

  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)

  const isButtonDisabled = disabled || loading

  const spinner = (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  if (href && !isButtonDisabled) {
    return (
      <Link href={href} className={classes} onClick={onClick as any} id={id}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isButtonDisabled}
      className={classes}
      id={id}
    >
      {loading && spinner}
      {children}
    </button>
  )
}
