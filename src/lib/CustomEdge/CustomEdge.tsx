import { FC } from "react"
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from "reactflow"


const CustomEdge: FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY }) => {
  const [edgePath] = getBezierPath({ sourceX, sourceY, targetX, targetY })

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        {id}
      </EdgeLabelRenderer>
    </>
  )
}

export default CustomEdge
