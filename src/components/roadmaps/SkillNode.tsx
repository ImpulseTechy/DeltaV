import React from 'react'
import { Handle, Position, NodeProps, Node } from '@xyflow/react'
import { Check, Lock, Star, Clock, Zap, Code, Cpu, Wifi, MessageSquare, Cloud, BookOpen, AlertCircle } from 'lucide-react'
import { Skill } from '@/types/skills'

export type SkillProgressState = 'locked' | 'available' | 'in_progress' | 'completed' | 'mastered'

export type SkillNodeData = {
  skill: Skill
  status: SkillProgressState
  isHighlighted?: boolean
  isDimmed?: boolean
  isPathHovered?: boolean
}

const iconMap: Record<string, React.ReactNode> = {
  'zap': <Zap className="w-4 h-4" />,
  'code': <Code className="w-4 h-4" />,
  'cpu': <Cpu className="w-4 h-4" />,
  'microchip': <Cpu className="w-4 h-4" />, // Fallback to Cpu
  'wifi': <Wifi className="w-4 h-4" />,
  'message-square': <MessageSquare className="w-4 h-4" />,
  'cloud': <Cloud className="w-4 h-4" />,
  'book': <BookOpen className="w-4 h-4" />,
}

export default function SkillNode({ data, selected }: NodeProps<Node<SkillNodeData>>) {
  const { skill, status, isHighlighted, isDimmed, isPathHovered } = data

  // Base styling for the sleek pill/compact card
  let baseClasses = 'relative flex items-center gap-3 rounded-full px-5 py-3 font-body text-[14px] font-medium w-auto min-w-[200px] cursor-pointer transition-all duration-300 border border-solid bg-[#121212] text-white '

  // Status-based styling
  let statusIcon = null
  let statusColor = ''

  switch (status) {
    case 'locked':
      baseClasses += 'border-[#3F3F46] opacity-60 grayscale '
      statusIcon = <Lock className="w-3.5 h-3.5 text-[#A1A1AA]" />
      statusColor = 'bg-[#27272A]'
      break
    case 'available':
      baseClasses += 'border-[#52525B] hover:border-white '
      break
    case 'in_progress':
      baseClasses += 'border-[#EAB308] shadow-[0_0_15px_rgba(234,179,8,0.2)] '
      statusIcon = <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308] animate-pulse" />
      statusColor = 'bg-[#EAB308]/20'
      break
    case 'completed':
      baseClasses += 'border-[#8B5CF6] '
      statusIcon = <Check className="w-3.5 h-3.5 text-white" />
      statusColor = 'bg-[#8B5CF6]'
      break
    case 'mastered':
      baseClasses += 'border-[#FFE500] shadow-[0_0_15px_rgba(255,229,0,0.3)] text-[#FFE500] '
      statusIcon = <Star className="w-3.5 h-3.5 text-black" />
      statusColor = 'bg-[#FFE500]'
      break
  }

  // Interaction styling
  if (selected) {
    baseClasses += 'shadow-[0_0_0_3px_rgba(255,107,0,0.3)] border-[#FF8C3A] '
  }

  if (isHighlighted || isPathHovered) {
    baseClasses += 'shadow-[0_0_20px_rgba(255,107,0,0.4)] border-[#FF8C3A] scale-[1.05] z-10 '
  }

  if (isDimmed) {
    baseClasses += 'opacity-20 blur-[1px] '
  }

  const Icon = skill.icon && iconMap[skill.icon] ? iconMap[skill.icon] : <AlertCircle className="w-4 h-4" />

  return (
    <>
      <Handle type="target" position={Position.Top} className="opacity-0" />
      
      <div className={baseClasses}>
        {/* Status Indicator */}
        {status !== 'available' && (
          <div className={`absolute -right-1 -top-1 flex items-center justify-center rounded-full w-5 h-5 shadow-lg ${statusColor}`}>
            {statusIcon}
          </div>
        )}

        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1A1A1A] text-[#A1A1AA]">
          {Icon}
        </div>

        <div className="flex flex-col flex-grow text-left">
          <span className="font-semibold leading-tight">{skill.title}</span>
          <div className="flex items-center gap-2 text-[10px] text-[#A1A1AA] mt-0.5 font-mono uppercase tracking-wider">
            <span className={
              skill.difficulty === 'Beginner' ? 'text-[#4ADE80]' :
              skill.difficulty === 'Intermediate' ? 'text-[#FBBF24]' : 'text-[#F87171]'
            }>
              {skill.difficulty}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {skill.estimatedTime}
            </span>
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </>
  )
}
