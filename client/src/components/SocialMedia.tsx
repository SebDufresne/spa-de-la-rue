import React from 'react';
import { SocialIcon } from 'react-social-icons';

interface propsType {
  [key:string]: string[]
}

export default function SocialMedia({props}: propsType) {
  if (props) {
    const socialMediaList = props.map(url => {
  
        return (
          <SocialIcon
          url = {url}
        />
        )
      });
  
    return (
      <section>
        <h4>Sponsors</h4>
        <ul>{socialMediaList}</ul>
      </section>
    );
  }
}
