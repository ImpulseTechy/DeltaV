'use client'

import { useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function GuestSync() {
  const hasSynced = useRef(false)

  useEffect(() => {
    if (hasSynced.current) return
    
    const syncProgress = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) return

      // Find all localStorage keys matching dv_roadmap_progress_*
      const keysToSync = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith('dv_roadmap_progress_')) {
          keysToSync.push(key)
        }
      }

      if (keysToSync.length === 0) return

      // Sync each roadmap's progress
      for (const key of keysToSync) {
        try {
          const rawData = localStorage.getItem(key)
          if (!rawData) continue
          
          const progress = JSON.parse(rawData)
          const roadmapSlug = key.replace('dv_roadmap_progress_', '')

          const res = await fetch('/api/roadmaps/progress/bulk-import', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roadmapSlug, progress })
          })

          if (res.ok) {
            localStorage.removeItem(key)
          }
        } catch (e) {
          console.error('Error syncing guest progress for key', key, e)
        }
      }
      
      hasSynced.current = true
    }

    syncProgress()
  }, [])

  return null
}
