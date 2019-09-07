import React from 'react';

import Clinic from './Clinic';

import { ClinicSummary } from './types';

interface PropTypes {
  clinics: ClinicSummary[];
}

export default function ClinicList({clinics}: PropTypes) {
  if (clinics && clinics.length > 1) {
    const clinicList = clinics.map((clinic: ClinicSummary) => {
  
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
            <Clinic
            id = {id}
            picture_url = {picture_url}
            name = {name}
            description = {description}
            date = {date}
            start_time = {start_time}
            end_time = {end_time}
            free_spots = {free_spots}
            therapist_needed = {therapist_needed}
            volunteers_registered = {volunteers_registered}
            color = {color}
          />
        )
      });
  
    return (
      <section>
        <ul>{clinicList}</ul>
      </section>
    );
  }
  return (
    <section>
      <p>We don't have any clinics at the moment</p>
    </section>
  );
}
