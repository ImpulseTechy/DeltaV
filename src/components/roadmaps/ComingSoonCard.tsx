'use client'

import React, { useState, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import Button from '@/components/ui/Button'

interface ComingSoonCardProps {
  id: string
  title: string
  description: string
  icon: ReactNode
}

export default function ComingSoonCard({ id, title, description, icon }: ComingSoonCardProps) {
  const [showInput, setShowInput] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/roadmaps/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roadmapSlug: id, email }),
      })
      
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="bg-[#121212] border border-[#2A2A2A] rounded-xl p-6 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        {icon}
      </div>
      
      <h3 className="font-display font-semibold text-xl text-[#52525B] mb-2 leading-tight">
        {title}
      </h3>
      
      <p className="font-body text-sm text-[#52525B] line-clamp-2 mb-6 flex-grow">
        {description}
      </p>

      {status === 'success' ? (
        <div className="text-[#A1A1AA] text-sm font-body text-center py-2 bg-[#1A1A1A] rounded-md border border-[#2A2A2A]">
          We'll notify you!
        </div>
      ) : showInput ? (
        <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
            className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#52525B]"
          />
          <Button 
            type="submit" 
            variant="ghost" 
            className="w-full border-[#2A2A2A] text-[#A1A1AA] hover:text-white"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe →'}
          </Button>
          {status === 'error' && <p className="text-red-500 text-xs mt-1">Failed to subscribe. Try again.</p>}
        </form>
      ) : (
        <Button 
          type="button" 
          variant="ghost" 
          onClick={() => setShowInput(true)}
          className="w-full border-[#2A2A2A] text-[#52525B] hover:text-[#A1A1AA] hover:border-[#3F3F46]"
        >
          Notify Me
        </Button>
      )}
    </div>
  )
}
