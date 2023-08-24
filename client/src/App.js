import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import MenuPage from "./pages/MenuPage";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Login from "./components/admin/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    const getSessionUserId = sessionStorage.getItem("user_id");
    setToken(getSessionUserId === null ? "" : getSessionUserId);
    setIsLoading(true);
  }, [token]);

  return (
    <>
      <Routes>
        {isLoading ? (
          <>
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute
                  component={<Admin setToken={setToken} />}
                  authenticated={token}
                />
              }
            />
            <Route path="/menu/:order" element={<MenuPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/*" element={<NotFound />} />
          </>
        ) : (
          <Route path="/*" element={<div>Loading</div>} />
        )}
      </Routes>
    </>
  );
}

export default App;
