import React from "react";
import "components/Navbar.scss";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm fixed-top navbar-light bg-light justify-content-between nav">
        <a className="Nav-brand" href="/">
          Logo
        </a>
        <div className="d-flex">
          <li className="collapse navbar-collapse " id="collapsibleNavbar">
            <a className="nav-link" href="/">
              About us
            </a>
            <a className="nav-link" href="/">
              News
            </a>
            <a className="nav-link" href="/">
              Press
            </a>
          </li>
          <a className="nav-link" href="/">
            Support Us
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon navbar-inverse"></span>
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
}
