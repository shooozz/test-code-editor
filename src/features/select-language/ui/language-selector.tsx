import { ChangeEvent } from "react";

interface Props {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageSelector: React.FC<Props> = ({ language, setLanguage }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <label htmlFor="language-select">Выберите язык: </label>
      <select
        id="language-select"
        value={language}
        onChange={handleChange}
        style={{ padding: "5px", fontSize: "16px", borderRadius: "5px" }}
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
      </select>
    </div>
  );
};
