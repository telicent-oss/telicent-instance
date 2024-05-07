import { assert, beforeEach, describe, expect, it, vi } from "vitest";
import "reflect-metadata"
import { Types } from "../../Core/Types";
import { AppTestHarness } from "../../TestTools/AppTestHarness";
import { GetHierarchyStub } from "../../TestTools/GetHierarchyStub";
import { HierarchyPresenter } from "../HierarchyPresenter";
import { FakeHttpGateway } from "../../Core/FakeHttpGateway";
import { HierarchyRepository, getAndCheckHierarchyResponse } from "../HierarchyRepository";
import { HIERARCHY_QUERY, rootHierarchyUri } from "../../constants";

let appTestHarness: AppTestHarness | null = null
let dataGateway: FakeHttpGateway | null = null
let hierarchyPresenter: HierarchyPresenter | null = null
let hierarchyRepository: HierarchyRepository | null = null

describe('hierarchy', () => {
  beforeEach(async () => {
    appTestHarness = new AppTestHarness()
    appTestHarness.init()
    dataGateway = appTestHarness.container.get<FakeHttpGateway>(Types.IDataGateway)
    hierarchyPresenter = appTestHarness.container.get<HierarchyPresenter>(HierarchyPresenter)
    hierarchyRepository = appTestHarness.container.get<HierarchyRepository>(HierarchyRepository)
  })

  describe('loading', () => {
    it('should call dataGateway with hierarchy query and expected schema callback', async () => {
      if (dataGateway) {
        dataGateway.get = vi.fn().mockImplementation(GetHierarchyStub)

        expect(hierarchyPresenter?.viewModel.hasHierarchy).toBe(false)
        expect(hierarchyPresenter?.viewModel.hierarchy.children.length).toBe(0)

        // pivot
        await hierarchyPresenter?.load()

        expect(dataGateway.get).toHaveBeenCalledWith(HIERARCHY_QUERY, getAndCheckHierarchyResponse)
        expect(hierarchyPresenter?.viewModel.hasHierarchy).toBe(true)
        expect(hierarchyPresenter?.viewModel?.hierarchy.id).toEqual(rootHierarchyUri)
        expect(hierarchyPresenter?.viewModel.hierarchy.children.length).toBe(3)
        expect(hierarchyPresenter?.viewModel.hierarchy.children[0].id).toBe("http://ies.data.gov.uk/ontology/ies4#ClassOfClassOfElement")
        expect(hierarchyPresenter?.viewModel.hierarchy.children[2].id).toBe("http://ies.data.gov.uk/ontology/ies4#ClassOfElement")
      }
      else {
        assert.fail("dataGateway is null")
      }
    })

    it('should handle failed api call gracefully', async () => {
      if (dataGateway) {
        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation((error) => error.message)
        dataGateway.get = vi.fn().mockImplementation(() => { throw "Api not responding" })

        await hierarchyRepository?.loadHierarchy()

        expect(consoleErrorSpy).toHaveBeenCalledWith("Api not responding")
      }
      else {
        assert.fail("dataGateway is null")
      }
    })
  })
})
