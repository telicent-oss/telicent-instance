import React, { FC, useCallback, useEffect, useState } from 'react'
import ReactFlow, { Background, BackgroundVariant, Connection, Controls, MiniMap, useEdgesState, useNodesState, Node, Edge } from 'reactflow'
import { withInjection } from '../../Core/Providers/injection'
import { RdfInstancePresenter } from '../../rdfInstanceViewer/RdfInstancePresenter'
import { RdfPanelProps } from '../../types'

import 'reactflow/dist/style.css'
import ClassInstanceNode from '../../lib/CustomNode/ClassInstanceNode'
import { observer } from 'mobx-react'
import CustomEdge from '../../lib/CustomEdge/CustomEdge'
import getLayoutNodes from './Layout'
import { NodeDialog } from './NodeDialog'
import { EdgeDialog } from './EdgeDialog'

const nodeTypes = {
  classInstanceNode: ClassInstanceNode,
}

const edgeTypes = {
  relationshipEdge: CustomEdge
}

const DiagramComponent: FC<RdfPanelProps> = observer((props: RdfPanelProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(props.presenter.viewModel.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [open, setOpen] = useState(false)
  const [edgeDialogOpen, setEdgeDialogOpen] = useState(false)

  useEffect(() => {
    if (!props.presenter) {
      console.warn("No presenter found")
      return
    }
  }, [])

  useEffect(() => {
    const { nodes, edges } = getLayoutNodes(props.presenter.viewModel.nodes, props.presenter.viewModel.edges)

    setNodes(nodes)
    setEdges(edges)
  }, [props.presenter.viewModel.nodes, props.presenter.viewModel.edges, setEdges, setNodes])

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()

    const type = event.dataTransfer.getData('application/reactflow');

    // check if the dropped element is valid
    if (typeof type === 'undefined' || !type) {
      return;
    }

    props.presenter.newNodeType = type
    setOpen(true)

  }, [])

  const onConnect = useCallback((params: Connection) => {
    if (!params.source || !params.target) return
    props.presenter.newEdgeSource = params.source
    props.presenter.newEdgeTarget = params.target
    setEdgeDialogOpen(true)
  }, [setEdgeDialogOpen])



  const onCloseDialog = () => {
    setOpen(false)
    setEdgeDialogOpen(false)
  }

  const onNodesDelete = (nodes: Array<Node>) => {
    props.presenter.deleteNodeAndAssociatedEdges(nodes[0].id)
  }

  const onEdgesDelete = (edges: Array<Edge>) => {
    console.log({ edges })
    if (edges.length === 0) return
    const edge = edges[0]
    if (!edge.label || !edge.target || !edge.source) {
      console.warn("cannot delete edge, missing information")
      return
    }

    props.presenter.deleteEdge(edge.source, edge.target, edge.label as string)
  }

  const onSubmitNode = (name: string): void => {
    props.presenter.newNodeName = name
    props.presenter.addNode()

    setOpen(false)
  }

  const onSubmitEdge = (type: string): void => {
    props.presenter.newEdgeType = type
    props.presenter.addEdge()
    setEdgeDialogOpen(false)
  }

  return (<>
    <ReactFlow
      fitView
      panOnDrag
      nodes={nodes}
      edges={edges}
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onNodesDelete={onNodesDelete}
      onEdgesDelete={onEdgesDelete}
      edgeTypes={edgeTypes}
    >
      <Controls />
      <MiniMap style={
        { backgroundColor: 'gray' }
      } />
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
    </ReactFlow>
    {open && <NodeDialog title="Add node details:" onClose={onCloseDialog} options={Object.keys(props.presenter.viewModel.prefixes)} onSubmit={onSubmitNode} />}
    {edgeDialogOpen && <EdgeDialog title="Add edge details:" onClose={onCloseDialog} options={props.presenter.viewModel.relationships} onSubmit={onSubmitEdge} />}
  </>
  )

})

// export default Diagram
export const Diagram = withInjection({ presenter: RdfInstancePresenter })(DiagramComponent)
