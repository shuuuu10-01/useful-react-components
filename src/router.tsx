import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ButtonPage from "./pages/Button/ButtonPage";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/buttons" element={<ButtonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
