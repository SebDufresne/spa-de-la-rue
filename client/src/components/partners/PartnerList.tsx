import React from 'react';

import Partner from './Partner';

import { PartnerSummary } from './types';

interface PropTypes {
  [key:string]: PartnerSummary[]
}

export default function PartnerList({partners}: PropTypes) {
  if (partners && partners.length > 0) {
    const partnerList = partners.map(partner => {
  
      const { name, picture_url, description } = partner;
  
        return (
        <Partner
          name = {name}
          picture_url =  {picture_url}
          description =  {description}
        />
        )
      });
  
    return (
      <section>
        <h4>Partners</h4>
        <ul>{partnerList}</ul>
      </section>
    );
  }
  return (
    <section>
      <h4>Partners</h4>
      <p>We don't have any partners at the moment</p>
    </section>
  );
}
