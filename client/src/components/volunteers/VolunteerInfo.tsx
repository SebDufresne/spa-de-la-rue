import React from 'react';
export default function VolunteerInfo(props: any) {

  const { match: { params } } = props;

  console.log(params.userId);
  return (
    <section>
      <h1>{params.userId}</h1>
    </section>
  );
}
