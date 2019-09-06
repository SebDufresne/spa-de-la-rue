import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import Application from "components/Application";
import Navbar from "components/Navbar.js";

import CreateEventForm from "components/events/CreateEventForm";
import CreateSponsor from "components/form/CreateSponsor";
import CreateVolunteer from "components/form/CreateVolunteer";

import DisplayPartners from "components/partners/DisplayPartners";
import DisplaySponsors from "components/sponsors/DisplaySponsors";
import DisplayVolunteers from "components/volunteers/DisplayVolunteers";
import SocialMedia from "components/SocialMedia";
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

const socialMediaUrl = [
  "https://www.instagram.com/spadelarue/",
  "https://www.facebook.com/LeSpaDeLaRue/",
  "https://twitter.com/SpadelaRue",
  "https://www.linkedin.com/company/le-spa-de-la-rue/",
  "https://www.youtube.com/channel/UCW6po-uIX2zbvrKFJeAH17w"
];

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState: any) => {
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
      redirect_uri="http://localhost:3000/volunteer/new/"
      onRedirectCallback={onRedirectCallback}
    >
      <Router>
        <Navbar />
        <SocialMedia props={socialMediaUrl} />
        <Switch>
          <Route exact path="/" component={Application} />
          <Route path="/about/" component={AboutUs} />
          
          <Route path="/partners" component={DisplayPartners} />
          <Route path="/sponsors" component={DisplaySponsors} />
          <Route path="/volunteers" component={DisplayVolunteers} />

          <Route path="/events/new/" component={CreateEventForm} />
          <Route path="/sponsor/new" component={CreateSponsor} />
          <Route path="/volunteer/new/" component={CreateVolunteer} />
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
