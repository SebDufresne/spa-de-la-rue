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
        <h1 className="mt-5">Bienvenue au Spa de la Rue...</h1>
        <blockquote className="blockquote">
          <p className="mb-0">
            Le Spa de la Rue m'a donné un sens de dignité qui m’est trop souvent enlevé dans mes interactions quotidiennes.
          </p>
          <footer className="blockquote-footer">
            Un client de <cite title="Source Title">L'Accueil Bonneau</cite>
          </footer>
        </blockquote>
        <div className="container">
          <div className="mt-5">
            <ClinicList clinic_summary={data.clinic_summary.slice(0, 3)} />
          </div>
          <h3 className="text-left mt-5">
            <a href="/volunteers">Nos volontaires</a>
          </h3>
          <VolunteerList volunteers={users} />
        </div>
      </div>
    );
  }
  return <div className="container">Une erreur est survenue</div>;
}
