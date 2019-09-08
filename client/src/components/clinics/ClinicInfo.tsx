import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

interface RocketInventoryVars {
  clinic_id: number;
}


const GET_CLINIC_INFO = gql`
  query getClinicInfo($clinic_id: ID!) {
    clinic_info(id: $clinic_id) {
      picture_url
      partner_name
      event_name
      partner_description
      event_description
      google_coords_X
      google_coords_Y
      address1
      address2
      city
      state
      zip
      country
      color
      date
      start_time
      end_time
      therapist_needed
      volunteers_registered
      free_spots
    }
  }
`;

export default function ClinicInfo(props: any) {
  const { match: { params } } = props;

    const clinic_id = parseInt(params.clinicId);
    const { loading, error, data } = useQuery(GET_CLINIC_INFO,
      { variables: { clinic_id } }
      );

    if (loading) {
      return <p>Loading...</p>
    }
    
    if (error) {
      return <p>{error.message}{clinic_id}</p>
    }

    if (data && data.clinic_info) {
      const {
        picture_url,
        partner_name,
        event_name,
        partner_description,
        event_description,
        google_coords_X,
        google_coords_Y,
        address1,
        address2,
        city,
        state,
        zip,
        country,
        color,
        date,
        start_time,
        end_time,
        therapist_needed,
        volunteers_registered,
        free_spots
      } = data.clinic_info;
      return (
        <div className="container text-center my-5 Volunteers">
          <h1>Clinic #{clinic_id}</h1>
          <h2>{partner_name}</h2>
          <img
            className="appointment__error-close"
            src={picture_url}
            alt={partner_name}
          />
        </div>
      );
    }
  return (
    <section>
      <p>We don't have any volunteers at the moment</p>
    </section>
  );
}