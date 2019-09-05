import React from 'react';

import { PartnerSummary } from './types';

export default function Partner(partners: PartnerSummary) {
  const { name, description, picture_url } = partners;

  return (
    <main className="appointment__card appointment__card--error">
      <img
        className="appointment__error-close"
        src={picture_url}
        alt={name}
      />
      <section className="">
        <h2>{name}</h2>
        <p>{description}</p>
      </section>
    </main>
  );
}
