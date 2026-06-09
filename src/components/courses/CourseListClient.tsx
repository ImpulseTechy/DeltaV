'use client'

import React, { useState } from 'react'
import { clsx } from 'clsx'
import CourseCard from '@/components/ui/CourseCard'
import Button from '@/components/ui/Button'

// Shared type for the course data
export type CourseData = {
  title: string
  topicTag: string
  duration: string
  nextBatch: string
  price: string
  status: 'open' | 'upcoming' | 'closed' | 'pending' | 'confirmed' | 'coming-soon'
  slug: string
}

interface CourseListClientProps {
  courses: CourseData[]
}

const TOPIC_FILTERS = ['All', 'IoT', 'Robotics', 'Embedded', 'PLC/Automation', 'CubeSat']

export default function CourseListClient({ courses }: CourseListClientProps) {
  const [activeFilter, setActiveFilter] = useState('All')

  // Filter courses
  const filteredCourses = courses.filter((course) => {
    if (activeFilter === 'All') return true
    // The filter checks if the topicTag includes the activeFilter text
    // "ECE/IoT" includes "IoT"
    return course.topicTag.toLowerCase().includes(activeFilter.toLowerCase())
  })

  return (
    <>
      {/* Filter Bar (Sticky) */}
      <div className="sticky top-0 z-40 bg-bg-primary/95 backdrop-blur border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
            {TOPIC_FILTERS.map((topic) => (
              <button
                key={topic}
                onClick={() => setActiveFilter(topic)}
                className={clsx(
                  "whitespace-nowrap font-body text-[13px] rounded-full px-4 py-1 transition-colors border",
                  activeFilter === topic 
                    ? "bg-orange-dim border-orange text-orange" 
                    : "bg-transparent border-border text-text-secondary hover:text-white hover:border-border-light"
                )}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.slug}
                title={course.title}
                topicTag={course.topicTag}
                duration={course.duration}
                nextBatch={course.nextBatch}
                price={course.price}
                status={course.status}
                slug={course.slug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-text-muted font-body">
            No courses found for "{activeFilter}". Check back later!
          </div>
        )}

        {/* CTA Strip Below Grid */}
        <div className="mt-16 lg:mt-24 w-full bg-bg-secondary border border-border rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
          <span className="font-body text-text-secondary text-lg">Looking for a college workshop instead?</span>
          <Button variant="ghost" size="lg" className="whitespace-nowrap">
            View Workshop Topics →
          </Button>
        </div>
      </div>
    </>
  )
}
