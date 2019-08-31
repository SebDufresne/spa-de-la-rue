import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Test_Query = gql`
  {
    users {
      first_name
      last_name
    }
  }
`;


export default function TestGraphql() {
  const { loading, error, data } = useQuery(Test_Query);
  console.log('data: ', data)
  return (
    <React.Fragment>
      <h1 className="container">Test</h1>
     
    </React.Fragment>
  );
}
