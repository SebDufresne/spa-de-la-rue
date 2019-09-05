import React, { useState } from "react";
import SmallInput from "./SmallInput";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Redirect } from "react-router-dom";

const ADD_SPONSOR = gql`
  mutation AddSponsor(
    $name: String
    $description: String
    $picture_url: String
    $sponsor_url: String
  ) {
    addSponsor(
      name: $name
      description: $description
      picture_url: $picture_url
      sponsor_url: $sponsor_url
    ) {
      name
      description
      picture_url
      sponsor_url
    }
  }
`;

export default function SponsorCreation() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [sponsor_url, setSponsor_url] = useState("");
  const [toHome, setToHome] = useState(false);

  const [addSponsor] = useMutation(ADD_SPONSOR);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addSponsor({ variables: { name, description, picture_url, sponsor_url } });
    setToHome(true);
  };
  if (toHome) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <SmallInput
            name="name"
            type="text"
            placeholder="name"
            label="name"
            getValue={(e: any) => {
              setName(e.target.value);
            }}
          />
          <SmallInput
            name="description"
            type="text"
            placeholder="description"
            label="description"
            getValue={(e: any) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-row">
          <SmallInput
            name="picture_url"
            type="text"
            placeholder="pic"
            label="pic url"
            getValue={(e: any) => {
              setPicture_url(e.target.value);
            }}
          />
          <SmallInput
            name="sponsor"
            type="text"
            placeholder="sponsor"
            label="sponsor url"
            getValue={(e: any) => {
              setSponsor_url(e.target.value);
            }}
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
}
