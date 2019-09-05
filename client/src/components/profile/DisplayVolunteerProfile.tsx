import React, { useEffect } from "react";
import VolunteerProfile from "./VolunteerProfile";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useSelector } from "react-redux";

export default function DisplayVolunteerProfile() {
  const userInfo = useSelector((state: any) => state.app.userInfo);

  const GET_VOLUNTEER_PROFILE = gql`
    query GetVolunteerProfile{
      user(contact_email: ${userInfo.email}){
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return <div className="container">{data.first_name}</div>;
}
