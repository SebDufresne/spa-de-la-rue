import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import SponsorList from "./SponsorList";
import "./DisplaySponsors.scss";

import { SponsorSummary } from "./types";

interface SponsorDetailsList {
  sponsors: SponsorSummary[];
}

const GET_SPONSOR_LIST = gql`
  query getSponsorList {
    sponsors {
      name
      picture_url
      description
      sponsor_url
    }
  }
`;

export default function DisplaySponsors() {
  const { loading, error, data } = useQuery<SponsorDetailsList>(
    GET_SPONSOR_LIST
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (data) {
    return (
      <div className="container">
        <div className="Sponsors text-center">
          <h1>Sponsors</h1>
          {<SponsorList sponsors={data.sponsors} />}
        </div>
      </div>
    );
  }
  return (
    <section>
      <p>La liste des commanditaires est vide, pour le moment</p>
    </section>
  );
}
