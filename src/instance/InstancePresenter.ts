import { inject, injectable } from "inversify";
import { InstanceRepository } from "./InstanceRepository"
import { action, makeObservable } from "mobx";

@injectable()
export class InstancePresenter {
  @inject(InstanceRepository)
  instanceRepository!: InstanceRepository

  constructor() {
    makeObservable(this, {
      load: action
    })
  }

  load = () => {
    this.instanceRepository.loadHierarchy()
    console.log(this.instanceRepository.hierarchyPm)
  }
}
