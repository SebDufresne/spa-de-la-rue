import React from "react";
import { Link } from "react-router-dom";

interface logo {
  logo_url: string
}

export default function Logo(props: logo) {
  const {logo_url} = props;
  return (
    <div className="navbar-brand">
<<<<<<< HEAD
      <Link to="/">
        Logo
        <img alt="Logo" />
      </Link>
=======
      <Link to="/"><img alt="Logo" src={logo_url} height="150" width="150" /></Link>
>>>>>>> master
    </div>
  );
}
