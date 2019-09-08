import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";

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

const UPDATE_PROFILE = gql`
  mutation UpdateProfile(
    $contact_email: String!
    $first_name: String!
    $last_name: String!
    $contact_phone: String
    $description: String
  ) {
    updateProfile(
      contact_email: $contact_email
      first_name: $first_name
      last_name: $last_name
      contact_phone: $contact_phone
      description: $description
    ) {
      contact_email
      first_name
      last_name
      contact_phone
      description
    }
  }
`;

export default function BootstrapVolProfile(props: profileInfo) {
  const { contact_email } = props;

  const [validated, setValidated] = useState(false);
  const [disable, setDisable] = useState(true);

  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [contact_phone, setContact_phone] = useState();
  const [description, setDescription] = useState();

  const [updateProfile] = useMutation(UPDATE_PROFILE);

  const { loading, error, data } = useQuery(GET_VOLUNTEER_PROFILE, {
    variables: { contact_email }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    updateProfile({
      variables: {
        first_name,
        last_name,
        contact_email,
        contact_phone,
        description
      }
    });
    setValidated(true);
  };

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
                  onChange={(e: any) => {
                    setFirst_name(e.target.value);
                    setLast_name(last_name || data.user.last_name);
                    setContact_phone(contact_phone || data.user.contact_phone);
                    setDescription(description || data.user.description);
                    setDisable(false);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid first name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validation2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last Name"
                  defaultValue={data.user.last_name}
                  onChange={(e: any) => {
                    setLast_name(e.target.value);
                    setFirst_name(first_name || data.user.first_name);
                    setContact_phone(contact_phone || data.user.contact_phone);
                    setDescription(description || data.user.description);
                    setDisable(false);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid last name
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="8" controlId="validation3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  readOnly
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
                  onChange={(e: any) => {
                    setContact_phone(e.target.value);
                    setFirst_name(first_name || data.user.first_name);
                    setLast_name(last_name || data.user.last_name);
                    setDescription(description || data.user.description);
                    setDisable(false);
                  }}
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
                  onChange={(e: any) => {
                    setDescription(e.target.value);
                    setFirst_name(first_name || data.user.first_name);
                    setContact_phone(contact_phone || data.user.contact_phone);
                    setLast_name(last_name || data.user.last_name);
                    setDisable(false);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Button disabled={disable} type="submit">
              Save Change
            </Button>
          </Form>
        </React.Fragment>
      )}
    </div>
  );
}
