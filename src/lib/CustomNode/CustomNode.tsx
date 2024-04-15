import "./custom-node.css"
import { FC } from "react"
import { NodeProps } from "reactflow"

const ClassInstanceNode: FC<NodeProps<Node>> = (node) => {
  console.log({ node })
  return (
    <div className={`class-instance-node bounding-state`}>
    </div>
  )
}

export default ClassInstanceNode
