import React from 'react'
import SmallInput from "./SmallInput";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ADD_SPONSOR = gql`
  mutation AddSponsor($name: String, $description: String, $picture_url: String, $sponsor_url: String){
    addSponsor(name: $name, description: $description, picture_url: $picture_url, sponsro_url: $picture_url){
      name description picture_url sponsor_url
    }
  }
`;

const handleSubmit = (event: any) => {

}

export default function SponsorCreation() {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <SmallInput
            name="name"
            type="name"
            placeholder="name"
            label="name"
          />
          <SmallInput
            name="description"
            type="description"
            placeholder="description"
            label="description"
          />
        </div>
        <div className="form-row">
          <SmallInput
            name="pic"
            type="text"
            placeholder="pic"
            label="pic url"
          />
          <SmallInput
            name="sponsor"
            type="text"
            placeholder="sponsor"
            label="sponsor url"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  )
}
