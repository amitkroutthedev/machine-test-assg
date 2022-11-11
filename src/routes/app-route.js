import { Routes, Route } from "react-router-dom";

import SignInPage from "../pages/SignInPage";
import Home from "../pages/Home";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
