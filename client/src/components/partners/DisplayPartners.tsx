import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import PartnerList from "./PartnerList";

import { PartnerSummary } from './types';

interface PartnerSummaryList {
  partners: PartnerSummary[];
}

const GET_PARTNER_LIST = gql`
  query getPartnerList {
    partners {
      name
      picture_url
      description
    }
  }
`;

export default function DisplayPartners() {
  const { loading, error, data } = useQuery<PartnerSummaryList>(
    GET_PARTNER_LIST
  );

  if (loading) {
    return <p>Loading...</p>
  }
  
  if (error) {
    return <p>{error.message}</p>
  }

  if (data) {
    return (
      <div className="container text-center my-5 Partners">
      <h1>Partenaires</h1>
        { 
          <PartnerList partners = {data.partners} />
        }
      </div>
    );
  }
  return (
    <section>
      <p>La liste de partenaires est vide, pour le moment</p>
    </section>
  );
}
