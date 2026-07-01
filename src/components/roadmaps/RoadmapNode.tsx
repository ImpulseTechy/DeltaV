import React from 'react'
import { Handle, Position, NodeProps, Node } from '@xyflow/react'

export type RoadmapNodeData = {
  label: string
  type: 'required' | 'recommended' | 'optional' | 'group_label'
  group?: string
  status?: 'pending' | 'in_progress' | 'done'
  isHighlighted?: boolean
  isDimmed?: boolean
  placementRelevance?: string[]
  description?: string
  indiaContext?: any
  resources?: any[]
  projectIdea?: string
  prerequisites?: string[]
  leadsTo?: string[]
}

export default function RoadmapNode({ data, selected }: NodeProps<Node<RoadmapNodeData>>) {
  // Group labels are non-interactive background labels
  if (data.type === 'group_label') {
    return (
      <div className="font-mono text-[10px] text-[#52525B] uppercase tracking-wider whitespace-nowrap">
        {data.label}
      </div>
    )
  }

  let baseClasses = 'relative rounded-lg px-4 py-2.5 font-body text-[14px] font-medium min-w-[160px] text-center cursor-pointer transition-all duration-200 '
  
  if (data.type === 'required') {
    baseClasses += 'bg-[#1A2540] border-[1.5px] border-solid text-white '
    baseClasses += selected ? 'border-orange ' : 'border-orange '
  } else if (data.type === 'recommended') {
    baseClasses += 'bg-[#1A1A2E] border-[1.5px] border-dashed text-[#D0D0D0] '
    baseClasses += selected ? 'border-orange border-solid ' : 'border-[#3F3F46] '
  } else if (data.type === 'optional') {
    baseClasses += 'bg-[#121212] border-[1.5px] border-dotted text-[#6B7280] '
    baseClasses += selected ? 'border-orange border-solid ' : 'border-[#2A2A2A] '
  }

  // Hover and active states
  baseClasses += 'hover:scale-[1.02] hover:border-[#FF8C3A] hover:border-solid '

  // Selection Glow
  if (selected) {
    baseClasses += 'shadow-[0_0_0_3px_rgba(255,107,0,0.2)] '
  }

  // Highlight (Search) Glow
  if (data.isHighlighted) {
    baseClasses += 'shadow-[0_0_15px_rgba(255,107,0,0.6)] border-[#FF6B00] border-solid animate-pulse '
  }

  // Dim (Filter) state
  if (data.isDimmed) {
    baseClasses += 'opacity-20 '
  }

  return (
    <>
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <div className={baseClasses}>
        
        {/* Status Indicator Dot */}
        {(data.status === 'in_progress' || data.status === 'done') && (
          <div 
            className={`absolute left-[-4px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full shadow-[0_0_4px_rgba(0,0,0,0.5)] ${
              data.status === 'done' ? 'bg-[#22C55E]' : 'bg-[#EAB308]'
            }`}
          />
        )}
        
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </>
  )
}
