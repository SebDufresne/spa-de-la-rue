import React from 'react';

import { VolunteerSummary } from './types';

export default function Volunteer(volunteer: VolunteerSummary) {
  const { first_name, last_name, picture_url } = volunteer;

  const full_name = `${first_name} ${last_name}`

  return (
    <main className="appointment__card appointment__card--error">
      <img
        className="appointment__error-close"
        src={picture_url}
        alt={full_name}
      />
      <section className="">
        <h2>{full_name}</h2>
      </section>
    </main>
  );
}
