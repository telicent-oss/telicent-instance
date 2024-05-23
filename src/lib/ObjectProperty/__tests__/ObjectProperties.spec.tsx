import "reflect-metadata"
import '@testing-library/jest-dom/vitest'
import { screen, render } from "@testing-library/react"
import { describe, it, beforeEach, expect } from "vitest"
import ReactFlow, { Position, ReactFlowProvider } from "reactflow"
import { mockReactFlow } from "../../../TestTools/MockResizeObserver"
import ObjectProperty from "../ObjectProperty"

function Flow(props: object) {
  return <ReactFlow {...props} />
}

function FlowWithProvider(props: object) {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  )
}

describe("DataTypeProperty", () => {
  beforeEach(() => {
    mockReactFlow()
  })
  it("should render", () => {
    render(<FlowWithProvider>
      <ObjectProperty source="nodeA"
        target="nodeB"
        id="nodeAToB"
        markerEnd="ArrowClosed"
        sourceX={0}
        sourceY={0}
        targetX={1}
        targetY={1}
        label="TestEdge"
        sourcePosition={Position.Left}
        targetPosition={Position.Right} />
    </FlowWithProvider>)

    expect(screen.getByText("TestEdge")).toBeInTheDocument()
  })
})
