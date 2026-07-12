import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Cpu, Wifi, Settings, Bot, Microchip, Gauge } from 'lucide-react'
import Button from '@/components/ui/Button'
import ComingSoonCard from '@/components/roadmaps/ComingSoonCard'
import SuggestRoadmapForm from '@/components/roadmaps/SuggestRoadmapForm'

export const metadata: Metadata = {
  title: "ECE/EEE Engineering Roadmaps | Delta V",
  description: "Free career roadmaps for ECE, EEE, Embedded Systems, and Industrial Automation engineers. Built for Indian engineering students."
}

export const dynamic = 'force-dynamic'

const liveRoadmaps = [
  {
    id: 'ece-core',
    icon: Cpu,
    title: 'ECE Core Engineer',
    description: 'From basic electronics to embedded systems, PCB design, and placement prep. The complete path for core ECE roles.',
    totalNodes: 52
  },
  {
    id: 'embedded-iot',
    icon: Wifi,
    title: 'Embedded Systems & IoT',
    description: 'ESP32, RTOS, communication protocols, cloud IoT, TinyML. Everything to become an embedded systems engineer.',
    totalNodes: 48
  },
  {
    id: 'eee-automation',
    icon: Settings,
    title: 'EEE Industrial Automation',
    description: 'PLC, SCADA, VFDs, motor drives, and Industry 4.0. The path for EEE students targeting automation roles.',
    totalNodes: 44
  }
]

const comingSoonRoadmaps = [
  {
    id: 'robotics-mechatronics',
    icon: Bot,
    title: 'Robotics & Mechatronics',
    description: 'ROS2, kinematics, actuators, autonomous systems.'
  },
  {
    id: 'vlsi-chip-design',
    icon: Microchip,
    title: 'VLSI & Chip Design',
    description: 'Verilog, VHDL, STA, physical design, EDA tools.'
  },
  {
    id: 'instrumentation-control',
    icon: Gauge,
    title: 'Instrumentation & Control',
    description: 'Process control, DCS, sensors, loop tuning.'
  }
]

export default async function RoadmapsPage() {
  const supabase = await createClient()
  
  // 1. Get current user
  const { data: { user } } = await supabase.auth.getUser()

  // 2. Student counts are fetched below using getStudentCount

  // 3. Fetch user progress if logged in
  const userProgress: Record<string, number> = {}
  if (user) {
    await Promise.all(
      liveRoadmaps.map(async (r) => {
        const { count } = await supabase
          .from('roadmap_progress')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', user.id)
          .eq('roadmap_slug', r.id)
          .eq('status', 'done')
        userProgress[r.id] = count || 0
      })
    )
  }

  const { getStudentCount } = await import('@/lib/roadmaps/getStudentCount')
  
  // Use map to fetch all live counts concurrently
  const liveRoadmapsWithCounts = await Promise.all(
    liveRoadmaps.map(async (r) => {
      const count = await getStudentCount(r.id)
      return { ...r, studentCount: count }
    })
  )

  return (
    <div className="min-h-screen bg-[#0A0E1A] pt-[60px]">
      
      {/* HERO SECTION */}
      <section className="py-20 px-6 max-w-[720px] mx-auto text-center">
        <div className="inline-block font-mono text-[11px] text-orange border border-orange/30 px-3 py-1 rounded mb-6 uppercase tracking-wider">
          COMMUNITY RESOURCE · FREE FOREVER
        </div>
        <h1 className="font-display font-semibold text-white text-[2.25rem] md:text-[3.5rem] leading-tight mb-4">
          Your career roadmap as an ECE/EEE engineer.
        </h1>
        <p className="font-body text-[#A1A1AA] text-[18px] max-w-[580px] mx-auto leading-relaxed">
          Community-built paths for hardware engineers in India. No fluff. No course pitching. Just the honest path from student to engineer.
        </p>

        {/* STATS ROW */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-10">
          <div className="flex flex-col items-center">
            <span className="font-display font-semibold text-white text-2xl">450+</span>
            <span className="font-mono text-[#52525B] text-[11px] uppercase tracking-wider">CURATED TOPICS</span>
          </div>
          <div className="w-[1px] h-8 bg-[#2A2A2A] hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="font-display font-semibold text-white text-2xl">1,200+</span>
            <span className="font-mono text-[#52525B] text-[11px] uppercase tracking-wider">FREE RESOURCES</span>
          </div>
          <div className="w-[1px] h-8 bg-[#2A2A2A] hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="font-display font-semibold text-white text-2xl">100%</span>
            <span className="font-mono text-[#52525B] text-[11px] uppercase tracking-wider">OPEN ACCESS</span>
          </div>
        </div>
      </section>

      {/* ROADMAPS GRID */}
      <section className="px-6 pb-24 max-w-[1200px] mx-auto">
        <div className="mb-8">
          <span className="font-mono text-[11px] text-orange tracking-[0.1em] uppercase">
            AVAILABLE NOW
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveRoadmapsWithCounts.map((roadmap) => {
            const Icon = roadmap.icon
            const progress = user ? (userProgress[roadmap.id] || 0) : null
            const progressPercent = progress !== null ? Math.round((progress / roadmap.totalNodes) * 100) : 0
            
            return (
              <div key={roadmap.id} className="bg-[#1A1A1A] border border-[#3F3F46] rounded-xl p-6 flex flex-col hover:border-orange/50 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <Icon className="w-6 h-6 text-orange" />
                  <span className="font-mono text-[10px] text-green-400 border border-green-400/30 bg-green-400/10 px-2 py-0.5 rounded tracking-wider uppercase">
                    LIVE
                  </span>
                </div>
                
                <h3 className="font-display font-semibold text-[1.4rem] text-white mb-3">
                  {roadmap.title}
                </h3>
                
                <p className="font-body text-[14px] text-[#A1A1AA] line-clamp-2 mb-6 flex-grow">
                  {roadmap.description}
                </p>
                
                <div className="border-t border-[#3F3F46] pt-4 mt-auto mb-4 flex justify-between items-center text-xs font-body text-[#A1A1AA]">
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-medium">{roadmap.totalNodes}</span>
                    <span className="text-[#52525B]">Nodes</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-medium">{roadmap.studentCount}</span>
                    <span className="text-[#52525B]">Students</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-medium">~3 mos</span>
                    <span className="text-[#52525B]">Avg Time</span>
                  </div>
                </div>

                {user && (
                  <div className="mb-4">
                    <div className="w-full h-1.5 bg-[#242424] rounded overflow-hidden mb-2">
                      <div 
                        className="h-full bg-orange transition-all duration-500 ease-out" 
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                    <div className="text-right font-mono text-[12px] text-[#52525B]">
                      {progress} / {roadmap.totalNodes} topics
                    </div>
                  </div>
                )}

                <Button 
                  variant="ghost" 
                  href={`/roadmaps/${roadmap.id}`}
                  className="w-full mt-2 border-orange/50 text-orange hover:bg-orange/10"
                >
                  Open Roadmap →
                </Button>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION 3: COMING SOON CARDS */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="mb-8">
          <span className="font-mono text-[11px] text-[#52525B] tracking-[0.1em] uppercase">
            COMING SOON
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comingSoonRoadmaps.map((roadmap) => {
            const Icon = roadmap.icon
            return (
              <ComingSoonCard 
                key={roadmap.id}
                id={roadmap.id}
                title={roadmap.title}
                description={roadmap.description}
                icon={<Icon className="w-6 h-6 text-[#52525B]" />}
              />
            )
          })}
        </div>
      </section>

      {/* SECTION 4: COMMUNITY STATS STRIP */}
      <section className="w-full bg-[#0D0D0D] border-y border-[#3F3F46] py-8 mb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center text-[14px] font-body text-[#52525B]">
            <span>450 nodes of knowledge</span>
            <span className="hidden md:inline">•</span>
            <span>6 career paths</span>
            <span className="hidden md:inline">•</span>
            <span>Built for India's hardware engineers</span>
          </div>
        </div>
      </section>

      {/* SECTION 5: SUGGEST A ROADMAP */}
      <section className="max-w-[480px] mx-auto px-4 text-center">
        <h2 className="font-display font-semibold text-[1.5rem] text-white mb-2">
          Missing your branch?
        </h2>
        <p className="font-body text-[14px] text-[#A1A1AA] mb-8">
          Tell us what roadmap you need next. When enough engineers request the same path, we build it.
        </p>
        
        <SuggestRoadmapForm />
      </section>
      
    </div>
  )
}
