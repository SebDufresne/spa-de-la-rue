import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';


import Sponsor from "../src/components/Sponsor";
import SponsorList from "../src/components/SponsorList";


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

const sponsorMock = {
  name: 'Zayat Aroma',
  picture_url: 'images/sponsors/zayat_aroma.jpg',
  description:'A great Sponsor',
  sponsor_url: 'https://www.zayataroma.com/'
};
const {name, picture_url, description, sponsor_url} = sponsorMock

storiesOf('Sponsor', module)
  .add('Single Sponsor', () => (
    <Sponsor
      name = {name}
      picture_url =  {picture_url}
      description =  {description}
      sponsor_url =  {sponsor_url}
    />
  ))
  .add('List of Sponsor', () => (
  <SponsorList  props={sponsorListData} />
  ));
