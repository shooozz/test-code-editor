export const ResultBlock = ({ result }) => (
  <div
    style={{
      marginTop: "20px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
      minHeight: "100px",
    }}
  >
    <strong>Result:</strong>
    <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
      {result || "No result yet. Run your code to see the output."}
    </pre>
  </div>
);
