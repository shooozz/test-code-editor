import Editor from "@monaco-editor/react";

interface Props {
  language: string;
  theme: string;
  code: string;
  setCode: (code: string) => void;
}

export const CodeEditor: React.FC<Props> = ({ language, theme, code, setCode }) => (
  <Editor
    height="300px"
    language={language}
    value={code}
    onChange={(value) => setCode(value || "")}
    theme={theme}
    options={{ fontSize: 14 }}
  />
);
