import React, { useEffect, useState } from "react";
import "components/Navbar.scss";
import Category from "./navbar/Category";
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
    { title: "Volunteers", path: "/admin/volunteer/" },
    { title: "Events", path: "/" },
    { title: "Graphs", path: "/" }
  ]
};

export default function Navbar(props) {
  const dispatch = useDispatch();

  // const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const { isAuthenticated, user } = props;

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
      <ul className="btn btn-success">Hello! {user && user.given_name}</ul>
      {isAuthenticated && !data.user.is_admin && (
        <li>
          <Category {...volunteerCategory} />
        </li>
      )}
      {isAuthenticated && data && data.user && data.user.is_admin && (
        <li>
          <Category {...adminCategory} />
        </li>
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
