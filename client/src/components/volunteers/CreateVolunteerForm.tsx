import React, { useState, useEffect } from "react";
import SmallInput from "components/form/SmallInput";
import LongInput from "components/form/LongInput";
import ChooseRadio from "components/form/ChooseRadio";
import ChooseBox from "components/form/ChooseBox";
import TextareaInput from "components/form/TextareaInput";
import { useAuth0 } from "react-auth0-wrapper";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Redirect } from "react-router-dom";
import { setUserInfo } from "state/app";
import { useDispatch } from "react-redux";

const ADD_USER = gql`
  mutation AddUser(
    $first_name: String!
    $last_name: String!
    $gender: String!
    $contact_email: String!
    $contact_phone: String
    $contact_prefered: String
    $description: String
  ) {
    addUser(
      first_name: $first_name
      last_name: $last_name
      gender: $gender
      contact_email: $contact_email
      contact_phone: $contact_phone
      contact_prefered: $contact_prefered
      description: $description
    ) {
      first_name
      last_name
      gender
      contact_email
      contact_phone
      contact_prefered
      description
    }
  }
`;

export default function CreateVolunteerForm() {
  const { loadingAuth, user } = useAuth0();

  const dispatch = useDispatch();

  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [contact_email, setContact_email] = useState();
  const [contact_phone, setContact_phone] = useState();
  const [contact_prefered, setContact_prefered] = useState();
  const [gender, setGender] = useState();
  const [description, setDescription] = useState();

  const [toHome, SetToHome] = useState(false);

  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    addUser({
      variables: {
        first_name,
        last_name,
        contact_email,
        contact_phone,
        contact_prefered,
        gender,
        description
      }
    });
    SetToHome(true);
  };

  useEffect(() => {
    if (user) {
      dispatch(setUserInfo(user));
    }
  });
  if (loadingAuth || !user) {
    return (
      <div className="container">
        <div>Veuillez vous authentifier...</div>
      </div>
    );
  }
  if (toHome) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <h3 className="text-center mt-3">
        Davantage d'informations sont requises pour compléter l'enregistrement
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <SmallInput
            name="firstName"
            type="name"
            placeholder="First name"
            label="First name"
            value={user.given_name}
            getValue={(e: any) => setFirst_name(e.target.value)}
          />
          <SmallInput
            name="lastName"
            type="name"
            placeholder="Last name"
            label="Last name"
            value={user.family_name}
            getValue={(e: any) => setLast_name(e.target.value)}
          />
        </div>
        <div className="form-row">
          <LongInput
            name="contact_email"
            type="email"
            placeholder="Email"
            label="Email"
            value={user.email}
            getValue={(e: any) => setContact_email(e.target.value)}
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
              setFirst_name(first_name || user.given_name);
              setLast_name(last_name || user.family_name);
              setContact_email(user.email);
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
