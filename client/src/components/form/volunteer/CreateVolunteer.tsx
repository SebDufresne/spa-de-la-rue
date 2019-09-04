import React, { useState } from "react";
import SmallInput from "../SmallInput";
import LongInput from "../LongInput";
import ChooseRadio from "../ChooseRadio";
import ChooseBox from "../ChooseBox";
import TextareaInput from "../TextareaInput";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ADD_USER = gql`
  mutation AddUser(
    $first_name: String!
    $last_name: String!
    $gender: String!
    $contact_email: String!
    $contact_phone: String
    $contact_prefered: String
    $description: String
    $password_hash: String
  ) {
    addUser(
      first_name: $first_name
      last_name: $last_name
      gender: $gender
      contact_email: $contact_email
      contact_phone: $contact_phone
      contact_prefered: $contact_prefered
      description: $description
      password_hash: $password_hash
    ) {
      first_name
      last_name
      gender
      contact_email
      contact_phone
      contact_prefered
      description
      password_hash
    }
  }
`;

export default function CreateVolunteer() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [contact_email, setContact_email] = useState("");
  const [contact_phone, setContact_phone] = useState("");
  const [contact_prefered, setContact_prefered] = useState("");
  const [password_hash, setPassword_hash] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");

  const [addUser, { data }] = useMutation(ADD_USER);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addUser({
      variables: {
        first_name,
        last_name,
        contact_email,
        contact_phone,
        contact_prefered,
        password_hash,
        gender,
        description
      }
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <SmallInput
            name="firstName"
            type="name"
            placeholder="First name"
            label="First name"
            getValue={(e: any) => setFirst_name(e.target.value)}
          />
          <SmallInput
            name="lastName"
            type="name"
            placeholder="Last name"
            label="Last name"
            getValue={(e: any) => setLast_name(e.target.value)}
          />
        </div>
        <div className="form-row">
          <LongInput
            name="contact_email"
            type="email"
            placeholder="Email"
            label="Email"
            getValue={(e: any) => setContact_email(e.target.value)}
          />
        </div>
        <div className="form-row">
          <SmallInput
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
            getValue={(e: any) => setPassword_hash(e.target.value)}
          />
          <SmallInput
            name="passwordConformation"
            type="password"
            placeholder="Conform your password"
            label="Confirm your password"
          />
        </div>
        <div className="form-row">
          <SmallInput
            name="contact_phone"
            type="phone"
            placeholder="Phone number"
            label="Phone number"
            getValue={(e: any) => setContact_phone(e.target.value)}
          />
          <ChooseBox
            label="Prefered contact"
            default="Choose..."
            options={["phone", "email"]}
            getValue={(e: any) => setContact_prefered(e.target.value)}
          />
        </div>
        <div className="form-row">
          <ChooseRadio
            legend="Gender"
            options={["M", "F", "O"]}
            getValue={(e: any) => {
              setGender(e.target.value);
            }}
          />
        </div>
        <TextareaInput
          label="Description"
          rows={5}
          getValue={(e: any) => setDescription(e.target.value)}
        />

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
}
