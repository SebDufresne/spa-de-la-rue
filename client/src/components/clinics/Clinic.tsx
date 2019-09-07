import React from "react";

import { ClinicSummary } from './types';

export default function Sponsor(clinic: ClinicSummary) {
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
    volunteers_registered,
    color,
  } = clinic;

  return (
    <section className="">
      <img
        className="appointment__error-close"
        src={picture_url}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Date: {date}</p>
      <p>{start_time} - {end_time}</p>
      <p>Needed: {therapist_needed}</p>
      <p>Registered: {volunteers_registered}</p>
      <p>Free: {free_spots}</p>
    </section>
  );
}
