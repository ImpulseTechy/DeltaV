import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import RoadmapDiagram from '@/components/roadmaps/RoadmapDiagram'
import fs from 'fs'
import path from 'path'
import { CareerPath } from '@/types/skills'

const VALID_SLUGS = ['ece-core', 'embedded-iot', 'eee-automation', 'iot-engineer']

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params
  if (!VALID_SLUGS.includes(slug)) return {}

  const filePath = path.join(process.cwd(), 'src', 'data', 'roadmaps', `${slug}.json`)
  if (!fs.existsSync(filePath)) return {}
  
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(fileData)

  return {
    title: `${data.title} — Engineering Career Roadmap | Delta V`,
    description: data.description || `Free step-by-step ${data.title.toLowerCase()} roadmap for Indian engineering students.`,
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

  const filePath = path.join(process.cwd(), 'src', 'data', 'roadmaps', `${slug}.json`)
  if (!fs.existsSync(filePath)) {
    notFound()
  }
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const data: CareerPath = JSON.parse(fileData)

  // 2. Fetch User & Progress
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let serverProgress: Record<string, string> = {}

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

  // We are currently ignoring the old roadmaps' structure which might break here,
  // but since we are focusing on the IoT Engineer foundation, we will pass data as CareerPath.
  // Old roadmaps might fail to render correctly without migrating their data structure.
  // The user told us to build the foundation and IoT engineer as reference.

  // 3. Fallback for legacy roadmaps
  if (!data.skills) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full bg-[#0A0E1A] text-center px-6">
        <h1 className="font-display text-3xl font-bold text-white mb-4">Roadmap Under Maintenance</h1>
        <p className="font-body text-[#A1A1AA] max-w-md">
          The <strong>{data.title}</strong> roadmap is currently being upgraded to our new scalable architecture. 
          Please check back soon, or explore the <a href="/roadmaps/iot-engineer" className="text-orange hover:underline">IoT Engineer</a> roadmap to see the new experience!
        </p>
      </div>
    )
  }

  return (
    <RoadmapDiagram 
      roadmapData={data}
      serverProgress={serverProgress}
      userLoggedIn={!!user}
    />
  )
}
