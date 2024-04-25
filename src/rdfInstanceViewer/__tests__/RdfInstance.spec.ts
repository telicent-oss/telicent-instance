import "reflect-metadata"
import { assert, beforeEach, describe, expect, it, vi } from "vitest";
import { AppTestHarness } from "../../TestTools/AppTestHarness";
import { QuadError, RdfInstancePresenter } from "../RdfInstancePresenter";
import { FakeHttpGateway } from "../../Core/FakeHttpGateway";
import { Types } from "../../Core/Types";
import { GetRawPrefixDataStub, GetPrefixObjectStub } from "../../TestTools/GetRdfInputStub";
import { RdfInstanceRepository } from "../RdfInstanceRepository";
import { Quad } from "@rdfjs/types";
import { GetEdgeQuadStub, GetNodeQuadStub } from "../../TestTools/GetTripleStub";

let appTestHarness: AppTestHarness | null = null
let rdfInstancePresenter: RdfInstancePresenter | null = null
let rdfInstanceRepository: RdfInstanceRepository | null = null
let dataGateway: FakeHttpGateway | null = null

describe('rdfInstance', () => {
  beforeEach(() => {
    appTestHarness = new AppTestHarness()
    appTestHarness.init()
    dataGateway = appTestHarness.container.get<FakeHttpGateway>(Types.IDataGateway)
    rdfInstancePresenter = appTestHarness.container.get<RdfInstancePresenter>(RdfInstancePresenter)
    rdfInstanceRepository = appTestHarness.container.get<RdfInstanceRepository>(RdfInstanceRepository)
  })

  describe('parsing rdf', () => {

    it('should load prefixes and convert to valid rdf', () => {
      if (dataGateway) {
        // pivot
        dataGateway.getPrefixes = vi.fn().mockImplementation(() => GetRawPrefixDataStub)

        expect(rdfInstancePresenter?.viewModel.rdf).toBe("@prefix : <http://telicent.io/ontology/> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix dc: <http://purl.org/dc/elements/1.1/> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n@prefix telicent: <http://telicent.io/ontology/> .\n\n")
        expect(rdfInstanceRepository?.prefixes).toStrictEqual(GetPrefixObjectStub)
      } else {
        assert.fail("dataGateway is null")
      }
    })

    it('should parse valid rdf and add it to the appropriate edge and quad array', () => {
      const quads: Array<Quad> = []
      const nodes: Array<Quad> = []
      const edges: Array<Quad> = []
      const objects: Array<Quad> = []

      if (rdfInstancePresenter) {
        const processData = rdfInstancePresenter.onDataPartial(nodes, edges, objects, quads)
        processData(GetEdgeQuadStub())
        expect(quads).toEqual([GetEdgeQuadStub()])
        expect(edges).toEqual([GetEdgeQuadStub()])
        expect(nodes).toEqual([])
        expect(objects).toEqual([])
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })

    it('should parse valid rdf and add it to the appropriate node and quad array', () => {
      const quads: Array<Quad> = []
      const nodes: Array<Quad> = []
      const edges: Array<Quad> = []
      const objects: Array<Quad> = []

      if (rdfInstancePresenter) {
        const processData = rdfInstancePresenter.onDataPartial(nodes, edges, objects, quads)
        processData(GetNodeQuadStub())
        expect(quads).toEqual([GetNodeQuadStub()])
        expect(nodes).toEqual([GetNodeQuadStub()])
        expect(edges).toEqual([])
        expect(objects).toEqual([])
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })

    it('should set nodes, edges, objects and prefixes on to rdfInstanceRepository and the rdf should be formatted', () => {
      const quads: Array<Quad> = [GetNodeQuadStub(), GetEdgeQuadStub()]
      const nodes: Array<Quad> = [GetNodeQuadStub()]
      const edges: Array<Quad> = [GetEdgeQuadStub()]
      const objects: Array<Quad> = []

      if (rdfInstancePresenter) {
        expect(rdfInstancePresenter.viewModel.nodes).toEqual([])
        expect(rdfInstancePresenter.viewModel.edges).toEqual([])
        expect(rdfInstancePresenter.viewModel.rdf).toMatchInlineSnapshot(`
        "@prefix : <http://telicent.io/ontology/> .
        @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
        @prefix dc: <http://purl.org/dc/elements/1.1/> .
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
        @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
        @prefix owl: <http://www.w3.org/2002/07/owl#> .
        @prefix telicent: <http://telicent.io/ontology/> .

        "
      `)

        // Pivot
        rdfInstancePresenter.onEndPartial(nodes, edges, objects, quads)()

        expect(rdfInstancePresenter.viewModel.nodes).toMatchInlineSnapshot(`
        [
          {
            "data": {
              "className": "person",
              "name": "http://ies.data.gov.uk/ontology/ies4#Person",
              "shortName": "P",
            },
            "id": "http://telicent.io/data#0b791546-4f5c-4d58-9b62-7b7608af6468",
            "position": {
              "x": 0,
              "y": 0,
            },
            "type": "classInstanceNode",
          },
        ]
      `)
        expect(rdfInstancePresenter.viewModel.edges).toMatchInlineSnapshot(`
        [
          {
            "id": "http://telicent.io/data#6cd17931-5c29-4cb9-8c26-745939aa9335-https://telicent.io/#0b791546-4f5c-4d58-9b62-7b7608af6468",
            "label": "http://ies.data.gov.uk/ontology/ies4#aCopyOf",
            "markerEnd": {
              "type": "arrowclosed",
            },
            "source": "http://telicent.io/data#6cd17931-5c29-4cb9-8c26-745939aa9335",
            "target": "https://telicent.io/#0b791546-4f5c-4d58-9b62-7b7608af6468",
            "type": "relationshipEdge",
          },
        ]
      `)
        expect(rdfInstancePresenter.viewModel.rdf).toMatchInlineSnapshot(`
        "@prefix : <http://telicent.io/ontology/> .
        @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
        @prefix dc: <http://purl.org/dc/elements/1.1/> .
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
        @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
        @prefix owl: <http://www.w3.org/2002/07/owl#> .
        @prefix telicent: <http://telicent.io/ontology/> .

        http://telicent.io/data#0b791546-4f5c-4d58-9b62-7b7608af6468 a http://ies.data.gov.uk/ontology/ies4#Person .
        https://telicent.io/#0b791546-4f5c-4d58-9b62-7b7608af6468 http://ies.data.gov.uk/ontology/ies4#aCopyOf http://telicent.io/data#6cd17931-5c29-4cb9-8c26-745939aa9335 .
        "
      `)
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })

    it('should set syntax error markers to markers array', () => {
      if (rdfInstancePresenter) {
        expect(rdfInstancePresenter.viewModel.markers).toStrictEqual([])

        const err: QuadError = {
          "context": {
            "token": {
              "type": "eof",
              "value": "",
              "prefix": "",
              "line": 15,
              "start": 24,
              "end": 24
            },
            "line": 15,
            "previousToken": {
              "type": "prefixed",
              "value": "0b791546-4f5c-4d58-",
              "prefix": "data",
              "line": 15,
              "start": 0,
              "end": 25
            }
          },
          message: "Expected entity but got eof on line 15.",
          stack: `Error: Expected entity but got eof on line 15.
    at N3Parser._error (http://localhost:5173/node_modules/.vite/deps/rdf-parse.js?v=89da61b3:7491:21)
    at N3Parser._readEntity (http://localhost:5173/node_modules/.vite/deps/rdf-parse.js?v=89da61b3:6874:25)
    at N3Parser._readPunctuation (http://localhost:5173/node_modules/.vite/deps/rdf-parse.js?v=89da61b3:7257:78)
    at http://localhost:5173/node_modules/.vite/deps/rdf-parse.js?v=89da61b3:7596:39
    at emitToken (http://localhost:5173/node_modules/.vite/deps/rdf-parse.js?v=89da61b3:6323:11)
    at N3Lexer._tokenizeToEnd (http://localhost:5173/node_modules/.vite/deps/rdf-parse.js?v=89da61b3:6120:15)
    at http://localhost:5173/node_modules/.vite/deps/rdf-parse.js?v=89da61b3:6427:20
    at N3StreamParser._flush (http://localhost:5173/node_modules/.vite/deps/rdf-parse.js?v=89da61b3:8690:11)
    at N3StreamParser.final [as _final] (http://localhost:5173/node_modules/.vite/deps/chunk-S3KU7BFY.js?v=89da61b3:6998:14)
    at callFinal (http://localhost:5173/node_modules/.vite/deps/chunk-S3KU7BFY.js?v=89da61b3:6303:16)`,
          name: "Syntax error"
        }

        rdfInstancePresenter.onError(err)

        expect(rdfInstancePresenter.viewModel.markers).toMatchInlineSnapshot(`
        [
          {
            "endColumn": 25,
            "endLineNumber": 15,
            "message": "Expected entity but got eof on line 15.",
            "severity": 8,
            "startColumn": 0,
            "startLineNumber": 15,
          },
        ]
      `)
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })

  })
  describe('Adding Nodes manually', () => {
    it('should fail to add a new node', () => {
      if (rdfInstancePresenter) {
        rdfInstancePresenter.addNode()
        expect(rdfInstancePresenter.viewModel.rdf).toMatchInlineSnapshot(`
        "@prefix : <http://telicent.io/ontology/> .
        @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
        @prefix dc: <http://purl.org/dc/elements/1.1/> .
        @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
        @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
        @prefix owl: <http://www.w3.org/2002/07/owl#> .
        @prefix telicent: <http://telicent.io/ontology/> .

        "
      `)
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })

    it('should add a node successfully', () => {
      if (rdfInstancePresenter) {
        rdfInstancePresenter.newNodeName = "newName"
        rdfInstancePresenter.newNodeType = "newType"
        rdfInstancePresenter.addNode()
        expect(rdfInstancePresenter.viewModel.rdf).toMatchInlineSnapshot(`
          "@prefix : <http://telicent.io/ontology/> .
          @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
          @prefix dc: <http://purl.org/dc/elements/1.1/> .
          @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
          @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
          @prefix owl: <http://www.w3.org/2002/07/owl#> .
          @prefix telicent: <http://telicent.io/ontology/> .


          newName a newType ."
        `)
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })
  })

  describe('Adding edges manually', () => {
    it("should fail to add a new edge", () => {
      if (rdfInstancePresenter) {
        rdfInstancePresenter.addEdge()
        expect(rdfInstancePresenter.viewModel.rdf).toMatchInlineSnapshot(`
          "@prefix : <http://telicent.io/ontology/> .
          @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
          @prefix dc: <http://purl.org/dc/elements/1.1/> .
          @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
          @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
          @prefix owl: <http://www.w3.org/2002/07/owl#> .
          @prefix telicent: <http://telicent.io/ontology/> .

          "
        `)
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })

    it("should add an edge successfully", () => {
      if (rdfInstancePresenter) {
        rdfInstancePresenter.newEdgeType = "edgeType"
        rdfInstancePresenter.newEdgeSource = "edgeSource"
        rdfInstancePresenter.newEdgeTarget = "edgeTarget"

        rdfInstancePresenter.addEdge()

        expect(rdfInstancePresenter.viewModel.rdf).toMatchInlineSnapshot(`
          "@prefix : <http://telicent.io/ontology/> .
          @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
          @prefix dc: <http://purl.org/dc/elements/1.1/> .
          @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
          @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
          @prefix owl: <http://www.w3.org/2002/07/owl#> .
          @prefix telicent: <http://telicent.io/ontology/> .


          edgeTarget edgeType edgeSource ."
        `)
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })
  })

  describe("Delete Node manually", () => {
    it("should delete node and joined edge successfully", () => {

      if (rdfInstancePresenter) {
        rdfInstancePresenter.newNodeName = "nodeA"
        rdfInstancePresenter.newNodeType = "nodeAType"

        rdfInstancePresenter.addNode()

        rdfInstancePresenter.newNodeName = "nodeB"
        rdfInstancePresenter.newNodeType = "nodeBType"

        rdfInstancePresenter.addNode()

        rdfInstancePresenter.newEdgeType = "edgeType"
        rdfInstancePresenter.newEdgeSource = "nodeA"
        rdfInstancePresenter.newEdgeTarget = "nodeB"

        rdfInstancePresenter.addEdge()

        expect(rdfInstancePresenter.viewModel.rdf).toMatchInlineSnapshot(`
          "@prefix : <http://telicent.io/ontology/> .
          @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
          @prefix dc: <http://purl.org/dc/elements/1.1/> .
          @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
          @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
          @prefix owl: <http://www.w3.org/2002/07/owl#> .
          @prefix telicent: <http://telicent.io/ontology/> .


          nodeA a nodeAType .
          nodeB a nodeBType .
          nodeB edgeType nodeA ."
        `)
        rdfInstancePresenter.deleteNodeAndAssociatedEdges("nodeA")
        expect(rdfInstancePresenter.viewModel.rdf).toMatchInlineSnapshot(`
          "@prefix : <http://telicent.io/ontology/> .
          @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
          @prefix dc: <http://purl.org/dc/elements/1.1/> .
          @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
          @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
          @prefix owl: <http://www.w3.org/2002/07/owl#> .
          @prefix telicent: <http://telicent.io/ontology/> .


          nodeB a nodeBType ."
        `)
      }

    })
  })

  describe("Delete Egde manually", () => {
    it("should not attempt to delete anything if no rdf has been set", () => {
      if (rdfInstancePresenter) {
        rdfInstancePresenter.deleteEdge("source", "target", "label")
        expect(rdfInstancePresenter.viewModel.rdf).toMatchInlineSnapshot(`
          "@prefix : <http://telicent.io/ontology/> .
          @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
          @prefix dc: <http://purl.org/dc/elements/1.1/> .
          @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
          @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
          @prefix owl: <http://www.w3.org/2002/07/owl#> .
          @prefix telicent: <http://telicent.io/ontology/> .

          "
        `)
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })
    it("should delete edge successfully", () => {
      if (rdfInstancePresenter) {
        rdfInstancePresenter.newNodeName = "nodeA"
        rdfInstancePresenter.newNodeType = "nodeAType"

        rdfInstancePresenter.addNode()

        rdfInstancePresenter.newNodeName = "nodeB"
        rdfInstancePresenter.newNodeType = "nodeBType"

        rdfInstancePresenter.addNode()

        rdfInstancePresenter.newEdgeType = "edgeType"
        rdfInstancePresenter.newEdgeSource = "nodeA"
        rdfInstancePresenter.newEdgeTarget = "nodeB"

        rdfInstancePresenter.addEdge()

        expect(rdfInstancePresenter.viewModel.rdf).toMatchInlineSnapshot(`
          "@prefix : <http://telicent.io/ontology/> .
          @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
          @prefix dc: <http://purl.org/dc/elements/1.1/> .
          @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
          @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
          @prefix owl: <http://www.w3.org/2002/07/owl#> .
          @prefix telicent: <http://telicent.io/ontology/> .


          nodeA a nodeAType .
          nodeB a nodeBType .
          nodeB edgeType nodeA ."
        `)

        // pivot
        // TODO: check with Ian if source and target are the right way round
        rdfInstancePresenter.deleteEdge("nodeA", "nodeB", "edgeType")

        expect(rdfInstancePresenter.rdfInstanceRepository.rdf).toMatchInlineSnapshot(`
          "@prefix : <http://telicent.io/ontology/> .
          @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
          @prefix dc: <http://purl.org/dc/elements/1.1/> .
          @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
          @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
          @prefix owl: <http://www.w3.org/2002/07/owl#> .
          @prefix telicent: <http://telicent.io/ontology/> .


          nodeA a nodeAType .
          nodeB a nodeBType ."
        `)
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })
  })

})
