import React from "react";

import { ClinicSummary } from './types';

import moment from 'moment';

import { trimTime } from "helpers/helpers"
import { Link } from "react-router-dom";

export default function Clinic(clinics: ClinicSummary) {
  const {
    id,
    picture_url,
    name,
    description,
    date,
    start_time,
    end_time,
    free_spots,
    therapist_needed,
    volunteers_registered
  } = clinics;

  const formattedDate = new Date(parseInt(date));

  const pathToClinic = `/clinic/${id}`;

  return (
    <main className="appointment__card appointment__card--error">
    <section className="">
      <img
        className="appointment__error-close img-fluid"
        src={picture_url}
        alt={name}
      />
      
      <Link to={pathToClinic}>Here</Link>
      <h1>{id}</h1>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{moment(formattedDate).format('MMMM D')}</p>
      <p>{trimTime(start_time)} - {trimTime(end_time)}</p>
      <p>{therapist_needed} Needed</p>
      <p>{volunteers_registered} Registered</p>
      <p>{free_spots} Free</p>
    </section>
    </main>
  );
}
