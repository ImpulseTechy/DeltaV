import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export const metadata = {
  title: 'My Courses | Delta V',
}

export default async function MyCoursesPage() {
  const supabase = createClient()
  // MOCK DATA FOR UI TESTING
  const session = { user: { id: 'mock' } }

  const enrollments = [
    {
      id: 'mock-1',
      status: 'active',
      cohort_id: 'c1',
      cohorts: { id: 'c1', course_id: 'esp32-iot-fundamentals', start_date: '2026-06-01', end_date: '2026-07-01' }
    },
    {
      id: 'mock-2',
      status: 'active',
      cohort_id: 'c2',
      cohorts: { id: 'c2', course_id: 'plc-industrial-automation', start_date: '2026-06-15', end_date: '2026-07-15' }
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-semibold text-white text-3xl sm:text-4xl tracking-wide mb-2">
          My Courses
        </h1>
        <p className="font-body text-[#A1A1AA] text-[15px]">
          Access your enrolled cohorts, live sessions, and materials.
        </p>
      </div>

      {!enrollments || enrollments.length === 0 ? (
        <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-lg p-10 text-center">
          <p className="font-body text-[#A1A1AA] mb-6">You aren't enrolled in any courses yet.</p>
          <Link 
            href="/courses" 
            className="inline-flex items-center justify-center font-body font-medium transition-colors bg-orange hover:bg-orange-light text-white text-sm py-2 px-6 rounded-md"
          >
            Browse Courses
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrollments.map((enrollment: any) => {
            const courseId = enrollment.cohorts?.course_id
            const title = courseId?.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
            const startDate = new Date(enrollment.cohorts?.start_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            const progress = 35 // Mocked progress
            
            return (
              <div key={enrollment.id} className="bg-[#1A1A1A] border border-[#3F3F46] rounded-lg p-5 flex flex-col">
                <h3 className="font-display font-semibold text-white text-2xl mb-1 line-clamp-2">
                  {title}
                </h3>
                <p className="font-body text-[#A1A1AA] text-sm mb-6">
                  Cohort started {startDate}
                </p>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body text-[13px] text-[#A1A1AA]">Course Progress</span>
                    <span className="font-mono text-[11px] text-orange">{progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#242424] rounded-full overflow-hidden mb-6">
                    <div className="h-full bg-orange" style={{ width: `${progress}%` }} />
                  </div>
                  
                  <Link 
                    href={`/dashboard/courses/${courseId}`}
                    className="flex items-center justify-center w-full font-body font-medium transition-colors bg-transparent border border-[#3F3F46] text-white hover:bg-[#242424] text-sm py-2.5 px-4 rounded-md"
                  >
                    Open Classroom →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
