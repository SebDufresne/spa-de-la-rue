import React from "react";
import { gql } from "apollo-boost";
import VolunteerItem from "./VolunteerItem";
import { useQuery } from "@apollo/react-hooks";
import { Table } from "react-bootstrap";

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
      </Table>
    </div>
  );
}
