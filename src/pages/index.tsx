import { Route, Routes } from "react-router";
import HomePage from "./home-page/index.tsx";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
