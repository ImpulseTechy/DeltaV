import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Dashboard | Delta V',
}

export default async function DashboardPage() {
  const supabase = createClient()
  // MOCK DATA FOR UI TESTING
  const session = { user: { id: 'mock' } }
  const firstName = 'Yogesh'

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

  const enrolledCount = 2
  const certificatesEarned = 1
  const sessionsAttended = 4

  const nextSession = {
    title: 'ESP32 WiFi Provisioning Deep Dive',
    start_time: new Date(Date.now() + 20 * 60000).toISOString(), // 20 mins from now
    join_link: 'https://zoom.us/test'
  }

  return (
    <div className="space-y-10">
      {/* Greeting */}
      <div>
        <h1 className="font-display font-semibold text-white text-3xl sm:text-4xl tracking-wide mb-2">
          Welcome back, {firstName}.
        </h1>
        <p className="font-body text-[#A1A1AA] text-[15px]">
          Here's what's happening with your learning.
        </p>
      </div>

      {/* Section 1 - Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Courses Enrolled', value: enrolledCount },
          { label: 'Sessions Attended', value: sessionsAttended },
          { label: 'Certificates Earned', value: certificatesEarned },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#1A1A1A] rounded-lg p-5 border border-[#3F3F46]">
            <div className="font-display font-semibold text-white text-3xl mb-1">{stat.value}</div>
            <div className="font-body text-[#52525B] text-[13px] uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Section 2 - Upcoming class */}
      {nextSession && (
        <div>
          <h2 className="font-mono text-orange text-sm mb-4 tracking-widest uppercase">UPCOMING</h2>
          <div className="bg-[#1A1A1A] border-l-4 border-orange rounded-lg p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-mono text-orange text-[11px] uppercase tracking-wider mb-2">Next Live Session</div>
              <h3 className="font-display font-semibold text-white text-xl sm:text-2xl mb-1">{nextSession.title}</h3>
              <p className="font-body text-[#A1A1AA] text-sm">
                {new Date(nextSession.start_time).toLocaleString('en-US', { 
                  weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' 
                })}
              </p>
            </div>
            
            {/* Zoom Link Logic */}
            <div>
              {(() => {
                const now = new Date()
                const sessionTime = new Date(nextSession.start_time)
                const diffMinutes = (sessionTime.getTime() - now.getTime()) / 1000 / 60

                if (diffMinutes <= 30 && diffMinutes >= -120) {
                  return (
                    <a 
                      href={nextSession.join_link || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center font-body font-medium transition-colors bg-orange hover:bg-orange-light text-white text-sm py-2 px-6 rounded-md"
                    >
                      Join Live Session →
                    </a>
                  )
                }
                
                return (
                  <div className="font-body text-[#52525B] text-sm">
                    Link unlocks 30 min before session
                  </div>
                )
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Section 3 - Enrolled Courses */}
      {enrollments && enrollments.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-mono text-orange text-sm tracking-widest uppercase">YOUR COURSES</h2>
            <Link href="/dashboard/courses" className="font-body text-[#A1A1AA] hover:text-white text-sm transition-colors flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="flex overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 hide-scrollbar">
            {enrollments.map((enrollment: any) => {
              const courseId = enrollment.cohorts?.course_id
              const progress = 35 // Mocked progress
              
              return (
                <div key={enrollment.id} className="min-w-[280px] bg-[#1A1A1A] border border-[#3F3F46] rounded-lg p-5 flex flex-col">
                  <h3 className="font-display font-semibold text-white text-xl mb-4 line-clamp-1">
                    {courseId?.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </h3>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-[13px] text-[#A1A1AA]">Progress</span>
                      <span className="font-mono text-[11px] text-orange">{progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#242424] rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-orange" style={{ width: `${progress}%` }} />
                    </div>
                    
                    <Link 
                      href={`/dashboard/courses/${courseId}`}
                      className="font-body text-[14px] text-orange hover:text-orange-light transition-colors flex items-center gap-1"
                    >
                      Open Classroom →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
