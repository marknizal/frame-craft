import type { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/frame-craft/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
