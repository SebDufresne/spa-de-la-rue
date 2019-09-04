import React from 'react';
import { storiesOf } from '@storybook/react';

import Volunteer from "../src/components/volunteers/Volunteer";
import VolunteerList from "../src/components/volunteers/VolunteerList";


const volunteerListData = [
  {
    first_name: 'Sebastien',
    last_name: 'Dufresne',
    picture_url: 'images/volunteers/seb.png',
  },
  {
    first_name: 'Sebastien',
    last_name: 'Dufresne',
    picture_url: 'images/volunteers/seb.png',
  }
];

const volunteerData = {
  first_name: 'Sebastien',
  last_name: 'Dufresne',
  picture_url: 'images/volunteers/seb.png',
};

const {first_name, last_name, picture_url} = volunteerData;

storiesOf('Volunteer', module)
  .add('Single Volunteer', () => (
    <Volunteer
      first_name = {first_name}
      last_name = {last_name}
      picture_url =  {picture_url}
    />
  ))
  .add('List of Sponsor', () => (
    <VolunteerList props={volunteerListData} />
  ));
  