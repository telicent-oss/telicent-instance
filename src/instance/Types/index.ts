import { z } from "zod"

export interface HierarchyClass {
  subClasses: string[];
  types: string[];
  comments: string[];
  labels: string[];
  keys: string[];
}

const sparqlObject = z.object({
  value: z.string(),
  type: z.string()
})

const responseHeaders = z.object({
  vars: z.array(z.string())
})

export const HierarchyStatement = z.object({
  sub: sparqlObject,
  super: sparqlObject,
  subType: sparqlObject.optional(),
  subComment: sparqlObject.optional(),
  subLabel: sparqlObject.optional(),
});

export const HierarchyResponseSchema = z.object({
  head: responseHeaders,
  results: z.object({
    bindings: z.array(HierarchyStatement)
  })
})
