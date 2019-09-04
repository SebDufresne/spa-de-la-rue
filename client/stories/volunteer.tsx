import React from 'react';
import { storiesOf } from '@storybook/react';

import Volunteer from "../src/components/volunteers/Volunteer";
// import VolunteerList from "../src/components/SponsorList";


const sponsorListData = [
  {
    name: 'Zayat Aroma',
    picture_url: 'images/sponsors/zayat_aroma.jpg',
    description:'A great Sponsor',
    sponsor_url: 'https://www.zayataroma.com/'
  },
  {
    name: 'Zayat Aroma',
    picture_url: 'images/sponsors/zayat_aroma.jpg',
    description:'A great Sponsor',
    sponsor_url: 'https://www.zayataroma.com/'
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
  ));