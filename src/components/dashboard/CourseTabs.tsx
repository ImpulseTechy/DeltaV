'use client'

import React, { useState } from 'react'
import { clsx } from 'clsx'
import { FileText, FileCode, ExternalLink, PlayCircle } from 'lucide-react'

type CourseTabsProps = {
  sessions: any[]
  materials: any[]
  announcements: any[]
}

const TABS = ['Live Sessions', 'Recordings', 'Materials', 'Announcements']

export default function CourseTabs({ sessions, materials, announcements }: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState(TABS[0])

  // Group materials by week
  const materialsByWeek = materials.reduce((acc: any, mat: any) => {
    if (!acc[mat.week_number]) acc[mat.week_number] = []
    acc[mat.week_number].push(mat)
    return acc
  }, {})

  const sortedWeeks = Object.keys(materialsByWeek).sort((a, b) => Number(a) - Number(b))

  const renderLiveSessions = () => (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-[#3F3F46] font-mono text-[11px] text-[#A1A1AA] tracking-widest uppercase">
            <th className="py-4 font-normal whitespace-nowrap pr-4">Session #</th>
            <th className="py-4 font-normal whitespace-nowrap pr-4">Date</th>
            <th className="py-4 font-normal pr-4">Topic</th>
            <th className="py-4 font-normal whitespace-nowrap pr-4">Status</th>
            <th className="py-4 font-normal whitespace-nowrap">Join Link</th>
          </tr>
        </thead>
        <tbody className="font-body text-sm text-white">
          {sessions.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-8 text-center text-[#52525B]">No sessions scheduled yet.</td>
            </tr>
          ) : (
            sessions.map((session, idx) => {
              const sessionTime = new Date(session.start_time)
              const now = new Date()
              const diffMinutes = (sessionTime.getTime() - now.getTime()) / 1000 / 60
              
              let statusLabel = session.status
              let statusColor = 'text-[#A1A1AA] bg-[#242424] border-[#3F3F46]'
              
              if (session.status === 'upcoming') {
                statusColor = 'text-orange bg-orange/10 border-orange/20'
              } else if (session.status === 'live') {
                statusColor = 'text-green-400 bg-green-400/10 border-green-400/20'
                statusLabel = 'Live Now'
              } else if (session.status === 'cancelled') {
                statusColor = 'text-red-400 bg-red-400/10 border-red-400/20'
              }

              return (
                <tr key={session.id} className="border-b border-[#3F3F46] last:border-0 hover:bg-[#1A1A1A] transition-colors">
                  <td className="py-4 pr-4 whitespace-nowrap">Session {idx + 1}</td>
                  <td className="py-4 pr-4 whitespace-nowrap text-[#A1A1AA]">
                    {sessionTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
                  </td>
                  <td className="py-4 pr-4 font-medium">{session.title}</td>
                  <td className="py-4 pr-4 whitespace-nowrap">
                    <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wide border uppercase", statusColor)}>
                      {session.status === 'live' && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                      {statusLabel}
                    </span>
                  </td>
                  <td className="py-4 whitespace-nowrap">
                    {session.status === 'completed' && (
                      <span className="text-[#52525B]">Recording available</span>
                    )}
                    {session.status === 'upcoming' && diffMinutes > 30 && (
                      <span className="text-[#52525B]">Available 30 min before</span>
                    )}
                    {session.status === 'upcoming' && diffMinutes <= 30 && diffMinutes >= -120 && (
                      <a href={session.join_link || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-medium px-4 py-1.5 rounded text-[13px] transition-colors">
                        Join →
                      </a>
                    )}
                    {session.status === 'live' && (
                      <a href={session.join_link || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-400 text-white font-medium px-4 py-1.5 rounded text-[13px] transition-colors animate-pulse">
                        JOIN NOW →
                      </a>
                    )}
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )

  const renderRecordings = () => {
    const completedSessions = sessions.filter(s => s.status === 'completed' || s.recording_url)
    if (completedSessions.length === 0) {
      return <div className="py-12 text-center text-[#52525B] font-body">Recordings are posted within 24 hours after each session.</div>
    }

    return (
      <div className="space-y-8">
        {completedSessions.reverse().map((session) => (
          <div key={session.id} className="bg-[#1A1A1A] border border-[#3F3F46] rounded-lg overflow-hidden">
            <div className="p-4 border-b border-[#3F3F46] flex items-center justify-between">
              <h3 className="font-display font-semibold text-white text-lg">{session.title}</h3>
              <span className="font-body text-[#A1A1AA] text-sm">
                {new Date(session.start_time).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            {session.recording_url ? (
              <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                {session.recording_url.includes('vimeo.com') ? (
                  <iframe 
                    src={session.recording_url.replace('vimeo.com/', 'player.vimeo.com/video/')} 
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen 
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-[#52525B]">
                    <PlayCircle className="w-12 h-12" />
                    <p className="font-body text-sm">Video cannot be embedded</p>
                    <a href={session.recording_url} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Watch Externally →</a>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative w-full aspect-video bg-[#0D0D0D] flex items-center justify-center">
                <span className="font-body text-[#52525B]">Recording processing...</span>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  const renderMaterials = () => {
    if (sortedWeeks.length === 0) {
      return <div className="py-12 text-center text-[#52525B] font-body">No materials available yet.</div>
    }

    return (
      <div className="space-y-4">
        {sortedWeeks.map(week => (
          <details key={week} className="group bg-[#1A1A1A] border border-[#3F3F46] rounded-lg [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="flex items-center justify-between p-4 cursor-pointer select-none">
              <span className="font-mono text-orange text-sm uppercase tracking-widest">Week {week}</span>
              <span className="text-[#A1A1AA] transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="p-4 pt-0 border-t border-[#3F3F46]/50">
              <div className="mt-4 space-y-2">
                {materialsByWeek[week].map((mat: any) => {
                  let Icon = FileText
                  if (mat.type === 'repo') Icon = FileCode
                  if (mat.type === 'link') Icon = ExternalLink

                  return (
                    <a 
                      key={mat.id} 
                      href={mat.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded bg-[#242424] hover:bg-[#2C2C30] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-[#A1A1AA]" />
                        <span className="font-body text-white text-[15px]">{mat.title}</span>
                      </div>
                      <span className="font-body text-orange text-[13px] hover:underline">
                        {mat.type === 'pdf' ? 'Download' : 'Open →'}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </details>
        ))}
      </div>
    )
  }

  const renderAnnouncements = () => {
    if (announcements.length === 0) {
      return <div className="py-12 text-center text-[#52525B] font-body">No announcements yet.</div>
    }

    return (
      <div className="space-y-6">
        {announcements.map((post) => (
          <div key={post.id} className="bg-[#1A1A1A] border border-[#3F3F46] rounded-lg p-5">
            <div className="font-body text-[#A1A1AA] text-xs mb-2">
              {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
            </div>
            <h3 className="font-body font-medium text-white text-lg mb-2">{post.title}</h3>
            <p className="font-body text-[#A1A1AA] text-[15px] whitespace-pre-wrap leading-relaxed">{post.content}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="flex overflow-x-auto border-b border-[#3F3F46] mb-8 hide-scrollbar">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "px-6 py-4 font-mono text-sm tracking-widest uppercase whitespace-nowrap transition-colors border-b-2",
              activeTab === tab
                ? "border-orange text-orange"
                : "border-transparent text-[#A1A1AA] hover:text-white"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="min-h-[400px]">
        {activeTab === 'Live Sessions' && renderLiveSessions()}
        {activeTab === 'Recordings' && renderRecordings()}
        {activeTab === 'Materials' && renderMaterials()}
        {activeTab === 'Announcements' && renderAnnouncements()}
      </div>
    </div>
  )
}
