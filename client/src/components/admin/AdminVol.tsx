import React from "react";
import { gql } from "apollo-boost";
import VolunteerItem from "./VolunteerItem";
import { useQuery } from "@apollo/react-hooks";
import { Table } from "react-bootstrap";

const GET_USER = gql`
  query GetUsers {
    users {
      contact_email
      first_name
      last_name
      status
    }
  }
`;

export default function AdminVolunteer() {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.users &&
            data.users.map((user: object, index: number) => {
              return <VolunteerItem key={index} id={index + 1} {...user} />;
            })}
        </tbody>
      </Table>
    </div>
  );
}