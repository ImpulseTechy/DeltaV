import React from 'react'
import Button from '@/components/ui/Button'
import CourseCard from '@/components/ui/CourseCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { Wifi, Cpu, Satellite, Settings, Zap, Video } from 'lucide-react'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const title = "Hands-on Engineering Courses & Workshops"
  const description = "Stop studying theory. Start building systems. Live IoT, Robotics, and PLC courses for ECE and EEE engineering students in India."
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

export default function Home() {
  const collegeMarquee = [
    'IIIT Nagpur', 'COEP Pune', 'MIT Aurangabad', 'VIT Pune',
    'RCOEM Nagpur', 'PICT Pune', 'PCE Nagpur', 'VNIT Nagpur'
  ]

  const topics = [
    {
      id: 'WS-01',
      icon: Wifi,
      title: 'IoT with ESP32',
      desc: 'Sensors, MQTT, cloud dashboards. Fully hands-on.'
    },
    {
      id: 'WS-02',
      icon: Cpu,
      title: 'Robotics & Embedded',
      desc: 'Arduino + sensors + autonomy logic.'
    },
    {
      id: 'WS-03',
      icon: Satellite,
      title: 'CubeSat Design',
      desc: 'Build a 1U CubeSat structure and ground station.'
    },
    {
      id: 'WS-04',
      icon: Settings,
      title: 'PLC Automation',
      desc: 'Ladder logic, Siemens TIA Portal, motor control.'
    },
    {
      id: 'WS-05',
      icon: Zap,
      title: 'VFD & Motor Drives',
      desc: 'Variable frequency drives for EEE students.'
    },
    {
      id: 'WS-06',
      icon: Video,
      title: 'Online Webinar',
      desc: 'Any topic, online, 2–3 hours, zero equipment needed.'
    }
  ]

  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Browse courses or workshop topics. Find what matches your semester plan.'
    },
    {
      num: '02',
      title: 'Enroll or Book',
      desc: 'Pay online for live cohort courses. Or request a free college workshop.'
    },
    {
      num: '03',
      title: 'Build & Certify',
      desc: 'Attend live sessions. Complete projects. Download your verified certificate.'
    }
  ]

  const testimonials = [
    {
      quote: 'Finally understood how I2C and UART actually work — not just pin diagrams, but actual data frames. The ESP32 project is live on my GitHub and on my resume.',
      author: 'Arjun M.',
      meta: '3rd Year ECE, MIT Aurangabad'
    },
    {
      quote: "Our robotics club booked the workshop and 40 students built a line-following robot in one day. The instructor knew the hardware inside out.",
      author: 'Priya K.',
      meta: 'Club Secretary, PICT Pune'
    },
    {
      quote: 'The PLC course is the only reason I got shortlisted for the core EEE role at Havells. The certificate has a verifiable ID — HR actually checked it.',
      author: 'Rahul D.',
      meta: 'Final Year EEE, COEP Pune'
    }
  ]

  return (
    <div className="flex flex-col w-full bg-bg-primary">
      {/* SECTION 1: HERO */}
      <section 
        className="relative w-full min-h-[90vh] flex items-center py-20 border-b border-border bg-[#121212]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(63, 63, 70, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(63, 63, 70, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      >
        {/* Giant Watermark Delta */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
          <span className="font-display font-bold text-[#FF6B00] opacity-[0.04] text-[60vw] leading-none">
            Δ
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="max-w-[860px] mx-auto flex flex-col items-center">
            {/* Small tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-orange/20 bg-orange-dim text-orange font-mono text-[11px] rounded mb-6 uppercase tracking-wider select-none">
              ECE/EEE Engineering Education
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-[4rem] text-white tracking-tight uppercase leading-[1.05] font-semibold mb-6">
              Stop Studying Theory.<br />
              <span className="text-orange">Start Building Systems.</span>
            </h1>

            {/* Subheading */}
            <p className="font-body text-[#A1A1AA] text-base sm:text-lg max-w-[600px] leading-[1.7] mb-8">
              Hands-on live courses and college workshops in IoT, Robotics, PLC Automation, and Embedded AI — built for ECE and EEE engineers who want real skills.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-16">
              <Button variant="primary" size="lg" href="#courses" className="px-8">
                Browse Courses →
              </Button>
              <Button variant="ghost" size="lg" href="#workshop-topics" className="px-8">
                Book a Workshop for Your College
              </Button>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 w-full max-w-2xl border-t border-border/50 pt-8 divide-x divide-border/50">
              <div className="px-2">
                <span className="font-body font-bold text-white text-base sm:text-lg block">1,200+</span>
                <span className="font-body text-[#A1A1AA] text-[12px] sm:text-[13px]">students trained</span>
              </div>
              <div className="px-2">
                <span className="font-body font-bold text-white text-base sm:text-lg block">40+</span>
                <span className="font-body text-[#A1A1AA] text-[12px] sm:text-[13px]">college workshops</span>
              </div>
              <div className="px-2">
                <span className="font-body font-bold text-white text-base sm:text-lg block">6</span>
                <span className="font-body text-[#A1A1AA] text-[12px] sm:text-[13px]">live course topics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SCROLLING MARQUEE */}
      <section className="w-full bg-[#0D0D0D] py-4 border-b border-border overflow-hidden select-none">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee shrink-0 gap-8 min-w-full items-center justify-around font-body text-[13px] text-[#52525B]">
            {collegeMarquee.map((college, idx) => (
              <span key={idx} className="inline-flex items-center gap-4">
                {college} <span className="text-orange font-bold text-xs">Δ</span>
              </span>
            ))}
          </div>
          <div className="flex animate-marquee shrink-0 gap-8 min-w-full items-center justify-around font-body text-[13px] text-[#52525B]" aria-hidden="true">
            {collegeMarquee.map((college, idx) => (
              <span key={`dup-${idx}`} className="inline-flex items-center gap-4">
                {college} <span className="text-orange font-bold text-xs">Δ</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WORKSHOP TOPICS STRIP */}
      <section className="py-20 md:py-28 bg-[#121212] border-b border-border" id="workshop-topics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FOR COLLEGES"
            title="We come to your college. Your students build real things."
            subtitle="Book a free workshop. We handle equipment, delivery, and instruction."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => {
              const IconComponent = topic.icon
              return (
                <div 
                  key={index}
                  className="flex flex-col bg-[#1A1A1A] border border-border rounded-lg p-5 transition-colors duration-200 hover:border-border-light min-h-[220px]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-[10px] text-[#52525B] tracking-wider">
                      [{topic.id}]
                    </span>
                    <IconComponent className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="font-display text-white text-[1.2rem] uppercase font-semibold mb-2">
                    {topic.title}
                  </h3>
                  <p className="font-body text-[13px] text-[#A1A1AA] leading-relaxed mb-6">
                    {topic.desc}
                  </p>
                  <div className="mt-auto pt-2">
                    <Button variant="text" size="sm" href={`/workshops/${topic.id.toLowerCase()}`}>
                      View Details →
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED COURSES */}
      <section className="py-20 md:py-28 bg-[#121212] border-b border-border" id="courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="LIVE COHORT COURSES"
            title="Real instructors. Real projects. Real certificates."
            subtitle="Enroll in a live cohort. Build 2–3 projects. Graduate with a certificate that means something."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CourseCard
              title="IoT with ESP32"
              topicTag="ECE / IoT"
              duration="6 weeks · 18 sessions"
              nextBatch="July 14 2026"
              price="₹1,999"
              status="open"
              slug="iot-esp32"
            />
            <CourseCard
              title="Embedded Systems & RTOS"
              topicTag="ECE / Embedded"
              duration="8 weeks · 24 sessions"
              nextBatch="August 4 2026"
              price="₹2,499"
              status="upcoming"
              slug="embedded-systems-rtos"
            />
            <CourseCard
              title="PLC & Industrial Automation"
              topicTag="EEE / PLC"
              duration="5 weeks · 15 sessions"
              nextBatch="August 18 2026"
              price="₹1,999"
              status="upcoming"
              slug="plc-industrial-automation"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-[#121212] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="THE PROCESS"
            title="Simple. No fluff."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-6 pt-12 border-l border-border/30">
                {/* Watermark Number */}
                <div className="absolute top-0 left-4 font-display text-7xl font-bold text-orange opacity-25 leading-none select-none z-0">
                  {step.num}
                </div>
                {/* Content */}
                <div className="relative z-10">
                  <h4 className="font-body font-bold text-white text-lg mb-2">
                    {step.title}
                  </h4>
                  <p className="font-body text-[13px] text-[#A1A1AA] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-[#121212] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="STUDENT VOICES"
            title="From students who've been through it."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-[#1A1A1A] border border-border rounded-lg p-6 flex flex-col min-h-[200px]">
                {/* Quote Mark */}
                <span className="font-display text-4xl text-orange opacity-40 font-bold leading-none mb-2 select-none">
                  &ldquo;
                </span>
                {/* Quote */}
                <p className="font-body italic text-sm text-white leading-relaxed mb-6">
                  {test.quote}
                </p>
                {/* Author Info */}
                <div className="mt-auto">
                  <h5 className="font-body font-medium text-white text-[13px]">
                    {test.author}
                  </h5>
                  <p className="font-body text-[#52525B] text-[12px] mt-0.5">
                    {test.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: BOTTOM CTA BANNER */}
      <section className="w-full bg-[#1A1A1A] border-t-4 border-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl text-white font-semibold uppercase tracking-tight mb-2">
                Are you a college coordinator?
              </h2>
              <p className="font-body text-[#A1A1AA] text-sm leading-relaxed">
                Get a hands-on workshop for your students. Free for eligible colleges. We handle everything.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button variant="primary" size="lg" href="/workshops#book" className="px-8">
                Book a Free Workshop →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
