type CreateTriple = {
  subject: string;
  predicate: string;
  object: string;
};

class RDF {
  static triple: string[];
  static prefix: string[];

  static addNewLine(add: boolean = true) {
    return add ? "\n" : "";
  }

  static createTripleOnNewLine({ subject, predicate, object }: CreateTriple) {
    this.triple = [`${this.addNewLine()}${subject}`, predicate, object, "."];
    return this;
  }

  static createPrefix({
    prefix,
    value,
    startOnNewLine,
    endOnNewLine,
  }: {
    prefix: string;
    value: string;
    startOnNewLine?: boolean;
    endOnNewLine?: boolean;
  }) {
    this.prefix = [
      `${this.addNewLine(startOnNewLine)}@prefix`,
      `${prefix}:`,
      `<${value}>`,
      `.${this.addNewLine(endOnNewLine)}`,
    ];
    return this;
  }

  static createLiteral(value: string) {
    return `"${value}"`;
  }

  static convertToString(rdf?: string[]) {
    if (rdf) {
      return rdf.join(" ");
    }
    if (this.triple) {
      return this.triple.join(" ");
    }
    if (this.prefix) {
      return this.prefix.join(" ");
    }

    return "";
  }
}

export default RDF;
