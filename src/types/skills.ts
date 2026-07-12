export type SkillDifficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export interface BaseResource {
  id: string
  title: string
  difficulty?: SkillDifficulty
  estimatedTime?: string
  description?: string
  url?: string
}

export interface VideoResource extends BaseResource {
  thumbnail?: string
  author?: string
  platform?: string // e.g., YouTube, Udemy
}

export interface BookResource extends BaseResource {
  coverImage?: string
  author?: string
}

export interface DocResource extends BaseResource {
  platform?: string
}

export interface ArticleResource extends BaseResource {
  author?: string
}

export interface SimulationResource extends BaseResource {
  platform?: string
}

export interface PracticeResource extends BaseResource {
  completed?: boolean
}

export interface ProjectResource extends BaseResource {
  requiredSkills?: string[]
  projectPreviewImage?: string
}

export interface InterviewQuestion {
  id: string
  question: string
  answer?: string
  type: 'Conceptual' | 'Practical' | 'Coding'
}

export interface QuizResource {
  id: string
  questionCount: number
  passingScore: number
  difficulty: SkillDifficulty
  completed?: boolean
}

export interface SkillResources {
  videos?: VideoResource[]
  books?: BookResource[]
  documentation?: DocResource[]
  blogs?: ArticleResource[]
  simulations?: SimulationResource[]
  exercises?: PracticeResource[]
  projects?: ProjectResource[]
  interviewQuestions?: InterviewQuestion[]
  quiz?: QuizResource
}

export interface Skill {
  id: string
  title: string
  icon?: string
  description: string
  difficulty: SkillDifficulty
  estimatedTime: string // e.g., "4 hours"
  
  // Learning Content
  whyLearnThis?: string
  prerequisites?: string[] // array of skill IDs
  learningOutcomes?: string[]
  theory?: string
  
  // Structured Resources
  resources?: SkillResources
  
  // Metadata
  relatedSkills?: string[] // array of skill IDs
  careerPaths?: string[]
  tags?: string[]
  lastUpdated?: string
}

// Defines a Career Path (Roadmap) which is just a collection of connections
export interface CareerPathConnection {
  source: string // skill ID
  target: string // skill ID
}

export interface CareerPath {
  id: string
  title: string
  description: string
  skills: string[] // Array of skill IDs included in this path
  connections: CareerPathConnection[]
}
