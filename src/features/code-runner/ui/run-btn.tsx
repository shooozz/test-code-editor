import { useState } from "react";
import { mockServer } from "../model/mockServer";

export const RunButton = ({ language, code, setResult }) => {
  const handleRunCode = async () => {
    setResult("Running...");
    const response = await mockServer(language, code);
    if (response.status === "success") {
      setResult(response.output);
    } else {
      setResult(`Error: ${response.error}`);
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
      }}
    >
      Run
    </button>
  );
};
