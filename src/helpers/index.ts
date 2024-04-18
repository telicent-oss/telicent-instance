/* The idea behind this file is to collate useful functions that
  * can be either extracted in to their own library or
  * need to be exported (but currently aren't) from the
  * package they are currently in.
  */
import { z } from "zod";
import { Quad } from "@rdfjs/types";
import { Node, Edge, MarkerType } from "reactflow";
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

export const formatNode = (node: Quad): Node => {
  return {
    type: 'classInstanceNode',
    id: node.subject.value,
    position: { x: 0, y: 0 },
    data: {
      name: node.object.value,
      shortName: getCapitalLetters(getWordAfterLastHash(node.object.value)),
      className: pascalToKebab(getWordAfterLastHash(node.object.value))
    }
  }
}

export const formatEdge = (edge: Quad, label: string): Edge => {

  const newEdge = ({
    id: `${edge.object.value}-${edge.subject.value}`,
    source: edge.object.value,
    target: edge.subject.value,
    type: "relationshipEdge",
    label,
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
