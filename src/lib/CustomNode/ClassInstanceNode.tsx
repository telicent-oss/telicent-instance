import "./custom-node.css"
import { FC } from "react"
import { Handle, NodeProps, Position } from "reactflow"

interface CustomNode extends Node {
  data: {
    className: string
    shortName: string
    name: string
  }
}

const ClassInstanceNode: FC<NodeProps<CustomNode>> = (node) => {
  //  console.log({ node })
  // TODO: work out how to update prefixes. If user removes
  // a prefix in the terminal it should be removed from
  // from the OntologyService
  return (
    <>
      <Handle type="source" position={Position.Left} />
      <div className={`class-instance-node ${node.data.className}`}>
        <h1>{node.data.shortName}</h1>
      </div>
      <Handle type="target" position={Position.Right} />
    </>
  )
}

export default ClassInstanceNode
