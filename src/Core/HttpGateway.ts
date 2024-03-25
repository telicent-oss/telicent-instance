import { z } from "zod"
import { injectable } from "inversify"
import OntologyService from "@telicent-oss/ontologyservice"
import { ResponseSchema } from "../rdfInstanceViewer/Types"

@injectable()
export class HttpGateway {
  private ontologyService = new OntologyService("http://localhost:3030/", "ontology")
  get = async <T extends z.infer<typeof ResponseSchema>>(query: string, validationCallback: (data: unknown) => T): Promise<T['results']['bindings']> => {
    const spOut = await this.ontologyService.runQuery(query)
    const spOutValidated = validationCallback(spOut)
    return spOutValidated.results.bindings
  }
}

