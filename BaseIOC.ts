import { Container } from "inversify";
import { InstanceRepository } from "./src/instance/InstanceRepository";

export class BaseIOC {
  container: Container
  constructor() {
    this.container = new Container({
      autoBindInjectable: true,
      defaultScope: 'Transient'
    })
  }

  buildBaseTemplate = () => {
    this.container.bind(InstanceRepository).to(InstanceRepository).inSingletonScope()
    return this.container
  }
}
