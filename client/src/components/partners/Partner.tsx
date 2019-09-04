import React from 'react';

interface partnerSummary {
  picture_url: string,
  name: string,
  description: string,
}

export default function Partner(props: partnerSummary) {
  const { name, description, picture_url } = props;

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
      </section>
    </main>
  );
}
