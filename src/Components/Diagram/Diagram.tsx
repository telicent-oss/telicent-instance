import { FC } from 'react'
import ReactFlow, { Background, BackgroundVariant } from 'reactflow'

const Diagram: FC = () => {
  return (<ReactFlow
    fitView
    panOnDrag>
    <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
  </ReactFlow>)
}

export default Diagram
