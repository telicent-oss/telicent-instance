import "./custom-node.css"
import { FC } from "react"
import { Handle, NodeProps, Position } from "reactflow"

interface ClassInstanceData {
  className: string
  shortName: string
  name: string
  id: string
}

type ClassInstance = NodeProps<ClassInstanceData>

const ClassInstanceNode: FC<ClassInstance> = (node) => {
  // TODO: work out how to update prefixes. If user removes
  // a prefix in the terminal it should be removed from
  // from the OntologyService
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className={`class-instance-node ${node.data.className}`}>
        <h1>{node.data.shortName}</h1>
      </div>
      <Handle type="source" position={Position.Right} />
    </>
  )
}

export default ClassInstanceNode
