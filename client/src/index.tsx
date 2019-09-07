import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import 'bootstrap';
import Application from "components/Application";
import Navbar from "components/Navbar.js";
import NavParent from "components/NavParent.js";

import CreateEventForm from "components/events/CreateEventForm";
import CreateSponsorForm from "components/sponsors/CreateSponsorForm";
import CreateVolunteerForm from "components/volunteers/CreateVolunteerForm";

import DisplayPartners from "components/partners/DisplayPartners";
import DisplaySponsors from "components/sponsors/DisplaySponsors";
import DisplayVolunteers from "components/volunteers/DisplayVolunteers";
import DisplayVolunteerProfile from "components/profile/DisplayVolunteerProfile";
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
import Home from "components/Home";

import { Provider } from "react-redux";
import { createStore } from "redux";
import state from "state/index";
import AdminVol from "components/admin/AdminVol";

const store = createStore(state);

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
    <Provider store={store}>
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri="http://localhost:3000/loggedin/"
        onRedirectCallback={onRedirectCallback}
      >
        <Router>
          <NavParent />
          <SocialMedia props={socialMediaUrl} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/" component={AboutUs} />
            <Route path="/loggedin/" component={Application} />
            <Route path="/admin/volunteer/" component={AdminVol} />

            <Route path="/partners" component={DisplayPartners} />
            <Route path="/sponsors" component={DisplaySponsors} />
            <Route path="/volunteers" component={DisplayVolunteers} />

            <Route path="/events/new/" component={CreateEventForm} />
            <Route path="/sponsor/new" component={CreateSponsorForm} />
            <Route path="/volunteer/new/" component={CreateVolunteerForm} />
            
            <Route
              path="/volunteer/profile/"
              component={DisplayVolunteerProfile}
            />
          </Switch>
        </Router>
      </Auth0Provider>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
