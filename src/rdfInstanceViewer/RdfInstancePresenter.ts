import { inject, injectable } from "inversify";
import { RdfInstanceRepository } from "./RdfInstanceRepository"
import { action, makeObservable } from "mobx";

@injectable()
export class RdfInstancePresenter {
  @inject(RdfInstanceRepository)
  rdfInstanceRepository!: RdfInstanceRepository

  constructor() {
    makeObservable(this, {
      load: action
    })
  }

  load = () => {
    this.rdfInstanceRepository.loadHierarchy()
    console.log(this.rdfInstanceRepository.hierarchyPm)
  }
}
