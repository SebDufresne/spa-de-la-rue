import React from "react";
import "components/Application.scss";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

interface UserList {
  id: number;
  first_name: string;
  last_name: string;
  contact_email: string;
}

interface UserListData {
  userList: UserList[];
}

interface UserListVars {
  first_name: string;
}

const GET_USER_LIST = gql`
  query getUserList($first_name: String!) {
    userList(first_name: $first_name) {
      id
      first_name
      last_name
      contact_email
    }
  }
`;

export default function Application() {
  const { loading, data } = useQuery<UserListData, UserListVars>(
    GET_USER_LIST,
    { variables: { first_name: 'FirstName'} }
  );

  return (
    <div className="App">
    {loading ? (
      <p>Loading...</p>
    ) : (
      <ul>
        <h1>test</h1>
        {data && data.userList.map(user => (
          <li key={user.id} className="list-group-item text-danger">
            {user.first_name} {user.last_name} {user.contact_email}
          </li>
        ))}
      </ul>
    )}
    </div>
  );
}
