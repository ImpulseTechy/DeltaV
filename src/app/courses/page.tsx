import { Metadata } from 'next'
import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import CourseListClient, { CourseData } from '@/components/courses/CourseListClient'

export async function generateMetadata(): Promise<Metadata> {
  const title = "Live Courses for ECE/EEE Students"
  const description = "Enroll in live cohort courses in IoT, Robotics, PLC Automation, and Embedded AI. IoT course for ECE students India, embedded systems course online India."
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

// Hardcoded data for Phase 1
const COURSES: CourseData[] = [
  {
    title: 'IoT with ESP32',
    topicTag: 'ECE/IoT',
    duration: '6 weeks',
    nextBatch: 'July 14',
    price: '₹1,999',
    status: 'open',
    slug: 'esp32-iot-fundamentals',
  },
  {
    title: 'Embedded Systems & RTOS',
    topicTag: 'ECE/Embedded',
    duration: '8 weeks',
    nextBatch: 'Aug 4',
    price: '₹2,499',
    status: 'upcoming',
    slug: 'embedded-systems-rtos',
  },
  {
    title: 'PLC & Industrial Automation',
    topicTag: 'EEE/PLC',
    duration: '5 weeks',
    nextBatch: 'Aug 18',
    price: '₹1,999',
    status: 'upcoming',
    slug: 'plc-industrial-automation',
  },
  {
    title: 'CubeSat Design & Build',
    topicTag: 'ECE/Space',
    duration: '6 weeks',
    nextBatch: 'Sep 1',
    price: '₹2,999',
    status: 'upcoming',
    slug: 'cubesat-design-build',
  },
  {
    title: 'TinyML & Edge AI',
    topicTag: 'ECE/AI',
    duration: '4 weeks',
    nextBatch: 'Sep 15',
    price: '₹1,499',
    status: 'upcoming',
    slug: 'tinyml-edge-ai',
  },
  {
    title: 'VFD & Motor Drives',
    topicTag: 'EEE/Automation',
    duration: '3 weeks',
    nextBatch: 'TBA',
    price: '₹999',
    status: 'coming-soon',
    slug: 'vfd-motor-drives',
  },
]

export default function CoursesPage() {
  return (
    <main className="min-h-screen">
      {/* Page header section */}
      <section className="py-16 bg-bg-primary mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            label="ALL COURSES" 
            title="Pick your course. Join the next cohort." 
            subtitle="Live instruction. Real hardware. Verified certificates."
          />
        </div>
      </section>

      {/* Filter and Grid */}
      <CourseListClient courses={COURSES} />
    </main>
  )
}
