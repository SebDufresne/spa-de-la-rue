import React from "react";
import { gql } from "apollo-boost";
import VolunteerItem from "./VolunteerItem";
import { useQuery } from "@apollo/react-hooks";
import { Table } from "react-bootstrap";

const GET_USER = gql`
  query GetUser {
    user{
      first_name
      last_name
      status
    }
  }
`;

export default function AdminVolunteer() {
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

        </tbody>
      </Table>
    </div>
  );
}
