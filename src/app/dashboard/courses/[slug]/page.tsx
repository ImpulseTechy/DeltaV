import { createClient } from '@/lib/supabase/server'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import CourseTabs from '@/components/dashboard/CourseTabs'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return {
    title: `${title} | Classroom | Delta V`,
  }
}

export default async function ClassroomPage({ params }: Props) {
  const { slug } = await params
  const supabase = createClient()
  // MOCK DATA FOR UI TESTING
  const session = { user: { id: 'mock' } }

  const enrollments = [{ cohort_id: 'c1' }]

  if (!enrollments || enrollments.length === 0) {
    // User is not enrolled in this course
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="font-display font-semibold text-white text-3xl mb-4">Access Denied</h1>
        <p className="font-body text-[#A1A1AA] max-w-md mx-auto mb-8">
          You are not currently enrolled in this course. If you believe this is an error, please contact support.
        </p>
        <Link 
          href="/dashboard/courses"
          className="inline-flex items-center justify-center font-body font-medium transition-colors bg-orange hover:bg-orange-light text-white text-sm py-2 px-6 rounded-md"
        >
          Back to My Courses
        </Link>
      </div>
    )
  }

  const cohortId = enrollments[0].cohort_id

  // 2. Fetch classroom data
  const sessions = [
    { id: '1', title: 'Intro to Platform', start_time: new Date(Date.now() - 86400000).toISOString(), status: 'completed', recording_url: 'https://vimeo.com/76979871' },
    { id: '2', title: 'Deep Dive', start_time: new Date(Date.now() + 15 * 60000).toISOString(), status: 'upcoming', join_link: 'https://zoom.us/test' },
  ]
  const materials = [
    { id: '1', title: 'Course Syllabus', type: 'pdf', url: '#', week_number: 1 },
    { id: '2', title: 'Code Repo', type: 'repo', url: '#', week_number: 1 }
  ]
  const announcements = [
    { id: '1', title: 'Welcome to the cohort!', content: 'Please review the syllabus.', created_at: new Date().toISOString() }
  ]

  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center text-[#A1A1AA] font-body text-[13px] mb-4">
          <Link href="/dashboard/courses" className="hover:text-white transition-colors">My Courses</Link>
          <span className="mx-2">›</span>
          <span className="text-white truncate">{title}</span>
        </div>
        <h1 className="font-display font-semibold text-white text-3xl sm:text-4xl tracking-wide">
          {title}
        </h1>
      </div>

      <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-lg p-1 sm:p-6">
        <CourseTabs 
          sessions={sessions || []}
          materials={materials || []}
          announcements={announcements || []}
        />
      </div>
    </div>
  )
}
