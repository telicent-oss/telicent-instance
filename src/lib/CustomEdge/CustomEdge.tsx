import { FC } from "react"
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from "reactflow"


const CustomEdge: FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, markerEnd, label }) => {
  const [edgePath, labelX, labelY] = getBezierPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition })

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            borderRadius: 5,
            fontSize: 12,
            fontWeight: 700,
          }}
          className="nodrag nopan p-2 px-2 bg-gray-800"
        >
          {label}
        </div>
      </EdgeLabelRenderer>
    </>
  )
}

export default CustomEdge
