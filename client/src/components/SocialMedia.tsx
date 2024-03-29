import React from "react";
import { SocialIcon } from "react-social-icons";
import "styles/socialMedia.scss";

interface propsType {
  [key: string]: string[];
}

export default function SocialMedia({ props }: propsType) {
  const socialMediaList = props.map((url, index) => {
    return <SocialIcon key={index} url={url} fgColor="#ffffff" />;
  });

  return (
    <section className="mediaBar d-flex flex-column social-media">{socialMediaList}</section>
  );
}
 