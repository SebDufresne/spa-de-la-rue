import React from "react";
import "components/Navbar.scss";
import Logo from "./navbar/Logo";
import Category from "./navbar/Category";
import { useAuth0 } from "../react-auth0-wrapper";

const menuItems = [
  {
    "About Us": [
      { title: "Vision, Mission, Valeurs", path: "/" },
      { title: "Mot du Président, Directeur Général", path: "/" },
      { title: "Membres du CA", path: "/" },
      { title: "La Presse en Parle", path: "/" }
    ]
  },
  {
    News: [
      { title: "Schedule", path: "/" },
      { title: "Blogs", path: "/" },
      { title: "Events", path: "/" }
    ]
  },
  {
    "Our Team": [
      { title: "Administrators", path: "/" },
      { title: "Volunteers", path: "/" },
      { title: "Partners", path: "/" },
      { title: "Sponsors", path: "/sponsors" }
    ]
  },
  {
    Press: [
      { title: "Pictures", path: "/" },
      { title: "Videos", path: "/" },
      { title: "Meet Us", path: "/" }
    ]
  },
  {
    "Support Us": [
      { title: "Join Our Team", path: "/volunteer/new/" },
      { title: "Donate", path: "/" },
      { title: "Become a Partner", path: "/" },
      { title: "Become a Sponsor", path: "/sponsor/new/" }
    ]
  }
];

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light justify-content-between nav">
      <Logo />
      <div className="d-flex">
        <ul className="collapse navbar-collapse" id="collapsibleNavbar">
          {menuItems.slice(0, -1).map((categoryData, index) => {
            return <Category key={index} {...categoryData} />;
          })}
        </ul>
        <Category {...menuItems[menuItems.length - 1]} />

        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        )}

        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
