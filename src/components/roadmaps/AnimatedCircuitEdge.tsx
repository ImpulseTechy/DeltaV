import React from 'react'
import { EdgeProps, getBezierPath, BaseEdge } from '@xyflow/react'

export default function AnimatedCircuitEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })

  // Determine if this edge is part of an active path (hover state)
  const isHighlighted = data?.isHighlighted
  const isDimmed = data?.isDimmed

  let edgeColor = '#3F3F46' // Default subdued color
  if (isHighlighted) {
    edgeColor = '#FF8C3A' // Highlight color (DeltaV orange)
  }

  let opacity = 1
  if (isDimmed) opacity = 0.2
  else if (isHighlighted) opacity = 1
  else opacity = 0.7

  return (
    <>
      {/* Base Edge */}
      <BaseEdge 
        path={edgePath} 
        markerEnd={markerEnd} 
        style={{
          ...style,
          stroke: edgeColor,
          strokeWidth: isHighlighted ? 3 : 2,
          opacity: opacity,
          transition: 'stroke 0.3s ease, stroke-width 0.3s ease, opacity 0.3s ease',
        }} 
      />
      
      {/* Animated Pulse (Electricity) - Only show if not dimmed */}
      {!isDimmed && (
        <circle r="4" fill={isHighlighted ? '#FFE500' : '#8B5CF6'}>
          <animateMotion 
            dur={isHighlighted ? "1.5s" : "3s"} 
            repeatCount="indefinite" 
            path={edgePath}
          />
        </circle>
      )}
    </>
  )
}
