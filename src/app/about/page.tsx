import React from 'react'
import { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'

export async function generateMetadata(): Promise<Metadata> {
  const title = "About Delta V"
  const description = "Delta V is an Orbital Research Lab brand dedicated to bringing hands-on engineering education to ECE and EEE students across India."
  return {
    title: `${title} | Delta V`,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `/og?title=${encodeURIComponent(title)}&type=default` }],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og?title=${encodeURIComponent(title)}&type=default`]
    }
  }
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          label="OUR MISSION" 
          title="Bridging the gap between theory and industry." 
          subtitle="Delta V provides world-class hands-on education for the next generation of hardware engineers."
        />
        
        <div className="mt-12 text-text-secondary font-body max-w-3xl leading-relaxed space-y-6">
          <p>
            The traditional engineering curriculum often leaves students with strong theoretical knowledge but a significant lack of practical, hands-on experience. At Delta V, we believe that true engineering is learned by building, breaking, and iterating.
          </p>
          <p>
            Born out of Orbital Research Lab, we bring industry-grade tools, workflows, and standards directly into the classroom through our live online cohorts and in-person college workshops.
          </p>
        </div>
      </div>
    </main>
  )
}
