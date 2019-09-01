import React from "react";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-expand-md fixed-top navbar-light bg-light">
        <div className="navbar nav">
          <a className="Nav-brand" href="/">
            Logo
          </a>

          <li className="collapse navbar-collapse" id="collapsibleNavbar">
            <a className="nav-item nav-link">About us</a>
            <a className="nav-item nav-link">News</a>
          </li>
        </div>
      </nav>
    </React.Fragment>
  );
}
