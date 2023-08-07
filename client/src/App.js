import React, { useState, useEffect } from "react";
import Header from "./components/Layout/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import MenuPage from "./pages/MenuPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/menu/:order" element={<MenuPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
