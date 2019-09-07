import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

interface profileInfo {
  first_name?: string;
  last_name?: string;
  gender?: string;
  description?: string;
  contact_phone?: string;
  contact_email?: string;
}

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

export default function BootstrapVolProfile(props: profileInfo) {
  const { contact_email } = props;

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const { loading, error, data } = useQuery(GET_VOLUNTEER_PROFILE, {
    variables: { contact_email }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validation1">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First Name"
            defaultValue={data.user.first_name}
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
