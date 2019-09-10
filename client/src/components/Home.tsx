import React from "react";
import "./Home.scss";
import VolunteerList from "./volunteers/VolunteerList";

const users = [
  {
    first_name: "Gérard",
    last_name: "Piquemal",
    picture_url: "/images/volunteers/artemis_papert.jpg"
  },
  {
    first_name: "Artémis",
    last_name: "Papert",
    picture_url: "/images/volunteers/artemis_papert.jpg"
  },
  {
    first_name: "Caroline",
    last_name: "Mongrain",
    picture_url: "/images/volunteers/caroline_mongrain.jpg"
  }
];

export default function Home() {
  return (
    <div className="text-center">
      <img
        className="appointment__error-close img-fluid home-img"
        src="/images/assets/site_fontPage.png"
        alt="Spa de la Rue"
      />
      <h1>Welcome to Spa de la rue!!</h1>
      <blockquote className="blockquote">
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
      <div className="container">
        <h2 className="text-left"><a href="/volunteers">Our Volunteers</a></h2>
        <VolunteerList volunteers={users} />
        <h2 className="text-left">Events</h2>

      </div>
    </div>
  );
}
