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

  const { loading, error, data } = useQuery(GET_VOLUNTEER_PROFILE, {
    variables: { contact_email }
  });
  if (loading) {
    return <div>loading</div>;
  }
  if (error) return <div>{error.message}</div>;

  return (
    <React.Fragment>
      <div className="nav-item">Hello! {user && user.given_name}</div>
      {isAuthenticated && !data.user.is_admin && (
        <Category {...volunteerCategory} />
      )}
      {isAuthenticated && data && data.user && data.user.is_admin && (
        <Category {...adminCategory} />
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
