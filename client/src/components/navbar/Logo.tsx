import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="navbar-brand">
      <Link to="/">
        Logo
        <img alt="Logo" />
      </Link>
    </div>
  );
}
