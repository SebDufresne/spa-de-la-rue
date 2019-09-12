import React from "react";
import Logo from "./navbar/Logo";
import Category from "./navbar/Category";
import { useAuth0 } from "../react-auth0-wrapper";
import Navbar from "./Navbar";

const logo_url = "/images/assets/logo_fr.png";

const menuItems = [
  {
    "À Propos": [
      { title: "Vision, Mission, Valeurs", path: "/" },
      { title: "Mot du Président, Directeur Général", path: "/" },
      { title: "Membres du CA", path: "/" },
      { title: "La Presse en Parle", path: "/" }
    ]
  },
  {
    "Nouvelles": [
      { title: "Blogs", path: "/" },
      { title: "Évènements", path: "/clinics/" }
    ]
  },
  {
    "Notre Équipe": [
      { title: "Volontaires", path: "/volunteers" },
      { title: "Partenaires", path: "/partners" },
      { title: "Commanditaires", path: "/sponsors" }
    ]
  },
  {
    "Presse": [
      { title: "Photos", path: "/" },
      { title: "Vidéos", path: "/" },
      { title: "Rencontrez-nous", path: "/" }
    ]
  },
  {
    "Contribuez": [
      { title: "Donation", path: "/" },
      { title: "Futur partenaire", path: "/" },
      { title: "Futur commanditaire", path: "/sponsor/new/" }
    ]
  }
];

export default function NavParent() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between big-nav">
        <Logo logo_url={logo_url} />
        <div className="d-flex">
          <ul className="collapse navbar-collapse" id="collapsibleNavbar">
            {menuItems.slice(0, -1).map((categoryData, index) => {
              return <Category key={index} {...categoryData} />;
            })}
          </ul>
          <ul>
            <Category {...menuItems[menuItems.length - 1]} />
          </ul>
          {user && (
            <Navbar
              loginWithRedirect={loginWithRedirect}
              isAuthenticated={isAuthenticated}
              logout={logout}
              user={user}
            />
          )}
          {!isAuthenticated && (
            <ul>
              <button
                className="btn btn-info"
                onClick={() => loginWithRedirect()}
              >
                Log in
              </button>
            </ul>
          )}

          {isAuthenticated && (
            <ul>
              <button className="btn btn-warning" onClick={() => logout()}>
                Log out
              </button>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}
