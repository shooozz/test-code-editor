import { CodeEditor, ResultBlock } from "../../entities";
import { LanguageSelector, ThemeSelector, RunButton } from "../../features";
import { useState } from "react";

const HomePage = () => {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("vs-dark");
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Тестовое задание на позицию Junior Frontend Developer</h1>
      <p
        style={{
          fontSize: "20px",
          marginTop: "10px",
        }}
      >
        Попробуйте вывести "Hello, World!" (не чувствителен к регистру)
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <LanguageSelector language={language} setLanguage={setLanguage} />
        <ThemeSelector theme={theme} setTheme={setTheme} />
      </div>
      <CodeEditor language={language} theme={theme} code={code} setCode={setCode} />
      <RunButton language={language} code={code} setResult={setResult} />
      <ResultBlock result={result} />
    </div>
  );
};

export default HomePage;
