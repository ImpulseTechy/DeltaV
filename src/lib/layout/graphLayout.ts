import dagre from 'dagre'
import { Node, Edge, Position } from '@xyflow/react'

export type Direction = 'TB' | 'LR' | 'RL' | 'BT'

export const getLayoutedElements = <T extends Record<string, unknown>>(
  nodes: Node<T>[],
  edges: Edge[],
  direction: Direction = 'TB'
) => {
  const dagreGraph = new dagre.graphlib.Graph()
  dagreGraph.setDefaultEdgeLabel(() => ({}))
  
  // Set configuration for the graph
  // nodesep: separation between nodes in the same rank
  // ranksep: separation between ranks
  dagreGraph.setGraph({ 
    rankdir: direction,
    nodesep: 80,
    ranksep: 120,
    edgesep: 50,
  })

  nodes.forEach((node) => {
    // Assuming standard node dimensions, adjust these if your nodes are different sizes
    const width = 240
    const height = 80
    dagreGraph.setNode(node.id, { width, height })
  })

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  dagre.layout(dagreGraph)

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id)
    
    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    const width = nodeWithPosition.width
    const height = nodeWithPosition.height
    
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - width / 2,
        y: nodeWithPosition.y - height / 2,
      },
      // Target handle is top, source handle is bottom
      targetPosition: (direction === 'TB' ? 'top' : 'left') as Position,
      sourcePosition: (direction === 'TB' ? 'bottom' : 'right') as Position,
    }
  })

  return { nodes: layoutedNodes, edges }
}
