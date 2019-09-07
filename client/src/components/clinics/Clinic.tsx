import React from "react";

import { ClinicSummary } from './types';

import moment from 'moment';

import { trimTime } from "helpers/helpers"

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
    volunteers_registered
  } = clinic;

  const formattedDate = new Date(parseInt(date));

  return (
    <section className="">
      <img
        className="appointment__error-close"
        src={picture_url}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{moment(formattedDate).format('MMMM DD')}</p>
      <p>{trimTime(start_time)} - {trimTime(end_time)}</p>
      <p>{therapist_needed} Needed</p>
      <p>{volunteers_registered} Registered</p>
      <p>{free_spots} Free</p>
    </section>
  );
}
