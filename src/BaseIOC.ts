import { Container } from "inversify";
import { RdfInstanceRepository } from "./rdfInstanceViewer/RdfInstanceRepository";
import { HierarchyRepository } from "./Components/HierarchyMenu/HierarchyRepository";

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
    this.container.bind(HierarchyRepository).to(HierarchyRepository).inSingletonScope()
    return this.container
  }
}
