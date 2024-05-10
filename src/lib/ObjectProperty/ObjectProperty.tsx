import { FC } from "react"
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from "reactflow"


const ObjectProperty: FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, markerEnd, markerStart, label }) => {
  const [edgePath, labelX, labelY] = getBezierPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition })

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} markerStart={markerStart} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            transform: `translate(-50%, -70%) translate(${labelX}px,${labelY}px)`,
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

export default ObjectProperty
