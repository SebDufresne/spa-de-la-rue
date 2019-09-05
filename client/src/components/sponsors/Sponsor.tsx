import React from 'react';

import { SponsorDetails } from './types';

export default function Sponsor(sponsors: SponsorDetails) {
  const { name, picture_url, description, sponsor_url } = sponsors;

  return (
    <main className="appointment__card appointment__card--error">
      <img
        className="appointment__error-close"
        src={picture_url}
        alt={name}
      />
      <section className="">
        <h1>{name}</h1>
        <p>{description}</p>
        <a href={sponsor_url} className="btn btn-primary">Follow them</a>
      </section>
    </main>
  );
}
