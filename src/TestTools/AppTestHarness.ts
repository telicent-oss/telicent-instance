import { Container } from "inversify"
import { BaseIOC } from "../BaseIOC"
import { FakeHttpGateway } from "../Core/FakeHttpGateway"
import { Types } from "../Core/Types"

export class AppTestHarness {
  container!: Container
  dataGateway!: FakeHttpGateway

  init() {
    this.container = new BaseIOC().buildBaseTemplate()

    this.container.bind(Types.IDataGateway).to(FakeHttpGateway).inSingletonScope()
  }
}
