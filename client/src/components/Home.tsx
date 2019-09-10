import React from "react";
import "./Home.scss";
import VolunteerList from "./volunteers/VolunteerList";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import ClinicList from "./clinics/ClinicList";
import { ClinicSummary } from "./clinics/types";

interface ClinicList {
  clinic_summary: ClinicSummary[];
}

const GET_CLINIC_SUMMARY_LIST = gql`
  query getClinicSumary {
    clinic_summary {
      id
      picture_url
      name
      description
      color
      date
      start_time
      end_time
      therapist_needed
      volunteers_registered
      free_spots
    }
  }
`;

const users = [
  {
    first_name: "Gérard",
    last_name: "Piquemal",
    picture_url: "/images/volunteers/gerard_piquemal.png"
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
  const { loading, error, data } = useQuery<ClinicList>(
    GET_CLINIC_SUMMARY_LIST,
    { pollInterval: 500 }
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (data) {
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
          <h3 className="text-left mt-5"><a href="/clinics">Events</a></h3>
          <ClinicList clinic_summary={data.clinic_summary.slice(0,3)} />
          <h3 className="text-left mt-5">
            <a href="/volunteers">Our Volunteers</a>
          </h3>
          <VolunteerList volunteers={users} />
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      Something wrong!
    </div>
  )
}
