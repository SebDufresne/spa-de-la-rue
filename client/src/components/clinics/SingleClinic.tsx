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
        <div className="text-left">
          <h5 className="text-center">{name}</h5>
          <p>{description}</p>
          <div className="d-flex justify-content-between">
            <strong>
              <p className="text-left">
                {moment(formattedDate).format("MMMM D")}
              </p>
            </strong>
            <strong>
              <p className="text-right">
                {trimTime(start_time)} - {trimTime(end_time)}
              </p>
            </strong>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-left">Total: {therapist_needed}</p>
            <p className="text-right">Left: {free_spots}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
