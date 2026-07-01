import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import AutoRedirect from '@/components/roadmaps/AutoRedirect'

const VALID_SLUGS = ['ece-core', 'embedded-iot', 'eee-automation']

export function generateStaticParams() {
  const params: { slug: string, nodeId: string }[] = []
  
  VALID_SLUGS.forEach(slug => {
    try {
      const filePath = path.join(process.cwd(), 'src', 'data', 'roadmaps', `${slug}.json`)
      const fileData = fs.readFileSync(filePath, 'utf-8')
      const data = JSON.parse(fileData)
      
      data.nodes.forEach((node: any) => {
        if (node.type !== 'group_label') {
          params.push({ slug, nodeId: node.id })
        }
      })
    } catch (e) {
      // Ignore if file doesn't exist during build
    }
  })

  return params
}

export async function generateMetadata({ params }: { params: { slug: string, nodeId: string } }): Promise<Metadata> {
  const { slug, nodeId } = await params
  if (!VALID_SLUGS.includes(slug)) return {}

  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'roadmaps', `${slug}.json`)
    const fileData = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(fileData)
    
    const node = data.nodes.find((n: any) => n.id === nodeId)
    if (!node) return {}

    const description = node.description ? node.description.slice(0, 150) + (node.description.length > 150 ? '...' : '') : `Free roadmap guide for ${node.label}`

    return {
      title: `${node.label} — ECE/EEE Engineering Guide | Delta V`,
      description: description,
      openGraph: {
        images: [`/og?title=${encodeURIComponent(node.label)}&type=roadmap-node`]
      }
    }
  } catch (e) {
    return {}
  }
}

export default async function NodeSEOPage({ params }: { params: { slug: string, nodeId: string } }) {
  const { slug, nodeId } = await params
  if (!VALID_SLUGS.includes(slug)) {
    notFound()
  }

  let nodeData: any = null
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'roadmaps', `${slug}.json`)
    const fileData = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(fileData)
    nodeData = data.nodes.find((n: any) => n.id === nodeId)
  } catch (e) {
    notFound()
  }

  if (!nodeData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8 max-w-3xl mx-auto font-body">
      {/* AutoRedirect instantly fires router.replace() for humans, but Googlebot ignores JS and reads the HTML below */}
      <AutoRedirect slug={slug} nodeId={nodeId} />
      
      <header className="mb-8">
        <a href={`/roadmaps/${slug}?node=${nodeId}`} className="text-orange hover:underline text-sm mb-4 inline-block">
          ← View Interactive Roadmap
        </a>
        <h1 className="text-4xl font-display font-semibold mb-4">{nodeData.label}</h1>
        {nodeData.description && (
          <p className="text-[#D0D0D0] text-lg leading-relaxed">{nodeData.description}</p>
        )}
      </header>

      {nodeData.indiaContext && (
        <section className="mb-8 bg-[#1A1A1A] p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-orange">India Context</h2>
          {nodeData.indiaContext.gateRelevant && (
            <p className="mb-2"><strong>GATE ECE:</strong> Relevant ({nodeData.indiaContext.gateWeightage || 'Varies'})</p>
          )}
          {nodeData.indiaContext.companiesTestThis && nodeData.indiaContext.companiesTestThis.length > 0 && (
            <p className="mb-2"><strong>Companies:</strong> {nodeData.indiaContext.companiesTestThis.join(', ')}</p>
          )}
          {nodeData.indiaContext.bestFreeResource && (
            <p><strong>Best Resource:</strong> {nodeData.indiaContext.bestFreeResource}</p>
          )}
        </section>
      )}

      {nodeData.resources && nodeData.resources.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-orange">Free Resources</h2>
          <ul className="space-y-4">
            {nodeData.resources.map((res: any, idx: number) => (
              <li key={idx} className="border-b border-[#2A2A2A] pb-4">
                <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-lg font-medium block mb-1">
                  {res.title}
                </a>
                <p className="text-sm text-[#A1A1AA]">
                  {res.type} · {res.source} {res.duration ? `· ${res.duration}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {nodeData.projectIdea && (
        <section className="mb-8 border-l-4 border-orange pl-6 py-2">
          <h2 className="text-xl font-bold mb-2 text-orange">Hands-on Project Idea</h2>
          <p className="text-[#D0D0D0] leading-relaxed">{nodeData.projectIdea}</p>
        </section>
      )}
    </div>
  )
}
