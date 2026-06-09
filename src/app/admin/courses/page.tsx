'use client'

import React, { useState } from 'react'
import { Plus, Edit2, Power, X, Calendar as CalendarIcon } from 'lucide-react'
import { clsx } from 'clsx'
import Badge from '@/components/ui/Badge'
import { useToast } from '@/components/ui/Toast'

type Course = {
  id: string
  title: string
  slug: string
  topic_tag: string
  description: string
  instructor_name: string
  is_featured: boolean
  status: 'published' | 'draft'
  enrollments: number
}

// MOCK DATA
const MOCK_COURSES: Course[] = [
  { id: '1', title: 'ESP32 IoT Fundamentals', slug: 'esp32-iot-fundamentals', topic_tag: 'IoT & Edge', description: '...', instructor_name: 'Aditya', is_featured: true, status: 'published', enrollments: 45 },
  { id: '2', title: 'Embedded Linux & RTOS', slug: 'embedded-linux', topic_tag: 'OS', description: '...', instructor_name: 'Rahul', is_featured: false, status: 'published', enrollments: 32 },
  { id: '3', title: 'RISC-V Architecture', slug: 'riscv-architecture', topic_tag: 'VLSI', description: '...', instructor_name: 'Nisha', is_featured: false, status: 'draft', enrollments: 0 },
]

export default function CourseManagerPage() {
  const [courses, setCourses] = useState<Course[]>(MOCK_COURSES)
  const [showCourseDrawer, setShowCourseDrawer] = useState(false)
  const [showCohortDrawer, setShowCohortDrawer] = useState(false)
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null)
  
  const { toast } = useToast()

  const handleToggleStatus = (id: string) => {
    setCourses(prev => prev.map(c => {
      if (c.id === id) {
        const newStatus = c.status === 'published' ? 'draft' : 'published'
        toast(`Course ${newStatus}`, 'success')
        return { ...c, status: newStatus }
      }
      return c
    }))
  }

  const handleSaveCourse = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementation for saving course
    toast('Course created successfully', 'success')
    setShowCourseDrawer(false)
  }

  const handleSaveCohort = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementation for saving cohort
    toast('Cohort scheduled successfully', 'success')
    setShowCohortDrawer(false)
    setActiveCourseId(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-heading font-semibold text-3xl text-white">Course Manager</h1>
          <p className="font-body text-[#A1A1AA] mt-1">Manage courses, curricula, and cohorts</p>
        </div>
        <button 
          onClick={() => setShowCourseDrawer(true)}
          className="bg-brand-primary text-white px-4 py-2 rounded-lg font-body text-sm font-bold flex items-center gap-2 hover:bg-[#E66000] transition-colors"
        >
          <Plus className="w-4 h-4" /> New Course
        </button>
      </div>

      <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body text-sm">
            <thead className="bg-[#121212] text-[#A1A1AA]">
              <tr>
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Topic</th>
                <th className="px-6 py-4 font-medium">Enrollments</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3F3F46]">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-[#121212]/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-white font-medium">{course.title}</div>
                    <div className="text-xs text-[#A1A1AA] font-mono mt-1">/{course.slug}</div>
                  </td>
                  <td className="px-6 py-4 text-[#D4D4D8]">
                    <span className="bg-[#27272A] px-2 py-1 rounded text-xs">{course.topic_tag}</span>
                  </td>
                  <td className="px-6 py-4 text-[#D4D4D8]">{course.enrollments}</td>
                  <td className="px-6 py-4">
                    <Badge variant={course.status === 'published' ? 'success' : 'default'}>
                      {course.status.toUpperCase()}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                    <button 
                      onClick={() => {
                        setActiveCourseId(course.id)
                        setShowCohortDrawer(true)
                      }}
                      className="p-2 text-blue-400 hover:text-white bg-blue-400/10 hover:bg-blue-500 rounded transition-colors inline-flex items-center gap-1"
                      title="New Cohort"
                    >
                      <CalendarIcon className="w-4 h-4" />
                    </button>
                    <button 
                      className="p-2 text-[#A1A1AA] hover:text-white bg-[#27272A] hover:bg-[#3F3F46] rounded transition-colors"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleToggleStatus(course.id)}
                      className={clsx(
                        "p-2 rounded transition-colors",
                        course.status === 'published' 
                          ? "text-yellow-500 hover:text-white bg-yellow-500/10 hover:bg-yellow-600" 
                          : "text-green-500 hover:text-white bg-green-500/10 hover:bg-green-600"
                      )}
                      title={course.status === 'published' ? 'Unpublish' : 'Publish'}
                    >
                      <Power className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Course Drawer */}
      {showCourseDrawer && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setShowCourseDrawer(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#1A1A1A] border-l border-[#3F3F46] shadow-2xl z-50 transform transition-transform overflow-y-auto">
            <div className="p-6 border-b border-[#3F3F46] flex justify-between items-center sticky top-0 bg-[#121212] z-10">
              <h2 className="font-heading font-semibold text-xl text-white">New Course</h2>
              <button onClick={() => setShowCourseDrawer(false)} className="text-[#A1A1AA] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleSaveCourse} className="space-y-4 font-body text-sm">
                <div>
                  <label className="block text-[#A1A1AA] mb-1">Title</label>
                  <input type="text" required className="w-full bg-[#121212] border border-[#3F3F46] rounded p-2.5 text-white focus:border-brand-primary outline-none" />
                </div>
                <div>
                  <label className="block text-[#A1A1AA] mb-1">Slug</label>
                  <input type="text" required className="w-full bg-[#121212] border border-[#3F3F46] rounded p-2.5 text-white focus:border-brand-primary outline-none font-mono text-xs" placeholder="e.g. iot-fundamentals" />
                </div>
                <div>
                  <label className="block text-[#A1A1AA] mb-1">Topic Tag</label>
                  <select required className="w-full bg-[#121212] border border-[#3F3F46] rounded p-2.5 text-white focus:border-brand-primary outline-none">
                    <option value="">Select topic</option>
                    <option value="IoT">IoT</option>
                    <option value="VLSI">VLSI</option>
                    <option value="Embedded">Embedded</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#A1A1AA] mb-1">Instructor Name</label>
                  <input type="text" required className="w-full bg-[#121212] border border-[#3F3F46] rounded p-2.5 text-white focus:border-brand-primary outline-none" />
                </div>
                <div>
                  <label className="block text-[#A1A1AA] mb-1">Description</label>
                  <textarea required rows={4} className="w-full bg-[#121212] border border-[#3F3F46] rounded p-2.5 text-white focus:border-brand-primary outline-none" />
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <input type="checkbox" id="featured" className="w-4 h-4 rounded border-[#3F3F46] text-brand-primary focus:ring-brand-primary focus:ring-offset-[#1A1A1A] bg-[#121212]" />
                  <label htmlFor="featured" className="text-white">Is Featured?</label>
                </div>
                
                <div className="pt-6">
                  <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 rounded hover:bg-[#E66000] transition-colors">
                    Save Course
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}

      {/* New Cohort Drawer */}
      {showCohortDrawer && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setShowCohortDrawer(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#1A1A1A] border-l border-[#3F3F46] shadow-2xl z-50 transform transition-transform overflow-y-auto">
            <div className="p-6 border-b border-[#3F3F46] flex justify-between items-center sticky top-0 bg-[#121212] z-10">
              <h2 className="font-heading font-semibold text-xl text-white">Schedule New Cohort</h2>
              <button onClick={() => setShowCohortDrawer(false)} className="text-[#A1A1AA] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleSaveCohort} className="space-y-4 font-body text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#A1A1AA] mb-1">Start Date</label>
                    <input type="date" required className="w-full bg-[#121212] border border-[#3F3F46] rounded p-2.5 text-white focus:border-brand-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-[#A1A1AA] mb-1">End Date</label>
                    <input type="date" required className="w-full bg-[#121212] border border-[#3F3F46] rounded p-2.5 text-white focus:border-brand-primary outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#A1A1AA] mb-1">Schedule Text</label>
                  <input type="text" required placeholder="e.g. Mon/Wed/Fri 8-9 PM" className="w-full bg-[#121212] border border-[#3F3F46] rounded p-2.5 text-white focus:border-brand-primary outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#A1A1AA] mb-1">Seats Available</label>
                    <input type="number" required min="1" className="w-full bg-[#121212] border border-[#3F3F46] rounded p-2.5 text-white focus:border-brand-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-[#A1A1AA] mb-1">Price (₹)</label>
                    <input type="number" required min="0" className="w-full bg-[#121212] border border-[#3F3F46] rounded p-2.5 text-white focus:border-brand-primary outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#A1A1AA] mb-1">Zoom Link</label>
                  <input type="url" required className="w-full bg-[#121212] border border-[#3F3F46] rounded p-2.5 text-white focus:border-brand-primary outline-none" />
                </div>
                <div>
                  <label className="block text-[#A1A1AA] mb-1">Status</label>
                  <select required className="w-full bg-[#121212] border border-[#3F3F46] rounded p-2.5 text-white focus:border-brand-primary outline-none">
                    <option value="enrolling">Enrolling</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                
                <div className="pt-6">
                  <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 rounded hover:bg-[#E66000] transition-colors">
                    Create Cohort
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
