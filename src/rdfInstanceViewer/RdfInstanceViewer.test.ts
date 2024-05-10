import { expect, test, describe, beforeEach, vi } from 'vitest'
import { Types } from '../Core/Types'
import 'reflect-metadata'
import { AppTestHarness } from '../TestTools/AppTestHarness'
import { GetHierarchyStub } from '../TestTools/GetHierarchyStub'
import { FakeHttpGateway } from '../Core/FakeHttpGateway'
import { RdfInstanceRepository } from './RdfInstanceRepository'
import { RdfInstancePresenter } from './RdfInstancePresenter'

let appTestHarness = null
let dataGateway: FakeHttpGateway | null = null
let rdfRepository: RdfInstanceRepository | null = null
let rdfPresenter: RdfInstancePresenter | null = null

describe('RdfInstanceViewer', () => {
  beforeEach(() => {
    appTestHarness = new AppTestHarness()
    appTestHarness.init()

    dataGateway = appTestHarness.container.get(Types.IDataGateway)
    rdfRepository = appTestHarness.container.get(RdfInstanceRepository)
    rdfPresenter = appTestHarness.container.get(RdfInstancePresenter)
  })

  describe('loading', () => {
    test('list hierarchy', async () => {
      dataGateway!.get = vi.fn().mockImplementation(() => {
        return GetHierarchyStub()
      })

      await rdfRepository!.loadHierarchy()
      const vm = rdfPresenter!.viewModel!.hierarchy

      expect(dataGateway!.get).toHaveBeenCalled()
      expect(vm).toEqual({})
    })
  })
})