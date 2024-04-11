import Editor, { Monaco } from "@monaco-editor/react";
import type monaco from "monaco-editor";
import rdfParser from "rdf-parse";
import { Readable } from "readable-stream";
import { useRef } from "react";
import { MarkerSeverity } from "monaco-editor";

// import { selectRDFCode } from "../../../reducers/InstanceViewSlice";

export type RdfPanelProps = {
  handleRdfInput: (e: unknown) => void;
};

const ttlKeywords = [
  "BASE",
  "PREFIX",
  "a",
  "true",
  "false",
  "integer",
  "decimal",
  "float",
  "double",
  "string",
  "langString",
  "@prefix",
  "@base",
  "@forSome",
  "@forAll",
  "@keywords",
  "@a",
  "@is",
  "@of",
  "@in",
  "@this",
  "@these",
  "@none",
  "@where",
  "@graph",
  "@default",
  "@named",
  // Add more keywords as needed
];

interface QuadError extends Error {
  context: {
    line: number;
    previousToken: {
      start: number;
      end: number;
      line: number;
    };
  };
}

const Terminal = (props: RdfPanelProps) => {
  const { handleRdfInput } = props;
  //  const rdf = useSelector(selectRDFCode);
  const monacoRef = useRef<Monaco | null>(null);
  //  const monaco = useMonaco()
  const markers: monaco.editor.IMarkerData[] = [];

  if (monacoRef?.current) {
    // @ts-expect-error Cannot find name rdf
    const input = Readable.from([rdf]);
    rdfParser
      .parse(input, { contentType: "text/turtle" })
      .on("data", () => {
        if (monacoRef.current) {
          monacoRef.current.editor.setModelMarkers(
            monacoRef.current.editor.getModels()[0],
            "owner",
            []
          );
        }
      })
      .on("error", (err: QuadError) => {
        markers.push({
          startColumn: err?.context.previousToken.start,
          endColumn: err?.context.previousToken.end,
          startLineNumber: err?.context.line,
          endLineNumber: err?.context.line,
          message: err.message,
          severity: MarkerSeverity.Error,
        });

        if (monacoRef.current) {
          monacoRef.current.editor.setModelMarkers(
            monacoRef.current.editor.getModels()[0],
            "owner",
            markers
          );
        }
      });
  }

  const handleOnMount = (_: unknown, monaco: Monaco) => {
    // Register Turtle language
    monaco.languages.register({ id: "turtle" });

    // Register Turtle language configuration
    monaco.languages.setMonarchTokensProvider("turtle", {
      tokenizer: {
        root: [
          [/<.*?>/, "keyword"],
          [/".*?"/, "string"],
          [/@\w*/, "identifier"],
          [/#.*/, "comment"],
          [/\b(?!<[^>]*:)[a-zA-Z_]\w*:(?![^<]*>)/, "number"], // used for prefix names
        ],
      },
    });

    monaco.languages.registerCompletionItemProvider("turtle", {
      triggerCharacters: ["@"],
      provideCompletionItems: (_: unknown, position) => {
        const suggestions = [
          ...ttlKeywords.map((k) => {
            return {
              label: k,
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: k,
              range: {
                startLineNumber: position.lineNumber,
                startColumn: position.column - 1,
                endLineNumber: position.lineNumber,
                endColumn: position.column,
              },
            };
          }),
        ];
        // TODO: suggestions don't appear if contains an @ or not an uppercase letter @forAll type A
        return { suggestions };
      },
    });

    monaco.editor.defineTheme("turtleTheme", {
      base: "vs-dark", // You can use 'vs' for the light theme

      inherit: true,

      rules: [
        { token: "comment", foreground: "7F7F7F" }, // Comment color
        { token: "string", foreground: "CE9178" }, // String color
        { token: "number", foreground: "B5CEA8" }, // Number color
        { token: "keyword", foreground: "569CD6" }, // Keyword color
        { token: "operator", foreground: "D4D4D4" }, // Operator color
        { token: "identifier", foreground: "ff0000" }, // Identifier color
        { token: "white", foreground: "FFFFFF" }, // Whitespace color
      ],

      colors: {
        "editor.foreground": "#F8F8F2",
        "editor.background": "#282C34",
        "editor.selectionBackground": "#3E4451",
        "editor.lineHighlightBackground": "#2C313A",
        "editorCursor.foreground": "#A9B7C6",
        "editorWhitespace.foreground": "#3B4048",
      },
    });

    // Apply the theme to Monaco Editor
    monaco.editor.setTheme("turtleTheme");
    // Set the language for the editor
    monaco.editor.setModelLanguage(monaco.editor.getModels()[0], "turtle");

    monacoRef.current = monaco;
  };

  return (
    <Editor
      height="93.5vh"
      language="turtle"
      onChange={handleRdfInput}
      value={""}
      options={{
        selectOnLineNumbers: true,
        automaticLayout: true,
      }}
      onMount={handleOnMount}
    />
  );
};

export default Terminal;
