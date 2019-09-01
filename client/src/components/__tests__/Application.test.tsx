import React from 'react';
import ReactDOM from 'react-dom';
import Application from 'components/Application';


import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";


const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache()
});

describe('Appointment', () => {
  it('renders without crashing', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<ApolloProvider client={client}>
      <Application />
      </ApolloProvider>
   , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});