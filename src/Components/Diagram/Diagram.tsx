import { FC, useCallback, useEffect } from 'react'
import ReactFlow, { Background, BackgroundVariant, Connection, Controls, MiniMap, addEdge, useEdgesState, useNodesState } from 'reactflow'
import { withInjection } from '../../Core/Providers/injection'
import { RdfInstancePresenter } from '../../rdfInstanceViewer/RdfInstancePresenter'
import { RdfPanelProps } from '../../types'

import 'reactflow/dist/style.css'
import ClassInstanceNode from '../../lib/CustomNode/CustomNode'
import { observer } from 'mobx-react'

const nodeTypes = {
  classInstanceNode: ClassInstanceNode,
}


const DiagramComponent: FC<RdfPanelProps> = observer((props: RdfPanelProps) => {
  console.log({ props })
  const [nodes, setNodes, onNodesChange] = useNodesState(props.presenter.viewModel.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  useEffect(() => {
    if (!props.presenter) {
      console.warn("No presenter found")
      return
    }
    console.log(props.presenter);

  }, [])

  useEffect(() => {
    setNodes(props.presenter.viewModel.nodes)
  }, [props.presenter.viewModel.nodes])

  const onConnect = useCallback((params: Connection) => {
    // console.log({ params });

    setEdges((eds) => addEdge(params, eds))
  }, [setEdges])

  return (<ReactFlow
    fitView
    panOnDrag
    nodes={nodes}
    edges={edges}
    onConnect={onConnect}
    onNodesChange={onNodesChange}
    onEdgesChange={onEdgesChange}
    nodeTypes={nodeTypes}
  >
    <Controls />
    <MiniMap style={
      { backgroundColor: 'gray' }
    } />
    <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
  </ReactFlow>)
})

// export default Diagram
export const Diagram = withInjection({ presenter: RdfInstancePresenter })(DiagramComponent)
