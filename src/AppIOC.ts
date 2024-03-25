import { BaseIOC } from "./BaseIOC";
import { HttpGateway } from "./Core/HttpGateway";
import { Types } from "./Core/Types";

export const container = new BaseIOC().buildBaseTemplate()
container.bind(Types.IDataGateway).to(HttpGateway).inSingletonScope()
