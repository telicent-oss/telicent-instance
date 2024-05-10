import { z } from "zod"
import { injectable } from "inversify"
import OntologyService from "@telicent-oss/ontologyservice"
import { ResponseSchema } from "../rdfInstanceViewer/Types"
import config from "../../config/app-config"

@injectable()
export class HttpGateway {
  private ontologyService = new OntologyService(config.tripleStore.uri, config.tripleStore.topic)
  get = async <T extends z.infer<typeof ResponseSchema>>(query: string, validationCallback: (data: unknown) => T): Promise<T['results']['bindings']> => {
    const spOut = await this.ontologyService.runQuery(query)
    const spOutValidated = validationCallback(spOut)
    return spOutValidated.results.bindings
  }

  getPrefixes = () => this.ontologyService.prefixDict

  addPrefix = (prefix: string, uri: string) => {
    this.ontologyService.addPrefix(prefix, uri)
  }

  getUserFriendlyURI = (s: string) => this.ontologyService.shorten(s)
}
