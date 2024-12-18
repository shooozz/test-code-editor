import { CodeEditor } from "../../entities/code/ui/code-editor";
import { ResultBlock } from "../../entities/result/ui/result-block";
import { RunButton } from "../../features/code-runner/ui/run-btn";
import { LanguageSelector } from "../../features/select-language/ui/language-selector";

const HomePage = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Online Code Editor</h1>
      <p>Write and execute code in your chosen language.</p>
      <LanguageSelector />
      <CodeEditor language={undefined} code={undefined} setCode={undefined} />
      <RunButton language={undefined} code={undefined} setResult={undefined} />
      <ResultBlock result={undefined} />
    </div>
  );
};

export default HomePage;
