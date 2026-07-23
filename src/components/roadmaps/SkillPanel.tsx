import React, { useState } from 'react'
import { 
  X, CheckCircle, ExternalLink, BookOpen, Video, Code, FileText, Zap, 
  ChevronRight, Lock, ChevronDown, PlayCircle, Book, Lightbulb, PenTool,
  MessageSquare, Award, Clock
} from 'lucide-react'
import { Skill, SkillDifficulty, BaseResource, VideoResource, BookResource, DocResource, ArticleResource, SimulationResource, PracticeResource, ProjectResource, InterviewQuestion, QuizResource } from '@/types/skills'

interface SkillPanelProps {
  skill: Skill | null
  status: 'locked' | 'available' | 'in_progress' | 'completed' | 'mastered'
  isOpen: boolean
  onClose: () => void
  onStatusChange: (status: 'in_progress' | 'completed') => void
  onNavigateToSkill: (skillId: string) => void
  getSkillData: (id: string) => Skill | undefined
}

// Helper Sub-components for UI
const Section = ({ title, children, defaultOpen = true }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <section className="shrink-0 mb-6 border border-[#27272A] rounded-xl bg-[#121212] overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between bg-[#18181B] hover:bg-[#27272A] transition-colors"
      >
        <h3 className="font-display text-[14px] font-semibold text-white tracking-wide">{title}</h3>
        <ChevronDown className={`w-4 h-4 text-[#A1A1AA] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-5 border-t border-[#27272A]">
          {children}
        </div>
      )}
    </section>
  )
}

const DifficultyBadge = ({ difficulty }: { difficulty?: SkillDifficulty }) => {
  if (!difficulty) return null
  const colors = {
    Beginner: 'text-[#4ADE80] bg-[#4ADE80]/10 border-[#4ADE80]/20',
    Intermediate: 'text-[#FBBF24] bg-[#FBBF24]/10 border-[#FBBF24]/20',
    Advanced: 'text-[#F87171] bg-[#F87171]/10 border-[#F87171]/20',
  }
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border ${colors[difficulty]}`}>
      {difficulty}
    </span>
  )
}

interface PremiumCardProps {
  icon: React.ElementType
  title: string
  platform?: string
  difficulty?: SkillDifficulty
  time?: string
  description?: string
  url?: string
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void
}

const PremiumCard = ({ icon: Icon, title, platform, difficulty, time, description, url, onClick }: PremiumCardProps) => (
  <a 
    href={url} target="_blank" rel="noopener noreferrer" onClick={onClick}
    className="shrink-0 group flex flex-col gap-3 p-4 rounded-lg bg-[#1A1A1A] border border-[#27272A] hover:border-orange hover:shadow-[0_0_15px_rgba(255,107,0,0.15)] transition-all cursor-pointer"
  >
    <div className="flex justify-between items-start">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded bg-[#27272A] flex items-center justify-center group-hover:bg-orange/20 group-hover:text-orange transition-colors text-[#A1A1AA]">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[14px] text-white line-clamp-1">{title}</span>
          <span className="text-[12px] text-[#A1A1AA]">{platform}</span>
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-[#52525B] group-hover:text-orange transition-colors" />
    </div>
    <div className="flex items-center gap-2 mt-1">
      <DifficultyBadge difficulty={difficulty} />
      {time && <span className="flex items-center gap-1 text-[11px] font-mono text-[#A1A1AA]"><Clock className="w-3 h-3" /> {time}</span>}
    </div>
    {description && <p className="text-[13px] text-[#D4D4D8] line-clamp-2 mt-1 leading-relaxed">{description}</p>}
  </a>
)

export default function SkillPanel({
  skill,
  status,
  isOpen,
  onClose,
  onStatusChange,
  onNavigateToSkill,
  getSkillData
}: SkillPanelProps) {
  if (!skill) return null

  const isLocked = status === 'locked'
  const res = skill.resources

  // Helper to trace prerequisites
  const prereqChain = skill.prerequisites ? [...skill.prerequisites, skill.id] : [skill.id]

  return (
    <div
      className={`fixed top-[60px] right-0 h-[calc(100vh-60px)] w-full md:w-[480px] lg:w-[550px] bg-[#0A0E1A] border-l border-[#27272A] shadow-[-10px_0_40px_rgba(0,0,0,0.7)] transform transition-transform duration-300 ease-in-out z-[1000] flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* 1. Header (Sticky) */}
      <div className="flex-none p-6 border-b border-[#27272A] bg-[#0D0D0D]/95 backdrop-blur sticky top-0 z-10 flex flex-col gap-5">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-3xl font-bold text-white leading-tight">
              {skill.title}
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <DifficultyBadge difficulty={skill.difficulty} />
              <span className="flex items-center gap-1.5 font-mono text-[12px] text-[#A1A1AA]">
                <Clock className="w-3.5 h-3.5" /> {skill.estimatedTime}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A1A1AA] hover:text-white bg-[#1A1A1A] border border-[#27272A] transition-colors rounded-full hover:bg-[#27272A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable Workspace */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2 custom-scrollbar pb-32">
        
        {/* Overview */}
        <Section title="Overview" defaultOpen={true}>
          <p className="font-body text-[15px] text-[#D4D4D8] leading-relaxed mb-4">
            {skill.description}
          </p>
          {skill.whyLearnThis && (
            <div className="p-4 bg-[#1A1A1A] rounded-lg border border-[#27272A]">
              <h4 className="flex items-center gap-2 font-display text-[13px] font-semibold text-orange uppercase tracking-wider mb-2">
                <Lightbulb className="w-4 h-4" /> Why Learn This?
              </h4>
              <p className="font-body text-[14px] text-[#D4D4D8] leading-relaxed">
                {skill.whyLearnThis}
              </p>
            </div>
          )}
          {skill.careerPaths && (
            <div className="mt-4">
              <h4 className="font-display text-[12px] text-[#A1A1AA] uppercase tracking-wider mb-2">Used In</h4>
              <div className="flex flex-wrap gap-2">
                {skill.careerPaths.map(path => (
                  <span key={path} className="px-2.5 py-1 rounded-full bg-[#27272A] text-white text-[12px] font-medium flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-[#4ADE80]" /> {path}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Section>

        {/* Prerequisites Visual Flow */}
        {skill.prerequisites && skill.prerequisites.length > 0 && (
          <Section title="Prerequisites" defaultOpen={false}>
            <div className="flex flex-col gap-1">
              {prereqChain.map((id, index) => {
                const s = getSkillData(id) || (id === skill.id ? skill : null)
                if (!s) return null
                const isCurrent = id === skill.id
                return (
                  <div key={id} className="flex flex-col">
                    <button 
                      onClick={() => !isCurrent && onNavigateToSkill(id)}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                        isCurrent 
                          ? 'bg-orange/10 border-orange text-orange' 
                          : 'bg-[#18181B] border-[#27272A] hover:border-[#52525B] text-white'
                      }`}
                    >
                      <span className="font-body text-[14px] font-medium">{s.title}</span>
                      {!isCurrent && <ChevronRight className="w-4 h-4 opacity-50" />}
                    </button>
                    {index < prereqChain.length - 1 && (
                      <div className="h-6 ml-6 border-l-2 border-dashed border-[#3F3F46]" />
                    )}
                  </div>
                )
              })}
            </div>
          </Section>
        )}

        {/* Learning Outcomes */}
        {skill.learningOutcomes && skill.learningOutcomes.length > 0 && (
          <Section title="Learning Outcomes" defaultOpen={false}>
            <ul className="space-y-3">
              {skill.learningOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[14px] text-[#D4D4D8] font-body">
                  <CheckCircle className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Recommended Learning Flow */}
        <Section title="Recommended Learning Flow" defaultOpen={true}>
          <div className="flex flex-col gap-4 relative">
            <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-[#27272A]" />
            {[
              { label: 'Learn the theory', icon: BookOpen, hasData: !!res?.blogs || !!skill.theory },
              { label: 'Watch video courses', icon: Video, hasData: !!res?.videos },
              { label: 'Read documentation', icon: FileText, hasData: !!res?.documentation },
              { label: 'Try interactive simulations', icon: PlayCircle, hasData: !!res?.simulations },
              { label: 'Complete practice exercises', icon: Code, hasData: !!res?.exercises },
              { label: 'Build a mini project', icon: PenTool, hasData: !!res?.projects },
              { label: 'Review interview questions', icon: MessageSquare, hasData: !!res?.interviewQuestions },
              { label: 'Take the quiz', icon: Award, hasData: !!res?.quiz }
            ].map((step, i) => (
              <div key={i} className={`flex items-center gap-4 relative z-10 ${step.hasData ? 'opacity-100' : 'opacity-40 grayscale'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.hasData ? 'bg-orange text-black shadow-[0_0_10px_rgba(255,107,0,0.3)]' : 'bg-[#27272A] text-[#52525B]'}`}>
                  <step.icon className="w-4 h-4" />
                </div>
                <span className="font-medium text-[14px] text-white">{step.label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Resource Cards */}
        {res?.videos && res.videos.length > 0 && (
          <Section title="📺 Video Courses">
            <div className="flex flex-col gap-3">
              {res.videos.map(v => <PremiumCard key={v.id} icon={Video} {...v} />)}
            </div>
          </Section>
        )}

        {res?.books && res.books.length > 0 && (
          <Section title="📘 Books">
            <div className="flex flex-col gap-3">
              {res.books.map(b => <PremiumCard key={b.id} icon={Book} platform={b.author} {...b} />)}
            </div>
          </Section>
        )}

        {res?.documentation && res.documentation.length > 0 && (
          <Section title="🌐 Official Documentation">
            <div className="flex flex-col gap-3">
              {res.documentation.map(d => <PremiumCard key={d.id} icon={FileText} {...d} />)}
            </div>
          </Section>
        )}

        {res?.simulations && res.simulations.length > 0 && (
          <Section title="🧪 Interactive Simulations">
            <div className="flex flex-col gap-3">
              {res.simulations.map(s => <PremiumCard key={s.id} icon={PlayCircle} {...s} />)}
            </div>
          </Section>
        )}

        {res?.exercises && res.exercises.length > 0 && (
          <Section title="💻 Practice Exercises">
            <div className="flex flex-col gap-3">
              {res.exercises.map(e => <PremiumCard key={e.id} icon={Code} {...e} onClick={(ev: React.MouseEvent<HTMLAnchorElement>) => { ev.preventDefault(); alert('Exercise IDE coming soon!') }} />)}
            </div>
          </Section>
        )}

        {res?.projects && res.projects.length > 0 && (
          <Section title="🚀 Mini Projects">
            <div className="flex flex-col gap-3">
              {res.projects.map(p => <PremiumCard key={p.id} icon={PenTool} platform={`Requires: ${p.requiredSkills?.join(', ')}`} {...p} />)}
            </div>
          </Section>
        )}

        {res?.interviewQuestions && res.interviewQuestions.length > 0 && (
          <Section title="🎙️ Interview Preparation">
            <div className="flex flex-col gap-3">
              {res.interviewQuestions.map(iq => (
                <div key={iq.id} className="p-4 bg-[#1A1A1A] border border-[#27272A] rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20">{iq.type}</span>
                  </div>
                  <h4 className="font-semibold text-[14px] text-white mb-2">{iq.question}</h4>
                  <p className="text-[13px] text-[#A1A1AA] italic leading-relaxed">{iq.answer}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Next Recommended Skills */}
        {skill.relatedSkills && skill.relatedSkills.length > 0 && (
          <div className="mt-4 mb-8">
            <h3 className="font-display text-[13px] font-semibold text-[#A1A1AA] uppercase tracking-widest mb-3">After completing {skill.title}, continue with:</h3>
            <div className="flex flex-wrap gap-2">
              {skill.relatedSkills.map(relId => {
                const relSkill = getSkillData(relId)
                if (!relSkill) return null
                return (
                  <button 
                    key={relId}
                    onClick={() => onNavigateToSkill(relId)}
                    className="px-4 py-2 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-orange text-white text-[13px] font-medium transition-colors"
                  >
                    {relSkill.title}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Action */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/95 to-transparent z-20">
        {!isLocked ? (
          <button
            onClick={() => onStatusChange(status === 'completed' ? 'in_progress' : 'completed')}
            className={`w-full py-4 rounded-xl font-body font-bold text-[15px] flex items-center justify-center gap-2 transition-all duration-300 ${
              status === 'completed' || status === 'mastered'
                ? 'bg-[#18181B] text-[#A1A1AA] border border-[#3F3F46] hover:bg-[#27272A]'
                : 'bg-orange hover:bg-[#FF9D5C] text-black shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] hover:scale-[1.02]'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            {status === 'completed' || status === 'mastered' ? 'Mark as Incomplete' : 'Mark Skill as Completed'}
          </button>
        ) : (
          <div className="w-full py-4 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-center gap-2 text-[#52525B] font-body text-[15px] cursor-not-allowed">
            <Lock className="w-5 h-5" /> Locked (Complete prerequisites first)
          </div>
        )}
      </div>

    </div>
  )
}
