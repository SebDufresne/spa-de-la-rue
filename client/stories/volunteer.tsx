import React from 'react';
import { storiesOf } from '@storybook/react';

import Volunteer from "../src/components/volunteers/Volunteer";
import VolunteerList from "../src/components/volunteers/VolunteerList";

const emptyVolunteerList = [];

const volunteerList = [
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

const volunteer = {
  first_name: 'Sebastien',
  last_name: 'Dufresne',
  picture_url: 'images/volunteers/seb.png',
};

const {first_name, last_name, picture_url} = volunteer;

storiesOf('Volunteer', module)
  .add('Single Volunteer', () => (
    <Volunteer
      first_name = {first_name}
      last_name = {last_name}
      picture_url =  {picture_url}
    />
  ))
  .add('List of Volunteers', () => (
    <VolunteerList volunteers = {volunteerList} />
  ))
  .add('Empty List of Volunteers', () => (
    <VolunteerList volunteers = {emptyVolunteerList} />
  ));
  