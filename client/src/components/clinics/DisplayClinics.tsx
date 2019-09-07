import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { CinicSummary } from './types';

interface ClinicList {
  clinics: CinicSummary[];
}

const GET_CLINIC_SUMMARY_LIST = gql`
  query getPartnerList {
    clinic_summmary {
      id
      picture_url
      name
      description
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

export default function DisplayClinics() {
  const { loading, error, data } = useQuery<ClinicList>(
    GET_CLINIC_SUMMARY_LIST
  );

  if (loading) {
    return <p>Loading...</p>
  }
  
  if (error) {
    return <p>{error.message}</p>
  }

  if (data) {
    return (
      <div className="container text-center my-5 Partners">
      <h1>Partners</h1>
        { 
          <PartnerList partners = {data.partners} />
        }
      </div>
    );
  }
  return (
    <section>
      <p>We don't have any partners at the moment</p>
    </section>
  );
}
