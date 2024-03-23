/* The idea behind this file is to collate useful functions that
  * can be either extracted in to their own library or
  * need to be exported (but currently aren't) from the
  * package they are currently in.
  */
import { z } from "zod";

// TODO: Needs to be exposed in @telicent-oss/ontologyservice
export const getAndCheckValidation = <T>(data: unknown, schema: z.ZodType<T, any, any>): T => {
  try {
    return schema.parse(data);
  } catch (err) {
    console.log(data)
    if (err instanceof z.ZodError) {
      throw new Error(`Validation failed: ${err.message} ${JSON.stringify(data)}`);
    }
    throw new Error('Validation failed');
  }
};
