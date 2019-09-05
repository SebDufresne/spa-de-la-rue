import React from 'react';

import Sponsor from './Sponsor';

interface sponsorDetails {
  name: string,
  picture_url: string,
  description: string,
  sponsor_url: string
}

interface propsType {
  [key:string]: sponsorDetails[]
}

export default function SponsorList({props}: propsType) {
  if (props) {
    const sponsorList = props.map((sponsor: sponsorDetails) => {
  
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
