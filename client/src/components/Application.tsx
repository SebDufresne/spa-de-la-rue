import React from "react";
import "components/Application.scss";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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
  const { loading, error, data } = useQuery<UserListData>(
    GET_USER_LIST
  );

  if (loading) {
    return <p>Loading...</p>
  }
  
  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <div className="App">
      <ul>
        <h1>test</h1>
        {data && data.users.map(user => (
          <li key={user.id} className="list-group-item text-danger">
            {user.first_name} {user.last_name} {user.contact_email}{user.gender}
          </li>
        ))}
      </ul>
    </div>
  );
}
