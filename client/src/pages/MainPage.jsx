import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <Link to="/menu/:here">
        <button>포장</button>
      </Link>
      <Link to="/menu/:togo">
        <button>매장</button>
      </Link>
    </div>
  );
}
