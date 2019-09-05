import React from 'react';

import Volunteer from './Volunteer';

import { VolunteerSummary } from './types';

interface propsType {
  volunteers: VolunteerSummary[]
}

export default function VolunteerList({volunteers}: propsType) {
  if (volunteers && volunteers.length > 0) {
    const volunteerList = volunteers.map(volunteer => {
  
      const { first_name, last_name, picture_url } = volunteer;
  
        return (
          <Volunteer
            first_name = {first_name}
            last_name = {last_name}
            picture_url = {picture_url}
          />
        )
      });
  
    return (
      <section>
        <ul>{volunteerList}</ul>
      </section>
    );
  }
  return (
    <section>
      <p>We don't have any volunteers at the moment</p>
    </section>
  );
}
