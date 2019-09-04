import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import Application from "components/Application";
import Navbar from "components/Navbar.js";
import CreateVolunteer from "components/form/volunteer/CreateVolunteer";
import VolunteerList from "components/volunteers/VolunteerList";
import PartnerList from "components/partners/PartnerList";
import DisplaySponsors from "components/sponsors/DisplaySponsors";
import SponsorCreation from "components/form/SponsorCreation";
import * as serviceWorker from "serviceWorker";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "components/AboutUs";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache()
});

const socialMediaUrl = [
  'https://www.instagram.com/spadelarue/',
  'https://www.facebook.com/LeSpaDeLaRue/',
  'https://twitter.com/SpadelaRue',
  'https://www.linkedin.com/company/le-spa-de-la-rue/',
  'https://www.youtube.com/channel/UCW6po-uIX2zbvrKFJeAH17w'
];

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Application} />
        <Route path = "/about/" component={AboutUs} />
        <Route path = "/partners" component={PartnerList} />
        <Route path = "/sponsors" component={DisplaySponsors} />
        <Route path = "/sponsor/new" component={SponsorCreation} />
        <Route path = "/volunteers" component={VolunteerList} />
        <Route path = "/volunteer/new/" component={CreateVolunteer} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
