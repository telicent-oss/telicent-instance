import { z } from "zod";
import { injectable } from "inversify";
import OntologyService from "@telicent-oss/ontologyservice"
import { ResponseSchema } from "../rdfInstanceViewer/Types";
import { ObjectPropertiesResponseStub } from "../TestTools/ObjectPropertyResponseStub";
import { DataTypePropertyResponseStub } from "../TestTools/DataTypePropertyResponseStub";

@injectable()
export class FakeHttpGateway {
  private ontologyService = new OntologyService("fake-address", "fake-topic")

  get = async <T extends z.infer<typeof ResponseSchema>>(
    query: string,
    validationCallback: (data: unknown) => T
  ): Promise<T['results']['bindings']> => {
    // console.log(query)
    // Create a stubbed response matching the structure expected by T
    let stubbedResponse: unknown

    if (query.includes("object_property")) {
      stubbedResponse = ObjectPropertiesResponseStub
    }
    if (query.includes("data_type_property")) {
      stubbedResponse = DataTypePropertyResponseStub
    }
    // await Promise.resolve();

    // Validate the stubbed response with the provided callback
    const validatedResponse = validationCallback(stubbedResponse);

    // Return the bindings part of the response
    return validatedResponse.results.bindings;
  }

  getPrefixes = () => this.ontologyService.prefixDict

  addPrefix = (prefix: string, uri: string) => {
    this.ontologyService.addPrefix(prefix, uri)
  }

  getUserFriendlyURI = (s: string) => this.ontologyService.shorten(s)
}
