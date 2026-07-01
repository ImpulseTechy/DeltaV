'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'

export default function SuggestRoadmapForm() {
  const [branchName, setBranchName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!branchName || !email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/roadmaps/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ branchName, email }),
      })
      
      if (res.ok) {
        setStatus('success')
        setBranchName('')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-4 text-orange font-body font-medium">
        Thanks! We'll build it when enough engineers request it.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 w-full">
      <input
        type="text"
        placeholder="e.g. Aerospace, Marine, Agricultural"
        value={branchName}
        onChange={(e) => setBranchName(e.target.value)}
        required
        disabled={status === 'loading'}
        className="flex-grow bg-[#1A1A1A] border border-[#3F3F46] text-white rounded-md px-4 py-2 text-sm focus:outline-none focus:border-orange min-w-0"
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === 'loading'}
        className="flex-grow bg-[#1A1A1A] border border-[#3F3F46] text-white rounded-md px-4 py-2 text-sm focus:outline-none focus:border-orange min-w-0"
      />
      <Button 
        type="submit" 
        variant="ghost" 
        className="md:w-auto w-full whitespace-nowrap"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Suggest →'}
      </Button>
      {status === 'error' && (
        <div className="w-full text-red-500 text-sm mt-2 text-center md:hidden">
          Failed to submit. Please try again.
        </div>
      )}
    </form>
  )
}
