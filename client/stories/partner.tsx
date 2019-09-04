import React from 'react';
import { storiesOf } from '@storybook/react';

import Partner from "../src/components/partners/Partner";
// import PartnerList from "../src/components/SponsorList";

const spartnerListData = [
  {
    name: 'Zayat Aroma',
    picture_url: 'images/sponsors/zayat_aroma.jpg',
    description:'A great Sponsor',
  },
  {
    name: 'Zayat Aroma',
    picture_url: 'images/sponsors/zayat_aroma.jpg',
    description:'A great Sponsor',
  }
];

const partnerData = {
  name: 'Acceuil Bonneau',
  picture_url: 'images/partners/acceuil_bonneau.jpg',
  description:'A great Partner',
};

const {name, picture_url, description} = partnerData;

storiesOf('Partner', module)
  .add('Single Partner', () => (
    <Partner
      name = {name}
      picture_url =  {picture_url}
      description =  {description}
    />
  ));
