import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import RoadmapDiagram from '@/components/roadmaps/RoadmapDiagram'
import { Node, Edge, MarkerType } from '@xyflow/react'
import { RoadmapNodeData } from '@/components/roadmaps/RoadmapNode'
import fs from 'fs'
import path from 'path'

const VALID_SLUGS = ['ece-core', 'embedded-iot', 'eee-automation']

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params
  if (!VALID_SLUGS.includes(slug)) return {}

  const filePath = path.join(process.cwd(), 'src', 'data', 'roadmaps', `${slug}.json`)
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(fileData)

  return {
    title: `${data.title} — Engineering Career Roadmap | Delta V`,
    description: `Free step-by-step ${data.title.toLowerCase()} roadmap for Indian engineering students. ${data.totalNodes} topics with curated resources, project ideas, and placement context.`,
    openGraph: {
      images: [`/og?title=${encodeURIComponent(data.title)}&type=roadmap`]
    }
  }
}

export default async function RoadmapSlugPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  if (!VALID_SLUGS.includes(slug)) {
    notFound()
  }

  // 1. Read JSON data
  const filePath = path.join(process.cwd(), 'src', 'data', 'roadmaps', `${slug}.json`)
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(fileData)

  // 2. Fetch User & Progress
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let serverProgress: Record<string, string> = {}
  let studentCount = 0

  if (user) {
    const { data: progressData } = await supabase
      .from('roadmap_progress')
      .select('node_id, status')
      .eq('user_id', user.id)
      .eq('roadmap_slug', slug)

    if (progressData) {
      progressData.forEach((row) => {
        serverProgress[row.node_id] = row.status
      })
    }
  }

  // Fetch total student count using cached helper
  const { getStudentCount } = await import('@/lib/roadmaps/getStudentCount')
  studentCount = await getStudentCount(slug)

  // 3. Transform JSON to React Flow Nodes & Edges
  const initialNodes: Node<RoadmapNodeData>[] = []
  const initialEdges: Edge[] = []
  
  const processedGroups = new Set<string>()

  data.nodes.forEach((node: any) => {
    // Add Node
    initialNodes.push({
      id: node.id,
      position: node.position,
      type: 'customNode',
      data: {
        label: node.label,
        type: node.type,
        group: node.group,
        placementRelevance: node.placementRelevance || [],
        description: node.description,
        indiaContext: node.indiaContext,
        resources: node.resources,
        projectIdea: node.projectIdea,
        prerequisites: node.prerequisites || [],
        leadsTo: node.leadsTo || []
      }
    })

    // Add Group Label if first time seeing this group
    if (node.group && !processedGroups.has(node.group)) {
      processedGroups.add(node.group)
      initialNodes.push({
        id: `group-${node.group}`,
        position: { x: node.position.x, y: node.position.y - 30 },
        type: 'customNode',
        data: {
          label: node.group.replace(/-/g, ' '),
          type: 'group_label'
        },
        draggable: false,
        selectable: false
      })
    }

    // Add Edges
    if (node.leadsTo && Array.isArray(node.leadsTo)) {
      node.leadsTo.forEach((targetId: string) => {
        initialEdges.push({
          id: `e-${node.id}-${targetId}`,
          source: node.id,
          target: targetId,
          type: 'smoothstep',
          animated: false,
          style: { stroke: '#3F3F46', strokeWidth: 1.5 },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#3F3F46',
          }
        })
      })
    }
  })

  return (
    <RoadmapDiagram 
      roadmapId={slug}
      roadmapTitle={data.title}
      initialNodes={initialNodes}
      initialEdges={initialEdges}
      studentCount={studentCount}
      totalNodes={data.totalNodes}
      serverProgress={serverProgress}
      userLoggedIn={!!user}
    />
  )
}
