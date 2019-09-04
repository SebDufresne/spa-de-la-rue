import React from 'react';

interface sponsorDetails {
  name: string,
  picture_url: string,
  description: string,
  sponsor_url: string
}

export default function Sponsor(props: sponsorDetails) {
  const { name, picture_url, description, sponsor_url } = props;

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
