import React from "react";
import "components/Navbar.scss";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-expand-md fixed-top navbar-light bg-light nav justify-content-between">
        <a className="Nav-brand" href="/">
          Logo
        </a>

        <li
          className="collapse navbar-collapse d-flex justify-content-end"
          id="collapsibleNavbar"
        >
          <a className="nav-item nav-link" href="/">
            About us
          </a>
          <a className="nav-item nav-link" href="/">
            News
          </a>
        </li>
      </nav>
    </React.Fragment>
  );
}
