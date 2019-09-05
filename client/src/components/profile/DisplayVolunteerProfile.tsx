import React from "react";
import VolunteerProfile from "./VolunteerProfile";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

interface profileInfo{
  email: string
}

export default function DisplayVolunteerProfile(props: profileInfo) {

  const GET_VOLUNTEER_PROFILE = gql`
    query GetVolunteerProfile{
      user(contact_email: ${props.email}){
        first_name
        last_name
        contact_email
        contact_phone
        description
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_VOLUNTEER_PROFILE);

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return <div className="container">{data.first_name}</div>;
}
