import { useState } from "react";

export const LanguageSelector = () => {
  const [language, setLanguage] = useState("javascript");

  return (
    <div>
      <label htmlFor="language-select">Choose Language: </label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ padding: "5px", fontSize: "16px" }}
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
      </select>
    </div>
  );
};
