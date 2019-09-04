import React from 'react';

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import SponsorList from "./SponsorList";

interface Sponsor {
  name: string;
  picture_url: string;
  description: string;
  sponsor_url: string;
}

interface SponsorListData {
  sponsors: Sponsor[];
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
  const { loading, error, data } = useQuery<SponsorListData>(
    GET_SPONSOR_LIST
  );

  if (loading) {
    return <p>Loading...</p>
  }
  
  if (error) {
    return <p>{error.message}</p>
  }

  if (data) {
    console.log(data)
    return (
      <div className="Sponsors">
      <h4>Sponsors</h4>
        { 
          <SponsorList props = {data} />
        }
      </div>
    );
  }
  return (
    <section>
      <p>We don't have any sponsors at the moment</p>
    </section>
  );
}
