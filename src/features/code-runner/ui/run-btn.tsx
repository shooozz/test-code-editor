interface Props {
  language: string;
  code: string;
  setResult: (result: string) => void;
}

export const RunButton: React.FC<Props> = ({ language, code, setResult }) => {
  const handleRunCode = async () => {
    setResult("Wait....");
    try {
      code = code.toLowerCase();
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ language, code }), // Динамически подставляем язык и код
      });

      const data = await response.json();

      if (response.ok) {
        setResult(`Output:\n${data.output}`);
      } else {
        setResult(`Error:\n${data.error}`);
      }
    } catch (error) {
      console.log(error);
      setResult(`Network Error:\n${error}`);
    }
  };

  return (
    <button
      onClick={handleRunCode}
      style={{
        marginTop: "10px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
      }}
    >
      Run
    </button>
  );
};
