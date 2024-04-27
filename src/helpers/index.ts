/* The idea behind this file is to collate useful functions that
  * can be either extracted in to their own library or
  * need to be exported (but currently aren't) from the
  * package they are currently in.
  */
import { z } from "zod";
import { Quad } from "@rdfjs/types";
import { Node, Edge, MarkerType } from "reactflow";
import { Parser, Prefixes } from "n3";
import { Readable } from "readable-stream";

// TODO: Needs to be exposed in @telicent-oss/ontologyservice
export const getAndCheckValidation = <T>(data: unknown, schema: z.ZodType<T, any, any>): T => {
  try {
    return schema.parse(data);
  } catch (err) {
    // console.log(data)
    if (err instanceof z.ZodError) {
      throw new Error(`Validation failed: ${err.message} ${JSON.stringify(data)}`);
    }
    throw new Error('Validation failed');
  }
};


export const getWordAfterLastHash = (s: string) => {
  const regex: RegExp = /[^#]+$/
  const matches: RegExpMatchArray | null = s.match(regex)

  return matches ? matches[0].trim() : s
}

export const getCapitalLetters = (s: string) => {
  const regex: RegExp = /[A-Z]/g
  const matches: RegExpMatchArray | null = s.match(regex)

  return matches ? matches.join('') : s
}

export const pascalToKebab = (pascalString: string): string => {
  return pascalString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export const formatDataTypeProperty = (dataTypePropertyType: Quad): Node => {
  return {
    type: 'dataTypeProperty',
    position: { x: 0, y: 0 },
    id: `dataTypeProperty-${dataTypePropertyType.subject.value}`,
    data: {
      id: dataTypePropertyType.subject.value,
      name: dataTypePropertyType.object.value,
      edgeLabel: dataTypePropertyType.predicate.value,
      shortName: getCapitalLetters(getWordAfterLastHash(dataTypePropertyType.object.value)),
      className: pascalToKebab(getWordAfterLastHash(dataTypePropertyType.object.value))
    }
  }
}

export const formatNode = (node: Quad): Node => {
  return {
    type: 'classInstanceNode',
    position: { x: 0, y: 0 },
    id: `classInstanceNode-${node.subject.value}`,
    data: {
      name: node.object.value,
      shortName: getCapitalLetters(getWordAfterLastHash(node.object.value)),
      className: pascalToKebab(getWordAfterLastHash(node.object.value)),
      id: node.subject.value,
    }
  }
}

export const formatEdge = (edge: Quad): Edge => {

  const newEdge = ({
    id: `${edge.subject.value}--${edge.object.value}--${crypto.randomUUID()}`,
    source: edge.subject.value,
    target: edge.object.value,
    type: "relationshipEdge",
    label: edge.predicate.value,
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  })

  return newEdge
}

export const addSpacesToPascalCase = (inputString: string): string => {
  let result = '';

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (char.toUpperCase() === char && i > 0) {
      result += ' ';
    }

    result += char;
  }

  return result;
};

export const stripOutPrefixesAndEmptyLinesFromRdf = (rdfInput: string) => rdfInput.split("\n").filter(line => !line.includes("@prefix") || !Boolean(line)).join("\n")

const isUsingAllNamedNodes = (q: Quad) => q.subject.termType === "NamedNode" && q.predicate.termType === "NamedNode" && q.object.termType === "NamedNode"
const isRdfType = (q: Quad) => q.predicate.value === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"

export const isObjectProperty = (q: Quad) => isUsingAllNamedNodes(q) && !isRdfType(q)
export const isDataTypeProperty = (q: Quad) => !isUsingAllNamedNodes(q)
export const isNode = (q: Quad) => isUsingAllNamedNodes(q) && isRdfType(q)

export const connectNodesWithReactFlowId = (nodes: Array<Node>, objectProperties: Array<Edge>, dataTypeProperties: Array<Node>) => {
  const { edges } = objectProperties.reduce((accumulator, objectProperty) => {
    // find normal nodes and get connection id's
    const sourceNode = nodes.find(n => n.data.id === objectProperty.source);
    const targetNode = nodes.find(n => n.data.id === objectProperty.target);

    if (!sourceNode || !targetNode) {
      accumulator.edges.push(objectProperty);
      return accumulator;
    }

    const updatedObjectProperty = {
      ...objectProperty,
      source: sourceNode.id,
      target: targetNode.id
    };

    accumulator.edges.push(updatedObjectProperty);

    // Additional logic here, for example, adding to dataTypePropertyNodes array
    // once node is created create edge between the two nodes
    const matchingDTP = dataTypeProperties.find(dtp => dtp.data.id === objectProperty.target)
    if (!matchingDTP) return accumulator

    matchingDTP.id = crypto.randomUUID()
    const dtpEgde: Edge = {
      // TODO: make edge label generator so that we have a consistent naming schema
      id: `${updatedObjectProperty.source}--${matchingDTP.id}`,
      label: matchingDTP.data.edgeLabel,
      markerEnd: {
        type: MarkerType.ArrowClosed
      },
      source: updatedObjectProperty.target,
      target: matchingDTP.id,
      type: "relationshipEdge"
    }

    accumulator.edges.push(dtpEgde)

    return accumulator;
  }, {
    edges: new Array<Edge>()
  });

  return edges
}

export const findAllNodesById = (rdfInput: string, id: string) => new Promise((resolve) => {
  // @ts-expect-error From does not exist on type Readable when it actually does
  const input = Readable.from([rdfInput])
  const parser = new Parser({ format: 'Turtle' })
  const quadsToRemove: Array<Quad> = []
  parser.parse(input, (_, quad) => {
    if (quad && isRdfType(quad) && (quad.subject.value === id || quad.object.value === id)) {
      quadsToRemove.push(quad)
    } else {
      resolve(quadsToRemove)
    }
  })
})

export const rebuildLongUri = (prefixes: Prefixes, value: string) => {
  const longUri = prefixes[value.replace(/:.*/, "")].value
  const afterColon = value.replace(/.*:/, "")
  return `${longUri}${afterColon}`
}
