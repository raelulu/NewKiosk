import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ authenticated, component: Component }) {
  return authenticated === "kiosk123" ? (
    Component
  ) : (
    <Navigate to="/login" {...alert("로그인이 필요합니다.")}></Navigate>
  );
}
