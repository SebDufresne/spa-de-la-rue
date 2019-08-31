import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import Application from "components/Application";
import * as serviceWorker from "serviceWorker";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import TestGraphql from "components/testGrapgql";
import { ApolloClient } from "apollo-client";

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:4000/graphql'}), 
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Application />
    <TestGraphql />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
