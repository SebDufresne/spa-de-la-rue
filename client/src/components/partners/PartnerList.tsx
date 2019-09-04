import React from 'react';

import Partner from './Partner';

interface partnerDetails {
  name: string,
  picture_url: string,
  description: string,
}

interface propsType {
  [key:string]: partnerDetails[]
}

export default function PartnerList({props}: propsType) {
  if (props) {
    const partnerList = props.map(partner => {
  
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
