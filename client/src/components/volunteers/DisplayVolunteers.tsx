import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import VolunteerList from "./VolunteerList";

import { VolunteerSummary } from "./types";

interface VolunteerDetailsList {
  users: VolunteerSummary[];
}

const GET_VOLUNTEER_LIST = gql`
  query getVolunteerList {
    users {
      first_name
      last_name
      picture_url
    }
  }
`;

export default function DisplayVolunteers() {
  const { loading, error, data } = useQuery<VolunteerDetailsList>(
    GET_VOLUNTEER_LIST
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (data) {
    return (
      <div className="container text-center my-5 Volunteers">
        <h1>Volunteers</h1>
        <div className="row">
          <VolunteerList volunteers={data.users} />
        </div>
      </div>
    );
  }
  return (
    <section>
      <p>We don't have any volunteers at the moment</p>
    </section>
  );
}
