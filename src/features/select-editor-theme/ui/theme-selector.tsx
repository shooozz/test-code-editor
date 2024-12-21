import { ChangeEvent } from "react";

interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeSelector: React.FC<Props> = ({ theme, setTheme }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  return (
    <div>
      <label htmlFor="theme-select">Выбор темы: </label>
      <select
        id="theme-select"
        value={theme}
        onChange={handleChange}
        style={{ padding: "5px", fontSize: "16px", borderRadius: "5px" }}
      >
        <option value="light">Светлый</option>
        <option value="vs-dark">Темный</option>
      </select>
    </div>
  );
};
