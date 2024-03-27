import { inject, injectable } from "inversify";
import { RdfInstanceRepository } from "./RdfInstanceRepository"
import { action, computed, makeObservable } from "mobx";

@injectable()
export class RdfInstancePresenter {
  @inject(RdfInstanceRepository)
  rdfInstanceRepository!: RdfInstanceRepository

  constructor() {
    makeObservable(this, {
      load: action,
      viewModel: computed
    })
  }
  get viewModel() {
    const hierarchy = JSON.parse(JSON.stringify(this.rdfInstanceRepository.hierarchyPm))
    return {
      hierarchy,
      hasHierarchy: Object.keys(hierarchy).length > 0
    }
  }
  load = () => {
    this.rdfInstanceRepository.loadHierarchy()
    console.log(this.rdfInstanceRepository.hierarchyPm)
  }
}
