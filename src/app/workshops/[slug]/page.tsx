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
  },
  'idea-to-product': {
    title: 'Idea to Product: Rapid Prototyping with IoT',
    heading: 'Idea to Product: Rapid Prototyping with IoT — Hands-On College Workshop',
    tagline: 'Students build a personalised Desktop Companion Robot. From idea to a working device, start to finish.',
    topicTag: 'ECE/CSE',
    duration: '2-day format',
    stats: {
      workshopsDone: 'IIBM Patna & St. Mary\'s, Hyderabad',
      avgStudents: '350+ students trained',
      rating: '2-day format',
    },
    learningOutcomes: [
      'Design a custom enclosure for their own Desktop Companion Bot in Fusion 360',
      'Wire and solder an ESP32 circuit with OLED display, DHT11 sensor, capacitive touch sensor, buzzer, and RGB LED',
      'Write firmware for sensor readouts, display output, and buzzer melodies',
      'Integrate a live weather API to make the bot a connected "companion"',
      'Assemble the soldered circuit into their team\'s 3D-printed enclosure',
      'Complete and demo a fully personalised, working IoT product by end of Day 2'
    ],
    challenge: [
      'Teams are judged on two fronts:',
      '• Design Challenge — the best-looking, most creative Desktop Companion Bot enclosure',
      '• Coding Challenge — successfully programming the ESP32 within a set time limit',
      'Top 3 teams win the Certificate of Excellence, a Delta V flagship course scholarship, and dev-board/electronics-kit goodies.'
    ],
    agenda: [
      { time: 'Day 1', task: 'Design & Build', duration: '' },
      { time: '09:00', task: 'Intro to rapid prototyping & the idea-to-product mindset', duration: '30 min' },
      { time: '09:30', task: 'Enclosure design in Fusion 360', duration: '90 min' },
      { time: '11:00', task: 'Break', duration: '15 min' },
      { time: '11:15', task: 'Soldering safety briefing', duration: '30 min' },
      { time: '11:45', task: 'Circuit prototyping on breadboard', duration: '75 min' },
      { time: '13:00', task: 'Lunch', duration: '60 min' },
      { time: '14:00', task: 'Soldering the permanent build onto perfboard', duration: '90 min' },
      { time: '15:30', task: 'Firmware: sensor readouts, display, buzzer melodies', duration: '45 min' },
      { time: '16:15', task: 'Wrap-up — enclosure files sent to print overnight', duration: '15 min' },
      { time: 'Day 2', task: 'Bring It to Life', duration: '' },
      { time: '09:00', task: 'Recap + enclosure hand-out', duration: '30 min' },
      { time: '09:30', task: 'Weather API integration', duration: '75 min' },
      { time: '10:45', task: 'Break', duration: '15 min' },
      { time: '11:00', task: 'Final assembly into enclosure', duration: '90 min' },
      { time: '12:30', task: 'Lunch', duration: '60 min' },
      { time: '13:30', task: 'Testing & debugging', duration: '90 min' },
      { time: '15:00', task: 'Team demos + competition judging', duration: '60 min' },
      { time: '16:00', task: 'Q&A + certificate distribution', duration: '30 min' },
    ],
    whoShouldAttend: 'BCA / Computer Science / ECE students, Year 2–4 | Students who\'ve completed design thinking or entrepreneurship coursework | Robotics/tech club members',
    equipment: [
      { type: 'Provided by Delta V', desc: 'ESP32, OLED display, DHT11 sensor, capacitive touch sensor, buzzer, RGB LED, breadboard, perfboard, jumper wires, USB cable, power adapter, soldering irons (provided and taken back), each team\'s custom 3D-printed enclosure.' },
      { type: 'Required from college', desc: 'Projector, team seating/tables, power strips, adequate ventilation for soldering.' },
      { type: 'Laptop', desc: 'Each team needs at least one laptop with Arduino IDE pre-installed (instructions sent in advance).' }
    ],
    certificateMsg: 'For successfully completing the Idea to Product: Rapid Prototyping with IoT — Hands-On College Workshop and building a functional prototype.'
  },
  'drone-workshop': {
    title: 'Drone Workshop',
    heading: 'Build it. Fly it. Code it. Compete.',
    tagline: 'Build and fly a small ESP32-based learning drone, controlled with Python.',
    topicTag: 'ECE/EEE',
    duration: '2-day format',
    stats: {
      workshopsDone: '[PLACEHOLDER — pending confirmed student/workshop count]',
      avgStudents: '[PLACEHOLDER — pending confirmed student/workshop count]',
      rating: '4.8/5 rating',
    },
    learningOutcomes: [
      'Understand the physics of flight — the four forces (lift, gravity, thrust, drag) — and why a quadcopter needs 4 motors with alternating rotation',
      'Assemble a LiteWing quadcopter from bare PCB to flight-ready drone',
      'Program and simulate ESP32-S3 logic on Wokwi before touching real hardware',
      'Flash and fly their own drone',
      'Read live sensor data (IMU) and enable Height Hold mode',
      'Control their drone programmatically using Python'
    ],
    challenge: [
      'Teams are judged on two fronts:',
      '• Flight Challenge — cleanest, most stable flight/hover test',
      '• Coding Challenge — programming a flight pattern in Python within a set time limit',
      'Top 3 teams win the Certificate of Excellence, a Delta V flagship course scholarship, and dev-board/electronics-kit goodies.'
    ],
    agenda: [
      { time: 'Day 1', task: 'Foundations & Build', duration: '' },
      { time: 'Step 1', task: 'How Drones Fly: four forces of flight, roll/pitch/yaw, why 4 motors (CW vs CCW logic), types of drones, real-world applications', duration: ' ' },
      { time: 'Step 2', task: 'Meet the Microcontroller: ESP32-S3 fundamentals using the Wokwi browser simulator', duration: ' ' },
      { time: 'Step 3', task: 'Hands-on: LED blink activity + team LED-pattern challenge on Wokwi', duration: ' ' },
      { time: 'Step 4', task: 'Drone Assembly: 6-step hands-on build — grommets, legs, motors, wiring, propellers, battery', duration: ' ' },
      { time: 'Day 2', task: 'Flight, Code & Compete', duration: '' },
      { time: 'Step 1', task: 'Flight test with stock firmware, crash-safety protocol briefing', duration: ' ' },
      { time: 'Step 2', task: 'Height Hold mode (Time-of-Flight sensor) and live IMU sensor data', duration: ' ' },
      { time: 'Step 3', task: 'Controlling the onboard NeoPixel for custom visual signals', duration: ' ' },
      { time: 'Step 4', task: 'Flying with Python (cflib SDK) — takeoff, movement patterns, landing', duration: ' ' },
      { time: 'Step 5', task: 'Workshop Challenge + team demos + certificate distribution', duration: ' ' }
    ],
    whoShouldAttend: '[PLACEHOLDER — proposed default: "ECE / EEE / Robotics students, Year 2–4" — awaiting Yogesh\'s confirmation before publishing]',
    equipment: [
      { type: 'Provided by Delta V', desc: 'LiteWing drone kit per team (PCB frame, coreless motors, CW/CCW propellers, battery, USB-C cable), soldering irons (provided and taken back).' },
      { type: 'Required from college', desc: 'Laptop with Chrome or Edge browser (Web Serial API needed for simulation and firmware tools — Firefox/Safari will not work), projector, tables, power strips, open floor space for flight testing.' },
      { type: 'Safety note', desc: 'crash protocol briefing included (stop, hands up, call a marshal, never grab a spinning propeller).' }
    ],
    certificateMsg: 'For successfully completing the LiteWing Drone Workshop — Hands-On College Workshop and building a functional prototype.'
  },
  'build-your-own-satellite': {
    title: 'Build Your Own Satellite',
    heading: 'Design, build, and transmit data from a functional CubeSat — with a real ground station on the receiving end.',
    tagline: 'Build a functional CubeSat and work with a real ground station setup.',
    topicTag: 'ECE/CSE',
    duration: '2-day format',
    stats: {
      workshopsDone: '[PLACEHOLDER — pending confirmed student/workshop count]',
      avgStudents: '[PLACEHOLDER — pending confirmed student/workshop count]',
      rating: '5.0/5 rating',
    },
    learningOutcomes: [
      'Understand what a CubeSat is and how real student satellites are designed and built',
      'Design the physical structure/body of their CubeSat',
      'Build and test the EPS (Electrical Power System) — power generation, regulation, and distribution',
      'Integrate the OBC (Onboard Computer) — the satellite\'s flight computer',
      'Build the COMS (Communication PCB) — transmitting data from the satellite',
      'Receive and decode that data using Delta V\'s own ground station software and receiver PCB'
    ],
    challenge: [
      '[PLACEHOLDER — Yogesh confirmed a challenge exists for this workshop but specific judging criteria not yet provided (e.g. successful data transmission to ground station, structural design quality, fastest working build). Do not publish invented criteria — hold this section as a placeholder until confirmed.]'
    ],
    agenda: [
      { time: 'Day 1', task: 'Subsystems Theory & Structure/EPS Build', duration: '' },
      { time: 'Step 1', task: 'What a CubeSat is, how student satellites work and are built', duration: ' ' },
      { time: 'Step 2', task: 'Overview of the four core subsystems: EPS, OBC, COMS, ground station receiver', duration: ' ' },
      { time: 'Step 3', task: 'Designing and building the CubeSat\'s physical structure', duration: ' ' },
      { time: 'Step 4', task: 'Building and testing the EPS', duration: ' ' },
      { time: 'Day 2', task: 'OBC/COMS & Ground Station Testing', duration: '' },
      { time: 'Step 1', task: 'Integrating the Onboard Computer (OBC)', duration: ' ' },
      { time: 'Step 2', task: 'Building and testing the Communication PCB (COMS)', duration: ' ' },
      { time: 'Step 3', task: 'Working with Delta V\'s own ground station software', duration: ' ' },
      { time: 'Step 4', task: 'Live test: transmitting real data from the CubeSat to the ground station receiver', duration: ' ' },
      { time: 'Step 5', task: 'Workshop Challenge + team demos + certificate distribution', duration: ' ' }
    ],
    whoShouldAttend: 'ECE / EEE / CSE / Mechatronics students',
    equipment: [
      { type: 'Provided by Delta V', desc: 'Complete CubeSat kit — structure components, EPS board, OBC board, COMS PCB, ground station receiver PCB and software.' },
      { type: 'Required from college', desc: 'Projector, team seating/tables, power points, laptop per team.' }
    ],
    certificateMsg: 'For successfully completing the Build Your Own Satellite — Hands-On College Workshop and building a functional CubeSat prototype.'
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
  'idea-to-product',
  'drone-workshop',
  'build-your-own-satellite'
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
  { title: 'Is there a fee?', content: 'Fee details are shared directly with your department on inquiry — reach out to discuss batch size and pricing.' },
  { title: 'How far in advance should we book?', content: '[PLACEHOLDER — pending Yogesh]' },
  { title: 'Can we customize the agenda?', content: '[PLACEHOLDER — pending Yogesh]' },
  { title: 'What if we need to cancel?', content: '[PLACEHOLDER — pending Yogesh]' }
]

export default async function WorkshopPage({ params }: Props) {
  const { slug } = await params

  if (!VALID_SLUGS.includes(slug)) {
    notFound()
  }

  const workshop = WORKSHOPS[slug] || { ...DEFAULT_WORKSHOP_DATA, title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), heading: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} — Hands-On College Workshop` }

  const renderText = (text: string) => {
    if (typeof text === 'string' && text.includes('[PLACEHOLDER')) {
      return <span className="italic text-text-muted opacity-80">{text}</span>
    }
    return text
  }

  const renderedFAQS = FAQS.map(faq => ({
    title: faq.title,
    content: renderText(faq.content)
  }))

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
          {renderText(workshop.heading)}
        </h1>
        <p className="font-body text-text-secondary text-lg sm:text-xl leading-relaxed max-w-3xl mb-10">
          {renderText(workshop.tagline)}
        </p>

        {/* 5. 3-Stat Row */}
        <div className="flex flex-wrap items-center gap-y-4 gap-x-8 border-y border-border py-5 mb-16">
          <div className="flex flex-col">
            <span className="text-white font-medium font-body text-lg">{renderText(workshop.stats.workshopsDone)}</span>
          </div>
          <div className="w-[1px] h-8 bg-border hidden sm:block"></div>
          <div className="flex flex-col">
            <span className="text-white font-medium font-body text-lg">{renderText(workshop.stats.avgStudents)}</span>
          </div>
          <div className="w-[1px] h-8 bg-border hidden sm:block"></div>
          <div className="flex flex-col">
            <span className="text-white font-medium font-body text-lg">{renderText(workshop.stats.rating)}</span>
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

        {/* 6.5 WORKSHOP CHALLENGE */}
        {workshop.challenge && (
          <div className="mb-16">
            <h3 className="font-mono text-orange text-sm mb-8 tracking-widest uppercase">WORKSHOP CHALLENGE</h3>
            <div className="bg-bg-secondary border border-border rounded-lg p-6 sm:p-8">
              <div className="space-y-4 font-body text-base text-text-secondary leading-relaxed">
                {workshop.challenge.map((paragraph: string, idx: number) => (
                  <p key={idx} className={paragraph.startsWith('•') ? "pl-4 text-white" : "text-white"}>{renderText(paragraph)}</p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 7. WORKSHOP AGENDA */}
        <div className="mb-16">
          <h3 className="font-mono text-orange text-sm mb-8 tracking-widest uppercase">DAY AGENDA</h3>
          <div className="space-y-0 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {workshop.agenda.map((item: any, idx: number) => {
              const isHeader = !item.duration;
              return (
              <div key={idx} className={`relative flex items-center ${isHeader ? 'justify-start md:justify-center my-8' : 'justify-between md:justify-normal md:odd:flex-row-reverse'} group is-active`}>
                <div className={`flex items-center justify-center w-6 h-6 rounded-full border border-orange bg-bg-primary text-orange shadow shrink-0 ${isHeader ? 'md:hidden z-10 ml-[2px]' : 'md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ml-[2px] md:ml-0'}`}>
                  <div className="w-2 h-2 rounded-full bg-orange"></div>
                </div>
                <div className={`w-[calc(100%-3rem)] ${isHeader ? 'md:w-auto md:px-12 md:text-center ml-4 md:ml-0 relative z-10 bg-bg-primary' : 'md:w-[calc(50%-1.5rem)]'} p-4 rounded-lg ${isHeader ? 'border-orange/30' : 'bg-bg-secondary border-border'} border relative overflow-hidden`}>
                  {isHeader && <div className="absolute inset-0 bg-orange/10 z-0"></div>}
                  <div className="relative z-10">
                    <div className={`flex items-center ${isHeader ? 'justify-center' : 'justify-between'} mb-1`}>
                      <span className={`font-mono text-orange text-sm ${isHeader ? 'font-bold' : ''}`}>{item.time}</span>
                      {!isHeader && <span className="font-body text-text-muted text-[13px]">{item.duration}</span>}
                    </div>
                    <p className={`font-body ${isHeader ? 'text-orange font-semibold' : 'text-white'} text-[15px]`}>{renderText(item.task)}</p>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* 8. WHO SHOULD ATTEND */}
        <div className="mb-16 bg-bg-secondary border border-border rounded-lg p-6 sm:p-8">
          <h3 className="font-mono text-orange text-sm mb-4 tracking-widest uppercase">WHO SHOULD ATTEND</h3>
          <p className="font-body text-white text-base leading-relaxed">
            {renderText(workshop.whoShouldAttend || 'ECE/EEE students Year 2–4 | Robotics/IoT club members | Students preparing for core ECE internships')}
          </p>
        </div>

        {/* 9. EQUIPMENT & REQUIREMENTS */}
        <div className="mb-16">
          <h3 className="font-mono text-orange text-sm mb-6 tracking-widest uppercase">EQUIPMENT & REQUIREMENTS</h3>
          <div className="space-y-4 font-body text-base text-text-secondary leading-relaxed">
            {workshop.equipment ? workshop.equipment.map((eq: any, idx: number) => (
              <p key={idx}><strong className="text-white">{eq.type}:</strong> {eq.desc}</p>
            )) : (
              <>
                <p><strong className="text-white">Provided by Delta V:</strong> ESP32-WROOM-32 per student, sensors kit, USB cables.</p>
                <p><strong className="text-white">Required from college:</strong> Projector, tables, power strips (1 per 2 students), internet WiFi.</p>
                <p><strong className="text-white">Laptop:</strong> Each student must carry their own laptop with Arduino IDE pre-installed (instructions sent).</p>
              </>
            )}
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
              {workshop.certificateMsg || `For successfully completing the ${workshop.heading} and building a functional prototype.`}
            </div>
            <div className="absolute bottom-8 right-8 font-display font-bold text-orange text-xl opacity-50">Δ DELTA V</div>
            <div className="absolute bottom-8 left-8 font-mono text-text-muted text-sm border-t border-border pt-2">Date: {new Date().toLocaleDateString()}</div>
          </div>
        </div>

        {/* 10.5 RECOGNITION & REWARDS */}
        <div className="mb-16">
          <h3 className="font-mono text-orange text-sm mb-6 tracking-widest uppercase">RECOGNITION & REWARDS</h3>
          <div className="bg-bg-secondary border border-border rounded-lg p-6 sm:p-8 space-y-4 font-body text-base text-white leading-relaxed">
            <p>Every student who completes the workshop receives a Certificate of Completion.</p>
            <p>Each workshop closes with a team competition, judged on tasks specific to that workshop (see &quot;Workshop Challenge&quot; above). The top 3 teams receive:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary">
              <li>A Certificate of Excellence</li>
              <li>A scholarship toward a Delta V flagship course</li>
              <li>Development boards and electronics kits from Delta V&apos;s own product line</li>
            </ul>
          </div>
        </div>

        {/* 11. FAQs */}
        <div className="mb-16">
          <h3 className="font-mono text-orange text-sm mb-6 tracking-widest uppercase">FAQS</h3>
          <Accordion items={renderedFAQS} />
        </div>

        {/* 11.5 CONTACT US */}
        <div className="mb-24">
          <h3 className="font-mono text-orange text-sm mb-6 tracking-widest uppercase">CONTACT US</h3>
          <div className="bg-bg-secondary border border-border rounded-lg p-6 sm:p-8 font-body text-base text-white leading-relaxed">
            <p className="mb-4">Have questions about this workshop? Reach out directly:</p>
            <div className="space-y-2 text-text-secondary">
              <p><strong className="text-white">Phone:</strong> 7020139222 (Yogesh Bawane) &middot; 9058192559 (Madhav Agarwal)</p>
              <p><strong className="text-white">Email:</strong> deltav.admin@gmail.com</p>
            </div>
          </div>
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
