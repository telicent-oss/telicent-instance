import { inject, injectable } from "inversify"
import { HierarchyRepository } from "./HierarchyRepository"
import { action, makeObservable, computed } from "mobx"

@injectable()
export class HierarchyPresenter {
  @inject(HierarchyRepository)
  hierarchyRepository!: HierarchyRepository

  constructor() {
    makeObservable(this, {
      load: action,
      viewModel: computed
    })
  }

  get viewModel() {
    const hierarchy = JSON.parse(JSON.stringify(this.hierarchyRepository.hierarchyPm))
    return {
      hierarchy,
      hasHierarchy: Object.keys(hierarchy).length > 0
    }
  }

  load = () => {
    this.hierarchyRepository.loadHierarchy()
  }
}
