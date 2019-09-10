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
  "Hello, Volunteer!": [
    { title: "Profile", path: "/volunteer/profile/" },
    { title: "Schedule", path: "/clinics" }
  ]
};

const adminCategory = {
  "Hello, Admin!": [
    { title: "Volunteers", path: "/admin/volunteer/" },
    { title: "Events", path: "/" },
    { title: "Graphs", path: "/" },
    { title: "Schedule", path: "/clinics" },
    { title: "Create Event", path: "/events/new/" }
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
    variables: { contact_email },
    pollInterval: 1000
  });

  if (loading) {
    return <div>loading</div>;
  }

  if (error) return <div>{error.message}</div>;
  
  if (user&&user.given_name) {
    const dynamKey =  "Hello, "+user.given_name;
    const volObj ={
      [dynamKey]: [
        { title: "Profile", path: "/volunteer/profile/" },
        { title: "Schedule", path: "/clinics" }
      ]
    }
  }

  return (
    <React.Fragment>
      {/* <ul className="btn btn-success">Hello! {user && user.given_name}</ul> */}
      {((isAuthenticated && data.user && !data.user.is_admin) ||
        !data.user) && (
        <li>
          <Category
            {...{
              "Hello, Volunteer!": [
                { title: "Profile", path: "/volunteer/profile/" },
                { title: "Schedule", path: "/clinics" }
              ]
            }}
          />
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
