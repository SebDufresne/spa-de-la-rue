import React from "react";
import "components/Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm fixed-top navbar-light bg-light justify-content-between nav">
      <a className="navbar-brand" href="#">
        Logo
      </a>
      <div className="d-flex">
        <ul className="collapse navbar-collapse" id="collapsibleNavbar">
          <li className="nav-item">
            <a className="nav-link" href="#">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Press
            </a>
          </li>
        </ul>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Support Us
          </a>
        </li>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
