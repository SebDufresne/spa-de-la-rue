import React from "react";
import "components/Application.scss";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Test_Query = gql`
  {
    users {
      id
      first_name
      last_name
      contact_email
    }
  }
`;

export default function Application() {
  // const { state } = useApplicationData();
  const { loading, error, data } = useQuery(Test_Query);
  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  const userList = data.users.map(user => (
    <li key={user.id}>
      {user.first_name} {user.last_name} {user.contact_email}
    </li>
  ));


  return (
    <div className="App">
      <h1>List of users</h1>

      <ul>{userList}</ul>
    </div>
  );
}
