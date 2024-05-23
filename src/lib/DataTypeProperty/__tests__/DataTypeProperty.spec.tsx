import "reflect-metadata"
import '@testing-library/jest-dom/vitest'
import { screen, render } from "@testing-library/react"
import { describe, it, beforeEach, expect } from "vitest"
import ReactFlow, { ReactFlowProvider } from "reactflow"
import { mockReactFlow } from "../../../TestTools/MockResizeObserver"
import ClassInstanceLiteral from "../DataTypeProperty"

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
      <ClassInstanceLiteral dragging zIndex={1} type="class-instance-literal" id="test-id" dragHandle="" selected={false} isConnectable xPos={0} yPos={0} data={{ shortName: 'NI', className: 'className', name: 'NameInitials', id: 'rdf-id' }} />
    </FlowWithProvider>)

    expect(screen.getByRole("heading", { name: /nameinitials/i })).toBeInTheDocument()
  })
})
