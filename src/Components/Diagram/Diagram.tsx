import { FC, useCallback, useEffect } from 'react'
import ReactFlow, { Background, BackgroundVariant, Connection, Controls, MiniMap, addEdge, useEdgesState, useNodesState } from 'reactflow'
import { withInjection } from '../../Core/Providers/injection'
import { RdfInstancePresenter } from '../../rdfInstanceViewer/RdfInstancePresenter'
import { RdfPanelProps } from '../../types'

import 'reactflow/dist/style.css'
import ClassInstanceNode from '../../lib/CustomNode/ClassInstanceNode'
import { observer } from 'mobx-react'
import CustomEdge from '../../lib/CustomEdge/CustomEdge'
import getLayoutNodes from './Layout'

const nodeTypes = {
  classInstanceNode: ClassInstanceNode,
}

const edgeTypes = {
  relationshipEdge: CustomEdge
}

const DiagramComponent: FC<RdfPanelProps> = observer((props: RdfPanelProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(props.presenter.viewModel.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  useEffect(() => {
    if (!props.presenter) {
      console.warn("No presenter found")
      return
    }
  }, [])

  useEffect(() => {
    const { nodes, edges } = getLayoutNodes(props.presenter.viewModel.nodes, props.presenter.viewModel.edges)
    console.log({ nodes, edges });

    setNodes(nodes)
    setEdges(edges)
  }, [props.presenter.viewModel.nodes, props.presenter.viewModel.edges, setEdges, setNodes])


  const onConnect = useCallback((params: Connection) => {
    if (!params.source || !params.target) return

    props.presenter.rdfInstanceRepository.addEdgeToRdf(params.source, params.target)
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
    edgeTypes={edgeTypes}
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
