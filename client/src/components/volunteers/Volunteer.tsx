import React from 'react';

interface volunteerDetails {
  first_name: string,
  last_name: string,
  picture_url: string,
}

export default function Volunteer(props: volunteerDetails) {
  const { first_name, last_name, picture_url } = props;

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
