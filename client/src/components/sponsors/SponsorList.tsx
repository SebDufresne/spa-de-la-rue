import React from 'react';
import PropTypes from 'prop-types';

import Sponsor from './Sponsor';

import { SponsorDetails } from './types';

interface PropTypes {
  sponsors: SponsorDetails[];
}

export default function SponsorList({sponsors}: PropTypes) {
  if (sponsors.length > 1) {
    const sponsorList = sponsors.map((sponsor: SponsorDetails) => {
  
      const { name, picture_url, description, sponsor_url } = sponsor;
  
        return (
        <Sponsor
          name = {name}
          picture_url =  {picture_url}
          description =  {description}
          sponsor_url =  {sponsor_url}
        />
        )
      });
  
    return (
      <section>
        <ul>{sponsorList}</ul>
      </section>
    );
  }
  return (
    <section>
      <p>We don't have any sponsors at the moment</p>
    </section>
  );
}
