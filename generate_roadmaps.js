const fs = require('fs');
const path = require('path');

const roadmapsData = [
  {
    id: 'electronics-engineer',
    title: 'Electronics Engineer',
    description: 'The foundation roadmap for every hardware engineer. Covers electronics fundamentals, circuit design, and practical engineering concepts.',
    topics: [
      'Engineering Mathematics', 'Basic Electrical Engineering', 'Basic Electronics', 
      'Analog Electronics', 'Digital Electronics', 'Electronic Components', 
      'Circuit Analysis', 'Test & Measurement', 'PCB Basics'
    ]
  },
  {
    id: 'embedded-systems-engineer',
    title: 'Embedded Systems Engineer',
    description: 'Learn how to build firmware and software for microcontrollers and embedded devices.',
    topics: [
      'C Programming', 'Embedded C', 'Data Structures', 'Microcontrollers', 
      'AVR', 'STM32', 'ESP32', 'ARM Cortex', 'Timers', 'Interrupts', 
      'Device Drivers', 'UART', 'SPI', 'I2C', 'CAN', 'FreeRTOS', 
      'Bootloader', 'Debugging', 'Embedded Linux Basics'
    ]
  },
  {
    id: 'iot-engineer',
    title: 'IoT Engineer',
    description: 'Master connected devices, embedded systems, networking, cloud platforms, and real-world IoT deployments.',
    topics: [
      'Electronics', 'Embedded Systems', 'Communication Protocols', 'Networking', 
      'MQTT', 'HTTP', 'Wi-Fi', 'BLE', 'LoRa', 'Cloud IoT', 'AWS IoT', 
      'Azure IoT', 'Firebase', 'Edge AI', 'IoT Security'
    ]
  },
  {
    id: 'robotics-engineer',
    title: 'Robotics Engineer',
    description: 'Design intelligent robotic systems using electronics, embedded systems, AI, and ROS2.',
    topics: [
      'Electronics', 'Embedded Systems', 'Motors', 'Sensors', 'Actuators', 
      'Kinematics', 'Dynamics', 'Control Systems', 'ROS2', 'Gazebo', 
      'SLAM', 'Computer Vision', 'AI for Robotics', 'Navigation', 'Autonomous Systems'
    ]
  },
  {
    id: 'automation-engineer',
    title: 'Automation Engineer (PLC & SCADA)',
    description: 'Learn industrial automation using PLCs, SCADA systems, HMIs, and industrial communication.',
    topics: [
      'Industrial Electronics', 'PLC Programming', 'Ladder Logic', 'HMI', 
      'SCADA', 'VFD', 'Industrial Sensors', 'Modbus', 'OPC-UA', 'EtherCAT', 'Industry 4.0'
    ]
  },
  {
    id: 'pcb-design-engineer',
    title: 'PCB Design Engineer',
    description: 'Master professional PCB design from schematic capture to manufacturing.',
    topics: [
      'Circuit Design', 'Schematic Design', 'KiCad', 'Altium Designer', 
      'EasyEDA', 'PCB Rules', 'PCB Layout', 'Signal Integrity', 
      'EMI/EMC', 'Manufacturing', 'Assembly', 'Testing'
    ]
  },
  {
    id: 'vlsi-engineer',
    title: 'VLSI Engineer',
    description: 'Learn semiconductor chip design from RTL to ASIC implementation.',
    topics: [
      'Digital Logic', 'CMOS', 'Verilog', 'SystemVerilog', 'FPGA Basics', 
      'RTL Design', 'ASIC Design Flow', 'Static Timing Analysis', 'Physical Design'
    ]
  },
  {
    id: 'computer-vision-engineer',
    title: 'Computer Vision Engineer',
    description: 'Build intelligent vision systems for robotics and embedded devices.',
    topics: [
      'Python', 'OpenCV', 'Image Processing', 'Deep Learning', 'YOLO', 
      'Edge AI', 'NVIDIA Jetson', 'Raspberry Pi Vision'
    ]
  }
];

const icons = ['zap', 'cpu', 'wifi', 'message-square', 'cloud', 'microchip', 'code', 'settings', 'bot', 'gauge'];

function slugify(text) {
  return text.toLowerCase().replace(/[\s\/\&]+/g, '-').replace(/[^\w\-]+/g, '');
}

function getRandomIcon() {
  return icons[Math.floor(Math.random() * icons.length)];
}

const allSkills = {};

// We want to keep the detailed ESP32 skill from the previous registry if possible, or just generate new ones.
function generateSkill(title) {
  const id = slugify(title);
  const diffs = ['Beginner', 'Intermediate', 'Advanced'];
  const difficulty = diffs[Math.floor(Math.random() * diffs.length)];
  const time = Math.floor(Math.random() * 10) + 2;
  
  return {
    id,
    title,
    icon: getRandomIcon(),
    description: `Master the concepts and practical applications of ${title} in modern engineering.`,
    difficulty,
    estimatedTime: `${time} hours`,
    whyLearnThis: `${title} is a critical skill for building robust systems and advancing your engineering career.`,
    learningOutcomes: [
      `Understand the fundamentals of ${title}`,
      `Implement ${title} in real-world scenarios`,
      `Debug and troubleshoot ${title} systems`
    ],
    resources: {
      videos: [
        {
          id: `v1-${id}`,
          title: `${title} Masterclass`,
          platform: 'YouTube',
          difficulty: 'Beginner',
          estimatedTime: '1 Hour',
          description: `A comprehensive introduction to ${title}.`,
          url: '#'
        },
        {
          id: `v2-${id}`,
          title: `Advanced ${title} Techniques`,
          platform: 'YouTube',
          difficulty: 'Advanced',
          estimatedTime: '2 Hours',
          description: `Deep dive into advanced concepts of ${title}.`,
          url: '#'
        }
      ],
      books: [
        {
          id: `b1-${id}`,
          title: `The Definitive Guide to ${title}`,
          author: 'Engineering Experts',
          difficulty: 'Intermediate',
          description: `An in-depth textbook covering everything about ${title}.`,
          url: '#'
        }
      ],
      documentation: [
        {
          id: `d1-${id}`,
          title: `Official ${title} Docs`,
          platform: 'Web',
          description: 'The official reference documentation.',
          url: '#'
        }
      ],
      simulations: [
        {
          id: `s1-${id}`,
          title: `${title} Interactive Simulator`,
          platform: 'Web',
          difficulty: 'Beginner',
          description: `Practice ${title} in a safe sandbox environment.`,
          url: '#'
        }
      ],
      exercises: [
        {
          id: `e1-${id}`,
          title: `Basic ${title} Implementation`,
          difficulty: 'Beginner',
          estimatedTime: '30 mins',
          description: `Implement your first ${title} setup.`,
          completed: false
        }
      ],
      projects: [
        {
          id: `p1-${id}`,
          title: `${title} Capstone`,
          difficulty: 'Intermediate',
          estimatedTime: '5 Hours',
          description: `Build a complete system utilizing ${title}.`,
          requiredSkills: [id]
        }
      ],
      interviewQuestions: [
        {
          id: `i1-${id}`,
          question: `Can you explain the core concepts of ${title}?`,
          type: 'Conceptual',
          answer: `It involves understanding the primary mechanisms and standard practices associated with ${title}.`
        }
      ],
      quiz: {
        id: `q1-${id}`,
        questionCount: 5,
        passingScore: 80,
        difficulty,
        completed: false
      }
    },
    tags: ['engineering', slugify(title)]
  };
}

// Generate roadmaps and skills
roadmapsData.forEach(rm => {
  const roadmapJson = {
    id: rm.id,
    title: rm.title,
    description: rm.description,
    skills: [],
    connections: []
  };

  let previousSkillId = null;
  
  rm.topics.forEach((topic) => {
    const skillId = slugify(topic);
    roadmapJson.skills.push(skillId);
    
    // Create the skill if it doesn't exist
    if (!allSkills[skillId]) {
      allSkills[skillId] = generateSkill(topic);
    }
    
    // Create a linear connection path for simplicity
    if (previousSkillId) {
      roadmapJson.connections.push({ source: previousSkillId, target: skillId });
      
      // Update prerequisites
      if (!allSkills[skillId].prerequisites) {
        allSkills[skillId].prerequisites = [];
      }
      if (!allSkills[skillId].prerequisites.includes(previousSkillId)) {
        allSkills[skillId].prerequisites.push(previousSkillId);
      }
    }
    
    previousSkillId = skillId;
  });

  // Write the JSON file
  fs.writeFileSync(
    path.join(__dirname, `src/data/roadmaps/${rm.id}.json`), 
    JSON.stringify(roadmapJson, null, 2)
  );
  console.log(`Created ${rm.id}.json`);
});

// Write registry.ts
let registryTs = `import { Skill } from '@/types/skills'

export const skillsRegistry: Record<string, Skill> = {
`;

Object.values(allSkills).forEach(skill => {
  registryTs += `  '${skill.id}': ${JSON.stringify(skill, null, 4).replace(/"([^"]+)":/g, '$1:').replace(/\n/g, '\n  ')},\n`;
});

registryTs += `}

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
`;

fs.writeFileSync(path.join(__dirname, 'src/data/skills/registry.ts'), registryTs);
console.log('Updated registry.ts with all skills and mock data.');
