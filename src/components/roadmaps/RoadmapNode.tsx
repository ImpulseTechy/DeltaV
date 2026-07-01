import React from 'react'
import { Handle, Position, NodeProps, Node } from '@xyflow/react'
import { Check } from 'lucide-react'

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

  let baseClasses = 'relative rounded-lg px-4 py-2.5 font-body text-[14px] font-medium w-[240px] text-center cursor-pointer transition-all duration-200 border-2 border-solid '
  
  if (data.type === 'required') {
    baseClasses += 'bg-[#FFE500] text-black '
    baseClasses += selected ? 'border-orange ' : 'border-black '
  } else if (data.type === 'recommended') {
    baseClasses += 'bg-[#FFF4B5] text-black '
    baseClasses += selected ? 'border-orange ' : 'border-black '
  } else if (data.type === 'optional') {
    baseClasses += 'bg-white text-black '
    baseClasses += selected ? 'border-orange ' : 'border-black '
  }

  // Hover and active states
  baseClasses += 'hover:scale-[1.02] hover:border-[#FF8C3A] hover:shadow-[0_4px_12px_rgba(255,107,0,0.3)] '

  if (data.isDimmed) {
    baseClasses += 'opacity-100 brightness-50 blur-[2px] grayscale '
  }

  // Selection Glow
  if (selected) {
    baseClasses += 'shadow-[0_0_0_3px_rgba(255,107,0,0.2)] '
  }

  // Highlight (Search) Glow
  if (data.isHighlighted) {
    baseClasses += 'shadow-[0_0_15px_rgba(255,107,0,0.6)] border-[#FF6B00] animate-pulse '
  }

  // Dim (Filter) state
  if (data.isDimmed) {
    baseClasses += 'opacity-20 '
  }

  return (
    <>
      <Handle type="target" position={Position.Top} id="top" className="opacity-0" />
      <Handle type="target" position={Position.Left} id="left" className="opacity-0" />
      <div className={baseClasses}>
        
        {/* Status Indicator Dot */}
        {(data.status === 'in_progress' || data.status === 'done') && (
          <div 
            className={`absolute -right-2 -top-2 flex items-center justify-center rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)] ${
              data.status === 'done' ? 'bg-[#8B5CF6] w-5 h-5' : 'bg-[#EAB308] w-4 h-4'
            }`}
          >
            {data.status === 'done' && <Check className="w-3 h-3 text-white stroke-[3]" />}
          </div>
        )}
        
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} id="bottom" className="opacity-0" />
      <Handle type="source" position={Position.Right} id="right" className="opacity-0" />
    </>
  )
}
