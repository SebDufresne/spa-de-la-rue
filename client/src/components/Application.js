import React from "react";
import "components/Application.scss";
// import useApplicationData from "hooks/useApplicationData";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Test_Query = gql`
  {
    users {
      id
      first_name
      last_name
    }
  }
`;

export default function Application() {
  // const { state } = useApplicationData();
  const { loading, error, data } = useQuery(Test_Query);
  const userList = [];
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="App">
      <h1>List of users</h1>

      <ul>
        {
          data.users.map(user => (
            <li key={user.id}>
              {user.first_name} {user.last_name} {user.email}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
