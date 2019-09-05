import React from 'react';

import Sponsor from './Sponsor';

import { SponsorSummary } from './types';

interface PropTypes {
  sponsors: SponsorSummary[];
}

export default function SponsorList({sponsors}: PropTypes) {
  if (sponsors && sponsors.length > 1) {
    const sponsorList = sponsors.map((sponsor: SponsorSummary, index) => {
  
      const { name, picture_url, description, sponsor_url } = sponsor;
  
        return (
        <Sponsor
          key={index}
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
