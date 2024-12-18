import { lazy } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(() => import("./home-page"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
