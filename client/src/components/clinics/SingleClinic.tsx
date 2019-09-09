import React from "react";

import { ClinicSummary } from "./types";

import moment from "moment";

import { trimTime } from "helpers/helpers";
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
    <main className="appointment__card appointment__card--error col-10 mx-auto col-md-6 col-lg-4 my3">
      <section className="">
        <a href={pathToClinic}>
          <img
            className="appointment__error-close img-fluid img-thumbnail"
            src={picture_url}
            alt={name}
          />
        </a>

        {/* <Link to={pathToClinic}>Here</Link> */}
        <h4>{name}</h4>
        <p>{description}</p>
        <p>{moment(formattedDate).format("MMMM D")}</p>
        <p>
          {trimTime(start_time)} - {trimTime(end_time)}
        </p>
        <p>{therapist_needed} Needed</p>
        <p>{volunteers_registered} Registered</p>
        <p>{free_spots} Free</p>
      </section>
    </main>
  );
}
