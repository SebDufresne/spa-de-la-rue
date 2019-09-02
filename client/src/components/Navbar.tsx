import React from "react";
import "components/Navbar.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm fixed-top navbar-light bg-light justify-content-between nav">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <div className="d-flex">
          <ul className="collapse navbar-collapse" id="collapsibleNavbar">
            <li className="nav-link">
              <Link to="/about/">About Us</Link>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                News
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">schedule</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                Press
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Pictures</a>
                </li>
                <li>
                  <a href="#">Videos</a>
                </li>
                <li>
                  <a href="#">Meet Us</a>
                </li>
              </ul>
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
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <Route path="/about/" component={AboutUs} />
      </nav>
      
  );
}