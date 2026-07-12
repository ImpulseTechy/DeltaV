'use client'

import React, { useState, useEffect, useMemo, useCallback, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  ReactFlowProvider,
  useReactFlow,
  BackgroundVariant,
  PanOnScrollMode,
  MarkerType
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Search, ArrowLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'

import SkillNode, { SkillNodeData, SkillProgressState } from './SkillNode'
import AnimatedCircuitEdge from './AnimatedCircuitEdge'
import SkillPanel from './SkillPanel'

import { getLayoutedElements } from '@/lib/layout/graphLayout'
import { CareerPath } from '@/types/skills'
import { getSkill, getPrerequisites } from '@/data/skills/registry'

const nodeTypes = {
  customNode: SkillNode as any
}

const edgeTypes = {
  circuitEdge: AnimatedCircuitEdge as any
}

interface RoadmapDiagramProps {
  roadmapData: CareerPath
  serverProgress?: Record<string, string> // To be connected to Supabase later
  userLoggedIn?: boolean
}

function DiagramContent({ roadmapData }: RoadmapDiagramProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(searchParams.get('skill'))
  const { setCenter, fitView } = useReactFlow()
  
  const [nodes, setNodes, onNodesChange] = useNodesState<Node<SkillNodeData>>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])
  
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null)
  
  // Progress tracking (local for now)
  const [progress, setProgress] = useState<Record<string, SkillProgressState>>({})

  // 1. Initialize Graph Data & Layout
  useEffect(() => {
    // Create initial nodes
    const initialNodes: Node<SkillNodeData>[] = roadmapData.skills.map(skillId => {
      const skill = getSkill(skillId)
      if (!skill) throw new Error(`Skill ${skillId} not found in registry`)
      
      return {
        id: skillId,
        type: 'customNode',
        position: { x: 0, y: 0 }, // Will be set by layout engine
        data: {
          skill,
          status: 'available', // Default, updated later
        }
      }
    })

    // Create initial edges
    const initialEdges: Edge[] = roadmapData.connections.map((conn, idx) => ({
      id: `e-${conn.source}-${conn.target}`,
      source: conn.source,
      target: conn.target,
      type: 'circuitEdge',
      data: {}
    }))

    // Apply auto-layout
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(initialNodes, initialEdges, 'TB')
    
    setNodes(layoutedNodes)
    setEdges(layoutedEdges)
    
    // Fit view after a tiny delay to ensure React Flow has measured the canvas
    setTimeout(() => {
      fitView({ padding: 0.2, duration: 800 })
    }, 100)
    
    // Load local progress
    const localData = localStorage.getItem(`dv_progress_${roadmapData.id}`)
    if (localData) {
      try {
        setProgress(JSON.parse(localData))
      } catch (e) {}
    }
  }, [roadmapData, setNodes, setEdges, fitView])

  // Helper to find all ancestors recursively
  const getAllAncestors = useCallback((nodeId: string, connections: {source: string, target: string}[]): Set<string> => {
    const ancestors = new Set<string>()
    const queue = [nodeId]
    
    while (queue.length > 0) {
      const current = queue.shift()!
      const parents = connections.filter(c => c.target === current).map(c => c.source)
      parents.forEach(p => {
        if (!ancestors.has(p)) {
          ancestors.add(p)
          queue.push(p)
        }
      })
    }
    return ancestors
  }, [])

  // Helper to check if a skill is locked (has unmet prerequisites)
  const isSkillLocked = useCallback((skillId: string, currentProgress: Record<string, SkillProgressState>) => {
    const parents = roadmapData.connections.filter(c => c.target === skillId).map(c => c.source)
    if (parents.length === 0) return false // No prereqs
    
    // If any parent is not completed/mastered, it's locked
    return parents.some(p => currentProgress[p] !== 'completed' && currentProgress[p] !== 'mastered')
  }, [roadmapData.connections])

  // 2. Apply State (Search, Hover, Progress) to Nodes & Edges
  useEffect(() => {
    if (nodes.length === 0) return

    let targetSearchNode: Node | null = null
    const q = searchQuery.toLowerCase()

    // Determine path highlights if hovering
    const pathNodes = new Set<string>()
    const pathEdges = new Set<string>()

    if (hoveredNodeId) {
      const ancestors = getAllAncestors(hoveredNodeId, roadmapData.connections)
      ancestors.forEach(a => pathNodes.add(a))
      pathNodes.add(hoveredNodeId) // Include self
      
      roadmapData.connections.forEach(conn => {
        if (pathNodes.has(conn.source) && pathNodes.has(conn.target)) {
          pathEdges.add(`e-${conn.source}-${conn.target}`)
        }
      })
    }

    setNodes((nds) => nds.map((n) => {
      const isSearchMatch = q !== '' && n.data.skill.title.toLowerCase().includes(q)
      if (isSearchMatch && !targetSearchNode) {
        targetSearchNode = n
      }

      // Check lock status
      let currentStatus = progress[n.id] || 'available'
      if (currentStatus === 'available' && isSkillLocked(n.id, progress)) {
        currentStatus = 'locked'
      }

      const isPathHovered = hoveredNodeId ? pathNodes.has(n.id) : false
      const isDimmed = (q !== '' && !isSearchMatch) || (hoveredNodeId !== null && !isPathHovered)

      return {
        ...n,
        selected: n.id === selectedNodeId,
        data: {
          ...n.data,
          status: currentStatus,
          isHighlighted: isSearchMatch,
          isDimmed,
          isPathHovered
        }
      }
    }))

    setEdges((eds) => eds.map((e) => {
      const isSearchMatch = q !== ''
      const isPathHovered = hoveredNodeId ? pathEdges.has(e.id) : false
      const isDimmed = (isSearchMatch) || (hoveredNodeId !== null && !isPathHovered)

      return {
        ...e,
        data: {
          ...e.data,
          isHighlighted: isPathHovered,
          isDimmed
        }
      }
    }))

    if (targetSearchNode) {
      setCenter((targetSearchNode as Node).position.x + 120, (targetSearchNode as Node).position.y, { zoom: 1.2, duration: 800 })
    }
  }, [searchQuery, hoveredNodeId, progress, selectedNodeId, setNodes, setEdges, getAllAncestors, roadmapData.connections, isSkillLocked, setCenter])

  // Center on selected node when opening sidebar
  useEffect(() => {
    if (selectedNodeId) {
      const node = nodes.find(n => n.id === selectedNodeId)
      if (node) {
        // Offset slightly to the left so sidebar doesn't cover it
        setCenter(node.position.x - 100, node.position.y, { zoom: 1.2, duration: 800 })
      }
    }
  }, [selectedNodeId])

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNodeId(node.id)
    window.history.replaceState(null, '', `?skill=${node.id}`)
  }, [])

  const onNodeMouseEnter = useCallback((_: React.MouseEvent, node: Node) => setHoveredNodeId(node.id), [])
  const onNodeMouseLeave = useCallback(() => setHoveredNodeId(null), [])

  const handleCloseSidebar = () => {
    setSelectedNodeId(null)
    window.history.replaceState(null, '', window.location.pathname)
  }

  const handleStatusChange = (status: 'in_progress' | 'completed') => {
    if (!selectedNodeId) return
    
    const newProgress = { ...progress, [selectedNodeId]: status }
    setProgress(newProgress)
    localStorage.setItem(`dv_progress_${roadmapData.id}`, JSON.stringify(newProgress))
  }

  const selectedNode = selectedNodeId ? nodes.find(n => n.id === selectedNodeId) : null

  return (
    <div className="flex flex-col h-screen w-full bg-[#0A0E1A] overflow-hidden">
      
      {/* HEADER BAR */}
      <header className="fixed top-0 w-full h-[60px] bg-[#0D0D0D] border-b border-[#3F3F46] z-50 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/roadmaps" className="font-body text-[13px] text-[#A1A1AA] hover:text-white flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <div className="w-[1px] h-6 bg-[#3F3F46]"></div>
          <h1 className="font-display font-semibold text-[1.1rem] text-white">
            {roadmapData.title}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Global Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#A1A1AA] absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search skills (e.g. MQTT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[240px] md:w-[300px] bg-[#1A1A1A] border border-[#3F3F46] rounded-full pl-9 pr-4 py-2 font-body text-[13px] text-white focus:outline-none focus:border-orange focus:shadow-[0_0_10px_rgba(255,107,0,0.2)] transition-all"
            />
          </div>
        </div>
      </header>

      {/* CANVAS */}
      <div className="w-full h-full pt-[60px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onNodeMouseEnter={onNodeMouseEnter}
          onNodeMouseLeave={onNodeMouseLeave}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          minZoom={0.2}
          maxZoom={2}
          panOnScroll={true}
          zoomOnScroll={false}
          panOnScrollMode={PanOnScrollMode.Free}
          proOptions={{ hideAttribution: true }}
        >
          <Background variant={BackgroundVariant.Dots} color="#1E3050" gap={24} size={1} />
        </ReactFlow>
      </div>

      {/* LEARNING HUB PANEL */}
      <SkillPanel
        skill={selectedNode?.data.skill || null}
        status={selectedNode?.data.status || 'locked'}
        isOpen={!!selectedNodeId}
        onClose={handleCloseSidebar}
        onStatusChange={handleStatusChange}
        onNavigateToSkill={(id) => {
          setSelectedNodeId(id)
          window.history.replaceState(null, '', `?skill=${id}`)
        }}
        getSkillData={getSkill}
      />
    </div>
  )
}

export default function RoadmapDiagram(props: RoadmapDiagramProps) {
  return (
    <ReactFlowProvider>
      <Suspense fallback={<div className="w-full h-screen bg-[#0A0E1A] flex items-center justify-center"><Loader2 className="w-8 h-8 text-orange animate-spin" /></div>}>
        <DiagramContent {...props} />
      </Suspense>
    </ReactFlowProvider>
  )
}
