import React from 'react';

import Partner from './Partner';

import { PartnerSummary } from './types';

interface PropTypes {
  partners: PartnerSummary[]
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
        <ul>{partnerList}</ul>
      </section>
    );
  }
  return (
    <section>
      <h4>Partenaires</h4>
      <p>La liste de partenaires est vide, pour le moment</p>
    </section>
  );
}
