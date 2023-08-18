import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import MenuPage from "./pages/MenuPage";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import AdminLogin from "./components/admin/AdminLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/menu/:order" element={<MenuPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
