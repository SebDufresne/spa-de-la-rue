import React from "react";
import SmallInput from "../SmallInput";
import LongInput from "../LongInput";
import ChooseRadio from "../ChooseRadio";
import TextareaInput from "../TextareaInput";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ADD_USER = gql`
  mutation AddUser{
    addUser{
      first_name
      last_name
      gender
      contact_email
      contact_phone
      password_hash
      description
    }
  }
`;

export default function CreateVolunteer() {
  const [addUser, { data }] = useMutation(ADD_USER);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addUser({ variables: {} });
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
          />
          <SmallInput
            name="lastName"
            type="name"
            placeholder="Last name"
            label="Last name"
          />
        </div>
        <div className="form-row">
          <LongInput
            name="contact_email"
            type="email"
            placeholder="Email"
            label="Email"
          />
        </div>
        <div className="form-row">
          <SmallInput
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
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
          />
        </div>
        <div className="form-row">
          <ChooseRadio legend="Gender" options={["M", "F", "O"]} />
        </div>
        <TextareaInput label="Description" rows={5} />

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
}
