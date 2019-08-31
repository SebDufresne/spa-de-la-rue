import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const Test_Query = gql`
  {
    users {
      id
      first_name
      last_name
    }
  }
`;

export default function TestGrapgql() {
  return (
    <React.Fragment>
      <h1 className="container">Test</h1>
      <Query query={Test_Query}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          console.log("data: ", data);
          return <h1>test</h1>;
        }}
      </Query>
    </React.Fragment>
  );
}
