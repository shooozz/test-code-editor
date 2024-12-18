import Editor from "@monaco-editor/react";

export const CodeEditor = ({ language, code, setCode }) => (
  <Editor
    height="300px"
    language={language}
    value={code}
    onChange={(value) => setCode(value || "")}
    theme="vs-dark"
    options={{ fontSize: 14 }}
  />
);
