import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import ClinicList from "./ClinicList";

import { ClinicSummary } from './types';

import { getDatesByClass} from "helpers/schedule";

import Calendar from "components/Calendar";

import { useSelector } from "react-redux";

const contact_email = useSelector(
  (state: any) => state.app.userInfo && state.app.userInfo.email
)

interface ClinicList {
  clinic_summary: ClinicSummary[];
}

const GET_CLINIC_SUMMARY_LIST = gql`
  query getClinicSumary {
    clinic_summary {
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
    const datesByCalss = getDatesByClass(data.clinic_summary);
    console.log(datesByCalss);
    return (
      <div className="container text-center my-5 Partners">
      <h1>Clinics</h1>
      <Calendar
        schedule = {datesByCalss}
      />
      { 
          <ClinicList clinic_summary = {data.clinic_summary} />
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
