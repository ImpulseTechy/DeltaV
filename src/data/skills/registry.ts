import { Skill } from '@/types/skills'

export const skillsRegistry: Record<string, Skill> = {
  'basic-electronics': {
    id: 'basic-electronics',
    title: 'Basic Electronics',
    icon: 'zap',
    description: 'Understand voltage, current, resistance, and basic components.',
    difficulty: 'Beginner',
    estimatedTime: '4 hours',
    whyLearnThis: 'The absolute foundation of all hardware engineering.',
    prerequisites: [],
    learningOutcomes: ['Understand Ohm\'s Law', 'Identify basic components'],
    tags: ['electronics', 'hardware']
  },
  'c-programming': {
    id: 'c-programming',
    title: 'C Programming',
    icon: 'code',
    description: 'The lingua franca of embedded systems.',
    difficulty: 'Beginner',
    estimatedTime: '10 hours',
    prerequisites: [],
    tags: ['software', 'programming']
  },
  'embedded-systems': {
    id: 'embedded-systems',
    title: 'Embedded Systems',
    icon: 'cpu',
    description: 'Combining hardware and software to perform dedicated functions.',
    difficulty: 'Intermediate',
    estimatedTime: '8 hours',
    prerequisites: ['basic-electronics', 'c-programming'],
    tags: ['embedded']
  },
  'esp32': {
    id: 'esp32',
    title: 'ESP32',
    icon: 'microchip',
    description: 'The ESP32 is one of the most widely used microcontrollers for IoT and embedded systems because it integrates Wi-Fi and Bluetooth into a single low-cost chip.',
    difficulty: 'Intermediate',
    estimatedTime: '6 Hours',
    whyLearnThis: 'It is the industry standard for IoT prototyping and low-cost production. Mastering it unlocks the ability to build connected devices rapidly.',
    careerPaths: ['IoT Engineer', 'Embedded Systems Engineer', 'Robotics Engineer', 'Drone Engineer'],
    prerequisites: ['embedded-systems'],
    relatedSkills: ['wifi', 'mqtt', 'aws-iot'],
    learningOutcomes: [
      'GPIO Programming',
      'PWM',
      'ADC',
      'WiFi Programming',
      'Bluetooth Basics',
      'HTTP Communication',
      'MQTT Integration'
    ],
    resources: {
      videos: [
        {
          id: 'v1',
          title: 'ESP32 Getting Started Tutorial',
          platform: 'Random Nerd Tutorials',
          difficulty: 'Beginner',
          estimatedTime: '2 Hours',
          description: 'A complete beginner guide to setting up the Arduino IDE for ESP32 and blinking an LED.',
          url: '#'
        },
        {
          id: 'v2',
          title: 'Advanced ESP-IDF Programming',
          platform: 'Phil\'s Lab',
          difficulty: 'Advanced',
          estimatedTime: '3 Hours',
          description: 'Deep dive into FreeRTOS and bare-metal programming using the official ESP-IDF.',
          url: '#'
        }
      ],
      books: [
        {
          id: 'b1',
          title: 'Kolloqium on ESP32',
          author: 'Neil Kolban',
          difficulty: 'Intermediate',
          description: 'The definitive open-source book on ESP32 architecture and programming.',
          url: '#'
        }
      ],
      documentation: [
        {
          id: 'd1',
          title: 'ESP-IDF Programming Guide',
          platform: 'Espressif',
          description: 'Official API reference and guides.',
          url: '#'
        }
      ],
      simulations: [
        {
          id: 's1',
          title: 'Wokwi ESP32 Simulator',
          platform: 'Wokwi',
          difficulty: 'Beginner',
          description: 'Simulate ESP32 circuits in your browser without hardware.',
          url: '#'
        }
      ],
      exercises: [
        {
          id: 'e1',
          title: 'Blink LED',
          difficulty: 'Beginner',
          estimatedTime: '15 mins',
          description: 'Write a program to blink an external LED connected to GPIO 2.',
          completed: false
        },
        {
          id: 'e2',
          title: 'PWM Motor Control',
          difficulty: 'Intermediate',
          estimatedTime: '30 mins',
          description: 'Use the LEDC peripheral to generate a PWM signal.',
          completed: false
        }
      ],
      projects: [
        {
          id: 'p1',
          title: 'Weather Station',
          difficulty: 'Intermediate',
          estimatedTime: '4 Hours',
          description: 'Read temperature data from a DHT11 and display it on a local web server.',
          requiredSkills: ['esp32', 'wifi', 'basic-electronics']
        }
      ],
      interviewQuestions: [
        {
          id: 'i1',
          question: 'What is the difference between ESP32 and Arduino Uno?',
          type: 'Conceptual',
          answer: 'ESP32 is a 32-bit dual-core processor with built-in WiFi and BLE, running much faster and with more memory than the 8-bit Arduino Uno.'
        }
      ],
      quiz: {
        id: 'q1',
        questionCount: 5,
        passingScore: 80,
        difficulty: 'Intermediate',
        completed: false
      }
    },
    tags: ['mcu', 'iot', 'espressif']
  },
  'wifi': {
    id: 'wifi',
    title: 'WiFi Networking',
    icon: 'wifi',
    description: 'Connecting devices to local networks and the internet.',
    difficulty: 'Intermediate',
    estimatedTime: '4 hours',
    prerequisites: ['esp32'],
    tags: ['networking', 'iot']
  },
  'mqtt': {
    id: 'mqtt',
    title: 'MQTT',
    icon: 'message-square',
    description: 'Lightweight messaging protocol for small sensors and mobile devices, optimized for high-latency or unreliable networks.',
    difficulty: 'Intermediate',
    estimatedTime: '5 hours',
    prerequisites: ['wifi'],
    tags: ['networking', 'iot', 'protocol']
  },
  'aws-iot': {
    id: 'aws-iot',
    title: 'AWS IoT',
    icon: 'cloud',
    description: 'Managed cloud services that let connected devices easily and securely interact with cloud applications and other devices.',
    difficulty: 'Advanced',
    estimatedTime: '8 hours',
    prerequisites: ['mqtt'],
    tags: ['cloud', 'iot']
  }
}

export function getSkill(id: string): Skill | undefined {
  return skillsRegistry[id]
}

export function getPrerequisites(id: string): Skill[] {
  const skill = getSkill(id)
  if (!skill || !skill.prerequisites) return []
  return skill.prerequisites.map(reqId => getSkill(reqId)).filter(Boolean) as Skill[]
}

export function getRelatedSkills(id: string): Skill[] {
  const skill = getSkill(id)
  if (!skill || !skill.relatedSkills) return []
  return skill.relatedSkills.map(relId => getSkill(relId)).filter(Boolean) as Skill[]
}
