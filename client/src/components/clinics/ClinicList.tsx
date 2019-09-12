import React from "react";

import Clinic from "./SingleClinic";

import { ClinicSummary } from "./types";

interface PropTypes {
  clinic_summary: ClinicSummary[];
}

export default function ClinicList({ clinic_summary }: PropTypes) {
  if (clinic_summary && clinic_summary.length > 1) {
    const clinicList = clinic_summary.map((clinic: ClinicSummary) => {
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
        color
      } = clinic;

      return (
        <Clinic
          key={id}
          id={id}
          picture_url={picture_url}
          name={name}
          description={description}
          date={date}
          start_time={start_time}
          end_time={end_time}
          free_spots={free_spots}
          therapist_needed={therapist_needed}
          volunteers_registered={volunteers_registered}
          color={color}
        />
      );
    });

    return (
      <div className="row">
        {clinicList}
      </div>
    );
  }
  return (
    <section>
      <p>La liste de cliniques est vide, pour le moment</p>
    </section>
  );
}
