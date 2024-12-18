export const mockServer = (language, code) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (code.includes("error")) {
        resolve({ status: "error", error: "SyntaxError: Simulated error detected" });
      } else {
        resolve({
          status: "success",
          output: `Simulated output for ${language}:\n${code}`,
        });
      }
    }, 1000);
  });
};
