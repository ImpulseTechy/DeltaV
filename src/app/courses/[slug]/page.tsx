import { Metadata } from 'next'
import { CheckCircle2, Lock, Award, Share2 } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Accordion from '@/components/ui/Accordion'
import EnrollButton from '@/components/courses/EnrollButton'
import MobileEnrollBar from '@/components/courses/MobileEnrollBar'

// Course Data Store
const COURSES: Record<string, any> = {
  'esp32-iot-fundamentals': {
    title: 'IoT with ESP32 — From Zero to Deployed Product',
    tagline: 'Build 3 real IoT projects. Understand every line of code. Deploy to cloud.',
    badge: 'ECE / IoT',
    price: 1999,
    originalPrice: 4999,
    seatsLeft: 11,
    stats: {
      sessions: '18 live sessions',
      duration: '6 weeks duration',
      projects: '3 hands-on projects'
    },
    learnItems: [
      'ESP32 architecture, GPIO, ADC, PWM',
      'UART, I2C, SPI protocols with real sensors',
      'WiFi + MQTT for IoT cloud communication',
      'Node-RED dashboard and AWS IoT Core basics',
      'OTA firmware updates',
      '3 complete deployable IoT projects'
    ],
    syllabus: [
      { title: 'Week 1: ESP32 Architecture & Setup', content: 'Understanding ESP32 memory map, FreeRTOS basics, and setting up the ESP-IDF toolchain.' },
      { title: 'Week 2: Protocols & Sensors', content: 'Deep dive into I2C, SPI, and UART. Interfacing with real-world sensors without libraries.' },
      { title: 'Week 3: WiFi & MQTT', content: 'Connecting to WiFi reliably, MQTT QoS levels, and designing lightweight payloads.' },
      { title: 'Week 4: Cloud Integration', content: 'Connecting our hardware to AWS IoT Core and visualizing data with Node-RED.' },
      { title: 'Week 5: OTA & Security', content: 'Implementing Over-The-Air firmware updates and basic transport layer security.' },
      { title: 'Week 6: Final Capstone', content: 'Bringing it all together to deploy a reliable, production-ready IoT node.' },
    ]
  },
  // Default generic data for the rest of the generated slugs
}

const DEFAULT_COURSE_DATA = {
  title: 'Advanced Engineering Masterclass',
  tagline: 'Level up your engineering skills with industry-standard practices.',
  badge: 'ECE / Tech',
  price: 2499,
  originalPrice: 5999,
  seatsLeft: 15,
  stats: {
    sessions: '20 live sessions',
    duration: '8 weeks duration',
    projects: '4 hands-on projects'
  },
  learnItems: [
    'Industry-standard protocols and architecture',
    'Hardware-software integration',
    'Performance optimization techniques',
    'Real-time processing fundamentals',
    'Production-grade testing',
    'End-to-end system deployment'
  ],
  syllabus: [
    { title: 'Week 1: Fundamentals', content: 'Core concepts and environment setup.' },
    { title: 'Week 2: Deep Dive', content: 'Advanced theoretical foundations and math.' },
    { title: 'Week 3: Implementation Phase', content: 'Writing code and integrating components.' },
    { title: 'Week 4: Testing & Validation', content: 'Ensuring reliability through strict testing.' },
  ]
}

const VALID_SLUGS = [
  'esp32-iot-fundamentals',
  'embedded-systems-rtos',
  'plc-industrial-automation',
  'cubesat-design-build',
  'tinyml-edge-ai',
  'vfd-motor-drives'
]

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!VALID_SLUGS.includes(slug)) {
    return { title: 'Course Not Found | Delta V' }
  }

  const course = COURSES[slug] || { ...DEFAULT_COURSE_DATA, title: slug.replace(/-/g, ' ').toUpperCase() }
  const title = `${course.title} — Live Online Course for ECE/EEE Students`
  
  // Custom keywords based on slug
  let customDescription = course.tagline.slice(0, 150)
  if (slug === 'esp32-iot-fundamentals') {
    customDescription = "ESP32 IoT course ECE students. " + customDescription + " IoT certification course India."
  } else if (slug === 'plc-industrial-automation') {
    customDescription = "PLC automation course ECE students. " + customDescription + " PLC online course India."
  }

  const description = customDescription.slice(0, 150) // Ensure 150 limit

  return {
    title: `${title} | Delta V`,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `/og?title=${encodeURIComponent(course.title)}&type=course` }],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og?title=${encodeURIComponent(course.title)}&type=course`]
    }
  }
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params

  if (!VALID_SLUGS.includes(slug)) {
    notFound()
  }

  const course = COURSES[slug] || { ...DEFAULT_COURSE_DATA, title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') }

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(course.price)

  const formattedOriginalPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(course.originalPrice)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.tagline,
    "provider": {
      "@type": "Organization",
      "name": "Delta V",
      "url": "https://deltav.in"
    },
    "offers": {
      "@type": "Offer",
      "price": course.price.toString(),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 mt-16">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-text-muted font-body text-[13px] mb-6">
          <Link href="/courses" className="hover:text-text-secondary transition-colors">Courses</Link>
          <span className="mx-2">›</span>
          <span className="text-text-secondary truncate">{course.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12 relative">
          
          {/* LEFT COLUMN (Scrolls naturally) */}
          <div className="space-y-10">
            
            {/* Header Area */}
            <div>
              <div className="inline-block border border-orange text-orange font-mono text-[11px] px-2 py-1 uppercase tracking-wider mb-4 rounded-sm">
                [{course.badge}]
              </div>
              <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl leading-tight mb-4">
                {course.title}
              </h1>
              <p className="font-body text-text-secondary text-lg sm:text-xl leading-relaxed">
                {course.tagline}
              </p>
            </div>

            {/* Instructor Row */}
            <div className="flex items-center gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-bg-tertiary flex items-center justify-center border border-border">
                <span className="text-orange font-display font-bold text-lg tracking-wider">DV</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-body font-medium text-white text-[14px]">Delta V Instructor</span>
                  <span className="border border-[#22c55e] text-[#22c55e] font-mono text-[10px] px-1.5 py-0.5 rounded-sm uppercase">
                    [Verified]
                  </span>
                </div>
                <span className="font-body text-text-secondary text-[13px]">
                  6 yrs industry · Ex-embedded systems engineer
                </span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-y-4 gap-x-8 border-y border-border py-5 mt-6">
              <div className="flex flex-col">
                <span className="text-white font-medium font-body text-lg">{course.stats.sessions.split(' ')[0]}</span>
                <span className="text-text-muted font-body text-[13px] uppercase tracking-wide">Live Sessions</span>
              </div>
              <div className="w-[1px] h-8 bg-border hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-white font-medium font-body text-lg">{course.stats.duration.split(' ')[0]} {course.stats.duration.split(' ')[1]}</span>
                <span className="text-text-muted font-body text-[13px] uppercase tracking-wide">Duration</span>
              </div>
              <div className="w-[1px] h-8 bg-border hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-white font-medium font-body text-lg">{course.stats.projects.split(' ')[0]}</span>
                <span className="text-text-muted font-body text-[13px] uppercase tracking-wide">Hands-on Projects</span>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="mt-12">
              <h3 className="font-mono text-orange text-sm mb-6 tracking-widest uppercase">WHAT YOU'LL LEARN</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.learnItems.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-[16px] h-[16px] text-orange shrink-0 mt-0.5" />
                    <span className="font-body text-white text-[14px] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div className="mt-12">
              <h3 className="font-mono text-orange text-sm mb-6 tracking-widest uppercase">SYLLABUS</h3>
              <Accordion items={course.syllabus} />
            </div>

            {/* Bottom Padding for Mobile */}
            <div className="h-24 lg:h-0"></div>
          </div>

          {/* RIGHT COLUMN (Sticky on Desktop) */}
          <div className="hidden lg:block relative">
            <div className="sticky top-24 bg-bg-secondary border border-border rounded-xl p-6 shadow-2xl">
              
              {/* Course Image Placeholder */}
              <div className="w-full aspect-video bg-bg-tertiary rounded-lg border border-border mb-6 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwaDJwdjQwSDEweiBNMjAgMGgycHY0MEgyMHogTTMwIDBoMnB2NDBIMzB6IiBzdHJva2U9IiMzZjNmNDYiIHN0cm9rZS1vcGFjaXR5PSIwLjE1IiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-50"></div>
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center border border-orange/30 group-hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-orange border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>

              {/* Status Row */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange animate-pulse"></span>
                  <span className="font-body text-white text-sm">Enrollment Open</span>
                </div>
                <span className="font-body text-orange font-medium text-[13px]">{course.seatsLeft} seats remaining</span>
              </div>

              <div className="w-full h-[1px] bg-border my-4"></div>

              {/* Pricing */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display font-semibold text-white text-3xl">{formattedPrice}</span>
                <span className="font-body text-text-muted text-sm line-through">{formattedOriginalPrice}</span>
              </div>

              {/* Enroll Button */}
              <EnrollButton slug={slug} price={course.price} courseTitle={course.title} duration={course.stats.duration} />

              <div className="mt-4 flex items-center justify-center gap-1.5 text-text-muted font-body text-[12px]">
                <Lock className="w-3.5 h-3.5" />
                <span>Secure payment · Razorpay · UPI / Cards / EMI</span>
              </div>

              <div className="w-full h-[1px] bg-border my-6"></div>

              {/* Extras */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-[16px] h-[16px] text-orange" />
                  <span className="font-body text-text-secondary text-[13px]">Certificate of Completion issued</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="font-body text-text-secondary text-[13px]">Share:</span>
                  <button className="text-text-muted hover:text-orange transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  {/* Additional social icons can be added here */}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <MobileEnrollBar slug={slug} price={course.price} seatsLeft={course.seatsLeft} courseTitle={course.title} duration={course.stats.duration} />
    </>
  )
}
