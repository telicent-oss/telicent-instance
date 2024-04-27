import React, { FC, useCallback, useEffect, useState } from 'react'
import ReactFlow, { Background, BackgroundVariant, Connection, Controls, MiniMap, useEdgesState, useNodesState, Node, Edge } from 'reactflow'
import { withInjection } from '../../Core/Providers/injection'
import { RdfInstancePresenter } from '../../rdfInstanceViewer/RdfInstancePresenter'
import { RdfPanelProps } from '../../types'

import 'reactflow/dist/style.css'
import ClassInstanceNode from '../../lib/CustomNode/ClassInstanceNode'
import { observer } from 'mobx-react'
import ObjectProperty from '../../lib/ObjectProperty/ObjectProperty'
import { NodeDialog } from './NodeDialog'
import { EdgeDialog } from './EdgeDialog'
import { LiteralDialog } from './LiteralDialog'
import DataTypeProperty from '../../lib/DataTypeProperty/DataTypeProperty'

const nodeTypes = {
  classInstanceNode: ClassInstanceNode,
  dataTypeProperty: DataTypeProperty
}

const edgeTypes = {
  relationshipEdge: ObjectProperty
}

const DiagramComponent: FC<RdfPanelProps> = observer((props: RdfPanelProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [open, setOpen] = useState(false)
  const [edgeDialogOpen, setEdgeDialogOpen] = useState(false)
  const [literalDialogOpen, setLiteralDialogOpen] = useState(false)

  useEffect(() => {
    if (!props.presenter) {
      console.warn("No presenter found")
      return
    }
  }, [])

  useEffect(() => {
    setNodes(props.presenter.diagram.nodes)
    setEdges(props.presenter.diagram.edges)
  }, [props.presenter.diagram.nodes, props.presenter.diagram.edges, setEdges, setNodes])

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
    setLiteralDialogOpen(false)
  }

  // NOTE: deleting a node will automatically trigger
  // the edges delete too, this is a reactflow feature
  const onNodesDelete = (nodes: Array<Node>) => {
    props.presenter.deleteNode(nodes[0].id)
  }

  const onEdgesDelete = (edges: Array<Edge>) => {
    props.presenter.deleteEdges(edges)
  }

  const onSubmitNode = (prefix: string, name: string): void => {
    props.presenter.newNodeName = `${prefix}:${name}`
    props.presenter.lastSelectedPrefix = prefix
    props.presenter.addNode()

    setOpen(false)
  }

  const onSubmitEdge = (type: string): void => {
    props.presenter.newEdgeType = type
    props.presenter.addEdge()
    setEdgeDialogOpen(false)
  }

  const onSubmitLiteral = (edgeType: string, attributeValue: string): void => {
    props.presenter.addLiteral(edgeType, attributeValue)
    setLiteralDialogOpen(false)
  }


  const onNodeContextMenu = (event: React.MouseEvent, node: Node): void => {
    props.presenter.selectedNode = node.data.id
    event.preventDefault()
    setLiteralDialogOpen(true)
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
      onNodeContextMenu={onNodeContextMenu}
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
    {open && <NodeDialog title="Add Class Instance:" onClose={onCloseDialog} options={Object.keys(props.presenter.viewModel.prefixes)} onSubmit={onSubmitNode} lastSelectedPrefix={props.presenter.viewModel.lastSelectedPrefix.toString()} />}
    {edgeDialogOpen && <EdgeDialog title="Add ObjectProperty:" onClose={onCloseDialog} options={props.presenter.viewModel.relationships} onSubmit={onSubmitEdge} />}
    {literalDialogOpen && <LiteralDialog title="Add attribute:" onClose={onCloseDialog} options={props.presenter.viewModel.dataTypes} onSubmit={onSubmitLiteral} lastSelected={props.presenter.viewModel.lastSelectedLiteral} />}
  </>
  )

})

// export default Diagram
export const Diagram = withInjection({ presenter: RdfInstancePresenter })(DiagramComponent)
