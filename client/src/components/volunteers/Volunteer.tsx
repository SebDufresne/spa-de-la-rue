import React from 'react';

interface volunteerDetails {
  picture_url: string,
  first_name: string,
  last_name: string
}

export default function Volunteer(props: volunteerDetails) {
  const { picture_url, first_name, last_name } = props;

  const full_name = `${first_name} ${last_name}`

  return (
    <main className="appointment__card appointment__card--error">
      <img
        className="appointment__error-close"
        src={picture_url}
        alt={full_name}
      />
      <section className="">
        <h1>{full_name}</h1>
      </section>
    </main>
  );
}
