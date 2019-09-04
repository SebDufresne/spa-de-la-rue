import React from 'react';
import { storiesOf } from '@storybook/react';

import SocialMedia from "../src/components/SocialMedia";

import "bootstrap/dist/css/bootstrap.css";

const socialMediaUrl = [
  'https://www.instagram.com/spadelarue/',
  'https://www.facebook.com/LeSpaDeLaRue/',
  'https://twitter.com/SpadelaRue',
  'https://www.linkedin.com/company/le-spa-de-la-rue/',
  'https://www.youtube.com/channel/UCW6po-uIX2zbvrKFJeAH17w'
];


storiesOf('Social Media', module)
  .add('Social Media', () => (
    <SocialMedia 
      props = {socialMediaUrl}
    />
  ));