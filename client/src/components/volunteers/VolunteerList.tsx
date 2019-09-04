import React from 'react';

import Volunteer from './Volunteer';

interface volunteerDetails {
  first_name: string,
  last_name: string,
  picture_url: string,
}

interface propsType {
  [key:string]: volunteerDetails[]
}

export default function VolunteerList({props}: propsType) {
  if (props) {
    const volunteerList = props.map(volunteer => {
  
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
        <h4>Volunteers</h4>
        <ul>{volunteerList}</ul>
      </section>
    );
  }
  return (
    <section>
      <h4>Volunteers</h4>
      <p>We don't have any volunteers at the moment</p>
    </section>
  );
}
