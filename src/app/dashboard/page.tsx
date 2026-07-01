import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { ArrowRight, Cpu, Wifi, Settings } from 'lucide-react'
import GuestSync from '@/components/roadmaps/GuestSync'

export const metadata = {
  title: 'Dashboard | Delta V',
}

export default async function DashboardPage() {
  const supabase = await createClient()
  // MOCK DATA FOR UI TESTING
  const { data: { user } } = await supabase.auth.getUser()
  const firstName = 'Yogesh'

  let roadmapStats: any[] = []
  if (user) {
    const { data: progressData } = await supabase
      .from('roadmap_progress')
      .select('roadmap_slug, status')
      .eq('user_id', user.id)

    if (progressData) {
      const grouped = progressData.reduce((acc: any, row: any) => {
        if (!acc[row.roadmap_slug]) {
          acc[row.roadmap_slug] = { roadmap_slug: row.roadmap_slug, total: 52, completed: 0 } // Assuming 52 for core, etc.
        }
        if (row.status === 'done') {
          acc[row.roadmap_slug].completed += 1
        }
        return acc
      }, {})
      
      // Fix totals based on real JSON files
      if (grouped['ece-core']) grouped['ece-core'].total = 52
      if (grouped['embedded-iot']) grouped['embedded-iot'].total = 38
      if (grouped['eee-automation']) grouped['eee-automation'].total = 41

      roadmapStats = Object.values(grouped)
    }
  }

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

      {/* Section 4 - My Roadmaps */}
      <div>
        <h2 className="font-mono text-orange text-sm mb-4 tracking-widest uppercase">MY ROADMAPS</h2>
        
        {roadmapStats && roadmapStats.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roadmapStats.map(stat => {
              const pct = stat.total > 0 ? Math.round((stat.completed / stat.total) * 100) : 0
              let Icon = Cpu
              let displayTitle = stat.roadmap_slug
              if (stat.roadmap_slug === 'ece-core') { displayTitle = 'ECE Core Engineer'; Icon = Cpu }
              if (stat.roadmap_slug === 'embedded-iot') { displayTitle = 'Embedded Systems & IoT'; Icon = Wifi }
              if (stat.roadmap_slug === 'eee-automation') { displayTitle = 'Industrial Automation'; Icon = Settings }
              
              return (
                <div key={stat.roadmap_slug} className="bg-[#1A1A1A] border border-[#3F3F46] rounded-lg p-5 flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <Icon className="w-6 h-6 text-orange" />
                    <h3 className="font-display font-semibold text-white text-[1.2rem] leading-tight">
                      {displayTitle}
                    </h3>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="w-full h-1.5 bg-[#242424] rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-orange transition-all duration-500" style={{ width: `${pct}%` }} />
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono text-[12px] text-[#52525B]">{stat.completed} / {stat.total} topics completed</span>
                      <span className="font-mono text-[12px] text-orange">{pct}% done</span>
                    </div>
                    
                    <Link 
                      href={`/roadmaps/${stat.roadmap_slug}`}
                      className="w-full inline-flex items-center justify-center font-body text-[14px] text-white hover:text-orange hover:bg-[#242424] bg-[#121212] border border-[#3F3F46] transition-colors py-2 rounded-md"
                    >
                      Continue Roadmap →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="bg-[#1A1A1A] border border-[#3F3F46] rounded-lg p-6 flex flex-col items-center text-center">
            <p className="font-body text-[#A1A1AA] text-[15px] mb-4">You haven't started a roadmap yet.</p>
            <Link 
              href="/roadmaps"
              className="inline-flex items-center justify-center font-body text-[14px] text-white hover:text-orange hover:bg-[#242424] bg-[#121212] border border-[#3F3F46] transition-colors py-2 px-6 rounded-md"
            >
              Explore Roadmaps →
            </Link>
          </div>
        )}
      </div>

      <GuestSync />
    </div>
  )
}
