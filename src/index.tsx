import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { startMockServer } from "./features/code-runner/model/mockServer.ts";

startMockServer();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
