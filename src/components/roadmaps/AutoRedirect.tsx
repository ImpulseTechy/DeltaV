'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AutoRedirect({ slug, nodeId }: { slug: string, nodeId: string }) {
  const router = useRouter()

  useEffect(() => {
    // We use router.replace instead of window.location to ensure a fast, client-side route transition
    router.replace(`/roadmaps/${slug}?node=${nodeId}`)
  }, [slug, nodeId, router])

  // Return null as this component has no visual footprint
  return null
}
