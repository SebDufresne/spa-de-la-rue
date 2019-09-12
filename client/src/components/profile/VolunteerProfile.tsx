import React from "react";
import SmallInput from "../form/SmallInput";
import LongInput from "../form/LongInput";
import TextareaInput from "../form/TextareaInput";
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

export default function VolunteerProfile(props: profileInfo) {
  const {contact_email} = props
  const { loading, error, data } = useQuery(GET_VOLUNTEER_PROFILE, {
    variables: { contact_email }, 
    pollInterval: 300,
  });
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  if(data.user){
    return (
      <React.Fragment>
        <SmallInput
          type="firstname"
          name="firstname"
          placeholder="Input your first name"
          label="First name"
          value={data.user.first_name}
        />
        <SmallInput
          type="lastname"
          name="lastname"
          placeholder="Input your last name"
          label="last name"
          value={data.user.last_name}
        />
        <LongInput
          type="email"
          name="email"
          placeholder="Input your email"
          label="Email"
          value={data.user.contact_email}
        />
        <SmallInput
          type="phone number"
          name="phone number"
          placeholder="Input your phone number"
          label="Phone number"
          value={data.user.contact_phone}
        />
        <TextareaInput label="description" rows={3} value={data.user.description} />

        {/* <LongInput /> */}
      </React.Fragment>
    );
  }
  return <h1>Erreur inattendue</h1>
}
