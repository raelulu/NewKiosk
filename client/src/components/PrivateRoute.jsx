import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ authenticated, component: Component }) {
  return authenticated ? (
    Component
  ) : (
    <Navigate to="/admin" {...alert("로그인이 필요합니다.")}></Navigate>
  );
}
