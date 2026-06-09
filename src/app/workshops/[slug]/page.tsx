import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'

// Hardcoded Workshop Data
const WORKSHOPS: Record<string, any> = {
  'iot-esp32': {
    title: 'IoT with ESP32',
    heading: 'IoT with ESP32 — Hands-On College Workshop',
    tagline: 'Students build a complete IoT sensor node. From wiring to cloud dashboard in 6 hours.',
    topicTag: 'ECE/EEE',
    duration: '1 day / 6 hrs',
    stats: {
      workshopsDone: '40+ workshops',
      avgStudents: '35 avg students',
      rating: '4.8/5 rating',
    },
    learningOutcomes: [
      'Wire ESP32 to DHT22, ultrasonic, and PIR sensors',
      'Write firmware to read sensor data and publish via MQTT',
      'Set up Node-RED dashboard with live charts',
      'Connect to AWS IoT Core and visualize in cloud',
      'Understand WiFi provisioning and OTA updates',
      'Complete and demo a working IoT product by day end'
    ],
    agenda: [
      { time: '09:00', task: 'Hardware intro and ESP32 setup', duration: '45 min' },
      { time: '09:45', task: 'GPIO and sensor interfacing', duration: '60 min' },
      { time: '11:00', task: 'Break', duration: '15 min' },
      { time: '11:15', task: 'WiFi + MQTT protocol hands-on', duration: '75 min' },
      { time: '12:30', task: 'Lunch', duration: '60 min' },
      { time: '13:30', task: 'Cloud dashboard — Node-RED + AWS IoT', duration: '90 min' },
      { time: '15:00', task: 'Team project build', duration: '90 min' },
      { time: '16:30', task: 'Demo + Q&A + Certificate distribution', duration: '30 min' },
    ]
  }
}

const DEFAULT_WORKSHOP_DATA = {
  title: 'Engineering Masterclass',
  heading: 'Advanced Engineering Hands-On Workshop',
  tagline: 'Students build a complete working prototype in a single day.',
  topicTag: 'ECE/CSE',
  duration: '1 day / 6 hrs',
  stats: {
    workshopsDone: '15+ workshops',
    avgStudents: '40 avg students',
    rating: '4.7/5 rating',
  },
  learningOutcomes: [
    'Understand core theoretical principles',
    'Get hands-on experience with industry standard tools',
    'Build a functional prototype from scratch',
    'Learn debugging and troubleshooting techniques',
    'Integrate hardware and software components',
    'Present a final working project demo'
  ],
  agenda: [
    { time: '09:00', task: 'Introduction and setup', duration: '45 min' },
    { time: '09:45', task: 'Core concepts hands-on', duration: '75 min' },
    { time: '11:00', task: 'Break', duration: '15 min' },
    { time: '11:15', task: 'Advanced modules implementation', duration: '75 min' },
    { time: '12:30', task: 'Lunch', duration: '60 min' },
    { time: '13:30', task: 'Project integration', duration: '120 min' },
    { time: '15:30', task: 'Testing and validation', duration: '60 min' },
    { time: '16:30', task: 'Final Demo and Certificates', duration: '30 min' },
  ]
}

const VALID_SLUGS = [
  'iot-esp32',
  'robotics-embedded',
  'cubesat-design',
  'plc-automation',
  'vfd-motor-drives',
  'online-webinar'
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
    return { title: 'Workshop Not Found | Delta V' }
  }

  const workshop = WORKSHOPS[slug] || { ...DEFAULT_WORKSHOP_DATA, title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') }
  const title = `${workshop.title} Workshop for Engineering Colleges`
  
  let customDescription = `Book a ${workshop.title} hands-on workshop for your engineering college. Delta V provides equipment, instruction, and student certificates.`
  if (slug === 'iot-esp32') {
    customDescription = "IoT workshop for engineering college. " + customDescription + " ESP32 hands-on workshop."
  }

  const description = customDescription.slice(0, 150)

  return {
    title: `${title} | Delta V`,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `/og?title=${encodeURIComponent(workshop.title)}&type=workshop` }],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og?title=${encodeURIComponent(workshop.title)}&type=workshop`]
    }
  }
}

const FAQS = [
  { title: 'Is there a fee?', content: 'Free for eligible colleges. Paid options available for larger batches or premium slots. Our team will share details on inquiry.' },
  { title: 'How far in advance should we book?', content: 'Minimum 14 days. We recommend 3–4 weeks for scheduling flexibility.' },
  { title: 'Can we customize the agenda?', content: "Yes. We can adjust timing or topic depth based on your students' background. Mention it in the booking form." },
  { title: 'What if we need to cancel?', content: "Inform us 7 days in advance and we'll reschedule at no penalty." }
]

export default async function WorkshopPage({ params }: Props) {
  const { slug } = await params

  if (!VALID_SLUGS.includes(slug)) {
    notFound()
  }

  const workshop = WORKSHOPS[slug] || { ...DEFAULT_WORKSHOP_DATA, title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), heading: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} — Hands-On College Workshop` }

  return (
    <main className="min-h-screen bg-bg-primary pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Breadcrumb */}
        <div className="flex items-center text-text-muted font-body text-[13px] mb-6">
          <Link href="/workshops" className="hover:text-text-secondary transition-colors">Workshops</Link>
          <span className="mx-2">›</span>
          <span className="text-text-secondary truncate">{workshop.title}</span>
        </div>

        {/* 2. Tags */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[11px] text-orange border border-orange/30 bg-orange/5 px-2.5 py-0.5 rounded tracking-wider uppercase">
            [{workshop.duration}]
          </span>
          <span className="font-mono text-[11px] text-orange border border-orange/30 bg-orange/5 px-2.5 py-0.5 rounded tracking-wider uppercase">
            [{workshop.topicTag}]
          </span>
        </div>

        {/* 3. H1 & 4. One-liner */}
        <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
          {workshop.heading}
        </h1>
        <p className="font-body text-text-secondary text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
          {workshop.tagline}
        </p>

        {/* 5. 3-Stat Row */}
        <div className="flex flex-wrap items-center gap-y-4 gap-x-8 border-y border-border py-5 mb-16">
          <div className="flex flex-col">
            <span className="text-white font-medium font-body text-lg">{workshop.stats.workshopsDone}</span>
          </div>
          <div className="w-[1px] h-8 bg-border hidden sm:block"></div>
          <div className="flex flex-col">
            <span className="text-white font-medium font-body text-lg">{workshop.stats.avgStudents}</span>
          </div>
          <div className="w-[1px] h-8 bg-border hidden sm:block"></div>
          <div className="flex flex-col">
            <span className="text-white font-medium font-body text-lg">{workshop.stats.rating}</span>
          </div>
        </div>

        {/* 6. LEARNING OUTCOMES */}
        <div className="mb-16">
          <h3 className="font-mono text-orange text-sm mb-8 tracking-widest uppercase">WHAT STUDENTS WILL BUILD</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshop.learningOutcomes.map((item: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3 bg-bg-secondary p-4 border border-border rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                <span className="font-body text-white text-[15px] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 7. WORKSHOP AGENDA */}
        <div className="mb-16">
          <h3 className="font-mono text-orange text-sm mb-8 tracking-widest uppercase">DAY AGENDA</h3>
          <div className="space-y-0 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {workshop.agenda.map((item: any, idx: number) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-orange bg-bg-primary text-orange shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[2px] md:ml-0">
                  <div className="w-2 h-2 rounded-full bg-orange"></div>
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-lg bg-bg-secondary border border-border">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-orange text-sm">{item.time}</span>
                    <span className="font-body text-text-muted text-[13px]">{item.duration}</span>
                  </div>
                  <p className="font-body text-white text-[15px]">{item.task}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. WHO SHOULD ATTEND */}
        <div className="mb-16 bg-bg-secondary border border-border rounded-lg p-6 sm:p-8">
          <h3 className="font-mono text-orange text-sm mb-4 tracking-widest uppercase">WHO SHOULD ATTEND</h3>
          <p className="font-body text-white text-base leading-relaxed">
            ECE/EEE students Year 2–4 | Robotics/IoT club members | Students preparing for core ECE internships
          </p>
        </div>

        {/* 9. EQUIPMENT & REQUIREMENTS */}
        <div className="mb-16">
          <h3 className="font-mono text-orange text-sm mb-6 tracking-widest uppercase">EQUIPMENT & REQUIREMENTS</h3>
          <div className="space-y-4 font-body text-base text-text-secondary leading-relaxed">
            <p><strong className="text-white">Provided by Delta V:</strong> ESP32-WROOM-32 per student, sensors kit, USB cables.</p>
            <p><strong className="text-white">Required from college:</strong> Projector, tables, power strips (1 per 2 students), internet WiFi.</p>
            <p><strong className="text-white">Laptop:</strong> Each student must carry their own laptop with Arduino IDE pre-installed (instructions sent).</p>
          </div>
        </div>

        {/* 10. SAMPLE CERTIFICATE */}
        <div className="mb-16">
          <h3 className="font-mono text-orange text-sm mb-6 tracking-widest uppercase">SAMPLE CERTIFICATE</h3>
          <div className="w-full aspect-[1.414] sm:aspect-video bg-[#1A1A1A] rounded-xl border-2 border-[#3F3F46] flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange to-orange-light"></div>
            <div className="font-display text-text-muted text-2xl tracking-[0.2em] mb-8">CERTIFICATE OF COMPLETION</div>
            <div className="font-body text-text-secondary text-sm mb-4">This is proudly presented to</div>
            <div className="font-display font-bold text-white text-4xl sm:text-5xl tracking-wide mb-6">AARAV MEHTA</div>
            <div className="font-body text-text-secondary text-sm text-center max-w-md">
              For successfully completing the {workshop.heading} and building a functional prototype.
            </div>
            <div className="absolute bottom-8 right-8 font-display font-bold text-orange text-xl opacity-50">Δ DELTA V</div>
            <div className="absolute bottom-8 left-8 font-mono text-text-muted text-sm border-t border-border pt-2">Date: {new Date().toLocaleDateString()}</div>
          </div>
        </div>

        {/* 11. FAQs */}
        <div className="mb-24">
          <h3 className="font-mono text-orange text-sm mb-6 tracking-widest uppercase">FAQS</h3>
          <Accordion items={FAQS} />
        </div>

        {/* 12. CTA SECTION */}
        <div className="w-full border-t-4 border-orange pt-12 text-center pb-8">
          <h2 className="font-display font-semibold text-white text-3xl sm:text-4xl mb-8">
            Ready to book this workshop for your college?
          </h2>
          <Button 
            variant="primary" 
            size="lg" 
            href={`/book-workshop?topic=${slug}`}
            className="w-full sm:w-auto px-12"
          >
            Book This Workshop →
          </Button>
          <p className="font-body text-text-muted text-[13px] mt-6">
            Or call/WhatsApp: +91 XXXXX XXXXX
          </p>
        </div>

      </div>
    </main>
  )
}
