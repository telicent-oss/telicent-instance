import Editor, { Monaco } from "@monaco-editor/react";
// import type monaco from "monaco-editor";
import rdfParser from "rdf-parse";
import { Readable } from "readable-stream";
import { useRef } from "react";
// import { MarkerSeverity } from "monaco-editor";
import { RdfInstancePresenter } from "../../rdfInstanceViewer/RdfInstancePresenter";
import { withInjection } from "../../Core/Providers/injection";
import { RdfPanelProps } from "../../types";
import { observer } from "mobx-react";
import { ttlKeywords } from "./ttlKeywords";
import { rootTokenizer } from "./tokenizer";
import { themeRules } from "./themeRules";

const TerminalComponent = observer((props: RdfPanelProps) => {
  const { handleRdfInput, viewModel } = props.presenter;
  //  console.log({ viewModel })
  const monacoRef = useRef<Monaco | null>(null);
  //  const monaco = useMonaco()
  // const markers: monaco.editor.IMarkerData[] = [];
  // console.log({ viewModel })
  if (monacoRef?.current) {
    // @ts-expect-error Property from does not exist on type Readable
    const input = Readable.from([viewModel.rdf]);
    // console.log({ rdf: viewModel.rdf })
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

    if (monacoRef.current) {
      monacoRef.current.editor.setModelMarkers(
        monacoRef.current.editor.getModels()[0],
        "owner",
        viewModel.markers
      );
    }
  }

  const handleOnMount = (_: unknown, monaco: Monaco) => {
    // Register Turtle language
    monaco.languages.register({ id: "turtle" });

    // Register Turtle language configuration
    monaco.languages.setMonarchTokensProvider("turtle", {
      tokenizer: {
        root: rootTokenizer,
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
        return { suggestions };
      },
    });

    monaco.editor.defineTheme("turtleTheme", {
      base: "vs-dark", // You can use 'vs' for the light theme

      inherit: true,

      rules: themeRules,

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
      value={viewModel.rdf ?? ""}
      options={{
        selectOnLineNumbers: true,
        automaticLayout: true,
      }}
      onMount={handleOnMount}
    />
  );
});

export const Terminal = withInjection({ presenter: RdfInstancePresenter })(TerminalComponent);
