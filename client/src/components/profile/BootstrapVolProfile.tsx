import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

interface profileInfo {
  contact_email: string;
}

const GET_VOLUNTEER_PROFILE = gql`
  query GetVolunteerProfile($contact_email: String!) {
    user(contact_email: $contact_email) {
      first_name
      last_name
      contact_email
      contact_phone
      description
      status
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser(
    $contact_email: String!
    $first_name: String!
    $last_name: String!
    $contact_phone: String
    $description: String
    ) { 
      updateUser(
        contact_email: $contact_email 
        status: $status
      ) {
        contact_email
        status
      }
  }
`;

export default function BootstrapVolProfile(props: profileInfo) {
  const { contact_email } = props;

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
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
    <div className="container">
      {data.user.status === "new" ? (
        <React.Fragment>Your application is still in process...</React.Fragment>
      ) : (
        <React.Fragment>
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
                <Form.Control.Feedback type="invalid">Please provide a valid first name</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validation2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last Name"
                  defaultValue={data.user.last_name}
                />
                <Form.Control.Feedback type="invalid">Please provide a valid last name</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="8" controlId="validation3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  placeholder="Email"
                  defaultValue={data.user.contact_email}
                />
                {/* <Form.Control.Feedback type="invalid">Please provide a valid email</Form.Control.Feedback> */}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validation4">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Phone number"
                  defaultValue={data.user.contact_phone}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="8" controlId="validation5">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  defaultValue={data.user.description}
                />
              </Form.Group>
            </Form.Row>
            <Button type="submit">Modify</Button>
          </Form>
        </React.Fragment>
      )}
    </div>
  );
}
