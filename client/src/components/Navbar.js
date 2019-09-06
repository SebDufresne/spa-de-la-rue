import React, { useEffect, useState } from "react";
import "components/Navbar.scss";
import Logo from "./navbar/Logo";
import Category from "./navbar/Category";
import { useAuth0 } from "../react-auth0-wrapper";
import { setUserInfo } from "state/app";
import { useDispatch } from "react-redux";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_VOLUNTEER_PROFILE = gql`
  query GetVolunteerProfile($contact_email: String!) {
    user(contact_email: $contact_email) {
      first_name
      last_name
      contact_email
      contact_phone
      description
      is_admin
      status
    }
  }
`;

// const logo_url = "/images/assets/logo_fr.png";

// const menuItems = [
//   {
//     "About Us": [
//       { title: "Vision, Mission, Valeurs", path: "/" },
//       { title: "Mot du Président, Directeur Général", path: "/" },
//       { title: "Membres du CA", path: "/" },
//       { title: "La Presse en Parle", path: "/" }
//     ]
//   },
//   {
//     News: [
//       { title: "Schedule", path: "/" },
//       { title: "Blogs", path: "/" },
//       { title: "Events", path: "/" }
//     ]
//   },
//   {
//     "Our Team": [
//       { title: "Administrators", path: "/" },
//       { title: "Volunteers", path: "/volunteers" },
//       { title: "Partners", path: "/partners" },
//       { title: "Sponsors", path: "/sponsors" }
//     ]
//   },
//   {
//     Press: [
//       { title: "Pictures", path: "/" },
//       { title: "Videos", path: "/" },
//       { title: "Meet Us", path: "/" }
//     ]
//   },
//   {
//     "Support Us": [
//       { title: "Donate", path: "/" },
//       { title: "Become a Partner", path: "/" },
//       { title: "Become a Sponsor", path: "/sponsor/new/" },
//       { title: "Create Event", path: "/events/new/" }
//     ]
//   }
// ];

const volunteerCategory = {
  "My profile": [{ title: "Profile", path: "/volunteer/profile/" }]
};

const adminCategory = {
  "Admin control": [
    { title: "Volunteers", path: "/" },
    { title: "Events", path: "/" },
    { title: "Graphs", path: "/" }
  ]
};

export default function Navbar(props) {
  const dispatch = useDispatch();

  // const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const { isAuthenticated, loginWithRedirect, logout, user } = props;

  console.log("props: ", props);

  // const [data, setData] = useState(null);

  useEffect(() => {
    if (user) {
      dispatch(setUserInfo(user));
    }
  });
  const contact_email = (user && user.email) || "";
  console.log("email: ", contact_email);
  const { loading, error, data } = useQuery(GET_VOLUNTEER_PROFILE, {
    variables: { contact_email }
  });
  if (loading) {
    return <div>loading</div>;
  }
  if (error) return <>error</>;

  console.log("data: ", data);

  return (
    // <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light justify-content-between nav">
    //   <Logo logo_url={logo_url} />
    //   <div className="d-flex">
    //     <ul className="collapse navbar-collapse" id="collapsibleNavbar">
    //       {menuItems.slice(0, -1).map((categoryData, index) => {
    //         return <Category key={index} {...categoryData} />;
    //       })}
    //     </ul>
    //     <Category {...menuItems[menuItems.length - 1]} />
    <React.Fragment>
      <div className="nav-item">Hello! {user && user.given_name}</div>
      {isAuthenticated && !data.user.is_admin && (
        <Category {...volunteerCategory} />
      )}
      {isAuthenticated && data && data.user && data.user.is_admin && (
        <h1>ADMIN</h1>
      )}

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </React.Fragment>
  );
}
