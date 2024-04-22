import { assert, beforeEach, describe, expect, it, vi } from "vitest";
import "reflect-metadata"
import { Types } from "../../../Core/Types";
import { AppTestHarness } from "../../../TestTools/AppTestHarness";
import { GetHierarchyStub } from "../../../TestTools/GetHierarchyStub";
import { HierarchyPresenter } from "../HierarchyPresenter";
import { FakeHttpGateway } from "../../../Core/FakeHttpGateway";
import { HierarchyRepository, getAndCheckHierarchyResponse } from "../HierarchyRepository";
import { HIERARCHY_QUERY, rootHierarchyUri } from "../../../constants";

let appTestHarness: AppTestHarness | null = null
let hierarchyPresenter: HierarchyPresenter | null = null
let dataGateway: FakeHttpGateway | null = null
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

        await hierarchyRepository?.loadHierarchy()

        expect(dataGateway.get).toHaveBeenCalledWith(HIERARCHY_QUERY, getAndCheckHierarchyResponse)
        expect(hierarchyRepository?.hierarchyPm?.id).toEqual(rootHierarchyUri)
        expect(hierarchyRepository?.hierarchyPm?.children.length).toBe(3)
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
