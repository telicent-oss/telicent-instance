import { Container } from "inversify";
import { RdfInstanceRepository } from "./rdfInstanceViewer/RdfInstanceRepository";

export class BaseIOC {
  container: Container
  constructor() {
    this.container = new Container({
      autoBindInjectable: true,
      defaultScope: 'Transient'
    })
  }

  buildBaseTemplate = () => {
    this.container.bind(RdfInstanceRepository).to(RdfInstanceRepository).inSingletonScope()
    return this.container
  }
}
