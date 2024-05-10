import "reflect-metadata"
import { assert, beforeEach, describe, expect, it, vi } from "vitest";
import { AppTestHarness } from "../../TestTools/AppTestHarness";
import { QuadError, RdfInstancePresenter } from "../RdfInstancePresenter";
import { FakeHttpGateway } from "../../Core/FakeHttpGateway";
import { Types } from "../../Core/Types";
import { GetRdfAClassOnly, GetPrefixRdfStub, GetRawPrefixDataStub, GetRdfAandBClassesOnly, GetRdfAandBClassesWithEdge, GetRdfInputStub, GetRdfAandBClassesWithEdgeAndLiteral } from "../../TestTools/GetRdfInputStub";
import { RdfInstanceRepository } from "../RdfInstanceRepository";
import { waitFor } from "@testing-library/react";
import { Edge } from "reactflow";

let appTestHarness: AppTestHarness | null = null
let rdfInstancePresenter: RdfInstancePresenter | null = null
let rdfInstanceRepository: RdfInstanceRepository | null = null
let dataGateway: FakeHttpGateway | null = null

describe('rdfInstance', () => {

  describe('parsing rdf', () => {
    beforeEach(() => {
      appTestHarness = new AppTestHarness()
      appTestHarness.init()
      dataGateway = appTestHarness.container.get<FakeHttpGateway>(Types.IDataGateway)
      rdfInstancePresenter = appTestHarness.container.get<RdfInstancePresenter>(RdfInstancePresenter)
      rdfInstanceRepository = appTestHarness.container.get<RdfInstanceRepository>(RdfInstanceRepository)
    })
    it('should load prefixes and convert to valid rdf', () => {
      if (dataGateway && rdfInstanceRepository) {
        // pivot
        dataGateway.getPrefixes = vi.fn().mockImplementation(() => GetRawPrefixDataStub)
        expect(rdfInstanceRepository.rdf).toMatchInlineSnapshot(`
          "@prefix : <http://telicent.io/ontology/>.
          @prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
          @prefix dc: <http://purl.org/dc/elements/1.1/>.
          @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
          @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
          @prefix owl: <http://www.w3.org/2002/07/owl#>.
          @prefix telicent: <http://telicent.io/ontology/>.
          @prefix data: <http://example.com/rdf/testdata#>.
          @prefix ies: <http://ies.data.gov.uk/ontology/ies4#>.
          "
        `)

        expect(rdfInstanceRepository?.prefixes).toMatchInlineSnapshot(`
          {
            "": {
              "termType": "NamedNode",
              "value": "http://telicent.io/ontology/",
            },
            "data": {
              "termType": "NamedNode",
              "value": "http://example.com/rdf/testdata#",
            },
            "dc": {
              "termType": "NamedNode",
              "value": "http://purl.org/dc/elements/1.1/",
            },
            "ies": {
              "termType": "NamedNode",
              "value": "http://ies.data.gov.uk/ontology/ies4#",
            },
            "owl": {
              "termType": "NamedNode",
              "value": "http://www.w3.org/2002/07/owl#",
            },
            "rdf": {
              "termType": "NamedNode",
              "value": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            },
            "rdfs": {
              "termType": "NamedNode",
              "value": "http://www.w3.org/2000/01/rdf-schema#",
            },
            "telicent": {
              "termType": "NamedNode",
              "value": "http://telicent.io/ontology/",
            },
            "xsd": {
              "termType": "NamedNode",
              "value": "http://www.w3.org/2001/XMLSchema#",
            },
          }
        `)
      } else {
        assert.fail("dataGateway or rdfInstanceRepository is null")
      }
    })

    it('should parse valid rdf and generate nodes for reactflow', async () => {
      if (rdfInstancePresenter) {
        rdfInstancePresenter.handleRdfInput(GetRdfInputStub)
        await waitFor(() => {
          expect(rdfInstancePresenter!.diagram.nodes.length).toBe(4)
          expect(rdfInstancePresenter!.diagram.nodes[0].data.id).toBe("http://example.com/rdf/testdata#6cd17931-5c29-4cb9-8c26-745939aa9335")
          expect(rdfInstancePresenter!.diagram.nodes[3].data.id).toBe("http://example.com/rdf/testdata#4c48ac99-61fd-4fa5-81e2-aab8e7648618")
        })
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })

    it('should parse valid rdf and generate edges for reactflow', async () => {
      if (rdfInstancePresenter) {
        rdfInstancePresenter.handleRdfInput(GetRdfInputStub)
        await waitFor(() => {
          // edges will have random ids due to nodes generating random unique ids
          // this is because rdf identifiers are not unique
          expect(rdfInstancePresenter!.diagram.edges.length).toBe(3)
        })
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })

    it('should set nodes, edges, objects and prefixes on to rdfInstanceRepository and the rdf should be formatted', async () => {

      if (rdfInstancePresenter && rdfInstanceRepository) {
        rdfInstancePresenter.handleRdfInput(GetRdfInputStub)
        await waitFor(() => {

          expect(rdfInstanceRepository!.nodes.length).toBe(4)
          expect(rdfInstanceRepository!.objectProperties.length).toBe(3)
          expect(rdfInstanceRepository!.dataTypeProperties.length).toBe(0)
          expect(rdfInstanceRepository!.rdf).toMatchInlineSnapshot(`
            "@prefix : <http://telicent.io/ontology/>.
            @prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
            @prefix dc: <http://purl.org/dc/elements/1.1/>.
            @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
            @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
            @prefix owl: <http://www.w3.org/2002/07/owl#>.
            @prefix telicent: <http://telicent.io/ontology/>.
            @prefix data: <http://example.com/rdf/testdata#>.
            @prefix ies: <http://ies.data.gov.uk/ontology/ies4#>.

            data:6cd17931-5c29-4cb9-8c26-745939aa9335 rdf:type ies:BoundingState.
            data:0b791546-4f5c-4d58-9b62-7b7608af6468 rdf:type ies:Person;
                ies:aCopyOf data:6cd17931-5c29-4cb9-8c26-745939aa9335;
                ies:EventParticipant data:4c48ac99-61fd-4fa5-81e2-aab8e7648618.
            data:611bb20a-9c45-4d4e-b4ac-49a216eb18a8 rdf:type ies:GivenName;
                ies:isStateOf data:0b791546-4f5c-4d58-9b62-7b7608af6468.
            data:4c48ac99-61fd-4fa5-81e2-aab8e7648618 rdf:type ies:Event.
            "
          `)

        })
      } else {
        assert.fail("rdfInstancePresenter or rdfInstanceRepository is null")
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
    beforeEach(() => {
      appTestHarness = new AppTestHarness()
      appTestHarness.init()
      dataGateway = appTestHarness.container.get<FakeHttpGateway>(Types.IDataGateway)
      rdfInstancePresenter = appTestHarness.container.get<RdfInstancePresenter>(RdfInstancePresenter)
      rdfInstanceRepository = appTestHarness.container.get<RdfInstanceRepository>(RdfInstanceRepository)
    })
    it('should fail to add a new node', async () => {
      if (rdfInstancePresenter && rdfInstanceRepository) {
        const consoleWarn = vi.spyOn(console, 'warn')
        rdfInstancePresenter.addNode()
        await waitFor(() => {
          expect(consoleWarn).toHaveBeenCalledWith("cancelling creation of node, missing name or type")
          expect(rdfInstanceRepository!.rdf).toBe(GetPrefixRdfStub)
        })
      } else {
        assert.fail("rdfInstancePresenter or rdfInstanceRepository is null")
      }
    })

    it('should add a node successfully', async () => {
      if (rdfInstancePresenter) {
        rdfInstancePresenter.newNodeName = "data:nodeA"
        rdfInstancePresenter.newNodeType = "ies:nodeAType"
        rdfInstancePresenter.addNode()
        await waitFor(() => {

          expect(rdfInstanceRepository!.rdf).toBe(GetRdfAClassOnly)
        })
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })
  })

  describe('Adding edges manually', () => {

    beforeEach(() => {
      appTestHarness = new AppTestHarness()
      appTestHarness.init()
      dataGateway = appTestHarness.container.get<FakeHttpGateway>(Types.IDataGateway)
      rdfInstancePresenter = appTestHarness.container.get<RdfInstancePresenter>(RdfInstancePresenter)
      rdfInstanceRepository = appTestHarness.container.get<RdfInstanceRepository>(RdfInstanceRepository)
    })

    it("should fail to add a new edge", () => {
      const warnSpy = vi.spyOn(console, 'warn')
      if (rdfInstancePresenter) {
        rdfInstancePresenter.newEdgeType = "a"
        rdfInstancePresenter.newEdgeSource = "s"
        rdfInstancePresenter.newEdgeTarget = "t"
        rdfInstancePresenter.addEdge()
        expect(warnSpy).toHaveBeenCalledWith("Unable to find connecting nodes")
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })

    // setting the edge types and source + target seems to cause
    // the viewModel to be re-rendered each time meaning the
    // randomly generated id's are wrong when add edge is called.
    // This should not happen as the values aren't observable.
    // Requires investigation
    it("should add an edge successfully", async () => {
      if (rdfInstancePresenter && rdfInstanceRepository) {

        rdfInstancePresenter.handleRdfInput(GetRdfAandBClassesOnly)

        await waitFor(() => {
          expect(rdfInstanceRepository!.rdf).toBe(GetRdfAandBClassesOnly)
        })

        rdfInstancePresenter!.newEdgeType = "ies:edgeType"
        rdfInstancePresenter!.newEdgeSource = rdfInstancePresenter!.diagram.nodes[0].id
        rdfInstancePresenter!.newEdgeTarget = rdfInstancePresenter!.diagram.nodes[1].id

        rdfInstancePresenter.addEdge()

        await waitFor(() => {
          expect(rdfInstanceRepository!.rdf).toBe(GetRdfAandBClassesWithEdge)
        })

      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })
  })

  describe("Delete Node manually", () => {

    beforeEach(() => {
      appTestHarness = new AppTestHarness()
      appTestHarness.init()
      dataGateway = appTestHarness.container.get<FakeHttpGateway>(Types.IDataGateway)
      rdfInstancePresenter = appTestHarness.container.get<RdfInstancePresenter>(RdfInstancePresenter)
      rdfInstanceRepository = appTestHarness.container.get<RdfInstanceRepository>(RdfInstanceRepository)
    })
    it("should fail to delete node", () => {
      const consoleWarn = vi.spyOn(console, 'warn')
      rdfInstancePresenter?.deleteNode("doesnt exist")
      expect(consoleWarn).toHaveBeenCalledWith("cannot find node to delete")
    })
    it("should delete node successfully", async () => {

      if (rdfInstancePresenter) {
        rdfInstancePresenter.handleRdfInput(GetRdfAandBClassesWithEdge)

        await waitFor(() => {
          expect(rdfInstanceRepository!.rdf).toBe(GetRdfAandBClassesWithEdge)
        })

        const id = rdfInstancePresenter!.diagram.nodes[1].id
        rdfInstancePresenter!.deleteNode(id)

        await waitFor(() => {
          expect(rdfInstanceRepository!.rdf).toBe(`@prefix : <http://telicent.io/ontology/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix dc: <http://purl.org/dc/elements/1.1/>.
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix telicent: <http://telicent.io/ontology/>.
@prefix data: <http://example.com/rdf/testdata#>.
@prefix ies: <http://ies.data.gov.uk/ontology/ies4#>.

data:nodeA rdf:type ies:nodeAType;
    ies:edgeType data:nodeB.
`)
        })
      }

    })
  })

  describe("Delete Edge manually", () => {

    beforeEach(() => {
      appTestHarness = new AppTestHarness()
      appTestHarness.init()
      dataGateway = appTestHarness.container.get<FakeHttpGateway>(Types.IDataGateway)
      rdfInstancePresenter = appTestHarness.container.get<RdfInstancePresenter>(RdfInstancePresenter)
      rdfInstanceRepository = appTestHarness.container.get<RdfInstanceRepository>(RdfInstanceRepository)
    })
    it("should delete edge successfully", async () => {
      if (rdfInstancePresenter && rdfInstanceRepository) {
        rdfInstancePresenter.handleRdfInput(GetRdfAandBClassesWithEdge)

        await waitFor(() => {
          expect(rdfInstanceRepository!.rdf).toBe(GetRdfAandBClassesWithEdge)
        })

        rdfInstancePresenter.deleteEdges([{
          source: "idAForReactFlowDiagram",
          target: "idBForReactFlowDiagram",
          id: "http://example.com/rdf/testdata#nodeA--http://example.com/rdf/testdata#nodeB",
          label: "ies:edgeType"
        } as Edge])

        await waitFor(() => {
          expect(rdfInstanceRepository!.rdf).toBe(GetRdfAandBClassesOnly)
        })
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })
  })

  describe("Add Literal", () => {
    beforeEach(() => {
      appTestHarness = new AppTestHarness()
      appTestHarness.init()
      dataGateway = appTestHarness.container.get<FakeHttpGateway>(Types.IDataGateway)
      rdfInstancePresenter = appTestHarness.container.get<RdfInstancePresenter>(RdfInstancePresenter)
      rdfInstanceRepository = appTestHarness.container.get<RdfInstanceRepository>(RdfInstanceRepository)
    })
    it("should add a literal to a node", async () => {
      if (rdfInstancePresenter && rdfInstanceRepository) {
        rdfInstancePresenter.handleRdfInput(GetRdfAandBClassesWithEdge)

        await waitFor(() => {
          expect(rdfInstanceRepository!.rdf).toBe(GetRdfAandBClassesWithEdge)
        })

        rdfInstancePresenter.selectedNode = "data:nodeB"
        rdfInstancePresenter.addLiteral("ies:representativeValue", "Anderson")

        await waitFor(() => {
          expect(rdfInstanceRepository!.rdf).toBe(GetRdfAandBClassesWithEdgeAndLiteral)
        })
      } else {
        assert.fail("rdfInstancePresenter is null")
      }
    })
  })
})
