'use client'

import React, { useState, useEffect, useMemo, useCallback, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  ReactFlowProvider,
  useReactFlow,
  BackgroundVariant
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Search, Users, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import RoadmapNode, { RoadmapNodeData } from './RoadmapNode'
import NodeSidebar from './NodeSidebar'
import { createClient } from '@/lib/supabase/client'

const nodeTypes = {
  customNode: RoadmapNode as any
}

interface RoadmapDiagramProps {
  roadmapId: string
  roadmapTitle: string
  initialNodes: Node<RoadmapNodeData>[]
  initialEdges: Edge[]
  studentCount: number
  totalNodes: number
  serverProgress: Record<string, string>
  userLoggedIn: boolean
}

function DiagramContent({ 
  roadmapId, roadmapTitle, initialNodes, initialEdges, studentCount, totalNodes, serverProgress, userLoggedIn 
}: RoadmapDiagramProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedNodeId = searchParams.get('node')

  const { setCenter } = useReactFlow()
  
  const [nodes, setNodes, onNodesChange] = useNodesState<Node<RoadmapNodeData>>(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [completedCount, setCompletedCount] = useState(0)
  
  // Create a map of all nodes for the sidebar to look up prereqs quickly
  const allNodesMap = useMemo(() => {
    const map = new Map<string, RoadmapNodeData>()
    initialNodes.forEach(n => {
      if (n.data.type !== 'group_label') {
        map.set(n.id, n.data)
      }
    })
    return map
  }, [initialNodes])

  const selectedNode = useMemo(() => {
    return nodes.find(n => n.id === selectedNodeId)
  }, [nodes, selectedNodeId])

  // Manage progress merging (localStorage + server)
  useEffect(() => {
    let progress = { ...serverProgress }
    
    if (!userLoggedIn) {
      const localData = localStorage.getItem(`dv_roadmap_progress_${roadmapId}`)
      if (localData) {
        try {
          const parsed = JSON.parse(localData)
          progress = { ...parsed, ...progress }
        } catch (e) {}
      }
    }

    let doneNodes = 0
    setNodes((nds) => nds.map((n) => {
      if (n.data.type !== 'group_label') {
        const status = progress[n.id] as any
        if (status === 'done') doneNodes++
        // Determine if selected
        const isSelected = n.id === selectedNodeId
        return { ...n, selected: isSelected, data: { ...n.data, status } }
      }
      return n
    }))
    
    setCompletedCount(doneNodes)
  }, [serverProgress, userLoggedIn, roadmapId, setNodes, selectedNodeId])

  // Auto-pan to selected node on load
  useEffect(() => {
    if (selectedNodeId && selectedNode) {
      setCenter(selectedNode.position.x, selectedNode.position.y, { zoom: 1, duration: 800 })
    }
  }, [selectedNodeId]) // Only on selectedNodeId change

  // Apply filters and search
  useEffect(() => {
    let targetNodeToCenter: Node | null = null

    setNodes((nds) => nds.map((n) => {
      if (n.data.type === 'group_label') return n

      const q = searchQuery.toLowerCase()
      const isHighlighted = q !== '' && n.data.label.toLowerCase().includes(q)
      
      const placementMatches = activeFilter === 'All' || (n.data.placementRelevance && n.data.placementRelevance.includes(activeFilter.toLowerCase()))
      const isDimmed = !placementMatches

      if (isHighlighted && !targetNodeToCenter) {
        targetNodeToCenter = n
      }

      return {
        ...n,
        data: {
          ...n.data,
          isHighlighted,
          isDimmed
        }
      }
    }))

    if (targetNodeToCenter) {
      setCenter((targetNodeToCenter as Node).position.x, (targetNodeToCenter as Node).position.y, { zoom: 1, duration: 800 })
    }
  }, [searchQuery, activeFilter, setNodes, setCenter])

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    if (node.data.type === 'group_label') return
    router.push(`?node=${node.id}`, { scroll: false })
  }, [router])

  const handleCloseSidebar = () => {
    router.push('?', { scroll: false })
  }

  const handleStatusChange = async (nodeId: string, status: 'pending' | 'in_progress' | 'done') => {
    // 1. Optimistic UI update
    setNodes(nds => nds.map(n => {
      if (n.id === nodeId) {
        return { ...n, data: { ...n.data, status } }
      }
      return n
    }))

    // Recalculate completed count
    setNodes(nds => {
      const newDoneCount = nds.filter(n => n.data.type !== 'group_label' && n.id === nodeId ? status === 'done' : n.data.status === 'done').length
      setCompletedCount(newDoneCount)
      return nds
    })

    // 2. Save
    if (userLoggedIn) {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        await supabase.from('roadmap_progress').upsert({
          user_id: user.id,
          roadmap_slug: roadmapId,
          node_id: nodeId,
          status: status,
          updated_at: new Date().toISOString()
        })
      }
    } else {
      const localData = localStorage.getItem(`dv_roadmap_progress_${roadmapId}`)
      let parsed = {}
      if (localData) {
        try { parsed = JSON.parse(localData) } catch (e) {}
      }
      parsed = { ...parsed, [nodeId]: status }
      localStorage.setItem(`dv_roadmap_progress_${roadmapId}`, JSON.stringify(parsed))
    }
  }

  const handleNavigate = (nodeId: string) => {
    router.push(`?node=${nodeId}`, { scroll: false })
  }

  return (
    <div className="flex flex-col h-screen w-full bg-[#0A0E1A] overflow-hidden">
      
      {/* HEADER BAR */}
      <header className="fixed top-0 w-full h-[60px] bg-[#0D0D0D] border-b border-[#3F3F46] z-50 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Link href="/roadmaps" className="font-body text-[13px] text-[#A1A1AA] hover:text-white flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Roadmaps
          </Link>
          <div className="w-[1px] h-6 bg-[#3F3F46]"></div>
          <h1 className="font-display font-semibold text-[1.1rem] text-white">
            {roadmapTitle}
          </h1>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-orange absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[200px] md:w-[240px] bg-[#1A1A1A] border border-[#3F3F46] rounded-md pl-9 pr-3 py-1.5 font-body text-[13px] text-white focus:outline-none focus:border-orange"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 font-body text-[12px] bg-[#121212] p-1 rounded-md border border-[#2A2A2A]">
            {['All', 'Core', 'PSU / GATE', 'Startup', 'IT Fallback'].map(f => {
              const active = activeFilter === f
              const displayLabel = f === 'Core' ? 'Core ECE' : f
              return (
                <button 
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1 rounded transition-colors whitespace-nowrap ${
                    active ? 'bg-orange/10 border border-orange text-orange' : 'text-[#A1A1AA] hover:text-white border border-transparent'
                  }`}
                >
                  {displayLabel}
                </button>
              )
            })}
          </div>

          {/* Progress */}
          <div className="font-mono text-[12px] text-[#52525B] whitespace-nowrap hidden lg:block ml-4">
            {completedCount} / {totalNodes} done
          </div>
        </div>
      </header>

      {/* STUDENT COUNT STRIP */}
      <div className="fixed top-[60px] w-full bg-[#0D0D0D] border-b border-[#1E3050] py-2 px-6 z-40 flex items-center gap-2">
        <Users className="w-3.5 h-3.5 text-[#52525B]" />
        <span className="font-body text-[13px] text-[#52525B]">
          {studentCount} engineers are following this roadmap
        </span>
      </div>

      {/* CANVAS */}
      <div className="w-full h-full pt-[96px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.2}
          maxZoom={1.5}
        >
          <Background variant={BackgroundVariant.Dots} color="#1E3050" gap={24} size={1} />
          <Controls className="!bg-[#1A1A1A] !border-[#3F3F46] !fill-orange" />
          <MiniMap 
            className="!bg-[#0D0D0D] !border !border-[#3F3F46] !rounded-lg hidden md:block"
            nodeColor={(node) => {
              if (node.data.status === 'done') return '#22C55E'
              if (node.data.type === 'required') return '#FF6B00'
              return '#3F3F46'
            }}
            maskColor="rgba(0,0,0,0.6)"
          />
        </ReactFlow>
      </div>

      {/* SIDEBAR */}
      {selectedNode && selectedNodeId && (
        <NodeSidebar
          nodeId={selectedNodeId}
          nodeData={selectedNode.data}
          isOpen={true}
          isGuest={!userLoggedIn}
          onClose={handleCloseSidebar}
          onStatusChange={handleStatusChange}
          onNavigate={handleNavigate}
          allNodes={allNodesMap}
        />
      )}
    </div>
  )
}

export default function RoadmapDiagram(props: RoadmapDiagramProps) {
  return (
    <ReactFlowProvider>
      <Suspense fallback={<div className="w-full h-screen bg-[#0A0E1A]" />}>
        <DiagramContent {...props} />
      </Suspense>
    </ReactFlowProvider>
  )
}
