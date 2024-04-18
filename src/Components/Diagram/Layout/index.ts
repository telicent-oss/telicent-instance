import { Edge, Node, Position } from "reactflow";
import dagre from "dagre"

const setNodeSizes = (dagreGraph: dagre.graphlib.Graph) => (node: Node) => {
  dagreGraph.setNode(node.id, {
    width: 200,
    height: 200,
  });
};

const setEdgeLink = (dagreGraph: dagre.graphlib.Graph) => (edge: Edge) => {
  dagreGraph.setEdge(edge.source, edge.target);
};

const calcNodePosition = (dagreGraph: dagre.graphlib.Graph, direction: "TB" | "LR") => (node: Node) => {
  const nodeWithPosition = dagreGraph.node(node.id) as dagre.Node;

  node.targetPosition = direction === "TB" ? Position.Top : Position.Left;
  node.sourcePosition = direction === "TB" ? Position.Bottom : Position.Right;
  node.position = {
    x: nodeWithPosition.x - 100,
    y: nodeWithPosition.y - 100
  };
};

const getLayoutNodes = (nodes: Node[], edges: Edge[], direction: "TB" | "LR" = "LR") => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: direction });
  nodes.forEach(setNodeSizes(dagreGraph));
  edges.forEach(setEdgeLink(dagreGraph));
  dagre.layout(dagreGraph);
  nodes.forEach(calcNodePosition(dagreGraph, direction));
  return { nodes, edges };
};

export default getLayoutNodes;
