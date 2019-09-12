import React from "react";

import { SponsorSummary } from './types';

export default function Sponsor(sponsors: SponsorSummary) {
  const { name, picture_url, description, sponsor_url } = sponsors;

  return (
    <main className="appointment__card appointment__card--error my-5">
      <img className="appointment__error-close" src={picture_url} alt={name} />
      <section className="">
        <h2>{name}</h2>
        <p>{description}</p>
        <a
          href={sponsor_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Visitez leur site
        </a>
      </section>
    </main>
  );
}
