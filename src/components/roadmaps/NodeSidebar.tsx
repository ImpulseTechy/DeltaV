'use client'

import React, { useState, useEffect } from 'react'
import { X, ChevronDown, CheckCircle2, BookOpen, Wrench, Copy, ExternalLink, ChevronUp } from 'lucide-react'
import { RoadmapNodeData } from './RoadmapNode'

interface NodeSidebarProps {
  nodeId: string
  nodeData: RoadmapNodeData
  isOpen: boolean
  isGuest: boolean
  onClose: () => void
  onStatusChange: (nodeId: string, status: 'pending' | 'in_progress' | 'done') => void
  onNavigate: (nodeId: string) => void
  allNodes: Map<string, RoadmapNodeData>
}

export default function NodeSidebar({
  nodeId,
  nodeData,
  isOpen,
  isGuest,
  onClose,
  onStatusChange,
  onNavigate,
  allNodes
}: NodeSidebarProps) {
  const [indiaContextOpen, setIndiaContextOpen] = useState(true)
  const [showCopyTooltip, setShowCopyTooltip] = useState(false)

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleCopyLink = () => {
    const url = new URL(window.location.href)
    url.searchParams.set('node', nodeId)
    navigator.clipboard.writeText(url.toString())
    setShowCopyTooltip(true)
    setTimeout(() => setShowCopyTooltip(false), 2000)
  }

  // Sort resources: video -> article -> tool -> book
  const resourceOrder: Record<string, number> = { video: 1, article: 2, tool: 3, book: 4 }
  const sortedResources = [...(nodeData.resources || [])]
    .sort((a, b) => (resourceOrder[a.type?.toLowerCase()] || 99) - (resourceOrder[b.type?.toLowerCase()] || 99))
    .slice(0, 6)

  const getTypeBadge = () => {
    if (nodeData.type === 'required') {
      return <span className="font-mono text-[10px] text-orange bg-orange/10 border border-orange px-2 py-0.5 rounded uppercase tracking-wider">REQUIRED</span>
    }
    if (nodeData.type === 'recommended') {
      return <span className="font-mono text-[10px] text-[#A1A1AA] bg-[#242424] border border-[#3F3F46] px-2 py-0.5 rounded uppercase tracking-wider">RECOMMENDED</span>
    }
    return <span className="font-mono text-[10px] text-[#6B7280] bg-[#121212] border border-[#2A2A2A] px-2 py-0.5 rounded uppercase tracking-wider">OPTIONAL</span>
  }

  const currentStatus = nodeData.status || 'pending'

  return (
    <>
      {/* Backdrop (invisible, just for click-outside) */}
      <div 
        className="fixed inset-0 z-50 bg-transparent md:bg-black/20" 
        onClick={onClose}
      />

      {/* Panel */}
      <div 
        className={`fixed z-50 bg-[#1A1A1A] border-l border-[#3F3F46] flex flex-col
          md:top-[60px] md:right-0 md:h-[calc(100vh-60px)] md:w-[420px] md:rounded-none md:border-t-0
          top-auto bottom-0 right-0 left-0 h-[85vh] w-full rounded-t-[16px] border-t
          transition-transform duration-300 ease-out transform
          ${isOpen ? 'translate-x-0 md:translate-y-0 translate-y-0' : 'translate-x-full md:translate-y-0 translate-y-full'}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Handle */}
        <div className="md:hidden w-[32px] h-[4px] bg-[#3F3F46] mx-auto rounded-full mt-2 shrink-0" />

        {/* HEADER (Sticky) */}
        <div className="sticky top-0 bg-[#1A1A1A] border-b border-[#3F3F46] px-5 py-4 shrink-0 z-10">
          <div className="flex justify-between items-start mb-2">
            {getTypeBadge()}
            <button onClick={onClose} className="text-[#6B7280] hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <h2 className="font-display font-semibold text-[1.5rem] text-white leading-[1.2] mb-3">
            {nodeData.label}
          </h2>

          {/* Status Selector */}
          <div className="flex items-center gap-2 font-body text-[13px]">
            {(['pending', 'in_progress', 'done'] as const).map((s) => {
              const isActive = currentStatus === s
              let bgClass = 'bg-[#242424] text-[#A1A1AA] hover:bg-[#2A2A2A]'
              if (isActive) {
                if (s === 'pending') bgClass = 'bg-[#3F3F46] text-white'
                if (s === 'in_progress') bgClass = 'bg-[#EAB308]/20 text-[#EAB308] border border-[#EAB308]/30'
                if (s === 'done') bgClass = 'bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/30'
              }
              const labels = { pending: 'Pending', in_progress: 'In Progress', done: 'Done' }
              return (
                <button
                  key={s}
                  onClick={() => onStatusChange(nodeId, s)}
                  className={`px-3 py-1 rounded-full transition-colors ${bgClass}`}
                >
                  {labels[s]}
                </button>
              )
            })}
          </div>
          {isGuest && currentStatus === 'done' && (
            <p className="text-[#6B7280] text-[11px] font-body mt-2">
              Sign in to save progress across devices
            </p>
          )}
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-5 py-4 flex flex-col gap-6 overflow-y-auto pb-20">
          
          {/* DESCRIPTION */}
          {nodeData.description && (
            <div>
              <h3 className="font-mono text-[11px] text-orange tracking-[0.1em] uppercase mb-2">
                ABOUT THIS TOPIC
              </h3>
              <p className="font-body text-[15px] text-[#D0D0D0] leading-[1.7]">
                {nodeData.description}
              </p>
            </div>
          )}

          {/* INDIA CONTEXT */}
          {nodeData.indiaContext && (
            <div>
              <button 
                onClick={() => setIndiaContextOpen(!indiaContextOpen)}
                className="flex items-center gap-2 w-full text-left font-mono text-[11px] text-orange tracking-[0.1em] uppercase focus:outline-none"
              >
                INDIA CONTEXT
                {indiaContextOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {indiaContextOpen && (
                <div className="bg-[#121212] rounded-lg p-4 mt-2 flex flex-col gap-3">
                  {nodeData.indiaContext.gateRelevant && (
                    <div className="flex items-center gap-2 font-body text-[13px] text-[#D0D0D0]">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                      <span>GATE ECE relevant · {nodeData.indiaContext.gateWeightage || 'Varies'}</span>
                    </div>
                  )}
                  {nodeData.indiaContext.companiesTestThis && nodeData.indiaContext.companiesTestThis.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-body text-[13px] text-[#A1A1AA]">Tested by:</span>
                      {nodeData.indiaContext.companiesTestThis.map((company: string) => (
                        <span key={company} className="bg-[#242424] font-body text-[12px] text-[#D0D0D0] rounded px-2 py-0.5">
                          {company}
                        </span>
                      ))}
                    </div>
                  )}
                  {nodeData.indiaContext.bestFreeResource && (
                    <div className="flex items-start gap-2 mt-1">
                      <BookOpen className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                      <span className="font-body text-[13px] text-[#A1A1AA]">
                        {nodeData.indiaContext.bestFreeResource}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* FREE RESOURCES */}
          {sortedResources.length > 0 && (
            <div>
              <h3 className="font-mono text-[11px] text-orange tracking-[0.1em] uppercase mb-2">
                FREE RESOURCES
              </h3>
              <div className="flex flex-col">
                {sortedResources.map((res: any, idx: number) => {
                  const type = res.type?.toUpperCase() || 'LINK'
                  let typeClass = 'bg-[#242424] text-[#A1A1AA]'
                  if (type === 'VIDEO') typeClass = 'bg-[#1A2A1A] text-[#22C55E]'
                  else if (type === 'ARTICLE') typeClass = 'bg-[#1A1A2A] text-[#60A5FA]'
                  else if (type === 'TOOL') typeClass = 'bg-[#2A1A1A] text-[#FF6B00]'
                  else if (type === 'BOOK') typeClass = 'bg-[#2A2A1A] text-[#EAB308]'

                  return (
                    <a 
                      key={idx} 
                      href={res.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 py-3 border-b border-[#242424] last:border-0 group"
                    >
                      <span className={`font-mono text-[10px] rounded-sm px-1.5 py-0.5 shrink-0 mt-0.5 ${typeClass}`}>
                        {type}
                      </span>
                      <div className="flex flex-col grow">
                        <span className="font-body text-[14px] text-white font-medium group-hover:text-orange transition-colors">
                          {res.title}
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-body text-[12px] text-[#6B7280]">{res.source}</span>
                          {res.duration && (
                            <>
                              <span className="text-[#3F3F46]">·</span>
                              <span className="font-mono text-[11px] text-[#52525B]">{res.duration}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#52525B] group-hover:text-orange transition-colors shrink-0 mt-1" />
                    </a>
                  )
                })}
              </div>
            </div>
          )}

          {/* PROJECT IDEA */}
          {nodeData.projectIdea && (
            <div>
              <h3 className="font-mono text-[11px] text-orange tracking-[0.1em] uppercase mb-2">
                HANDS-ON PROJECT
              </h3>
              <div className="bg-[#121212] border-l-[3px] border-solid border-orange rounded-r-lg p-4 flex items-start gap-3">
                <Wrench className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                <p className="font-body text-[14px] text-[#D0D0D0] leading-[1.6]">
                  {nodeData.projectIdea}
                </p>
              </div>
            </div>
          )}

          {/* PREREQUISITES & LEADS TO */}
          {((nodeData.prerequisites && nodeData.prerequisites.length > 0) || 
            (nodeData.leadsTo && nodeData.leadsTo.length > 0)) && (
            <div className="flex flex-col gap-3">
              {nodeData.prerequisites && nodeData.prerequisites.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-body text-[13px] text-[#6B7280] mr-1">Learn first →</span>
                  {nodeData.prerequisites.map(prereqId => {
                    const prereqData = allNodes.get(prereqId)
                    if (!prereqData) return null
                    return (
                      <button 
                        key={prereqId}
                        onClick={() => onNavigate(prereqId)}
                        className="bg-[#242424] hover:bg-[#2A2A2A] font-body text-[13px] text-white rounded-md px-3 py-1 transition-colors"
                      >
                        {prereqData.label}
                      </button>
                    )
                  })}
                </div>
              )}
              {nodeData.leadsTo && nodeData.leadsTo.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-body text-[13px] text-[#6B7280] mr-1">Next topics →</span>
                  {nodeData.leadsTo.map(leadId => {
                    const leadData = allNodes.get(leadId)
                    if (!leadData) return null
                    return (
                      <button 
                        key={leadId}
                        onClick={() => onNavigate(leadId)}
                        className="bg-[#242424] hover:bg-[#2A2A2A] border border-orange/50 font-body text-[13px] text-white rounded-md px-3 py-1 transition-colors"
                      >
                        {leadData.label}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )}

          {/* SHARE */}
          <div className="border-t border-[#3F3F46] pt-4 flex items-center justify-between">
            <span className="font-body text-[13px] text-[#6B7280]">Share this topic</span>
            <div className="relative">
              <button 
                onClick={handleCopyLink}
                className="p-2 hover:bg-[#242424] rounded transition-colors text-[#A1A1AA] hover:text-white focus:outline-none"
              >
                <Copy className="w-4 h-4" />
              </button>
              {showCopyTooltip && (
                <div className="absolute right-0 bottom-full mb-2 bg-[#2A2A2A] text-white font-body text-[11px] px-2 py-1 rounded shadow-lg">
                  Copied!
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
