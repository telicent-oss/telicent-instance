import "./data-type-property.css"
import { FC } from "react"
import { Handle, NodeProps, Position } from "reactflow"

type DTPData = {
  className: string
  shortName: string
  name: string
  id: string
}

type DataTypeProperty = NodeProps<DTPData>

const ClassInstanceLiteral: FC<DataTypeProperty> = (node) => {
  // TODO: work out how to update prefixes. If user removes
  // a prefix in the terminal it should be removed from
  // from the OntologyService
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div className={`data-type-property ${node.data.className}`}>
        <h1>"{node.data.name}"</h1>
      </div>
    </>
  )
}

export default ClassInstanceLiteral
