import React from "react";
import "components/Application.scss";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const GET_VOLUNTEER_PROFILE = gql`
  query GetVolunteerProfile($contact_email: String!) {
    user(contact_email: $contact_email) {
      first_name
      last_name
      contact_email
      contact_phone
      description
    }
  }
`;

interface User {
  id: number;
  first_name: string;
  last_name: string;
  contact_email: string;
  gender: string;
}

interface UserListData {
  users: User[];
}

interface UserListVars {
  first_name: string;
}

const GET_USER_LIST = gql`
  query getUserList {
    users {
      id
      first_name
      last_name
      contact_email
      gender
    }
  }
`;

export default function Application() {
  const contact_email = useSelector(
    (state: any) => state.app.userInfo && state.app.userInfo.email
  );

  const { loading, error, data } = useQuery(GET_VOLUNTEER_PROFILE, {
    variables: { contact_email }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Please wait</p>;
  }
  return (
    <div className="App">
      {data.user && data.user.email && <h1>Logged in! </h1>}
      {!data.user && contact_email && <Redirect to="/volunteer/new/" />}
    </div>
  );
}
{
  /* {data && data.users.map(user => (
      <li key={user.id} className="list-group-item text-danger">
        {user.first_name} {user.last_name} {user.contact_email}{user.gender}
      </li>
    ))} */
}
