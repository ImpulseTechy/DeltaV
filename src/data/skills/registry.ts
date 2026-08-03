import { Skill } from '@/types/skills'

export const skillsRegistry: Record<string, Skill> = {
  'engineering-mathematics': {
      id: "engineering-mathematics",
      title: "Engineering Mathematics",
      icon: "code",
      description: "Master the concepts and practical applications of Engineering Mathematics in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "2 hours",
      whyLearnThis: "Engineering Mathematics is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Engineering Mathematics",
          "Implement Engineering Mathematics in real-world scenarios",
          "Debug and troubleshoot Engineering Mathematics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-engineering-mathematics",
                  title: "Engineering Mathematics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Engineering Mathematics.",
                  url: "#"
              },
              {
                  id: "v2-engineering-mathematics",
                  title: "Advanced Engineering Mathematics Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Engineering Mathematics.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-engineering-mathematics",
                  title: "The Definitive Guide to Engineering Mathematics",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Engineering Mathematics.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-engineering-mathematics",
                  title: "Official Engineering Mathematics Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-engineering-mathematics",
                  title: "Engineering Mathematics Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Engineering Mathematics in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-engineering-mathematics",
                  title: "Basic Engineering Mathematics Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Engineering Mathematics setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-engineering-mathematics",
                  title: "Engineering Mathematics Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Engineering Mathematics.",
                  requiredSkills: [
                      "engineering-mathematics"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-engineering-mathematics",
                  question: "Can you explain the core concepts of Engineering Mathematics?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Engineering Mathematics."
              }
          ],
          quiz: {
              id: "q1-engineering-mathematics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "engineering-mathematics"
      ]
  },
  'basic-electrical-engineering': {
      id: "basic-electrical-engineering",
      title: "Basic Electrical Engineering",
      icon: "bot",
      description: "Master the concepts and practical applications of Basic Electrical Engineering in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "4 hours",
      whyLearnThis: "Basic Electrical Engineering is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Basic Electrical Engineering",
          "Implement Basic Electrical Engineering in real-world scenarios",
          "Debug and troubleshoot Basic Electrical Engineering systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-basic-electrical-engineering",
                  title: "Basic Electrical Engineering Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Basic Electrical Engineering.",
                  url: "#"
              },
              {
                  id: "v2-basic-electrical-engineering",
                  title: "Advanced Basic Electrical Engineering Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Basic Electrical Engineering.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-basic-electrical-engineering",
                  title: "The Definitive Guide to Basic Electrical Engineering",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Basic Electrical Engineering.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-basic-electrical-engineering",
                  title: "Official Basic Electrical Engineering Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-basic-electrical-engineering",
                  title: "Basic Electrical Engineering Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Basic Electrical Engineering in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-basic-electrical-engineering",
                  title: "Basic Basic Electrical Engineering Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Basic Electrical Engineering setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-basic-electrical-engineering",
                  title: "Basic Electrical Engineering Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Basic Electrical Engineering.",
                  requiredSkills: [
                      "basic-electrical-engineering"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-basic-electrical-engineering",
                  question: "Can you explain the core concepts of Basic Electrical Engineering?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Basic Electrical Engineering."
              }
          ],
          quiz: {
              id: "q1-basic-electrical-engineering",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "basic-electrical-engineering"
      ],
      prerequisites: [
          "engineering-mathematics"
      ]
  },
  'basic-electronics': {
      id: "basic-electronics",
      title: "Basic Electronics",
      icon: "microchip",
      description: "Master the concepts and practical applications of Basic Electronics in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "11 hours",
      whyLearnThis: "Basic Electronics is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Basic Electronics",
          "Implement Basic Electronics in real-world scenarios",
          "Debug and troubleshoot Basic Electronics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-basic-electronics",
                  title: "Basic Electronics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Basic Electronics.",
                  url: "#"
              },
              {
                  id: "v2-basic-electronics",
                  title: "Advanced Basic Electronics Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Basic Electronics.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-basic-electronics",
                  title: "The Definitive Guide to Basic Electronics",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Basic Electronics.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-basic-electronics",
                  title: "Official Basic Electronics Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-basic-electronics",
                  title: "Basic Electronics Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Basic Electronics in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-basic-electronics",
                  title: "Basic Basic Electronics Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Basic Electronics setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-basic-electronics",
                  title: "Basic Electronics Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Basic Electronics.",
                  requiredSkills: [
                      "basic-electronics"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-basic-electronics",
                  question: "Can you explain the core concepts of Basic Electronics?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Basic Electronics."
              }
          ],
          quiz: {
              id: "q1-basic-electronics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "basic-electronics"
      ],
      prerequisites: [
          "basic-electrical-engineering"
      ]
  },
  'analog-electronics': {
      id: "analog-electronics",
      title: "Analog Electronics",
      icon: "message-square",
      description: "Master the concepts and practical applications of Analog Electronics in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "9 hours",
      whyLearnThis: "Analog Electronics is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Analog Electronics",
          "Implement Analog Electronics in real-world scenarios",
          "Debug and troubleshoot Analog Electronics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-analog-electronics",
                  title: "Analog Electronics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Analog Electronics.",
                  url: "#"
              },
              {
                  id: "v2-analog-electronics",
                  title: "Advanced Analog Electronics Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Analog Electronics.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-analog-electronics",
                  title: "The Definitive Guide to Analog Electronics",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Analog Electronics.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-analog-electronics",
                  title: "Official Analog Electronics Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-analog-electronics",
                  title: "Analog Electronics Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Analog Electronics in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-analog-electronics",
                  title: "Basic Analog Electronics Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Analog Electronics setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-analog-electronics",
                  title: "Analog Electronics Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Analog Electronics.",
                  requiredSkills: [
                      "analog-electronics"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-analog-electronics",
                  question: "Can you explain the core concepts of Analog Electronics?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Analog Electronics."
              }
          ],
          quiz: {
              id: "q1-analog-electronics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "analog-electronics"
      ],
      prerequisites: [
          "basic-electronics"
      ]
  },
  'digital-electronics': {
      id: "digital-electronics",
      title: "Digital Electronics",
      icon: "wifi",
      description: "Master the concepts and practical applications of Digital Electronics in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "11 hours",
      whyLearnThis: "Digital Electronics is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Digital Electronics",
          "Implement Digital Electronics in real-world scenarios",
          "Debug and troubleshoot Digital Electronics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-digital-electronics",
                  title: "Digital Electronics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Digital Electronics.",
                  url: "#"
              },
              {
                  id: "v2-digital-electronics",
                  title: "Advanced Digital Electronics Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Digital Electronics.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-digital-electronics",
                  title: "The Definitive Guide to Digital Electronics",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Digital Electronics.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-digital-electronics",
                  title: "Official Digital Electronics Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-digital-electronics",
                  title: "Digital Electronics Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Digital Electronics in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-digital-electronics",
                  title: "Basic Digital Electronics Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Digital Electronics setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-digital-electronics",
                  title: "Digital Electronics Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Digital Electronics.",
                  requiredSkills: [
                      "digital-electronics"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-digital-electronics",
                  question: "Can you explain the core concepts of Digital Electronics?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Digital Electronics."
              }
          ],
          quiz: {
              id: "q1-digital-electronics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "digital-electronics"
      ],
      prerequisites: [
          "analog-electronics"
      ]
  },
  'electronic-components': {
      id: "electronic-components",
      title: "Electronic Components",
      icon: "code",
      description: "Master the concepts and practical applications of Electronic Components in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "11 hours",
      whyLearnThis: "Electronic Components is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Electronic Components",
          "Implement Electronic Components in real-world scenarios",
          "Debug and troubleshoot Electronic Components systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-electronic-components",
                  title: "Electronic Components Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Electronic Components.",
                  url: "#"
              },
              {
                  id: "v2-electronic-components",
                  title: "Advanced Electronic Components Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Electronic Components.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-electronic-components",
                  title: "The Definitive Guide to Electronic Components",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Electronic Components.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-electronic-components",
                  title: "Official Electronic Components Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-electronic-components",
                  title: "Electronic Components Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Electronic Components in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-electronic-components",
                  title: "Basic Electronic Components Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Electronic Components setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-electronic-components",
                  title: "Electronic Components Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Electronic Components.",
                  requiredSkills: [
                      "electronic-components"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-electronic-components",
                  question: "Can you explain the core concepts of Electronic Components?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Electronic Components."
              }
          ],
          quiz: {
              id: "q1-electronic-components",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "electronic-components"
      ],
      prerequisites: [
          "digital-electronics"
      ]
  },
  'circuit-analysis': {
      id: "circuit-analysis",
      title: "Circuit Analysis",
      icon: "microchip",
      description: "Master the concepts and practical applications of Circuit Analysis in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "6 hours",
      whyLearnThis: "Circuit Analysis is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Circuit Analysis",
          "Implement Circuit Analysis in real-world scenarios",
          "Debug and troubleshoot Circuit Analysis systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-circuit-analysis",
                  title: "Circuit Analysis Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Circuit Analysis.",
                  url: "#"
              },
              {
                  id: "v2-circuit-analysis",
                  title: "Advanced Circuit Analysis Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Circuit Analysis.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-circuit-analysis",
                  title: "The Definitive Guide to Circuit Analysis",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Circuit Analysis.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-circuit-analysis",
                  title: "Official Circuit Analysis Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-circuit-analysis",
                  title: "Circuit Analysis Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Circuit Analysis in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-circuit-analysis",
                  title: "Basic Circuit Analysis Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Circuit Analysis setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-circuit-analysis",
                  title: "Circuit Analysis Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Circuit Analysis.",
                  requiredSkills: [
                      "circuit-analysis"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-circuit-analysis",
                  question: "Can you explain the core concepts of Circuit Analysis?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Circuit Analysis."
              }
          ],
          quiz: {
              id: "q1-circuit-analysis",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "circuit-analysis"
      ],
      prerequisites: [
          "electronic-components"
      ]
  },
  'test-measurement': {
      id: "test-measurement",
      title: "Test & Measurement",
      icon: "code",
      description: "Master the concepts and practical applications of Test & Measurement in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "2 hours",
      whyLearnThis: "Test & Measurement is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Test & Measurement",
          "Implement Test & Measurement in real-world scenarios",
          "Debug and troubleshoot Test & Measurement systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-test-measurement",
                  title: "Test & Measurement Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Test & Measurement.",
                  url: "#"
              },
              {
                  id: "v2-test-measurement",
                  title: "Advanced Test & Measurement Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Test & Measurement.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-test-measurement",
                  title: "The Definitive Guide to Test & Measurement",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Test & Measurement.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-test-measurement",
                  title: "Official Test & Measurement Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-test-measurement",
                  title: "Test & Measurement Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Test & Measurement in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-test-measurement",
                  title: "Basic Test & Measurement Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Test & Measurement setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-test-measurement",
                  title: "Test & Measurement Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Test & Measurement.",
                  requiredSkills: [
                      "test-measurement"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-test-measurement",
                  question: "Can you explain the core concepts of Test & Measurement?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Test & Measurement."
              }
          ],
          quiz: {
              id: "q1-test-measurement",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "test-measurement"
      ],
      prerequisites: [
          "circuit-analysis"
      ]
  },
  'pcb-basics': {
      id: "pcb-basics",
      title: "PCB Basics",
      icon: "gauge",
      description: "Master the concepts and practical applications of PCB Basics in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "11 hours",
      whyLearnThis: "PCB Basics is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of PCB Basics",
          "Implement PCB Basics in real-world scenarios",
          "Debug and troubleshoot PCB Basics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-pcb-basics",
                  title: "PCB Basics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to PCB Basics.",
                  url: "#"
              },
              {
                  id: "v2-pcb-basics",
                  title: "Advanced PCB Basics Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of PCB Basics.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-pcb-basics",
                  title: "The Definitive Guide to PCB Basics",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about PCB Basics.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-pcb-basics",
                  title: "Official PCB Basics Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-pcb-basics",
                  title: "PCB Basics Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice PCB Basics in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-pcb-basics",
                  title: "Basic PCB Basics Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first PCB Basics setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-pcb-basics",
                  title: "PCB Basics Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing PCB Basics.",
                  requiredSkills: [
                      "pcb-basics"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-pcb-basics",
                  question: "Can you explain the core concepts of PCB Basics?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with PCB Basics."
              }
          ],
          quiz: {
              id: "q1-pcb-basics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "pcb-basics"
      ],
      prerequisites: [
          "test-measurement"
      ]
  },
  'c-programming': {
      id: "c-programming",
      title: "C Programming",
      icon: "settings",
      description: "Master the concepts and practical applications of C Programming in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "6 hours",
      whyLearnThis: "C Programming is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of C Programming",
          "Implement C Programming in real-world scenarios",
          "Debug and troubleshoot C Programming systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-c-programming",
                  title: "C Programming Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to C Programming.",
                  url: "#"
              },
              {
                  id: "v2-c-programming",
                  title: "Advanced C Programming Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of C Programming.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-c-programming",
                  title: "The Definitive Guide to C Programming",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about C Programming.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-c-programming",
                  title: "Official C Programming Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-c-programming",
                  title: "C Programming Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice C Programming in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-c-programming",
                  title: "Basic C Programming Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first C Programming setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-c-programming",
                  title: "C Programming Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing C Programming.",
                  requiredSkills: [
                      "c-programming"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-c-programming",
                  question: "Can you explain the core concepts of C Programming?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with C Programming."
              }
          ],
          quiz: {
              id: "q1-c-programming",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "c-programming"
      ]
  },
  'embedded-c': {
      id: "embedded-c",
      title: "Embedded C",
      icon: "code",
      description: "Master the concepts and practical applications of Embedded C in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "8 hours",
      whyLearnThis: "Embedded C is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Embedded C",
          "Implement Embedded C in real-world scenarios",
          "Debug and troubleshoot Embedded C systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-embedded-c",
                  title: "Embedded C Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Embedded C.",
                  url: "#"
              },
              {
                  id: "v2-embedded-c",
                  title: "Advanced Embedded C Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Embedded C.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-embedded-c",
                  title: "The Definitive Guide to Embedded C",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Embedded C.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-embedded-c",
                  title: "Official Embedded C Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-embedded-c",
                  title: "Embedded C Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Embedded C in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-embedded-c",
                  title: "Basic Embedded C Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Embedded C setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-embedded-c",
                  title: "Embedded C Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Embedded C.",
                  requiredSkills: [
                      "embedded-c"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-embedded-c",
                  question: "Can you explain the core concepts of Embedded C?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Embedded C."
              }
          ],
          quiz: {
              id: "q1-embedded-c",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "embedded-c"
      ],
      prerequisites: [
          "c-programming"
      ]
  },
  'data-structures': {
      id: "data-structures",
      title: "Data Structures",
      icon: "gauge",
      description: "Master the concepts and practical applications of Data Structures in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "11 hours",
      whyLearnThis: "Data Structures is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Data Structures",
          "Implement Data Structures in real-world scenarios",
          "Debug and troubleshoot Data Structures systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-data-structures",
                  title: "Data Structures Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Data Structures.",
                  url: "#"
              },
              {
                  id: "v2-data-structures",
                  title: "Advanced Data Structures Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Data Structures.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-data-structures",
                  title: "The Definitive Guide to Data Structures",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Data Structures.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-data-structures",
                  title: "Official Data Structures Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-data-structures",
                  title: "Data Structures Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Data Structures in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-data-structures",
                  title: "Basic Data Structures Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Data Structures setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-data-structures",
                  title: "Data Structures Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Data Structures.",
                  requiredSkills: [
                      "data-structures"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-data-structures",
                  question: "Can you explain the core concepts of Data Structures?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Data Structures."
              }
          ],
          quiz: {
              id: "q1-data-structures",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "data-structures"
      ],
      prerequisites: [
          "embedded-c"
      ]
  },
  'microcontrollers': {
      id: "microcontrollers",
      title: "Microcontrollers",
      icon: "cpu",
      description: "Master the concepts and practical applications of Microcontrollers in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "6 hours",
      whyLearnThis: "Microcontrollers is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Microcontrollers",
          "Implement Microcontrollers in real-world scenarios",
          "Debug and troubleshoot Microcontrollers systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-microcontrollers",
                  title: "Microcontrollers Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Microcontrollers.",
                  url: "#"
              },
              {
                  id: "v2-microcontrollers",
                  title: "Advanced Microcontrollers Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Microcontrollers.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-microcontrollers",
                  title: "The Definitive Guide to Microcontrollers",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Microcontrollers.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-microcontrollers",
                  title: "Official Microcontrollers Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-microcontrollers",
                  title: "Microcontrollers Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Microcontrollers in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-microcontrollers",
                  title: "Basic Microcontrollers Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Microcontrollers setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-microcontrollers",
                  title: "Microcontrollers Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Microcontrollers.",
                  requiredSkills: [
                      "microcontrollers"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-microcontrollers",
                  question: "Can you explain the core concepts of Microcontrollers?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Microcontrollers."
              }
          ],
          quiz: {
              id: "q1-microcontrollers",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "microcontrollers"
      ],
      prerequisites: [
          "data-structures"
      ]
  },
  'avr': {
      id: "avr",
      title: "AVR",
      icon: "gauge",
      description: "Master the concepts and practical applications of AVR in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "9 hours",
      whyLearnThis: "AVR is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of AVR",
          "Implement AVR in real-world scenarios",
          "Debug and troubleshoot AVR systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-avr",
                  title: "AVR Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to AVR.",
                  url: "#"
              },
              {
                  id: "v2-avr",
                  title: "Advanced AVR Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of AVR.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-avr",
                  title: "The Definitive Guide to AVR",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about AVR.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-avr",
                  title: "Official AVR Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-avr",
                  title: "AVR Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice AVR in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-avr",
                  title: "Basic AVR Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first AVR setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-avr",
                  title: "AVR Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing AVR.",
                  requiredSkills: [
                      "avr"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-avr",
                  question: "Can you explain the core concepts of AVR?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with AVR."
              }
          ],
          quiz: {
              id: "q1-avr",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "avr"
      ],
      prerequisites: [
          "microcontrollers"
      ]
  },
  'stm32': {
      id: "stm32",
      title: "STM32",
      icon: "microchip",
      description: "Master the concepts and practical applications of STM32 in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "11 hours",
      whyLearnThis: "STM32 is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of STM32",
          "Implement STM32 in real-world scenarios",
          "Debug and troubleshoot STM32 systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-stm32",
                  title: "STM32 Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to STM32.",
                  url: "#"
              },
              {
                  id: "v2-stm32",
                  title: "Advanced STM32 Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of STM32.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-stm32",
                  title: "The Definitive Guide to STM32",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about STM32.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-stm32",
                  title: "Official STM32 Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-stm32",
                  title: "STM32 Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice STM32 in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-stm32",
                  title: "Basic STM32 Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first STM32 setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-stm32",
                  title: "STM32 Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing STM32.",
                  requiredSkills: [
                      "stm32"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-stm32",
                  question: "Can you explain the core concepts of STM32?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with STM32."
              }
          ],
          quiz: {
              id: "q1-stm32",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "stm32"
      ],
      prerequisites: [
          "avr"
      ]
  },
  'esp32': {
      id: "esp32",
      title: "ESP32",
      icon: "message-square",
      description: "Master the concepts and practical applications of ESP32 in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "5 hours",
      whyLearnThis: "ESP32 is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of ESP32",
          "Implement ESP32 in real-world scenarios",
          "Debug and troubleshoot ESP32 systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-esp32",
                  title: "ESP32 Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to ESP32.",
                  url: "#"
              },
              {
                  id: "v2-esp32",
                  title: "Advanced ESP32 Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of ESP32.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-esp32",
                  title: "The Definitive Guide to ESP32",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about ESP32.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-esp32",
                  title: "Official ESP32 Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-esp32",
                  title: "ESP32 Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice ESP32 in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-esp32",
                  title: "Basic ESP32 Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first ESP32 setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-esp32",
                  title: "ESP32 Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing ESP32.",
                  requiredSkills: [
                      "esp32"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-esp32",
                  question: "Can you explain the core concepts of ESP32?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with ESP32."
              }
          ],
          quiz: {
              id: "q1-esp32",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "esp32"
      ],
      prerequisites: [
          "stm32"
      ]
  },
  'arm-cortex': {
      id: "arm-cortex",
      title: "ARM Cortex",
      icon: "gauge",
      description: "Master the concepts and practical applications of ARM Cortex in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "10 hours",
      whyLearnThis: "ARM Cortex is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of ARM Cortex",
          "Implement ARM Cortex in real-world scenarios",
          "Debug and troubleshoot ARM Cortex systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-arm-cortex",
                  title: "ARM Cortex Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to ARM Cortex.",
                  url: "#"
              },
              {
                  id: "v2-arm-cortex",
                  title: "Advanced ARM Cortex Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of ARM Cortex.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-arm-cortex",
                  title: "The Definitive Guide to ARM Cortex",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about ARM Cortex.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-arm-cortex",
                  title: "Official ARM Cortex Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-arm-cortex",
                  title: "ARM Cortex Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice ARM Cortex in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-arm-cortex",
                  title: "Basic ARM Cortex Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first ARM Cortex setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-arm-cortex",
                  title: "ARM Cortex Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing ARM Cortex.",
                  requiredSkills: [
                      "arm-cortex"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-arm-cortex",
                  question: "Can you explain the core concepts of ARM Cortex?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with ARM Cortex."
              }
          ],
          quiz: {
              id: "q1-arm-cortex",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "arm-cortex"
      ],
      prerequisites: [
          "esp32"
      ]
  },
  'timers': {
      id: "timers",
      title: "Timers",
      icon: "wifi",
      description: "Master the concepts and practical applications of Timers in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "2 hours",
      whyLearnThis: "Timers is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Timers",
          "Implement Timers in real-world scenarios",
          "Debug and troubleshoot Timers systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-timers",
                  title: "Timers Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Timers.",
                  url: "#"
              },
              {
                  id: "v2-timers",
                  title: "Advanced Timers Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Timers.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-timers",
                  title: "The Definitive Guide to Timers",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Timers.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-timers",
                  title: "Official Timers Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-timers",
                  title: "Timers Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Timers in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-timers",
                  title: "Basic Timers Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Timers setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-timers",
                  title: "Timers Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Timers.",
                  requiredSkills: [
                      "timers"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-timers",
                  question: "Can you explain the core concepts of Timers?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Timers."
              }
          ],
          quiz: {
              id: "q1-timers",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "timers"
      ],
      prerequisites: [
          "arm-cortex"
      ]
  },
  'interrupts': {
      id: "interrupts",
      title: "Interrupts",
      icon: "zap",
      description: "Master the concepts and practical applications of Interrupts in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "9 hours",
      whyLearnThis: "Interrupts is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Interrupts",
          "Implement Interrupts in real-world scenarios",
          "Debug and troubleshoot Interrupts systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-interrupts",
                  title: "Interrupts Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Interrupts.",
                  url: "#"
              },
              {
                  id: "v2-interrupts",
                  title: "Advanced Interrupts Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Interrupts.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-interrupts",
                  title: "The Definitive Guide to Interrupts",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Interrupts.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-interrupts",
                  title: "Official Interrupts Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-interrupts",
                  title: "Interrupts Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Interrupts in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-interrupts",
                  title: "Basic Interrupts Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Interrupts setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-interrupts",
                  title: "Interrupts Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Interrupts.",
                  requiredSkills: [
                      "interrupts"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-interrupts",
                  question: "Can you explain the core concepts of Interrupts?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Interrupts."
              }
          ],
          quiz: {
              id: "q1-interrupts",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "interrupts"
      ],
      prerequisites: [
          "timers"
      ]
  },
  'device-drivers': {
      id: "device-drivers",
      title: "Device Drivers",
      icon: "microchip",
      description: "Master the concepts and practical applications of Device Drivers in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "7 hours",
      whyLearnThis: "Device Drivers is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Device Drivers",
          "Implement Device Drivers in real-world scenarios",
          "Debug and troubleshoot Device Drivers systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-device-drivers",
                  title: "Device Drivers Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Device Drivers.",
                  url: "#"
              },
              {
                  id: "v2-device-drivers",
                  title: "Advanced Device Drivers Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Device Drivers.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-device-drivers",
                  title: "The Definitive Guide to Device Drivers",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Device Drivers.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-device-drivers",
                  title: "Official Device Drivers Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-device-drivers",
                  title: "Device Drivers Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Device Drivers in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-device-drivers",
                  title: "Basic Device Drivers Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Device Drivers setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-device-drivers",
                  title: "Device Drivers Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Device Drivers.",
                  requiredSkills: [
                      "device-drivers"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-device-drivers",
                  question: "Can you explain the core concepts of Device Drivers?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Device Drivers."
              }
          ],
          quiz: {
              id: "q1-device-drivers",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "device-drivers"
      ],
      prerequisites: [
          "interrupts"
      ]
  },
  'uart': {
      id: "uart",
      title: "UART",
      icon: "cloud",
      description: "Master the concepts and practical applications of UART in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "3 hours",
      whyLearnThis: "UART is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of UART",
          "Implement UART in real-world scenarios",
          "Debug and troubleshoot UART systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-uart",
                  title: "UART Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to UART.",
                  url: "#"
              },
              {
                  id: "v2-uart",
                  title: "Advanced UART Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of UART.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-uart",
                  title: "The Definitive Guide to UART",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about UART.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-uart",
                  title: "Official UART Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-uart",
                  title: "UART Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice UART in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-uart",
                  title: "Basic UART Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first UART setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-uart",
                  title: "UART Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing UART.",
                  requiredSkills: [
                      "uart"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-uart",
                  question: "Can you explain the core concepts of UART?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with UART."
              }
          ],
          quiz: {
              id: "q1-uart",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "uart"
      ],
      prerequisites: [
          "device-drivers"
      ]
  },
  'spi': {
      id: "spi",
      title: "SPI",
      icon: "zap",
      description: "Master the concepts and practical applications of SPI in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "11 hours",
      whyLearnThis: "SPI is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of SPI",
          "Implement SPI in real-world scenarios",
          "Debug and troubleshoot SPI systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-spi",
                  title: "SPI Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to SPI.",
                  url: "#"
              },
              {
                  id: "v2-spi",
                  title: "Advanced SPI Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of SPI.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-spi",
                  title: "The Definitive Guide to SPI",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about SPI.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-spi",
                  title: "Official SPI Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-spi",
                  title: "SPI Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice SPI in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-spi",
                  title: "Basic SPI Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first SPI setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-spi",
                  title: "SPI Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing SPI.",
                  requiredSkills: [
                      "spi"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-spi",
                  question: "Can you explain the core concepts of SPI?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with SPI."
              }
          ],
          quiz: {
              id: "q1-spi",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "spi"
      ],
      prerequisites: [
          "uart"
      ]
  },
  'i2c': {
      id: "i2c",
      title: "I2C",
      icon: "wifi",
      description: "Master the concepts and practical applications of I2C in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "4 hours",
      whyLearnThis: "I2C is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of I2C",
          "Implement I2C in real-world scenarios",
          "Debug and troubleshoot I2C systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-i2c",
                  title: "I2C Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to I2C.",
                  url: "#"
              },
              {
                  id: "v2-i2c",
                  title: "Advanced I2C Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of I2C.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-i2c",
                  title: "The Definitive Guide to I2C",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about I2C.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-i2c",
                  title: "Official I2C Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-i2c",
                  title: "I2C Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice I2C in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-i2c",
                  title: "Basic I2C Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first I2C setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-i2c",
                  title: "I2C Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing I2C.",
                  requiredSkills: [
                      "i2c"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-i2c",
                  question: "Can you explain the core concepts of I2C?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with I2C."
              }
          ],
          quiz: {
              id: "q1-i2c",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "i2c"
      ],
      prerequisites: [
          "spi"
      ]
  },
  'can': {
      id: "can",
      title: "CAN",
      icon: "wifi",
      description: "Master the concepts and practical applications of CAN in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "2 hours",
      whyLearnThis: "CAN is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of CAN",
          "Implement CAN in real-world scenarios",
          "Debug and troubleshoot CAN systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-can",
                  title: "CAN Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to CAN.",
                  url: "#"
              },
              {
                  id: "v2-can",
                  title: "Advanced CAN Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of CAN.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-can",
                  title: "The Definitive Guide to CAN",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about CAN.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-can",
                  title: "Official CAN Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-can",
                  title: "CAN Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice CAN in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-can",
                  title: "Basic CAN Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first CAN setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-can",
                  title: "CAN Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing CAN.",
                  requiredSkills: [
                      "can"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-can",
                  question: "Can you explain the core concepts of CAN?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with CAN."
              }
          ],
          quiz: {
              id: "q1-can",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "can"
      ],
      prerequisites: [
          "i2c"
      ]
  },
  'freertos': {
      id: "freertos",
      title: "FreeRTOS",
      icon: "message-square",
      description: "Master the concepts and practical applications of FreeRTOS in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "8 hours",
      whyLearnThis: "FreeRTOS is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of FreeRTOS",
          "Implement FreeRTOS in real-world scenarios",
          "Debug and troubleshoot FreeRTOS systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-freertos",
                  title: "FreeRTOS Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to FreeRTOS.",
                  url: "#"
              },
              {
                  id: "v2-freertos",
                  title: "Advanced FreeRTOS Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of FreeRTOS.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-freertos",
                  title: "The Definitive Guide to FreeRTOS",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about FreeRTOS.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-freertos",
                  title: "Official FreeRTOS Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-freertos",
                  title: "FreeRTOS Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice FreeRTOS in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-freertos",
                  title: "Basic FreeRTOS Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first FreeRTOS setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-freertos",
                  title: "FreeRTOS Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing FreeRTOS.",
                  requiredSkills: [
                      "freertos"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-freertos",
                  question: "Can you explain the core concepts of FreeRTOS?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with FreeRTOS."
              }
          ],
          quiz: {
              id: "q1-freertos",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "freertos"
      ],
      prerequisites: [
          "can"
      ]
  },
  'bootloader': {
      id: "bootloader",
      title: "Bootloader",
      icon: "settings",
      description: "Master the concepts and practical applications of Bootloader in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "6 hours",
      whyLearnThis: "Bootloader is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Bootloader",
          "Implement Bootloader in real-world scenarios",
          "Debug and troubleshoot Bootloader systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-bootloader",
                  title: "Bootloader Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Bootloader.",
                  url: "#"
              },
              {
                  id: "v2-bootloader",
                  title: "Advanced Bootloader Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Bootloader.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-bootloader",
                  title: "The Definitive Guide to Bootloader",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Bootloader.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-bootloader",
                  title: "Official Bootloader Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-bootloader",
                  title: "Bootloader Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Bootloader in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-bootloader",
                  title: "Basic Bootloader Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Bootloader setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-bootloader",
                  title: "Bootloader Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Bootloader.",
                  requiredSkills: [
                      "bootloader"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-bootloader",
                  question: "Can you explain the core concepts of Bootloader?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Bootloader."
              }
          ],
          quiz: {
              id: "q1-bootloader",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "bootloader"
      ],
      prerequisites: [
          "freertos"
      ]
  },
  'debugging': {
      id: "debugging",
      title: "Debugging",
      icon: "message-square",
      description: "Master the concepts and practical applications of Debugging in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "10 hours",
      whyLearnThis: "Debugging is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Debugging",
          "Implement Debugging in real-world scenarios",
          "Debug and troubleshoot Debugging systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-debugging",
                  title: "Debugging Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Debugging.",
                  url: "#"
              },
              {
                  id: "v2-debugging",
                  title: "Advanced Debugging Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Debugging.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-debugging",
                  title: "The Definitive Guide to Debugging",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Debugging.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-debugging",
                  title: "Official Debugging Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-debugging",
                  title: "Debugging Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Debugging in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-debugging",
                  title: "Basic Debugging Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Debugging setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-debugging",
                  title: "Debugging Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Debugging.",
                  requiredSkills: [
                      "debugging"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-debugging",
                  question: "Can you explain the core concepts of Debugging?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Debugging."
              }
          ],
          quiz: {
              id: "q1-debugging",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "debugging"
      ],
      prerequisites: [
          "bootloader"
      ]
  },
  'embedded-linux-basics': {
      id: "embedded-linux-basics",
      title: "Embedded Linux Basics",
      icon: "bot",
      description: "Master the concepts and practical applications of Embedded Linux Basics in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "6 hours",
      whyLearnThis: "Embedded Linux Basics is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Embedded Linux Basics",
          "Implement Embedded Linux Basics in real-world scenarios",
          "Debug and troubleshoot Embedded Linux Basics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-embedded-linux-basics",
                  title: "Embedded Linux Basics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Embedded Linux Basics.",
                  url: "#"
              },
              {
                  id: "v2-embedded-linux-basics",
                  title: "Advanced Embedded Linux Basics Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Embedded Linux Basics.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-embedded-linux-basics",
                  title: "The Definitive Guide to Embedded Linux Basics",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Embedded Linux Basics.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-embedded-linux-basics",
                  title: "Official Embedded Linux Basics Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-embedded-linux-basics",
                  title: "Embedded Linux Basics Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Embedded Linux Basics in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-embedded-linux-basics",
                  title: "Basic Embedded Linux Basics Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Embedded Linux Basics setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-embedded-linux-basics",
                  title: "Embedded Linux Basics Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Embedded Linux Basics.",
                  requiredSkills: [
                      "embedded-linux-basics"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-embedded-linux-basics",
                  question: "Can you explain the core concepts of Embedded Linux Basics?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Embedded Linux Basics."
              }
          ],
          quiz: {
              id: "q1-embedded-linux-basics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "embedded-linux-basics"
      ],
      prerequisites: [
          "debugging"
      ]
  },
  'electronics': {
      id: "electronics",
      title: "Electronics",
      icon: "bot",
      description: "Master the concepts and practical applications of Electronics in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "7 hours",
      whyLearnThis: "Electronics is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Electronics",
          "Implement Electronics in real-world scenarios",
          "Debug and troubleshoot Electronics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-electronics",
                  title: "Electronics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Electronics.",
                  url: "#"
              },
              {
                  id: "v2-electronics",
                  title: "Advanced Electronics Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Electronics.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-electronics",
                  title: "The Definitive Guide to Electronics",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Electronics.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-electronics",
                  title: "Official Electronics Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-electronics",
                  title: "Electronics Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Electronics in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-electronics",
                  title: "Basic Electronics Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Electronics setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-electronics",
                  title: "Electronics Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Electronics.",
                  requiredSkills: [
                      "electronics"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-electronics",
                  question: "Can you explain the core concepts of Electronics?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Electronics."
              }
          ],
          quiz: {
              id: "q1-electronics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "electronics"
      ]
  },
  'embedded-systems': {
      id: "embedded-systems",
      title: "Embedded Systems",
      icon: "gauge",
      description: "Master the concepts and practical applications of Embedded Systems in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "9 hours",
      whyLearnThis: "Embedded Systems is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Embedded Systems",
          "Implement Embedded Systems in real-world scenarios",
          "Debug and troubleshoot Embedded Systems systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-embedded-systems",
                  title: "Embedded Systems Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Embedded Systems.",
                  url: "#"
              },
              {
                  id: "v2-embedded-systems",
                  title: "Advanced Embedded Systems Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Embedded Systems.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-embedded-systems",
                  title: "The Definitive Guide to Embedded Systems",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Embedded Systems.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-embedded-systems",
                  title: "Official Embedded Systems Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-embedded-systems",
                  title: "Embedded Systems Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Embedded Systems in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-embedded-systems",
                  title: "Basic Embedded Systems Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Embedded Systems setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-embedded-systems",
                  title: "Embedded Systems Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Embedded Systems.",
                  requiredSkills: [
                      "embedded-systems"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-embedded-systems",
                  question: "Can you explain the core concepts of Embedded Systems?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Embedded Systems."
              }
          ],
          quiz: {
              id: "q1-embedded-systems",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "embedded-systems"
      ],
      prerequisites: [
          "electronics"
      ]
  },
  'communication-protocols': {
      id: "communication-protocols",
      title: "Communication Protocols",
      icon: "wifi",
      description: "Master the concepts and practical applications of Communication Protocols in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "2 hours",
      whyLearnThis: "Communication Protocols is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Communication Protocols",
          "Implement Communication Protocols in real-world scenarios",
          "Debug and troubleshoot Communication Protocols systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-communication-protocols",
                  title: "Communication Protocols Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Communication Protocols.",
                  url: "#"
              },
              {
                  id: "v2-communication-protocols",
                  title: "Advanced Communication Protocols Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Communication Protocols.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-communication-protocols",
                  title: "The Definitive Guide to Communication Protocols",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Communication Protocols.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-communication-protocols",
                  title: "Official Communication Protocols Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-communication-protocols",
                  title: "Communication Protocols Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Communication Protocols in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-communication-protocols",
                  title: "Basic Communication Protocols Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Communication Protocols setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-communication-protocols",
                  title: "Communication Protocols Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Communication Protocols.",
                  requiredSkills: [
                      "communication-protocols"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-communication-protocols",
                  question: "Can you explain the core concepts of Communication Protocols?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Communication Protocols."
              }
          ],
          quiz: {
              id: "q1-communication-protocols",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "communication-protocols"
      ],
      prerequisites: [
          "embedded-systems"
      ]
  },
  'networking': {
      id: "networking",
      title: "Networking",
      icon: "microchip",
      description: "Master the concepts and practical applications of Networking in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "8 hours",
      whyLearnThis: "Networking is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Networking",
          "Implement Networking in real-world scenarios",
          "Debug and troubleshoot Networking systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-networking",
                  title: "Networking Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Networking.",
                  url: "#"
              },
              {
                  id: "v2-networking",
                  title: "Advanced Networking Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Networking.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-networking",
                  title: "The Definitive Guide to Networking",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Networking.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-networking",
                  title: "Official Networking Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-networking",
                  title: "Networking Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Networking in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-networking",
                  title: "Basic Networking Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Networking setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-networking",
                  title: "Networking Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Networking.",
                  requiredSkills: [
                      "networking"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-networking",
                  question: "Can you explain the core concepts of Networking?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Networking."
              }
          ],
          quiz: {
              id: "q1-networking",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "networking"
      ],
      prerequisites: [
          "communication-protocols"
      ]
  },
  'mqtt': {
      id: "mqtt",
      title: "MQTT",
      icon: "settings",
      description: "Master the concepts and practical applications of MQTT in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "6 hours",
      whyLearnThis: "MQTT is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of MQTT",
          "Implement MQTT in real-world scenarios",
          "Debug and troubleshoot MQTT systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-mqtt",
                  title: "MQTT Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to MQTT.",
                  url: "#"
              },
              {
                  id: "v2-mqtt",
                  title: "Advanced MQTT Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of MQTT.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-mqtt",
                  title: "The Definitive Guide to MQTT",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about MQTT.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-mqtt",
                  title: "Official MQTT Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-mqtt",
                  title: "MQTT Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice MQTT in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-mqtt",
                  title: "Basic MQTT Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first MQTT setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-mqtt",
                  title: "MQTT Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing MQTT.",
                  requiredSkills: [
                      "mqtt"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-mqtt",
                  question: "Can you explain the core concepts of MQTT?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with MQTT."
              }
          ],
          quiz: {
              id: "q1-mqtt",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "mqtt"
      ],
      prerequisites: [
          "networking"
      ]
  },
  'http': {
      id: "http",
      title: "HTTP",
      icon: "gauge",
      description: "Master the concepts and practical applications of HTTP in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "11 hours",
      whyLearnThis: "HTTP is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of HTTP",
          "Implement HTTP in real-world scenarios",
          "Debug and troubleshoot HTTP systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-http",
                  title: "HTTP Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to HTTP.",
                  url: "#"
              },
              {
                  id: "v2-http",
                  title: "Advanced HTTP Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of HTTP.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-http",
                  title: "The Definitive Guide to HTTP",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about HTTP.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-http",
                  title: "Official HTTP Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-http",
                  title: "HTTP Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice HTTP in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-http",
                  title: "Basic HTTP Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first HTTP setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-http",
                  title: "HTTP Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing HTTP.",
                  requiredSkills: [
                      "http"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-http",
                  question: "Can you explain the core concepts of HTTP?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with HTTP."
              }
          ],
          quiz: {
              id: "q1-http",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "http"
      ],
      prerequisites: [
          "mqtt"
      ]
  },
  'wi-fi': {
      id: "wi-fi",
      title: "Wi-Fi",
      icon: "settings",
      description: "Master the concepts and practical applications of Wi-Fi in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "3 hours",
      whyLearnThis: "Wi-Fi is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Wi-Fi",
          "Implement Wi-Fi in real-world scenarios",
          "Debug and troubleshoot Wi-Fi systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-wi-fi",
                  title: "Wi-Fi Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Wi-Fi.",
                  url: "#"
              },
              {
                  id: "v2-wi-fi",
                  title: "Advanced Wi-Fi Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Wi-Fi.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-wi-fi",
                  title: "The Definitive Guide to Wi-Fi",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Wi-Fi.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-wi-fi",
                  title: "Official Wi-Fi Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-wi-fi",
                  title: "Wi-Fi Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Wi-Fi in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-wi-fi",
                  title: "Basic Wi-Fi Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Wi-Fi setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-wi-fi",
                  title: "Wi-Fi Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Wi-Fi.",
                  requiredSkills: [
                      "wi-fi"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-wi-fi",
                  question: "Can you explain the core concepts of Wi-Fi?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Wi-Fi."
              }
          ],
          quiz: {
              id: "q1-wi-fi",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "wi-fi"
      ],
      prerequisites: [
          "http"
      ]
  },
  'ble': {
      id: "ble",
      title: "BLE",
      icon: "code",
      description: "Master the concepts and practical applications of BLE in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "5 hours",
      whyLearnThis: "BLE is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of BLE",
          "Implement BLE in real-world scenarios",
          "Debug and troubleshoot BLE systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-ble",
                  title: "BLE Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to BLE.",
                  url: "#"
              },
              {
                  id: "v2-ble",
                  title: "Advanced BLE Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of BLE.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-ble",
                  title: "The Definitive Guide to BLE",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about BLE.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-ble",
                  title: "Official BLE Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-ble",
                  title: "BLE Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice BLE in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-ble",
                  title: "Basic BLE Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first BLE setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-ble",
                  title: "BLE Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing BLE.",
                  requiredSkills: [
                      "ble"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-ble",
                  question: "Can you explain the core concepts of BLE?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with BLE."
              }
          ],
          quiz: {
              id: "q1-ble",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "ble"
      ],
      prerequisites: [
          "wi-fi"
      ]
  },
  'lora': {
      id: "lora",
      title: "LoRa",
      icon: "zap",
      description: "Master the concepts and practical applications of LoRa in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "11 hours",
      whyLearnThis: "LoRa is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of LoRa",
          "Implement LoRa in real-world scenarios",
          "Debug and troubleshoot LoRa systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-lora",
                  title: "LoRa Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to LoRa.",
                  url: "#"
              },
              {
                  id: "v2-lora",
                  title: "Advanced LoRa Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of LoRa.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-lora",
                  title: "The Definitive Guide to LoRa",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about LoRa.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-lora",
                  title: "Official LoRa Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-lora",
                  title: "LoRa Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice LoRa in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-lora",
                  title: "Basic LoRa Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first LoRa setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-lora",
                  title: "LoRa Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing LoRa.",
                  requiredSkills: [
                      "lora"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-lora",
                  question: "Can you explain the core concepts of LoRa?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with LoRa."
              }
          ],
          quiz: {
              id: "q1-lora",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "lora"
      ],
      prerequisites: [
          "ble"
      ]
  },
  'cloud-iot': {
      id: "cloud-iot",
      title: "Cloud IoT",
      icon: "cpu",
      description: "Master the concepts and practical applications of Cloud IoT in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "10 hours",
      whyLearnThis: "Cloud IoT is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Cloud IoT",
          "Implement Cloud IoT in real-world scenarios",
          "Debug and troubleshoot Cloud IoT systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-cloud-iot",
                  title: "Cloud IoT Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Cloud IoT.",
                  url: "#"
              },
              {
                  id: "v2-cloud-iot",
                  title: "Advanced Cloud IoT Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Cloud IoT.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-cloud-iot",
                  title: "The Definitive Guide to Cloud IoT",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Cloud IoT.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-cloud-iot",
                  title: "Official Cloud IoT Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-cloud-iot",
                  title: "Cloud IoT Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Cloud IoT in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-cloud-iot",
                  title: "Basic Cloud IoT Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Cloud IoT setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-cloud-iot",
                  title: "Cloud IoT Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Cloud IoT.",
                  requiredSkills: [
                      "cloud-iot"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-cloud-iot",
                  question: "Can you explain the core concepts of Cloud IoT?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Cloud IoT."
              }
          ],
          quiz: {
              id: "q1-cloud-iot",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "cloud-iot"
      ],
      prerequisites: [
          "lora"
      ]
  },
  'aws-iot': {
      id: "aws-iot",
      title: "AWS IoT",
      icon: "code",
      description: "Master the concepts and practical applications of AWS IoT in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "6 hours",
      whyLearnThis: "AWS IoT is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of AWS IoT",
          "Implement AWS IoT in real-world scenarios",
          "Debug and troubleshoot AWS IoT systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-aws-iot",
                  title: "AWS IoT Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to AWS IoT.",
                  url: "#"
              },
              {
                  id: "v2-aws-iot",
                  title: "Advanced AWS IoT Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of AWS IoT.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-aws-iot",
                  title: "The Definitive Guide to AWS IoT",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about AWS IoT.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-aws-iot",
                  title: "Official AWS IoT Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-aws-iot",
                  title: "AWS IoT Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice AWS IoT in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-aws-iot",
                  title: "Basic AWS IoT Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first AWS IoT setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-aws-iot",
                  title: "AWS IoT Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing AWS IoT.",
                  requiredSkills: [
                      "aws-iot"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-aws-iot",
                  question: "Can you explain the core concepts of AWS IoT?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with AWS IoT."
              }
          ],
          quiz: {
              id: "q1-aws-iot",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "aws-iot"
      ],
      prerequisites: [
          "cloud-iot"
      ]
  },
  'azure-iot': {
      id: "azure-iot",
      title: "Azure IoT",
      icon: "gauge",
      description: "Master the concepts and practical applications of Azure IoT in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "5 hours",
      whyLearnThis: "Azure IoT is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Azure IoT",
          "Implement Azure IoT in real-world scenarios",
          "Debug and troubleshoot Azure IoT systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-azure-iot",
                  title: "Azure IoT Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Azure IoT.",
                  url: "#"
              },
              {
                  id: "v2-azure-iot",
                  title: "Advanced Azure IoT Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Azure IoT.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-azure-iot",
                  title: "The Definitive Guide to Azure IoT",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Azure IoT.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-azure-iot",
                  title: "Official Azure IoT Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-azure-iot",
                  title: "Azure IoT Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Azure IoT in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-azure-iot",
                  title: "Basic Azure IoT Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Azure IoT setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-azure-iot",
                  title: "Azure IoT Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Azure IoT.",
                  requiredSkills: [
                      "azure-iot"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-azure-iot",
                  question: "Can you explain the core concepts of Azure IoT?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Azure IoT."
              }
          ],
          quiz: {
              id: "q1-azure-iot",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "azure-iot"
      ],
      prerequisites: [
          "aws-iot"
      ]
  },
  'firebase': {
      id: "firebase",
      title: "Firebase",
      icon: "code",
      description: "Master the concepts and practical applications of Firebase in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "3 hours",
      whyLearnThis: "Firebase is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Firebase",
          "Implement Firebase in real-world scenarios",
          "Debug and troubleshoot Firebase systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-firebase",
                  title: "Firebase Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Firebase.",
                  url: "#"
              },
              {
                  id: "v2-firebase",
                  title: "Advanced Firebase Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Firebase.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-firebase",
                  title: "The Definitive Guide to Firebase",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Firebase.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-firebase",
                  title: "Official Firebase Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-firebase",
                  title: "Firebase Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Firebase in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-firebase",
                  title: "Basic Firebase Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Firebase setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-firebase",
                  title: "Firebase Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Firebase.",
                  requiredSkills: [
                      "firebase"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-firebase",
                  question: "Can you explain the core concepts of Firebase?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Firebase."
              }
          ],
          quiz: {
              id: "q1-firebase",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "firebase"
      ],
      prerequisites: [
          "azure-iot"
      ]
  },
  'edge-ai': {
      id: "edge-ai",
      title: "Edge AI",
      icon: "zap",
      description: "Master the concepts and practical applications of Edge AI in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "9 hours",
      whyLearnThis: "Edge AI is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Edge AI",
          "Implement Edge AI in real-world scenarios",
          "Debug and troubleshoot Edge AI systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-edge-ai",
                  title: "Edge AI Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Edge AI.",
                  url: "#"
              },
              {
                  id: "v2-edge-ai",
                  title: "Advanced Edge AI Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Edge AI.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-edge-ai",
                  title: "The Definitive Guide to Edge AI",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Edge AI.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-edge-ai",
                  title: "Official Edge AI Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-edge-ai",
                  title: "Edge AI Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Edge AI in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-edge-ai",
                  title: "Basic Edge AI Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Edge AI setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-edge-ai",
                  title: "Edge AI Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Edge AI.",
                  requiredSkills: [
                      "edge-ai"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-edge-ai",
                  question: "Can you explain the core concepts of Edge AI?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Edge AI."
              }
          ],
          quiz: {
              id: "q1-edge-ai",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "edge-ai"
      ],
      prerequisites: [
          "firebase",
          "yolo"
      ]
  },
  'iot-security': {
      id: "iot-security",
      title: "IoT Security",
      icon: "bot",
      description: "Master the concepts and practical applications of IoT Security in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "7 hours",
      whyLearnThis: "IoT Security is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of IoT Security",
          "Implement IoT Security in real-world scenarios",
          "Debug and troubleshoot IoT Security systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-iot-security",
                  title: "IoT Security Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to IoT Security.",
                  url: "#"
              },
              {
                  id: "v2-iot-security",
                  title: "Advanced IoT Security Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of IoT Security.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-iot-security",
                  title: "The Definitive Guide to IoT Security",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about IoT Security.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-iot-security",
                  title: "Official IoT Security Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-iot-security",
                  title: "IoT Security Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice IoT Security in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-iot-security",
                  title: "Basic IoT Security Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first IoT Security setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-iot-security",
                  title: "IoT Security Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing IoT Security.",
                  requiredSkills: [
                      "iot-security"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-iot-security",
                  question: "Can you explain the core concepts of IoT Security?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with IoT Security."
              }
          ],
          quiz: {
              id: "q1-iot-security",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "iot-security"
      ],
      prerequisites: [
          "edge-ai"
      ]
  },
  'motors': {
      id: "motors",
      title: "Motors",
      icon: "cloud",
      description: "Master the concepts and practical applications of Motors in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "8 hours",
      whyLearnThis: "Motors is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Motors",
          "Implement Motors in real-world scenarios",
          "Debug and troubleshoot Motors systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-motors",
                  title: "Motors Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Motors.",
                  url: "#"
              },
              {
                  id: "v2-motors",
                  title: "Advanced Motors Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Motors.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-motors",
                  title: "The Definitive Guide to Motors",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Motors.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-motors",
                  title: "Official Motors Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-motors",
                  title: "Motors Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Motors in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-motors",
                  title: "Basic Motors Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Motors setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-motors",
                  title: "Motors Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Motors.",
                  requiredSkills: [
                      "motors"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-motors",
                  question: "Can you explain the core concepts of Motors?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Motors."
              }
          ],
          quiz: {
              id: "q1-motors",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "motors"
      ],
      prerequisites: [
          "embedded-systems"
      ]
  },
  'sensors': {
      id: "sensors",
      title: "Sensors",
      icon: "cloud",
      description: "Master the concepts and practical applications of Sensors in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "11 hours",
      whyLearnThis: "Sensors is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Sensors",
          "Implement Sensors in real-world scenarios",
          "Debug and troubleshoot Sensors systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-sensors",
                  title: "Sensors Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Sensors.",
                  url: "#"
              },
              {
                  id: "v2-sensors",
                  title: "Advanced Sensors Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Sensors.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-sensors",
                  title: "The Definitive Guide to Sensors",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Sensors.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-sensors",
                  title: "Official Sensors Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-sensors",
                  title: "Sensors Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Sensors in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-sensors",
                  title: "Basic Sensors Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Sensors setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-sensors",
                  title: "Sensors Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Sensors.",
                  requiredSkills: [
                      "sensors"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-sensors",
                  question: "Can you explain the core concepts of Sensors?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Sensors."
              }
          ],
          quiz: {
              id: "q1-sensors",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "sensors"
      ],
      prerequisites: [
          "motors"
      ]
  },
  'actuators': {
      id: "actuators",
      title: "Actuators",
      icon: "microchip",
      description: "Master the concepts and practical applications of Actuators in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "3 hours",
      whyLearnThis: "Actuators is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Actuators",
          "Implement Actuators in real-world scenarios",
          "Debug and troubleshoot Actuators systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-actuators",
                  title: "Actuators Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Actuators.",
                  url: "#"
              },
              {
                  id: "v2-actuators",
                  title: "Advanced Actuators Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Actuators.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-actuators",
                  title: "The Definitive Guide to Actuators",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Actuators.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-actuators",
                  title: "Official Actuators Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-actuators",
                  title: "Actuators Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Actuators in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-actuators",
                  title: "Basic Actuators Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Actuators setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-actuators",
                  title: "Actuators Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Actuators.",
                  requiredSkills: [
                      "actuators"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-actuators",
                  question: "Can you explain the core concepts of Actuators?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Actuators."
              }
          ],
          quiz: {
              id: "q1-actuators",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "actuators"
      ],
      prerequisites: [
          "sensors"
      ]
  },
  'kinematics': {
      id: "kinematics",
      title: "Kinematics",
      icon: "settings",
      description: "Master the concepts and practical applications of Kinematics in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "2 hours",
      whyLearnThis: "Kinematics is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Kinematics",
          "Implement Kinematics in real-world scenarios",
          "Debug and troubleshoot Kinematics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-kinematics",
                  title: "Kinematics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Kinematics.",
                  url: "#"
              },
              {
                  id: "v2-kinematics",
                  title: "Advanced Kinematics Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Kinematics.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-kinematics",
                  title: "The Definitive Guide to Kinematics",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Kinematics.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-kinematics",
                  title: "Official Kinematics Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-kinematics",
                  title: "Kinematics Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Kinematics in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-kinematics",
                  title: "Basic Kinematics Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Kinematics setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-kinematics",
                  title: "Kinematics Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Kinematics.",
                  requiredSkills: [
                      "kinematics"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-kinematics",
                  question: "Can you explain the core concepts of Kinematics?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Kinematics."
              }
          ],
          quiz: {
              id: "q1-kinematics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "kinematics"
      ],
      prerequisites: [
          "actuators"
      ]
  },
  'dynamics': {
      id: "dynamics",
      title: "Dynamics",
      icon: "microchip",
      description: "Master the concepts and practical applications of Dynamics in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "6 hours",
      whyLearnThis: "Dynamics is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Dynamics",
          "Implement Dynamics in real-world scenarios",
          "Debug and troubleshoot Dynamics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-dynamics",
                  title: "Dynamics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Dynamics.",
                  url: "#"
              },
              {
                  id: "v2-dynamics",
                  title: "Advanced Dynamics Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Dynamics.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-dynamics",
                  title: "The Definitive Guide to Dynamics",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Dynamics.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-dynamics",
                  title: "Official Dynamics Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-dynamics",
                  title: "Dynamics Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Dynamics in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-dynamics",
                  title: "Basic Dynamics Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Dynamics setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-dynamics",
                  title: "Dynamics Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Dynamics.",
                  requiredSkills: [
                      "dynamics"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-dynamics",
                  question: "Can you explain the core concepts of Dynamics?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Dynamics."
              }
          ],
          quiz: {
              id: "q1-dynamics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "dynamics"
      ],
      prerequisites: [
          "kinematics"
      ]
  },
  'control-systems': {
      id: "control-systems",
      title: "Control Systems",
      icon: "bot",
      description: "Master the concepts and practical applications of Control Systems in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "11 hours",
      whyLearnThis: "Control Systems is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Control Systems",
          "Implement Control Systems in real-world scenarios",
          "Debug and troubleshoot Control Systems systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-control-systems",
                  title: "Control Systems Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Control Systems.",
                  url: "#"
              },
              {
                  id: "v2-control-systems",
                  title: "Advanced Control Systems Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Control Systems.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-control-systems",
                  title: "The Definitive Guide to Control Systems",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Control Systems.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-control-systems",
                  title: "Official Control Systems Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-control-systems",
                  title: "Control Systems Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Control Systems in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-control-systems",
                  title: "Basic Control Systems Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Control Systems setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-control-systems",
                  title: "Control Systems Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Control Systems.",
                  requiredSkills: [
                      "control-systems"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-control-systems",
                  question: "Can you explain the core concepts of Control Systems?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Control Systems."
              }
          ],
          quiz: {
              id: "q1-control-systems",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "control-systems"
      ],
      prerequisites: [
          "dynamics"
      ]
  },
  'ros2': {
      id: "ros2",
      title: "ROS2",
      icon: "bot",
      description: "Master the concepts and practical applications of ROS2 in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "5 hours",
      whyLearnThis: "ROS2 is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of ROS2",
          "Implement ROS2 in real-world scenarios",
          "Debug and troubleshoot ROS2 systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-ros2",
                  title: "ROS2 Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to ROS2.",
                  url: "#"
              },
              {
                  id: "v2-ros2",
                  title: "Advanced ROS2 Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of ROS2.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-ros2",
                  title: "The Definitive Guide to ROS2",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about ROS2.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-ros2",
                  title: "Official ROS2 Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-ros2",
                  title: "ROS2 Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice ROS2 in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-ros2",
                  title: "Basic ROS2 Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first ROS2 setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-ros2",
                  title: "ROS2 Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing ROS2.",
                  requiredSkills: [
                      "ros2"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-ros2",
                  question: "Can you explain the core concepts of ROS2?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with ROS2."
              }
          ],
          quiz: {
              id: "q1-ros2",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "ros2"
      ],
      prerequisites: [
          "control-systems"
      ]
  },
  'gazebo': {
      id: "gazebo",
      title: "Gazebo",
      icon: "bot",
      description: "Master the concepts and practical applications of Gazebo in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "4 hours",
      whyLearnThis: "Gazebo is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Gazebo",
          "Implement Gazebo in real-world scenarios",
          "Debug and troubleshoot Gazebo systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-gazebo",
                  title: "Gazebo Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Gazebo.",
                  url: "#"
              },
              {
                  id: "v2-gazebo",
                  title: "Advanced Gazebo Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Gazebo.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-gazebo",
                  title: "The Definitive Guide to Gazebo",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Gazebo.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-gazebo",
                  title: "Official Gazebo Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-gazebo",
                  title: "Gazebo Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Gazebo in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-gazebo",
                  title: "Basic Gazebo Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Gazebo setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-gazebo",
                  title: "Gazebo Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Gazebo.",
                  requiredSkills: [
                      "gazebo"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-gazebo",
                  question: "Can you explain the core concepts of Gazebo?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Gazebo."
              }
          ],
          quiz: {
              id: "q1-gazebo",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "gazebo"
      ],
      prerequisites: [
          "ros2"
      ]
  },
  'slam': {
      id: "slam",
      title: "SLAM",
      icon: "code",
      description: "Master the concepts and practical applications of SLAM in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "10 hours",
      whyLearnThis: "SLAM is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of SLAM",
          "Implement SLAM in real-world scenarios",
          "Debug and troubleshoot SLAM systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-slam",
                  title: "SLAM Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to SLAM.",
                  url: "#"
              },
              {
                  id: "v2-slam",
                  title: "Advanced SLAM Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of SLAM.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-slam",
                  title: "The Definitive Guide to SLAM",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about SLAM.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-slam",
                  title: "Official SLAM Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-slam",
                  title: "SLAM Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice SLAM in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-slam",
                  title: "Basic SLAM Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first SLAM setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-slam",
                  title: "SLAM Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing SLAM.",
                  requiredSkills: [
                      "slam"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-slam",
                  question: "Can you explain the core concepts of SLAM?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with SLAM."
              }
          ],
          quiz: {
              id: "q1-slam",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "slam"
      ],
      prerequisites: [
          "gazebo"
      ]
  },
  'computer-vision': {
      id: "computer-vision",
      title: "Computer Vision",
      icon: "message-square",
      description: "Master the concepts and practical applications of Computer Vision in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "7 hours",
      whyLearnThis: "Computer Vision is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Computer Vision",
          "Implement Computer Vision in real-world scenarios",
          "Debug and troubleshoot Computer Vision systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-computer-vision",
                  title: "Computer Vision Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Computer Vision.",
                  url: "#"
              },
              {
                  id: "v2-computer-vision",
                  title: "Advanced Computer Vision Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Computer Vision.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-computer-vision",
                  title: "The Definitive Guide to Computer Vision",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Computer Vision.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-computer-vision",
                  title: "Official Computer Vision Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-computer-vision",
                  title: "Computer Vision Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Computer Vision in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-computer-vision",
                  title: "Basic Computer Vision Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Computer Vision setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-computer-vision",
                  title: "Computer Vision Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Computer Vision.",
                  requiredSkills: [
                      "computer-vision"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-computer-vision",
                  question: "Can you explain the core concepts of Computer Vision?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Computer Vision."
              }
          ],
          quiz: {
              id: "q1-computer-vision",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "computer-vision"
      ],
      prerequisites: [
          "slam"
      ]
  },
  'ai-for-robotics': {
      id: "ai-for-robotics",
      title: "AI for Robotics",
      icon: "message-square",
      description: "Master the concepts and practical applications of AI for Robotics in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "4 hours",
      whyLearnThis: "AI for Robotics is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of AI for Robotics",
          "Implement AI for Robotics in real-world scenarios",
          "Debug and troubleshoot AI for Robotics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-ai-for-robotics",
                  title: "AI for Robotics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to AI for Robotics.",
                  url: "#"
              },
              {
                  id: "v2-ai-for-robotics",
                  title: "Advanced AI for Robotics Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of AI for Robotics.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-ai-for-robotics",
                  title: "The Definitive Guide to AI for Robotics",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about AI for Robotics.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-ai-for-robotics",
                  title: "Official AI for Robotics Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-ai-for-robotics",
                  title: "AI for Robotics Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice AI for Robotics in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-ai-for-robotics",
                  title: "Basic AI for Robotics Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first AI for Robotics setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-ai-for-robotics",
                  title: "AI for Robotics Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing AI for Robotics.",
                  requiredSkills: [
                      "ai-for-robotics"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-ai-for-robotics",
                  question: "Can you explain the core concepts of AI for Robotics?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with AI for Robotics."
              }
          ],
          quiz: {
              id: "q1-ai-for-robotics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "ai-for-robotics"
      ],
      prerequisites: [
          "computer-vision"
      ]
  },
  'navigation': {
      id: "navigation",
      title: "Navigation",
      icon: "message-square",
      description: "Master the concepts and practical applications of Navigation in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "5 hours",
      whyLearnThis: "Navigation is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Navigation",
          "Implement Navigation in real-world scenarios",
          "Debug and troubleshoot Navigation systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-navigation",
                  title: "Navigation Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Navigation.",
                  url: "#"
              },
              {
                  id: "v2-navigation",
                  title: "Advanced Navigation Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Navigation.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-navigation",
                  title: "The Definitive Guide to Navigation",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Navigation.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-navigation",
                  title: "Official Navigation Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-navigation",
                  title: "Navigation Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Navigation in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-navigation",
                  title: "Basic Navigation Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Navigation setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-navigation",
                  title: "Navigation Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Navigation.",
                  requiredSkills: [
                      "navigation"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-navigation",
                  question: "Can you explain the core concepts of Navigation?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Navigation."
              }
          ],
          quiz: {
              id: "q1-navigation",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "navigation"
      ],
      prerequisites: [
          "ai-for-robotics"
      ]
  },
  'autonomous-systems': {
      id: "autonomous-systems",
      title: "Autonomous Systems",
      icon: "wifi",
      description: "Master the concepts and practical applications of Autonomous Systems in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "9 hours",
      whyLearnThis: "Autonomous Systems is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Autonomous Systems",
          "Implement Autonomous Systems in real-world scenarios",
          "Debug and troubleshoot Autonomous Systems systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-autonomous-systems",
                  title: "Autonomous Systems Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Autonomous Systems.",
                  url: "#"
              },
              {
                  id: "v2-autonomous-systems",
                  title: "Advanced Autonomous Systems Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Autonomous Systems.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-autonomous-systems",
                  title: "The Definitive Guide to Autonomous Systems",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Autonomous Systems.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-autonomous-systems",
                  title: "Official Autonomous Systems Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-autonomous-systems",
                  title: "Autonomous Systems Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Autonomous Systems in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-autonomous-systems",
                  title: "Basic Autonomous Systems Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Autonomous Systems setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-autonomous-systems",
                  title: "Autonomous Systems Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Autonomous Systems.",
                  requiredSkills: [
                      "autonomous-systems"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-autonomous-systems",
                  question: "Can you explain the core concepts of Autonomous Systems?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Autonomous Systems."
              }
          ],
          quiz: {
              id: "q1-autonomous-systems",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "autonomous-systems"
      ],
      prerequisites: [
          "navigation"
      ]
  },
  'industrial-electronics': {
      id: "industrial-electronics",
      title: "Industrial Electronics",
      icon: "zap",
      description: "Master the concepts and practical applications of Industrial Electronics in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "4 hours",
      whyLearnThis: "Industrial Electronics is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Industrial Electronics",
          "Implement Industrial Electronics in real-world scenarios",
          "Debug and troubleshoot Industrial Electronics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-industrial-electronics",
                  title: "Industrial Electronics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Industrial Electronics.",
                  url: "#"
              },
              {
                  id: "v2-industrial-electronics",
                  title: "Advanced Industrial Electronics Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Industrial Electronics.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-industrial-electronics",
                  title: "The Definitive Guide to Industrial Electronics",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Industrial Electronics.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-industrial-electronics",
                  title: "Official Industrial Electronics Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-industrial-electronics",
                  title: "Industrial Electronics Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Industrial Electronics in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-industrial-electronics",
                  title: "Basic Industrial Electronics Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Industrial Electronics setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-industrial-electronics",
                  title: "Industrial Electronics Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Industrial Electronics.",
                  requiredSkills: [
                      "industrial-electronics"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-industrial-electronics",
                  question: "Can you explain the core concepts of Industrial Electronics?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Industrial Electronics."
              }
          ],
          quiz: {
              id: "q1-industrial-electronics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "industrial-electronics"
      ]
  },
  'plc-programming': {
      id: "plc-programming",
      title: "PLC Programming",
      icon: "cloud",
      description: "Master the concepts and practical applications of PLC Programming in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "9 hours",
      whyLearnThis: "PLC Programming is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of PLC Programming",
          "Implement PLC Programming in real-world scenarios",
          "Debug and troubleshoot PLC Programming systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-plc-programming",
                  title: "PLC Programming Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to PLC Programming.",
                  url: "#"
              },
              {
                  id: "v2-plc-programming",
                  title: "Advanced PLC Programming Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of PLC Programming.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-plc-programming",
                  title: "The Definitive Guide to PLC Programming",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about PLC Programming.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-plc-programming",
                  title: "Official PLC Programming Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-plc-programming",
                  title: "PLC Programming Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice PLC Programming in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-plc-programming",
                  title: "Basic PLC Programming Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first PLC Programming setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-plc-programming",
                  title: "PLC Programming Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing PLC Programming.",
                  requiredSkills: [
                      "plc-programming"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-plc-programming",
                  question: "Can you explain the core concepts of PLC Programming?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with PLC Programming."
              }
          ],
          quiz: {
              id: "q1-plc-programming",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "plc-programming"
      ],
      prerequisites: [
          "industrial-electronics"
      ]
  },
  'ladder-logic': {
      id: "ladder-logic",
      title: "Ladder Logic",
      icon: "wifi",
      description: "Master the concepts and practical applications of Ladder Logic in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "3 hours",
      whyLearnThis: "Ladder Logic is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Ladder Logic",
          "Implement Ladder Logic in real-world scenarios",
          "Debug and troubleshoot Ladder Logic systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-ladder-logic",
                  title: "Ladder Logic Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Ladder Logic.",
                  url: "#"
              },
              {
                  id: "v2-ladder-logic",
                  title: "Advanced Ladder Logic Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Ladder Logic.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-ladder-logic",
                  title: "The Definitive Guide to Ladder Logic",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Ladder Logic.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-ladder-logic",
                  title: "Official Ladder Logic Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-ladder-logic",
                  title: "Ladder Logic Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Ladder Logic in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-ladder-logic",
                  title: "Basic Ladder Logic Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Ladder Logic setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-ladder-logic",
                  title: "Ladder Logic Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Ladder Logic.",
                  requiredSkills: [
                      "ladder-logic"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-ladder-logic",
                  question: "Can you explain the core concepts of Ladder Logic?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Ladder Logic."
              }
          ],
          quiz: {
              id: "q1-ladder-logic",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "ladder-logic"
      ],
      prerequisites: [
          "plc-programming"
      ]
  },
  'hmi': {
      id: "hmi",
      title: "HMI",
      icon: "cloud",
      description: "Master the concepts and practical applications of HMI in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "7 hours",
      whyLearnThis: "HMI is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of HMI",
          "Implement HMI in real-world scenarios",
          "Debug and troubleshoot HMI systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-hmi",
                  title: "HMI Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to HMI.",
                  url: "#"
              },
              {
                  id: "v2-hmi",
                  title: "Advanced HMI Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of HMI.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-hmi",
                  title: "The Definitive Guide to HMI",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about HMI.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-hmi",
                  title: "Official HMI Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-hmi",
                  title: "HMI Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice HMI in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-hmi",
                  title: "Basic HMI Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first HMI setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-hmi",
                  title: "HMI Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing HMI.",
                  requiredSkills: [
                      "hmi"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-hmi",
                  question: "Can you explain the core concepts of HMI?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with HMI."
              }
          ],
          quiz: {
              id: "q1-hmi",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "hmi"
      ],
      prerequisites: [
          "ladder-logic"
      ]
  },
  'scada': {
      id: "scada",
      title: "SCADA",
      icon: "cloud",
      description: "Master the concepts and practical applications of SCADA in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "2 hours",
      whyLearnThis: "SCADA is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of SCADA",
          "Implement SCADA in real-world scenarios",
          "Debug and troubleshoot SCADA systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-scada",
                  title: "SCADA Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to SCADA.",
                  url: "#"
              },
              {
                  id: "v2-scada",
                  title: "Advanced SCADA Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of SCADA.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-scada",
                  title: "The Definitive Guide to SCADA",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about SCADA.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-scada",
                  title: "Official SCADA Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-scada",
                  title: "SCADA Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice SCADA in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-scada",
                  title: "Basic SCADA Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first SCADA setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-scada",
                  title: "SCADA Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing SCADA.",
                  requiredSkills: [
                      "scada"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-scada",
                  question: "Can you explain the core concepts of SCADA?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with SCADA."
              }
          ],
          quiz: {
              id: "q1-scada",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "scada"
      ],
      prerequisites: [
          "hmi"
      ]
  },
  'vfd': {
      id: "vfd",
      title: "VFD",
      icon: "zap",
      description: "Master the concepts and practical applications of VFD in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "9 hours",
      whyLearnThis: "VFD is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of VFD",
          "Implement VFD in real-world scenarios",
          "Debug and troubleshoot VFD systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-vfd",
                  title: "VFD Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to VFD.",
                  url: "#"
              },
              {
                  id: "v2-vfd",
                  title: "Advanced VFD Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of VFD.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-vfd",
                  title: "The Definitive Guide to VFD",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about VFD.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-vfd",
                  title: "Official VFD Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-vfd",
                  title: "VFD Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice VFD in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-vfd",
                  title: "Basic VFD Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first VFD setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-vfd",
                  title: "VFD Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing VFD.",
                  requiredSkills: [
                      "vfd"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-vfd",
                  question: "Can you explain the core concepts of VFD?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with VFD."
              }
          ],
          quiz: {
              id: "q1-vfd",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "vfd"
      ],
      prerequisites: [
          "scada"
      ]
  },
  'industrial-sensors': {
      id: "industrial-sensors",
      title: "Industrial Sensors",
      icon: "code",
      description: "Master the concepts and practical applications of Industrial Sensors in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "5 hours",
      whyLearnThis: "Industrial Sensors is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Industrial Sensors",
          "Implement Industrial Sensors in real-world scenarios",
          "Debug and troubleshoot Industrial Sensors systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-industrial-sensors",
                  title: "Industrial Sensors Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Industrial Sensors.",
                  url: "#"
              },
              {
                  id: "v2-industrial-sensors",
                  title: "Advanced Industrial Sensors Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Industrial Sensors.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-industrial-sensors",
                  title: "The Definitive Guide to Industrial Sensors",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Industrial Sensors.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-industrial-sensors",
                  title: "Official Industrial Sensors Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-industrial-sensors",
                  title: "Industrial Sensors Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Industrial Sensors in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-industrial-sensors",
                  title: "Basic Industrial Sensors Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Industrial Sensors setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-industrial-sensors",
                  title: "Industrial Sensors Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Industrial Sensors.",
                  requiredSkills: [
                      "industrial-sensors"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-industrial-sensors",
                  question: "Can you explain the core concepts of Industrial Sensors?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Industrial Sensors."
              }
          ],
          quiz: {
              id: "q1-industrial-sensors",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "industrial-sensors"
      ],
      prerequisites: [
          "vfd"
      ]
  },
  'modbus': {
      id: "modbus",
      title: "Modbus",
      icon: "message-square",
      description: "Master the concepts and practical applications of Modbus in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "11 hours",
      whyLearnThis: "Modbus is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Modbus",
          "Implement Modbus in real-world scenarios",
          "Debug and troubleshoot Modbus systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-modbus",
                  title: "Modbus Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Modbus.",
                  url: "#"
              },
              {
                  id: "v2-modbus",
                  title: "Advanced Modbus Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Modbus.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-modbus",
                  title: "The Definitive Guide to Modbus",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Modbus.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-modbus",
                  title: "Official Modbus Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-modbus",
                  title: "Modbus Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Modbus in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-modbus",
                  title: "Basic Modbus Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Modbus setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-modbus",
                  title: "Modbus Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Modbus.",
                  requiredSkills: [
                      "modbus"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-modbus",
                  question: "Can you explain the core concepts of Modbus?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Modbus."
              }
          ],
          quiz: {
              id: "q1-modbus",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "modbus"
      ],
      prerequisites: [
          "industrial-sensors"
      ]
  },
  'opc-ua': {
      id: "opc-ua",
      title: "OPC-UA",
      icon: "cpu",
      description: "Master the concepts and practical applications of OPC-UA in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "2 hours",
      whyLearnThis: "OPC-UA is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of OPC-UA",
          "Implement OPC-UA in real-world scenarios",
          "Debug and troubleshoot OPC-UA systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-opc-ua",
                  title: "OPC-UA Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to OPC-UA.",
                  url: "#"
              },
              {
                  id: "v2-opc-ua",
                  title: "Advanced OPC-UA Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of OPC-UA.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-opc-ua",
                  title: "The Definitive Guide to OPC-UA",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about OPC-UA.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-opc-ua",
                  title: "Official OPC-UA Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-opc-ua",
                  title: "OPC-UA Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice OPC-UA in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-opc-ua",
                  title: "Basic OPC-UA Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first OPC-UA setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-opc-ua",
                  title: "OPC-UA Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing OPC-UA.",
                  requiredSkills: [
                      "opc-ua"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-opc-ua",
                  question: "Can you explain the core concepts of OPC-UA?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with OPC-UA."
              }
          ],
          quiz: {
              id: "q1-opc-ua",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "opc-ua"
      ],
      prerequisites: [
          "modbus"
      ]
  },
  'ethercat': {
      id: "ethercat",
      title: "EtherCAT",
      icon: "settings",
      description: "Master the concepts and practical applications of EtherCAT in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "5 hours",
      whyLearnThis: "EtherCAT is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of EtherCAT",
          "Implement EtherCAT in real-world scenarios",
          "Debug and troubleshoot EtherCAT systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-ethercat",
                  title: "EtherCAT Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to EtherCAT.",
                  url: "#"
              },
              {
                  id: "v2-ethercat",
                  title: "Advanced EtherCAT Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of EtherCAT.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-ethercat",
                  title: "The Definitive Guide to EtherCAT",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about EtherCAT.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-ethercat",
                  title: "Official EtherCAT Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-ethercat",
                  title: "EtherCAT Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice EtherCAT in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-ethercat",
                  title: "Basic EtherCAT Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first EtherCAT setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-ethercat",
                  title: "EtherCAT Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing EtherCAT.",
                  requiredSkills: [
                      "ethercat"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-ethercat",
                  question: "Can you explain the core concepts of EtherCAT?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with EtherCAT."
              }
          ],
          quiz: {
              id: "q1-ethercat",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "ethercat"
      ],
      prerequisites: [
          "opc-ua"
      ]
  },
  'industry-40': {
      id: "industry-40",
      title: "Industry 4.0",
      icon: "cloud",
      description: "Master the concepts and practical applications of Industry 4.0 in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "3 hours",
      whyLearnThis: "Industry 4.0 is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Industry 4.0",
          "Implement Industry 4.0 in real-world scenarios",
          "Debug and troubleshoot Industry 4.0 systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-industry-40",
                  title: "Industry 4.0 Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Industry 4.0.",
                  url: "#"
              },
              {
                  id: "v2-industry-40",
                  title: "Advanced Industry 4.0 Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Industry 4.0.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-industry-40",
                  title: "The Definitive Guide to Industry 4.0",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Industry 4.0.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-industry-40",
                  title: "Official Industry 4.0 Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-industry-40",
                  title: "Industry 4.0 Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Industry 4.0 in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-industry-40",
                  title: "Basic Industry 4.0 Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Industry 4.0 setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-industry-40",
                  title: "Industry 4.0 Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Industry 4.0.",
                  requiredSkills: [
                      "industry-40"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-industry-40",
                  question: "Can you explain the core concepts of Industry 4.0?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Industry 4.0."
              }
          ],
          quiz: {
              id: "q1-industry-40",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "industry-40"
      ],
      prerequisites: [
          "ethercat"
      ]
  },
  'circuit-design': {
      id: "circuit-design",
      title: "Circuit Design",
      icon: "cpu",
      description: "Master the concepts and practical applications of Circuit Design in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "6 hours",
      whyLearnThis: "Circuit Design is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Circuit Design",
          "Implement Circuit Design in real-world scenarios",
          "Debug and troubleshoot Circuit Design systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-circuit-design",
                  title: "Circuit Design Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Circuit Design.",
                  url: "#"
              },
              {
                  id: "v2-circuit-design",
                  title: "Advanced Circuit Design Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Circuit Design.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-circuit-design",
                  title: "The Definitive Guide to Circuit Design",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Circuit Design.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-circuit-design",
                  title: "Official Circuit Design Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-circuit-design",
                  title: "Circuit Design Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Circuit Design in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-circuit-design",
                  title: "Basic Circuit Design Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Circuit Design setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-circuit-design",
                  title: "Circuit Design Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Circuit Design.",
                  requiredSkills: [
                      "circuit-design"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-circuit-design",
                  question: "Can you explain the core concepts of Circuit Design?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Circuit Design."
              }
          ],
          quiz: {
              id: "q1-circuit-design",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "circuit-design"
      ]
  },
  'schematic-design': {
      id: "schematic-design",
      title: "Schematic Design",
      icon: "microchip",
      description: "Master the concepts and practical applications of Schematic Design in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "11 hours",
      whyLearnThis: "Schematic Design is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Schematic Design",
          "Implement Schematic Design in real-world scenarios",
          "Debug and troubleshoot Schematic Design systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-schematic-design",
                  title: "Schematic Design Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Schematic Design.",
                  url: "#"
              },
              {
                  id: "v2-schematic-design",
                  title: "Advanced Schematic Design Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Schematic Design.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-schematic-design",
                  title: "The Definitive Guide to Schematic Design",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Schematic Design.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-schematic-design",
                  title: "Official Schematic Design Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-schematic-design",
                  title: "Schematic Design Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Schematic Design in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-schematic-design",
                  title: "Basic Schematic Design Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Schematic Design setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-schematic-design",
                  title: "Schematic Design Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Schematic Design.",
                  requiredSkills: [
                      "schematic-design"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-schematic-design",
                  question: "Can you explain the core concepts of Schematic Design?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Schematic Design."
              }
          ],
          quiz: {
              id: "q1-schematic-design",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "schematic-design"
      ],
      prerequisites: [
          "circuit-design"
      ]
  },
  'kicad': {
      id: "kicad",
      title: "KiCad",
      icon: "cpu",
      description: "Master the concepts and practical applications of KiCad in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "3 hours",
      whyLearnThis: "KiCad is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of KiCad",
          "Implement KiCad in real-world scenarios",
          "Debug and troubleshoot KiCad systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-kicad",
                  title: "KiCad Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to KiCad.",
                  url: "#"
              },
              {
                  id: "v2-kicad",
                  title: "Advanced KiCad Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of KiCad.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-kicad",
                  title: "The Definitive Guide to KiCad",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about KiCad.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-kicad",
                  title: "Official KiCad Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-kicad",
                  title: "KiCad Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice KiCad in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-kicad",
                  title: "Basic KiCad Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first KiCad setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-kicad",
                  title: "KiCad Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing KiCad.",
                  requiredSkills: [
                      "kicad"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-kicad",
                  question: "Can you explain the core concepts of KiCad?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with KiCad."
              }
          ],
          quiz: {
              id: "q1-kicad",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "kicad"
      ],
      prerequisites: [
          "schematic-design"
      ]
  },
  'altium-designer': {
      id: "altium-designer",
      title: "Altium Designer",
      icon: "bot",
      description: "Master the concepts and practical applications of Altium Designer in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "10 hours",
      whyLearnThis: "Altium Designer is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Altium Designer",
          "Implement Altium Designer in real-world scenarios",
          "Debug and troubleshoot Altium Designer systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-altium-designer",
                  title: "Altium Designer Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Altium Designer.",
                  url: "#"
              },
              {
                  id: "v2-altium-designer",
                  title: "Advanced Altium Designer Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Altium Designer.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-altium-designer",
                  title: "The Definitive Guide to Altium Designer",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Altium Designer.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-altium-designer",
                  title: "Official Altium Designer Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-altium-designer",
                  title: "Altium Designer Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Altium Designer in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-altium-designer",
                  title: "Basic Altium Designer Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Altium Designer setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-altium-designer",
                  title: "Altium Designer Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Altium Designer.",
                  requiredSkills: [
                      "altium-designer"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-altium-designer",
                  question: "Can you explain the core concepts of Altium Designer?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Altium Designer."
              }
          ],
          quiz: {
              id: "q1-altium-designer",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "altium-designer"
      ],
      prerequisites: [
          "kicad"
      ]
  },
  'easyeda': {
      id: "easyeda",
      title: "EasyEDA",
      icon: "bot",
      description: "Master the concepts and practical applications of EasyEDA in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "8 hours",
      whyLearnThis: "EasyEDA is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of EasyEDA",
          "Implement EasyEDA in real-world scenarios",
          "Debug and troubleshoot EasyEDA systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-easyeda",
                  title: "EasyEDA Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to EasyEDA.",
                  url: "#"
              },
              {
                  id: "v2-easyeda",
                  title: "Advanced EasyEDA Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of EasyEDA.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-easyeda",
                  title: "The Definitive Guide to EasyEDA",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about EasyEDA.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-easyeda",
                  title: "Official EasyEDA Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-easyeda",
                  title: "EasyEDA Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice EasyEDA in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-easyeda",
                  title: "Basic EasyEDA Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first EasyEDA setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-easyeda",
                  title: "EasyEDA Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing EasyEDA.",
                  requiredSkills: [
                      "easyeda"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-easyeda",
                  question: "Can you explain the core concepts of EasyEDA?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with EasyEDA."
              }
          ],
          quiz: {
              id: "q1-easyeda",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "easyeda"
      ],
      prerequisites: [
          "altium-designer"
      ]
  },
  'pcb-rules': {
      id: "pcb-rules",
      title: "PCB Rules",
      icon: "settings",
      description: "Master the concepts and practical applications of PCB Rules in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "5 hours",
      whyLearnThis: "PCB Rules is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of PCB Rules",
          "Implement PCB Rules in real-world scenarios",
          "Debug and troubleshoot PCB Rules systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-pcb-rules",
                  title: "PCB Rules Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to PCB Rules.",
                  url: "#"
              },
              {
                  id: "v2-pcb-rules",
                  title: "Advanced PCB Rules Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of PCB Rules.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-pcb-rules",
                  title: "The Definitive Guide to PCB Rules",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about PCB Rules.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-pcb-rules",
                  title: "Official PCB Rules Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-pcb-rules",
                  title: "PCB Rules Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice PCB Rules in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-pcb-rules",
                  title: "Basic PCB Rules Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first PCB Rules setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-pcb-rules",
                  title: "PCB Rules Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing PCB Rules.",
                  requiredSkills: [
                      "pcb-rules"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-pcb-rules",
                  question: "Can you explain the core concepts of PCB Rules?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with PCB Rules."
              }
          ],
          quiz: {
              id: "q1-pcb-rules",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "pcb-rules"
      ],
      prerequisites: [
          "easyeda"
      ]
  },
  'pcb-layout': {
      id: "pcb-layout",
      title: "PCB Layout",
      icon: "message-square",
      description: "Master the concepts and practical applications of PCB Layout in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "6 hours",
      whyLearnThis: "PCB Layout is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of PCB Layout",
          "Implement PCB Layout in real-world scenarios",
          "Debug and troubleshoot PCB Layout systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-pcb-layout",
                  title: "PCB Layout Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to PCB Layout.",
                  url: "#"
              },
              {
                  id: "v2-pcb-layout",
                  title: "Advanced PCB Layout Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of PCB Layout.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-pcb-layout",
                  title: "The Definitive Guide to PCB Layout",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about PCB Layout.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-pcb-layout",
                  title: "Official PCB Layout Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-pcb-layout",
                  title: "PCB Layout Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice PCB Layout in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-pcb-layout",
                  title: "Basic PCB Layout Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first PCB Layout setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-pcb-layout",
                  title: "PCB Layout Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing PCB Layout.",
                  requiredSkills: [
                      "pcb-layout"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-pcb-layout",
                  question: "Can you explain the core concepts of PCB Layout?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with PCB Layout."
              }
          ],
          quiz: {
              id: "q1-pcb-layout",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "pcb-layout"
      ],
      prerequisites: [
          "pcb-rules"
      ]
  },
  'signal-integrity': {
      id: "signal-integrity",
      title: "Signal Integrity",
      icon: "cloud",
      description: "Master the concepts and practical applications of Signal Integrity in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "6 hours",
      whyLearnThis: "Signal Integrity is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Signal Integrity",
          "Implement Signal Integrity in real-world scenarios",
          "Debug and troubleshoot Signal Integrity systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-signal-integrity",
                  title: "Signal Integrity Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Signal Integrity.",
                  url: "#"
              },
              {
                  id: "v2-signal-integrity",
                  title: "Advanced Signal Integrity Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Signal Integrity.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-signal-integrity",
                  title: "The Definitive Guide to Signal Integrity",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Signal Integrity.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-signal-integrity",
                  title: "Official Signal Integrity Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-signal-integrity",
                  title: "Signal Integrity Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Signal Integrity in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-signal-integrity",
                  title: "Basic Signal Integrity Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Signal Integrity setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-signal-integrity",
                  title: "Signal Integrity Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Signal Integrity.",
                  requiredSkills: [
                      "signal-integrity"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-signal-integrity",
                  question: "Can you explain the core concepts of Signal Integrity?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Signal Integrity."
              }
          ],
          quiz: {
              id: "q1-signal-integrity",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "signal-integrity"
      ],
      prerequisites: [
          "pcb-layout"
      ]
  },
  'emi-emc': {
      id: "emi-emc",
      title: "EMI/EMC",
      icon: "bot",
      description: "Master the concepts and practical applications of EMI/EMC in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "5 hours",
      whyLearnThis: "EMI/EMC is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of EMI/EMC",
          "Implement EMI/EMC in real-world scenarios",
          "Debug and troubleshoot EMI/EMC systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-emi-emc",
                  title: "EMI/EMC Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to EMI/EMC.",
                  url: "#"
              },
              {
                  id: "v2-emi-emc",
                  title: "Advanced EMI/EMC Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of EMI/EMC.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-emi-emc",
                  title: "The Definitive Guide to EMI/EMC",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about EMI/EMC.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-emi-emc",
                  title: "Official EMI/EMC Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-emi-emc",
                  title: "EMI/EMC Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice EMI/EMC in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-emi-emc",
                  title: "Basic EMI/EMC Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first EMI/EMC setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-emi-emc",
                  title: "EMI/EMC Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing EMI/EMC.",
                  requiredSkills: [
                      "emi-emc"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-emi-emc",
                  question: "Can you explain the core concepts of EMI/EMC?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with EMI/EMC."
              }
          ],
          quiz: {
              id: "q1-emi-emc",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "emi-emc"
      ],
      prerequisites: [
          "signal-integrity"
      ]
  },
  'manufacturing': {
      id: "manufacturing",
      title: "Manufacturing",
      icon: "wifi",
      description: "Master the concepts and practical applications of Manufacturing in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "9 hours",
      whyLearnThis: "Manufacturing is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Manufacturing",
          "Implement Manufacturing in real-world scenarios",
          "Debug and troubleshoot Manufacturing systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-manufacturing",
                  title: "Manufacturing Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Manufacturing.",
                  url: "#"
              },
              {
                  id: "v2-manufacturing",
                  title: "Advanced Manufacturing Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Manufacturing.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-manufacturing",
                  title: "The Definitive Guide to Manufacturing",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Manufacturing.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-manufacturing",
                  title: "Official Manufacturing Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-manufacturing",
                  title: "Manufacturing Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Manufacturing in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-manufacturing",
                  title: "Basic Manufacturing Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Manufacturing setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-manufacturing",
                  title: "Manufacturing Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Manufacturing.",
                  requiredSkills: [
                      "manufacturing"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-manufacturing",
                  question: "Can you explain the core concepts of Manufacturing?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Manufacturing."
              }
          ],
          quiz: {
              id: "q1-manufacturing",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "manufacturing"
      ],
      prerequisites: [
          "emi-emc"
      ]
  },
  'assembly': {
      id: "assembly",
      title: "Assembly",
      icon: "code",
      description: "Master the concepts and practical applications of Assembly in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "8 hours",
      whyLearnThis: "Assembly is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Assembly",
          "Implement Assembly in real-world scenarios",
          "Debug and troubleshoot Assembly systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-assembly",
                  title: "Assembly Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Assembly.",
                  url: "#"
              },
              {
                  id: "v2-assembly",
                  title: "Advanced Assembly Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Assembly.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-assembly",
                  title: "The Definitive Guide to Assembly",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Assembly.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-assembly",
                  title: "Official Assembly Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-assembly",
                  title: "Assembly Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Assembly in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-assembly",
                  title: "Basic Assembly Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Assembly setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-assembly",
                  title: "Assembly Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Assembly.",
                  requiredSkills: [
                      "assembly"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-assembly",
                  question: "Can you explain the core concepts of Assembly?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Assembly."
              }
          ],
          quiz: {
              id: "q1-assembly",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "assembly"
      ],
      prerequisites: [
          "manufacturing"
      ]
  },
  'testing': {
      id: "testing",
      title: "Testing",
      icon: "code",
      description: "Master the concepts and practical applications of Testing in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "2 hours",
      whyLearnThis: "Testing is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Testing",
          "Implement Testing in real-world scenarios",
          "Debug and troubleshoot Testing systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-testing",
                  title: "Testing Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Testing.",
                  url: "#"
              },
              {
                  id: "v2-testing",
                  title: "Advanced Testing Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Testing.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-testing",
                  title: "The Definitive Guide to Testing",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Testing.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-testing",
                  title: "Official Testing Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-testing",
                  title: "Testing Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Testing in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-testing",
                  title: "Basic Testing Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Testing setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-testing",
                  title: "Testing Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Testing.",
                  requiredSkills: [
                      "testing"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-testing",
                  question: "Can you explain the core concepts of Testing?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Testing."
              }
          ],
          quiz: {
              id: "q1-testing",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "testing"
      ],
      prerequisites: [
          "assembly"
      ]
  },
  'digital-logic': {
      id: "digital-logic",
      title: "Digital Logic",
      icon: "settings",
      description: "Master the concepts and practical applications of Digital Logic in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "8 hours",
      whyLearnThis: "Digital Logic is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Digital Logic",
          "Implement Digital Logic in real-world scenarios",
          "Debug and troubleshoot Digital Logic systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-digital-logic",
                  title: "Digital Logic Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Digital Logic.",
                  url: "#"
              },
              {
                  id: "v2-digital-logic",
                  title: "Advanced Digital Logic Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Digital Logic.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-digital-logic",
                  title: "The Definitive Guide to Digital Logic",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Digital Logic.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-digital-logic",
                  title: "Official Digital Logic Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-digital-logic",
                  title: "Digital Logic Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Digital Logic in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-digital-logic",
                  title: "Basic Digital Logic Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Digital Logic setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-digital-logic",
                  title: "Digital Logic Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Digital Logic.",
                  requiredSkills: [
                      "digital-logic"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-digital-logic",
                  question: "Can you explain the core concepts of Digital Logic?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Digital Logic."
              }
          ],
          quiz: {
              id: "q1-digital-logic",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "digital-logic"
      ]
  },
  'cmos': {
      id: "cmos",
      title: "CMOS",
      icon: "message-square",
      description: "Master the concepts and practical applications of CMOS in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "9 hours",
      whyLearnThis: "CMOS is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of CMOS",
          "Implement CMOS in real-world scenarios",
          "Debug and troubleshoot CMOS systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-cmos",
                  title: "CMOS Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to CMOS.",
                  url: "#"
              },
              {
                  id: "v2-cmos",
                  title: "Advanced CMOS Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of CMOS.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-cmos",
                  title: "The Definitive Guide to CMOS",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about CMOS.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-cmos",
                  title: "Official CMOS Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-cmos",
                  title: "CMOS Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice CMOS in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-cmos",
                  title: "Basic CMOS Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first CMOS setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-cmos",
                  title: "CMOS Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing CMOS.",
                  requiredSkills: [
                      "cmos"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-cmos",
                  question: "Can you explain the core concepts of CMOS?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with CMOS."
              }
          ],
          quiz: {
              id: "q1-cmos",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "cmos"
      ],
      prerequisites: [
          "digital-logic"
      ]
  },
  'verilog': {
      id: "verilog",
      title: "Verilog",
      icon: "zap",
      description: "Master the concepts and practical applications of Verilog in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "7 hours",
      whyLearnThis: "Verilog is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Verilog",
          "Implement Verilog in real-world scenarios",
          "Debug and troubleshoot Verilog systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-verilog",
                  title: "Verilog Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Verilog.",
                  url: "#"
              },
              {
                  id: "v2-verilog",
                  title: "Advanced Verilog Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Verilog.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-verilog",
                  title: "The Definitive Guide to Verilog",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Verilog.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-verilog",
                  title: "Official Verilog Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-verilog",
                  title: "Verilog Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Verilog in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-verilog",
                  title: "Basic Verilog Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Verilog setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-verilog",
                  title: "Verilog Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Verilog.",
                  requiredSkills: [
                      "verilog"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-verilog",
                  question: "Can you explain the core concepts of Verilog?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Verilog."
              }
          ],
          quiz: {
              id: "q1-verilog",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "verilog"
      ],
      prerequisites: [
          "cmos"
      ]
  },
  'systemverilog': {
      id: "systemverilog",
      title: "SystemVerilog",
      icon: "message-square",
      description: "Master the concepts and practical applications of SystemVerilog in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "6 hours",
      whyLearnThis: "SystemVerilog is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of SystemVerilog",
          "Implement SystemVerilog in real-world scenarios",
          "Debug and troubleshoot SystemVerilog systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-systemverilog",
                  title: "SystemVerilog Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to SystemVerilog.",
                  url: "#"
              },
              {
                  id: "v2-systemverilog",
                  title: "Advanced SystemVerilog Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of SystemVerilog.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-systemverilog",
                  title: "The Definitive Guide to SystemVerilog",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about SystemVerilog.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-systemverilog",
                  title: "Official SystemVerilog Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-systemverilog",
                  title: "SystemVerilog Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice SystemVerilog in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-systemverilog",
                  title: "Basic SystemVerilog Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first SystemVerilog setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-systemverilog",
                  title: "SystemVerilog Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing SystemVerilog.",
                  requiredSkills: [
                      "systemverilog"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-systemverilog",
                  question: "Can you explain the core concepts of SystemVerilog?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with SystemVerilog."
              }
          ],
          quiz: {
              id: "q1-systemverilog",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "systemverilog"
      ],
      prerequisites: [
          "verilog"
      ]
  },
  'fpga-basics': {
      id: "fpga-basics",
      title: "FPGA Basics",
      icon: "microchip",
      description: "Master the concepts and practical applications of FPGA Basics in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "2 hours",
      whyLearnThis: "FPGA Basics is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of FPGA Basics",
          "Implement FPGA Basics in real-world scenarios",
          "Debug and troubleshoot FPGA Basics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-fpga-basics",
                  title: "FPGA Basics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to FPGA Basics.",
                  url: "#"
              },
              {
                  id: "v2-fpga-basics",
                  title: "Advanced FPGA Basics Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of FPGA Basics.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-fpga-basics",
                  title: "The Definitive Guide to FPGA Basics",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about FPGA Basics.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-fpga-basics",
                  title: "Official FPGA Basics Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-fpga-basics",
                  title: "FPGA Basics Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice FPGA Basics in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-fpga-basics",
                  title: "Basic FPGA Basics Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first FPGA Basics setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-fpga-basics",
                  title: "FPGA Basics Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing FPGA Basics.",
                  requiredSkills: [
                      "fpga-basics"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-fpga-basics",
                  question: "Can you explain the core concepts of FPGA Basics?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with FPGA Basics."
              }
          ],
          quiz: {
              id: "q1-fpga-basics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "fpga-basics"
      ],
      prerequisites: [
          "systemverilog"
      ]
  },
  'rtl-design': {
      id: "rtl-design",
      title: "RTL Design",
      icon: "gauge",
      description: "Master the concepts and practical applications of RTL Design in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "7 hours",
      whyLearnThis: "RTL Design is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of RTL Design",
          "Implement RTL Design in real-world scenarios",
          "Debug and troubleshoot RTL Design systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-rtl-design",
                  title: "RTL Design Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to RTL Design.",
                  url: "#"
              },
              {
                  id: "v2-rtl-design",
                  title: "Advanced RTL Design Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of RTL Design.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-rtl-design",
                  title: "The Definitive Guide to RTL Design",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about RTL Design.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-rtl-design",
                  title: "Official RTL Design Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-rtl-design",
                  title: "RTL Design Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice RTL Design in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-rtl-design",
                  title: "Basic RTL Design Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first RTL Design setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-rtl-design",
                  title: "RTL Design Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing RTL Design.",
                  requiredSkills: [
                      "rtl-design"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-rtl-design",
                  question: "Can you explain the core concepts of RTL Design?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with RTL Design."
              }
          ],
          quiz: {
              id: "q1-rtl-design",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "rtl-design"
      ],
      prerequisites: [
          "fpga-basics"
      ]
  },
  'asic-design-flow': {
      id: "asic-design-flow",
      title: "ASIC Design Flow",
      icon: "code",
      description: "Master the concepts and practical applications of ASIC Design Flow in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "2 hours",
      whyLearnThis: "ASIC Design Flow is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of ASIC Design Flow",
          "Implement ASIC Design Flow in real-world scenarios",
          "Debug and troubleshoot ASIC Design Flow systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-asic-design-flow",
                  title: "ASIC Design Flow Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to ASIC Design Flow.",
                  url: "#"
              },
              {
                  id: "v2-asic-design-flow",
                  title: "Advanced ASIC Design Flow Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of ASIC Design Flow.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-asic-design-flow",
                  title: "The Definitive Guide to ASIC Design Flow",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about ASIC Design Flow.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-asic-design-flow",
                  title: "Official ASIC Design Flow Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-asic-design-flow",
                  title: "ASIC Design Flow Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice ASIC Design Flow in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-asic-design-flow",
                  title: "Basic ASIC Design Flow Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first ASIC Design Flow setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-asic-design-flow",
                  title: "ASIC Design Flow Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing ASIC Design Flow.",
                  requiredSkills: [
                      "asic-design-flow"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-asic-design-flow",
                  question: "Can you explain the core concepts of ASIC Design Flow?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with ASIC Design Flow."
              }
          ],
          quiz: {
              id: "q1-asic-design-flow",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "asic-design-flow"
      ],
      prerequisites: [
          "rtl-design"
      ]
  },
  'static-timing-analysis': {
      id: "static-timing-analysis",
      title: "Static Timing Analysis",
      icon: "message-square",
      description: "Master the concepts and practical applications of Static Timing Analysis in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "9 hours",
      whyLearnThis: "Static Timing Analysis is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Static Timing Analysis",
          "Implement Static Timing Analysis in real-world scenarios",
          "Debug and troubleshoot Static Timing Analysis systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-static-timing-analysis",
                  title: "Static Timing Analysis Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Static Timing Analysis.",
                  url: "#"
              },
              {
                  id: "v2-static-timing-analysis",
                  title: "Advanced Static Timing Analysis Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Static Timing Analysis.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-static-timing-analysis",
                  title: "The Definitive Guide to Static Timing Analysis",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Static Timing Analysis.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-static-timing-analysis",
                  title: "Official Static Timing Analysis Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-static-timing-analysis",
                  title: "Static Timing Analysis Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Static Timing Analysis in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-static-timing-analysis",
                  title: "Basic Static Timing Analysis Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Static Timing Analysis setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-static-timing-analysis",
                  title: "Static Timing Analysis Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Static Timing Analysis.",
                  requiredSkills: [
                      "static-timing-analysis"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-static-timing-analysis",
                  question: "Can you explain the core concepts of Static Timing Analysis?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Static Timing Analysis."
              }
          ],
          quiz: {
              id: "q1-static-timing-analysis",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "static-timing-analysis"
      ],
      prerequisites: [
          "asic-design-flow"
      ]
  },
  'physical-design': {
      id: "physical-design",
      title: "Physical Design",
      icon: "code",
      description: "Master the concepts and practical applications of Physical Design in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "7 hours",
      whyLearnThis: "Physical Design is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Physical Design",
          "Implement Physical Design in real-world scenarios",
          "Debug and troubleshoot Physical Design systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-physical-design",
                  title: "Physical Design Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Physical Design.",
                  url: "#"
              },
              {
                  id: "v2-physical-design",
                  title: "Advanced Physical Design Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Physical Design.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-physical-design",
                  title: "The Definitive Guide to Physical Design",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Physical Design.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-physical-design",
                  title: "Official Physical Design Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-physical-design",
                  title: "Physical Design Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Physical Design in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-physical-design",
                  title: "Basic Physical Design Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Physical Design setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-physical-design",
                  title: "Physical Design Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Physical Design.",
                  requiredSkills: [
                      "physical-design"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-physical-design",
                  question: "Can you explain the core concepts of Physical Design?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Physical Design."
              }
          ],
          quiz: {
              id: "q1-physical-design",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "physical-design"
      ],
      prerequisites: [
          "static-timing-analysis"
      ]
  },
  'python': {
      id: "python",
      title: "Python",
      icon: "microchip",
      description: "Master the concepts and practical applications of Python in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "10 hours",
      whyLearnThis: "Python is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Python",
          "Implement Python in real-world scenarios",
          "Debug and troubleshoot Python systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-python",
                  title: "Python Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Python.",
                  url: "#"
              },
              {
                  id: "v2-python",
                  title: "Advanced Python Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Python.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-python",
                  title: "The Definitive Guide to Python",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Python.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-python",
                  title: "Official Python Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-python",
                  title: "Python Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Python in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-python",
                  title: "Basic Python Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Python setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-python",
                  title: "Python Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Python.",
                  requiredSkills: [
                      "python"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-python",
                  question: "Can you explain the core concepts of Python?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Python."
              }
          ],
          quiz: {
              id: "q1-python",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "python"
      ]
  },
  'opencv': {
      id: "opencv",
      title: "OpenCV",
      icon: "microchip",
      description: "Master the concepts and practical applications of OpenCV in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "6 hours",
      whyLearnThis: "OpenCV is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of OpenCV",
          "Implement OpenCV in real-world scenarios",
          "Debug and troubleshoot OpenCV systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-opencv",
                  title: "OpenCV Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to OpenCV.",
                  url: "#"
              },
              {
                  id: "v2-opencv",
                  title: "Advanced OpenCV Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of OpenCV.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-opencv",
                  title: "The Definitive Guide to OpenCV",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about OpenCV.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-opencv",
                  title: "Official OpenCV Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-opencv",
                  title: "OpenCV Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice OpenCV in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-opencv",
                  title: "Basic OpenCV Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first OpenCV setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-opencv",
                  title: "OpenCV Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing OpenCV.",
                  requiredSkills: [
                      "opencv"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-opencv",
                  question: "Can you explain the core concepts of OpenCV?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with OpenCV."
              }
          ],
          quiz: {
              id: "q1-opencv",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "opencv"
      ],
      prerequisites: [
          "python"
      ]
  },
  'image-processing': {
      id: "image-processing",
      title: "Image Processing",
      icon: "message-square",
      description: "Master the concepts and practical applications of Image Processing in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "8 hours",
      whyLearnThis: "Image Processing is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Image Processing",
          "Implement Image Processing in real-world scenarios",
          "Debug and troubleshoot Image Processing systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-image-processing",
                  title: "Image Processing Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Image Processing.",
                  url: "#"
              },
              {
                  id: "v2-image-processing",
                  title: "Advanced Image Processing Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Image Processing.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-image-processing",
                  title: "The Definitive Guide to Image Processing",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Image Processing.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-image-processing",
                  title: "Official Image Processing Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-image-processing",
                  title: "Image Processing Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Image Processing in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-image-processing",
                  title: "Basic Image Processing Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Image Processing setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-image-processing",
                  title: "Image Processing Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Image Processing.",
                  requiredSkills: [
                      "image-processing"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-image-processing",
                  question: "Can you explain the core concepts of Image Processing?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Image Processing."
              }
          ],
          quiz: {
              id: "q1-image-processing",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "image-processing"
      ],
      prerequisites: [
          "opencv"
      ]
  },
  'deep-learning': {
      id: "deep-learning",
      title: "Deep Learning",
      icon: "microchip",
      description: "Master the concepts and practical applications of Deep Learning in modern engineering.",
      difficulty: "Beginner",
      estimatedTime: "10 hours",
      whyLearnThis: "Deep Learning is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Deep Learning",
          "Implement Deep Learning in real-world scenarios",
          "Debug and troubleshoot Deep Learning systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-deep-learning",
                  title: "Deep Learning Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Deep Learning.",
                  url: "#"
              },
              {
                  id: "v2-deep-learning",
                  title: "Advanced Deep Learning Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Deep Learning.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-deep-learning",
                  title: "The Definitive Guide to Deep Learning",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Deep Learning.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-deep-learning",
                  title: "Official Deep Learning Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-deep-learning",
                  title: "Deep Learning Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Deep Learning in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-deep-learning",
                  title: "Basic Deep Learning Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Deep Learning setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-deep-learning",
                  title: "Deep Learning Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Deep Learning.",
                  requiredSkills: [
                      "deep-learning"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-deep-learning",
                  question: "Can you explain the core concepts of Deep Learning?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Deep Learning."
              }
          ],
          quiz: {
              id: "q1-deep-learning",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "engineering",
          "deep-learning"
      ],
      prerequisites: [
          "image-processing"
      ]
  },
  'yolo': {
      id: "yolo",
      title: "YOLO",
      icon: "wifi",
      description: "Master the concepts and practical applications of YOLO in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "2 hours",
      whyLearnThis: "YOLO is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of YOLO",
          "Implement YOLO in real-world scenarios",
          "Debug and troubleshoot YOLO systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-yolo",
                  title: "YOLO Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to YOLO.",
                  url: "#"
              },
              {
                  id: "v2-yolo",
                  title: "Advanced YOLO Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of YOLO.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-yolo",
                  title: "The Definitive Guide to YOLO",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about YOLO.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-yolo",
                  title: "Official YOLO Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-yolo",
                  title: "YOLO Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice YOLO in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-yolo",
                  title: "Basic YOLO Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first YOLO setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-yolo",
                  title: "YOLO Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing YOLO.",
                  requiredSkills: [
                      "yolo"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-yolo",
                  question: "Can you explain the core concepts of YOLO?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with YOLO."
              }
          ],
          quiz: {
              id: "q1-yolo",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "yolo"
      ],
      prerequisites: [
          "deep-learning"
      ]
  },
  'nvidia-jetson': {
      id: "nvidia-jetson",
      title: "NVIDIA Jetson",
      icon: "zap",
      description: "Master the concepts and practical applications of NVIDIA Jetson in modern engineering.",
      difficulty: "Advanced",
      estimatedTime: "7 hours",
      whyLearnThis: "NVIDIA Jetson is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of NVIDIA Jetson",
          "Implement NVIDIA Jetson in real-world scenarios",
          "Debug and troubleshoot NVIDIA Jetson systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-nvidia-jetson",
                  title: "NVIDIA Jetson Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to NVIDIA Jetson.",
                  url: "#"
              },
              {
                  id: "v2-nvidia-jetson",
                  title: "Advanced NVIDIA Jetson Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of NVIDIA Jetson.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-nvidia-jetson",
                  title: "The Definitive Guide to NVIDIA Jetson",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about NVIDIA Jetson.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-nvidia-jetson",
                  title: "Official NVIDIA Jetson Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-nvidia-jetson",
                  title: "NVIDIA Jetson Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice NVIDIA Jetson in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-nvidia-jetson",
                  title: "Basic NVIDIA Jetson Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first NVIDIA Jetson setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-nvidia-jetson",
                  title: "NVIDIA Jetson Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing NVIDIA Jetson.",
                  requiredSkills: [
                      "nvidia-jetson"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-nvidia-jetson",
                  question: "Can you explain the core concepts of NVIDIA Jetson?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with NVIDIA Jetson."
              }
          ],
          quiz: {
              id: "q1-nvidia-jetson",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "engineering",
          "nvidia-jetson"
      ],
      prerequisites: [
          "edge-ai"
      ]
  },
  'raspberry-pi-vision': {
      id: "raspberry-pi-vision",
      title: "Raspberry Pi Vision",
      icon: "wifi",
      description: "Master the concepts and practical applications of Raspberry Pi Vision in modern engineering.",
      difficulty: "Intermediate",
      estimatedTime: "10 hours",
      whyLearnThis: "Raspberry Pi Vision is a critical skill for building robust systems and advancing your engineering career.",
      learningOutcomes: [
          "Understand the fundamentals of Raspberry Pi Vision",
          "Implement Raspberry Pi Vision in real-world scenarios",
          "Debug and troubleshoot Raspberry Pi Vision systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-raspberry-pi-vision",
                  title: "Raspberry Pi Vision Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Raspberry Pi Vision.",
                  url: "#"
              },
              {
                  id: "v2-raspberry-pi-vision",
                  title: "Advanced Raspberry Pi Vision Techniques",
                  platform: "YouTube",
                  difficulty: "Advanced",
                  estimatedTime: "2 Hours",
                  description: "Deep dive into advanced concepts of Raspberry Pi Vision.",
                  url: "#"
              }
          ],
          books: [
              {
                  id: "b1-raspberry-pi-vision",
                  title: "The Definitive Guide to Raspberry Pi Vision",
                  author: "Engineering Experts",
                  difficulty: "Intermediate",
                  description: "An in-depth textbook covering everything about Raspberry Pi Vision.",
                  url: "#"
              }
          ],
          documentation: [
              {
                  id: "d1-raspberry-pi-vision",
                  title: "Official Raspberry Pi Vision Docs",
                  platform: "Web",
                  description: "The official reference documentation.",
                  url: "#"
              }
          ],
          simulations: [
              {
                  id: "s1-raspberry-pi-vision",
                  title: "Raspberry Pi Vision Interactive Simulator",
                  platform: "Web",
                  difficulty: "Beginner",
                  description: "Practice Raspberry Pi Vision in a safe sandbox environment.",
                  url: "#"
              }
          ],
          exercises: [
              {
                  id: "e1-raspberry-pi-vision",
                  title: "Basic Raspberry Pi Vision Implementation",
                  difficulty: "Beginner",
                  estimatedTime: "30 mins",
                  description: "Implement your first Raspberry Pi Vision setup.",
                  completed: false
              }
          ],
          projects: [
              {
                  id: "p1-raspberry-pi-vision",
                  title: "Raspberry Pi Vision Capstone",
                  difficulty: "Intermediate",
                  estimatedTime: "5 Hours",
                  description: "Build a complete system utilizing Raspberry Pi Vision.",
                  requiredSkills: [
                      "raspberry-pi-vision"
                  ]
              }
          ],
          interviewQuestions: [
              {
                  id: "i1-raspberry-pi-vision",
                  question: "Can you explain the core concepts of Raspberry Pi Vision?",
                  type: "Conceptual",
                  answer: "It involves understanding the primary mechanisms and standard practices associated with Raspberry Pi Vision."
              }
          ],
          quiz: {
              id: "q1-raspberry-pi-vision",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "engineering",
          "raspberry-pi-vision"
      ],
      prerequisites: [
          "nvidia-jetson"
      ]
  },

  'electrical-safety': {
      id: "electrical-safety",
      title: "Electrical Safety",
      icon: "cloud",
      description: "Master the concepts and practical applications of Electrical Safety in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "3 hours",
      whyLearnThis: "Electrical Safety is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Electrical Safety",
          "Implement Electrical Safety in real-world scenarios",
          "Troubleshoot Electrical Safety systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-electrical-safety",
                  title: "Electrical Safety Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Electrical Safety.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-electrical-safety",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "electrical-safety"
      ],
      prerequisites: [
          "basic-electrical-engineering"
      ]
  },
  'electrical-measurements': {
      id: "electrical-measurements",
      title: "Electrical Measurements",
      icon: "zap",
      description: "Master the concepts and practical applications of Electrical Measurements in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "9 hours",
      whyLearnThis: "Electrical Measurements is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Electrical Measurements",
          "Implement Electrical Measurements in real-world scenarios",
          "Troubleshoot Electrical Measurements systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-electrical-measurements",
                  title: "Electrical Measurements Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Electrical Measurements.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-electrical-measurements",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "electrical-measurements"
      ],
      prerequisites: [
          "electrical-safety"
      ]
  },
  'circuit-theory': {
      id: "circuit-theory",
      title: "Circuit Theory",
      icon: "message-square",
      description: "Master the concepts and practical applications of Circuit Theory in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "8 hours",
      whyLearnThis: "Circuit Theory is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Circuit Theory",
          "Implement Circuit Theory in real-world scenarios",
          "Troubleshoot Circuit Theory systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-circuit-theory",
                  title: "Circuit Theory Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Circuit Theory.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-circuit-theory",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "circuit-theory"
      ],
      prerequisites: [
          "electrical-measurements"
      ]
  },
  'control-systems-basics': {
      id: "control-systems-basics",
      title: "Control Systems Basics",
      icon: "settings",
      description: "Master the concepts and practical applications of Control Systems Basics in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "8 hours",
      whyLearnThis: "Control Systems Basics is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Control Systems Basics",
          "Implement Control Systems Basics in real-world scenarios",
          "Troubleshoot Control Systems Basics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-control-systems-basics",
                  title: "Control Systems Basics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Control Systems Basics.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-control-systems-basics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "control-systems-basics"
      ],
      prerequisites: [
          "circuit-theory"
      ]
  },
  'ac-dc-machines': {
      id: "ac-dc-machines",
      title: "AC & DC Machines",
      icon: "microchip",
      description: "Master the concepts and practical applications of AC & DC Machines in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "6 hours",
      whyLearnThis: "AC & DC Machines is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of AC & DC Machines",
          "Implement AC & DC Machines in real-world scenarios",
          "Troubleshoot AC & DC Machines systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-ac-dc-machines",
                  title: "AC & DC Machines Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to AC & DC Machines.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-ac-dc-machines",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "ac-dc-machines"
      ],
      prerequisites: [
          "control-systems-basics"
      ]
  },
  'transformers': {
      id: "transformers",
      title: "Transformers",
      icon: "settings",
      description: "Master the concepts and practical applications of Transformers in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "10 hours",
      whyLearnThis: "Transformers is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Transformers",
          "Implement Transformers in real-world scenarios",
          "Troubleshoot Transformers systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-transformers",
                  title: "Transformers Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Transformers.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-transformers",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "transformers"
      ],
      prerequisites: [
          "ac-dc-machines"
      ]
  },
  'power-systems-basics': {
      id: "power-systems-basics",
      title: "Power Systems Basics",
      icon: "settings",
      description: "Master the concepts and practical applications of Power Systems Basics in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "4 hours",
      whyLearnThis: "Power Systems Basics is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Power Systems Basics",
          "Implement Power Systems Basics in real-world scenarios",
          "Troubleshoot Power Systems Basics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-power-systems-basics",
                  title: "Power Systems Basics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Power Systems Basics.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-power-systems-basics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "power-systems-basics"
      ],
      prerequisites: [
          "transformers"
      ]
  },
  'three-phase-systems': {
      id: "three-phase-systems",
      title: "Three Phase Systems",
      icon: "wifi",
      description: "Master the concepts and practical applications of Three Phase Systems in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "4 hours",
      whyLearnThis: "Three Phase Systems is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Three Phase Systems",
          "Implement Three Phase Systems in real-world scenarios",
          "Troubleshoot Three Phase Systems systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-three-phase-systems",
                  title: "Three Phase Systems Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Three Phase Systems.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-three-phase-systems",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "three-phase-systems"
      ],
      prerequisites: [
          "power-systems-basics"
      ]
  },
  'industrial-wiring': {
      id: "industrial-wiring",
      title: "Industrial Wiring",
      icon: "cpu",
      description: "Master the concepts and practical applications of Industrial Wiring in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "10 hours",
      whyLearnThis: "Industrial Wiring is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Industrial Wiring",
          "Implement Industrial Wiring in real-world scenarios",
          "Troubleshoot Industrial Wiring systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-industrial-wiring",
                  title: "Industrial Wiring Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Industrial Wiring.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-industrial-wiring",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "industrial-wiring"
      ],
      prerequisites: [
          "three-phase-systems"
      ]
  },

  'proximity-sensors': {
      id: "proximity-sensors",
      title: "Proximity Sensors",
      icon: "settings",
      description: "Master the concepts and practical applications of Proximity Sensors in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "7 hours",
      whyLearnThis: "Proximity Sensors is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Proximity Sensors",
          "Implement Proximity Sensors in real-world scenarios",
          "Troubleshoot Proximity Sensors systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-proximity-sensors",
                  title: "Proximity Sensors Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Proximity Sensors.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-proximity-sensors",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "proximity-sensors"
      ],
      prerequisites: [
          "industrial-sensors"
      ]
  },
  'photoelectric-sensors': {
      id: "photoelectric-sensors",
      title: "Photoelectric Sensors",
      icon: "gauge",
      description: "Master the concepts and practical applications of Photoelectric Sensors in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "2 hours",
      whyLearnThis: "Photoelectric Sensors is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Photoelectric Sensors",
          "Implement Photoelectric Sensors in real-world scenarios",
          "Troubleshoot Photoelectric Sensors systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-photoelectric-sensors",
                  title: "Photoelectric Sensors Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Photoelectric Sensors.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-photoelectric-sensors",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "photoelectric-sensors"
      ],
      prerequisites: [
          "proximity-sensors"
      ]
  },
  'limit-switches': {
      id: "limit-switches",
      title: "Limit Switches",
      icon: "cpu",
      description: "Master the concepts and practical applications of Limit Switches in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "7 hours",
      whyLearnThis: "Limit Switches is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Limit Switches",
          "Implement Limit Switches in real-world scenarios",
          "Troubleshoot Limit Switches systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-limit-switches",
                  title: "Limit Switches Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Limit Switches.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-limit-switches",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "limit-switches"
      ],
      prerequisites: [
          "photoelectric-sensors"
      ]
  },
  'pressure-sensors': {
      id: "pressure-sensors",
      title: "Pressure Sensors",
      icon: "cpu",
      description: "Master the concepts and practical applications of Pressure Sensors in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "5 hours",
      whyLearnThis: "Pressure Sensors is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Pressure Sensors",
          "Implement Pressure Sensors in real-world scenarios",
          "Troubleshoot Pressure Sensors systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-pressure-sensors",
                  title: "Pressure Sensors Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Pressure Sensors.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-pressure-sensors",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "pressure-sensors"
      ],
      prerequisites: [
          "limit-switches"
      ]
  },
  'relays': {
      id: "relays",
      title: "Relays",
      icon: "wifi",
      description: "Master the concepts and practical applications of Relays in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "8 hours",
      whyLearnThis: "Relays is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Relays",
          "Implement Relays in real-world scenarios",
          "Troubleshoot Relays systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-relays",
                  title: "Relays Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Relays.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-relays",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "relays"
      ],
      prerequisites: [
          "pressure-sensors"
      ]
  },
  'contactors': {
      id: "contactors",
      title: "Contactors",
      icon: "zap",
      description: "Master the concepts and practical applications of Contactors in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "9 hours",
      whyLearnThis: "Contactors is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Contactors",
          "Implement Contactors in real-world scenarios",
          "Troubleshoot Contactors systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-contactors",
                  title: "Contactors Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Contactors.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-contactors",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "contactors"
      ],
      prerequisites: [
          "relays"
      ]
  },
  'mcbs-mccbs': {
      id: "mcbs-mccbs",
      title: "MCBs & MCCBs",
      icon: "code",
      description: "Master the concepts and practical applications of MCBs & MCCBs in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "4 hours",
      whyLearnThis: "MCBs & MCCBs is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of MCBs & MCCBs",
          "Implement MCBs & MCCBs in real-world scenarios",
          "Troubleshoot MCBs & MCCBs systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-mcbs-mccbs",
                  title: "MCBs & MCCBs Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to MCBs & MCCBs.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-mcbs-mccbs",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "mcbs-mccbs"
      ],
      prerequisites: [
          "contactors"
      ]
  },
  'overload-relays': {
      id: "overload-relays",
      title: "Overload Relays",
      icon: "message-square",
      description: "Master the concepts and practical applications of Overload Relays in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "5 hours",
      whyLearnThis: "Overload Relays is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Overload Relays",
          "Implement Overload Relays in real-world scenarios",
          "Troubleshoot Overload Relays systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-overload-relays",
                  title: "Overload Relays Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Overload Relays.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-overload-relays",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "overload-relays"
      ],
      prerequisites: [
          "mcbs-mccbs"
      ]
  },
  'control-panels': {
      id: "control-panels",
      title: "Control Panels",
      icon: "gauge",
      description: "Master the concepts and practical applications of Control Panels in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "11 hours",
      whyLearnThis: "Control Panels is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Control Panels",
          "Implement Control Panels in real-world scenarios",
          "Troubleshoot Control Panels systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-control-panels",
                  title: "Control Panels Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Control Panels.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-control-panels",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "control-panels"
      ],
      prerequisites: [
          "overload-relays"
      ]
  },
  'motor-protection': {
      id: "motor-protection",
      title: "Motor Protection",
      icon: "gauge",
      description: "Master the concepts and practical applications of Motor Protection in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "9 hours",
      whyLearnThis: "Motor Protection is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Motor Protection",
          "Implement Motor Protection in real-world scenarios",
          "Troubleshoot Motor Protection systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-motor-protection",
                  title: "Motor Protection Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Motor Protection.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-motor-protection",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "motor-protection"
      ],
      prerequisites: [
          "control-panels"
      ]
  },
  'plc-fundamentals': {
      id: "plc-fundamentals",
      title: "PLC Fundamentals",
      icon: "gauge",
      description: "Master the concepts and practical applications of PLC Fundamentals in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "6 hours",
      whyLearnThis: "PLC Fundamentals is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of PLC Fundamentals",
          "Implement PLC Fundamentals in real-world scenarios",
          "Troubleshoot PLC Fundamentals systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-plc-fundamentals",
                  title: "PLC Fundamentals Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to PLC Fundamentals.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-plc-fundamentals",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "plc-fundamentals"
      ],
      prerequisites: [
          "motor-protection"
      ]
  },
  'plc-hardware': {
      id: "plc-hardware",
      title: "PLC Hardware",
      icon: "gauge",
      description: "Master the concepts and practical applications of PLC Hardware in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "3 hours",
      whyLearnThis: "PLC Hardware is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of PLC Hardware",
          "Implement PLC Hardware in real-world scenarios",
          "Troubleshoot PLC Hardware systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-plc-hardware",
                  title: "PLC Hardware Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to PLC Hardware.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-plc-hardware",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "plc-hardware"
      ],
      prerequisites: [
          "plc-fundamentals"
      ]
  },
  'digital-inputs-outputs': {
      id: "digital-inputs-outputs",
      title: "Digital Inputs & Outputs",
      icon: "microchip",
      description: "Master the concepts and practical applications of Digital Inputs & Outputs in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "3 hours",
      whyLearnThis: "Digital Inputs & Outputs is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Digital Inputs & Outputs",
          "Implement Digital Inputs & Outputs in real-world scenarios",
          "Troubleshoot Digital Inputs & Outputs systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-digital-inputs-outputs",
                  title: "Digital Inputs & Outputs Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Digital Inputs & Outputs.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-digital-inputs-outputs",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "digital-inputs-outputs"
      ],
      prerequisites: [
          "plc-hardware"
      ]
  },
  'analog-inputs-outputs': {
      id: "analog-inputs-outputs",
      title: "Analog Inputs & Outputs",
      icon: "gauge",
      description: "Master the concepts and practical applications of Analog Inputs & Outputs in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "2 hours",
      whyLearnThis: "Analog Inputs & Outputs is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Analog Inputs & Outputs",
          "Implement Analog Inputs & Outputs in real-world scenarios",
          "Troubleshoot Analog Inputs & Outputs systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-analog-inputs-outputs",
                  title: "Analog Inputs & Outputs Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Analog Inputs & Outputs.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-analog-inputs-outputs",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "analog-inputs-outputs"
      ],
      prerequisites: [
          "digital-inputs-outputs"
      ]
  },

  'introduction-to-hmi': {
      id: "introduction-to-hmi",
      title: "Introduction to HMI",
      icon: "cloud",
      description: "Master the concepts and practical applications of Introduction to HMI in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "2 hours",
      whyLearnThis: "Introduction to HMI is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Introduction to HMI",
          "Implement Introduction to HMI in real-world scenarios",
          "Troubleshoot Introduction to HMI systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-introduction-to-hmi",
                  title: "Introduction to HMI Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Introduction to HMI.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-introduction-to-hmi",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "introduction-to-hmi"
      ],
      prerequisites: [
          "ladder-logic"
      ]
  },
  'screen-design': {
      id: "screen-design",
      title: "Screen Design",
      icon: "settings",
      description: "Master the concepts and practical applications of Screen Design in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "5 hours",
      whyLearnThis: "Screen Design is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Screen Design",
          "Implement Screen Design in real-world scenarios",
          "Troubleshoot Screen Design systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-screen-design",
                  title: "Screen Design Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Screen Design.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-screen-design",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "screen-design"
      ],
      prerequisites: [
          "introduction-to-hmi"
      ]
  },
  'buttons-indicators': {
      id: "buttons-indicators",
      title: "Buttons & Indicators",
      icon: "cpu",
      description: "Master the concepts and practical applications of Buttons & Indicators in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "7 hours",
      whyLearnThis: "Buttons & Indicators is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Buttons & Indicators",
          "Implement Buttons & Indicators in real-world scenarios",
          "Troubleshoot Buttons & Indicators systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-buttons-indicators",
                  title: "Buttons & Indicators Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Buttons & Indicators.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-buttons-indicators",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "buttons-indicators"
      ],
      prerequisites: [
          "screen-design"
      ]
  },
  'alarms-recipes': {
      id: "alarms-recipes",
      title: "Alarms & Recipes",
      icon: "settings",
      description: "Master the concepts and practical applications of Alarms & Recipes in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "3 hours",
      whyLearnThis: "Alarms & Recipes is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Alarms & Recipes",
          "Implement Alarms & Recipes in real-world scenarios",
          "Troubleshoot Alarms & Recipes systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-alarms-recipes",
                  title: "Alarms & Recipes Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Alarms & Recipes.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-alarms-recipes",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "alarms-recipes"
      ],
      prerequisites: [
          "buttons-indicators"
      ]
  },
  'scada-basics': {
      id: "scada-basics",
      title: "SCADA Basics",
      icon: "message-square",
      description: "Master the concepts and practical applications of SCADA Basics in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "9 hours",
      whyLearnThis: "SCADA Basics is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of SCADA Basics",
          "Implement SCADA Basics in real-world scenarios",
          "Troubleshoot SCADA Basics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-scada-basics",
                  title: "SCADA Basics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to SCADA Basics.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-scada-basics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "scada-basics"
      ],
      prerequisites: [
          "alarms-recipes"
      ]
  },
  'architecture': {
      id: "architecture",
      title: "Architecture",
      icon: "gauge",
      description: "Master the concepts and practical applications of Architecture in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "3 hours",
      whyLearnThis: "Architecture is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Architecture",
          "Implement Architecture in real-world scenarios",
          "Troubleshoot Architecture systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-architecture",
                  title: "Architecture Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Architecture.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-architecture",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "architecture"
      ],
      prerequisites: [
          "scada-basics"
      ]
  },
  'communication': {
      id: "communication",
      title: "Communication",
      icon: "code",
      description: "Master the concepts and practical applications of Communication in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "4 hours",
      whyLearnThis: "Communication is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Communication",
          "Implement Communication in real-world scenarios",
          "Troubleshoot Communication systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-communication",
                  title: "Communication Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Communication.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-communication",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "communication"
      ],
      prerequisites: [
          "architecture"
      ]
  },
  'tag-database': {
      id: "tag-database",
      title: "Tag Database",
      icon: "code",
      description: "Master the concepts and practical applications of Tag Database in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "3 hours",
      whyLearnThis: "Tag Database is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Tag Database",
          "Implement Tag Database in real-world scenarios",
          "Troubleshoot Tag Database systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-tag-database",
                  title: "Tag Database Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Tag Database.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-tag-database",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "tag-database"
      ],
      prerequisites: [
          "communication"
      ]
  },
  'rs232-rs485': {
      id: "rs232-rs485",
      title: "RS232 & RS485",
      icon: "code",
      description: "Master the concepts and practical applications of RS232 & RS485 in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "4 hours",
      whyLearnThis: "RS232 & RS485 is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of RS232 & RS485",
          "Implement RS232 & RS485 in real-world scenarios",
          "Troubleshoot RS232 & RS485 systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-rs232-rs485",
                  title: "RS232 & RS485 Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to RS232 & RS485.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-rs232-rs485",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "rs232-rs485"
      ],
      prerequisites: [
          "tag-database"
      ]
  },
  'modbus-rtu': {
      id: "modbus-rtu",
      title: "Modbus RTU",
      icon: "message-square",
      description: "Master the concepts and practical applications of Modbus RTU in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "4 hours",
      whyLearnThis: "Modbus RTU is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Modbus RTU",
          "Implement Modbus RTU in real-world scenarios",
          "Troubleshoot Modbus RTU systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-modbus-rtu",
                  title: "Modbus RTU Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Modbus RTU.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-modbus-rtu",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "modbus-rtu"
      ],
      prerequisites: [
          "rs232-rs485"
      ]
  },
  'modbus-tcp': {
      id: "modbus-tcp",
      title: "Modbus TCP",
      icon: "cloud",
      description: "Master the concepts and practical applications of Modbus TCP in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "2 hours",
      whyLearnThis: "Modbus TCP is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Modbus TCP",
          "Implement Modbus TCP in real-world scenarios",
          "Troubleshoot Modbus TCP systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-modbus-tcp",
                  title: "Modbus TCP Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Modbus TCP.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-modbus-tcp",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "modbus-tcp"
      ],
      prerequisites: [
          "modbus-rtu"
      ]
  },
  'profibus': {
      id: "profibus",
      title: "Profibus",
      icon: "zap",
      description: "Master the concepts and practical applications of Profibus in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "9 hours",
      whyLearnThis: "Profibus is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Profibus",
          "Implement Profibus in real-world scenarios",
          "Troubleshoot Profibus systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-profibus",
                  title: "Profibus Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Profibus.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-profibus",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "profibus"
      ],
      prerequisites: [
          "modbus-tcp"
      ]
  },
  'profinet': {
      id: "profinet",
      title: "Profinet",
      icon: "message-square",
      description: "Master the concepts and practical applications of Profinet in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "7 hours",
      whyLearnThis: "Profinet is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Profinet",
          "Implement Profinet in real-world scenarios",
          "Troubleshoot Profinet systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-profinet",
                  title: "Profinet Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Profinet.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-profinet",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "profinet"
      ],
      prerequisites: [
          "profibus"
      ]
  },
  'vfd-basics': {
      id: "vfd-basics",
      title: "VFD Basics",
      icon: "code",
      description: "Master the concepts and practical applications of VFD Basics in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "10 hours",
      whyLearnThis: "VFD Basics is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of VFD Basics",
          "Implement VFD Basics in real-world scenarios",
          "Troubleshoot VFD Basics systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-vfd-basics",
                  title: "VFD Basics Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to VFD Basics.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-vfd-basics",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "vfd-basics"
      ],
      prerequisites: [
          "profinet"
      ]
  },
  'motor-speed-control': {
      id: "motor-speed-control",
      title: "Motor Speed Control",
      icon: "bot",
      description: "Master the concepts and practical applications of Motor Speed Control in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "5 hours",
      whyLearnThis: "Motor Speed Control is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Motor Speed Control",
          "Implement Motor Speed Control in real-world scenarios",
          "Troubleshoot Motor Speed Control systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-motor-speed-control",
                  title: "Motor Speed Control Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Motor Speed Control.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-motor-speed-control",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "motor-speed-control"
      ],
      prerequisites: [
          "vfd-basics"
      ]
  },
  'parameter-configuration': {
      id: "parameter-configuration",
      title: "Parameter Configuration",
      icon: "zap",
      description: "Master the concepts and practical applications of Parameter Configuration in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "10 hours",
      whyLearnThis: "Parameter Configuration is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Parameter Configuration",
          "Implement Parameter Configuration in real-world scenarios",
          "Troubleshoot Parameter Configuration systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-parameter-configuration",
                  title: "Parameter Configuration Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Parameter Configuration.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-parameter-configuration",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "parameter-configuration"
      ],
      prerequisites: [
          "motor-speed-control"
      ]
  },
  'servo-motors': {
      id: "servo-motors",
      title: "Servo Motors",
      icon: "gauge",
      description: "Master the concepts and practical applications of Servo Motors in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "2 hours",
      whyLearnThis: "Servo Motors is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Servo Motors",
          "Implement Servo Motors in real-world scenarios",
          "Troubleshoot Servo Motors systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-servo-motors",
                  title: "Servo Motors Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Servo Motors.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-servo-motors",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "servo-motors"
      ],
      prerequisites: [
          "parameter-configuration"
      ]
  },
  'servo-drives': {
      id: "servo-drives",
      title: "Servo Drives",
      icon: "bot",
      description: "Master the concepts and practical applications of Servo Drives in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "5 hours",
      whyLearnThis: "Servo Drives is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Servo Drives",
          "Implement Servo Drives in real-world scenarios",
          "Troubleshoot Servo Drives systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-servo-drives",
                  title: "Servo Drives Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Servo Drives.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-servo-drives",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "servo-drives"
      ],
      prerequisites: [
          "servo-motors"
      ]
  },
  'motion-controllers': {
      id: "motion-controllers",
      title: "Motion Controllers",
      icon: "bot",
      description: "Master the concepts and practical applications of Motion Controllers in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "6 hours",
      whyLearnThis: "Motion Controllers is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Motion Controllers",
          "Implement Motion Controllers in real-world scenarios",
          "Troubleshoot Motion Controllers systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-motion-controllers",
                  title: "Motion Controllers Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Motion Controllers.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-motion-controllers",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "motion-controllers"
      ],
      prerequisites: [
          "servo-drives"
      ]
  },
  'industrial-iot': {
      id: "industrial-iot",
      title: "Industrial IoT",
      icon: "microchip",
      description: "Master the concepts and practical applications of Industrial IoT in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "6 hours",
      whyLearnThis: "Industrial IoT is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Industrial IoT",
          "Implement Industrial IoT in real-world scenarios",
          "Troubleshoot Industrial IoT systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-industrial-iot",
                  title: "Industrial IoT Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Industrial IoT.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-industrial-iot",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "industrial-iot"
      ],
      prerequisites: [
          "motion-controllers"
      ]
  },
  'smart-factory': {
      id: "smart-factory",
      title: "Smart Factory",
      icon: "bot",
      description: "Master the concepts and practical applications of Smart Factory in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "4 hours",
      whyLearnThis: "Smart Factory is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Smart Factory",
          "Implement Smart Factory in real-world scenarios",
          "Troubleshoot Smart Factory systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-smart-factory",
                  title: "Smart Factory Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Smart Factory.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-smart-factory",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "smart-factory"
      ],
      prerequisites: [
          "industrial-iot"
      ]
  },
  'digital-twin': {
      id: "digital-twin",
      title: "Digital Twin",
      icon: "bot",
      description: "Master the concepts and practical applications of Digital Twin in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "6 hours",
      whyLearnThis: "Digital Twin is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Digital Twin",
          "Implement Digital Twin in real-world scenarios",
          "Troubleshoot Digital Twin systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-digital-twin",
                  title: "Digital Twin Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Digital Twin.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-digital-twin",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "digital-twin"
      ],
      prerequisites: [
          "smart-factory"
      ]
  },
  'edge-computing': {
      id: "edge-computing",
      title: "Edge Computing",
      icon: "message-square",
      description: "Master the concepts and practical applications of Edge Computing in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "11 hours",
      whyLearnThis: "Edge Computing is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Edge Computing",
          "Implement Edge Computing in real-world scenarios",
          "Troubleshoot Edge Computing systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-edge-computing",
                  title: "Edge Computing Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Edge Computing.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-edge-computing",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "edge-computing"
      ],
      prerequisites: [
          "digital-twin"
      ]
  },
  'manufacturing-automation': {
      id: "manufacturing-automation",
      title: "Manufacturing Automation",
      icon: "bot",
      description: "Master the concepts and practical applications of Manufacturing Automation in industrial automation.",
      difficulty: "Beginner",
      estimatedTime: "5 hours",
      whyLearnThis: "Manufacturing Automation is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Manufacturing Automation",
          "Implement Manufacturing Automation in real-world scenarios",
          "Troubleshoot Manufacturing Automation systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-manufacturing-automation",
                  title: "Manufacturing Automation Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Manufacturing Automation.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-manufacturing-automation",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Beginner",
              completed: false
          }
      },
      tags: [
          "automation",
          "manufacturing-automation"
      ],
      prerequisites: [
          "edge-computing"
      ]
  },
  'power-plant-automation': {
      id: "power-plant-automation",
      title: "Power Plant Automation",
      icon: "gauge",
      description: "Master the concepts and practical applications of Power Plant Automation in industrial automation.",
      difficulty: "Intermediate",
      estimatedTime: "9 hours",
      whyLearnThis: "Power Plant Automation is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Power Plant Automation",
          "Implement Power Plant Automation in real-world scenarios",
          "Troubleshoot Power Plant Automation systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-power-plant-automation",
                  title: "Power Plant Automation Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Power Plant Automation.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-power-plant-automation",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Intermediate",
              completed: false
          }
      },
      tags: [
          "automation",
          "power-plant-automation"
      ],
      prerequisites: [
          "manufacturing-automation"
      ]
  },
  'automotive-automation': {
      id: "automotive-automation",
      title: "Automotive Automation",
      icon: "wifi",
      description: "Master the concepts and practical applications of Automotive Automation in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "3 hours",
      whyLearnThis: "Automotive Automation is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Automotive Automation",
          "Implement Automotive Automation in real-world scenarios",
          "Troubleshoot Automotive Automation systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-automotive-automation",
                  title: "Automotive Automation Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Automotive Automation.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-automotive-automation",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "automotive-automation"
      ],
      prerequisites: [
          "power-plant-automation"
      ]
  },
  'pharmaceutical-automation': {
      id: "pharmaceutical-automation",
      title: "Pharmaceutical Automation",
      icon: "microchip",
      description: "Master the concepts and practical applications of Pharmaceutical Automation in industrial automation.",
      difficulty: "Advanced",
      estimatedTime: "5 hours",
      whyLearnThis: "Pharmaceutical Automation is a critical skill for building robust automated systems.",
      learningOutcomes: [
          "Understand the fundamentals of Pharmaceutical Automation",
          "Implement Pharmaceutical Automation in real-world scenarios",
          "Troubleshoot Pharmaceutical Automation systems"
      ],
      resources: {
          videos: [
              {
                  id: "v1-pharmaceutical-automation",
                  title: "Pharmaceutical Automation Masterclass",
                  platform: "YouTube",
                  difficulty: "Beginner",
                  estimatedTime: "1 Hour",
                  description: "A comprehensive introduction to Pharmaceutical Automation.",
                  url: "#"
              }
          ],
          books: [],
          documentation: [],
          simulations: [],
          exercises: [],
          projects: [],
          interviewQuestions: [],
          quiz: {
              id: "q1-pharmaceutical-automation",
              questionCount: 5,
              passingScore: 80,
              difficulty: "Advanced",
              completed: false
          }
      },
      tags: [
          "automation",
          "pharmaceutical-automation"
      ],
      prerequisites: [
          "automotive-automation"
      ]
  },
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
