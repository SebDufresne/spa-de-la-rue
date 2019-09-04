import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import Application from "components/Application";
import Navbar from "components/Navbar.js";
import CreateVolunteer from "components/form/volunteer/CreateVolunteer";
import SponsorList from "components//SponsorList";
import SponsorCreation from "components/form/SponsorCreation";
import * as serviceWorker from "serviceWorker";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth0Provider } from "./react-auth0-wrapper";
import config from "./auth_config.json";
import AboutUs from "components/AboutUs";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache()
});

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState: any):void => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Application} />
          <Route path="/about/" component={AboutUs} />
          <Route path="/volunteer/new/" component={CreateVolunteer} />
          <Route path="/sponsors" component={SponsorList} />
          <Route path="/sponsor/new" component={SponsorCreation} />
        </Switch>
      </Router>
    </Auth0Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
