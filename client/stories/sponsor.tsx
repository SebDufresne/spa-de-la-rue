import React from 'react';
import { storiesOf } from '@storybook/react';

import Sponsor from "../src/components/sponsors/Sponsor";
import SponsorList from "../src/components/sponsors/SponsorList";

const sponsor = {
  name: 'Zayat Aroma',
  picture_url: 'images/sponsors/zayat_aroma.jpg',
  description:'A great Sponsor',
  sponsor_url: 'https://www.zayataroma.com/'
};

const emptySponsorList = [];

const sponsorList = [
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


const {name, picture_url, description, sponsor_url} = sponsor;

storiesOf('Sponsor', module)
  .add('Single Sponsor', () => (
    <Sponsor
      name = {name}
      picture_url =  {picture_url}
      description =  {description}
      sponsor_url =  {sponsor_url}
    />
  ))
  .add('List of Sponsors', () => (
  <SponsorList  sponsors={sponsorList} />
  ))
  .add('Empty List of Sponsors', () => (
    <SponsorList  sponsors={emptySponsorList} />
  ));
