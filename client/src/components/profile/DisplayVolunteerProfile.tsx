import React, {useEffect, Props} from "react";
import VolunteerProfile from "./VolunteerProfile";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useSelector } from "react-redux";

// const GET_VOLUNTEER_PROFILE = gql`
//   query GetVolunteerProfile($contact_email: String!) {
//     user(contact_email: $contact_email) {
//       first_name
//       last_name
//       contact_email
//       contact_phone
//       description
//     }
//   }
// `;
export default function DisplayVolunteerProfile(props: any) {
  const contact_email = useSelector(
    (state: any) => state.app.userInfo && state.app.userInfo.email
  )
  
  
  // const { loading, error, data } = useQuery(GET_VOLUNTEER_PROFILE, {
  //   variables: { contact_email }, 
  //   pollInterval: 300,
  // });

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error.message}</p>;
  // }
  
  // console.log('data: ', data);
  
  return (
    <div className="container">
      {contact_email && <VolunteerProfile contact_email={contact_email} />}
    </div>
  );
}
