import React from 'react';
import { storiesOf } from '@storybook/react';

import Partner from "../src/components/partners/Partner";
import PartnerList from "../src/components/partners/PartnerList";

const partner = {
  name: 'Acceuil Bonneau',
  picture_url: 'images/partners/acceuil_bonneau.jpg',
  description:'Chaque jour, nous ouvrons notre porte à des centaines de personnes vivant en situation d’itinérance ou étant à risque. Chaque fois, ce sont des gens comme vous, des bénévoles, des intervenants, des religieuses, des employés et de généreux bienfaiteurs qui ouvrent leur cœur et tendent la main pour leur donner un peu de réconfort et nouer un lien, le premier pas vers la réinsertion sociale. Grâce à vous, nous sommes l’Accueil Bonneau depuis 1877, merci!',
};

const emptyPartnerList = [];

const partnerList = [
  {
    name: 'Acceuil Bonneau',
    picture_url: 'images/partners/acceuil_bonneau.jpg',
    description:'Chaque jour, nous ouvrons notre porte à des centaines de personnes vivant en situation d’itinérance ou étant à risque. Chaque fois, ce sont des gens comme vous, des bénévoles, des intervenants, des religieuses, des employés et de généreux bienfaiteurs qui ouvrent leur cœur et tendent la main pour leur donner un peu de réconfort et nouer un lien, le premier pas vers la réinsertion sociale. Grâce à vous, nous sommes l’Accueil Bonneau depuis 1877, merci!',
  },
  {
    name: 'Appartements Supervisés Augustine-Gonzalez',
    picture_url: 'images/partners/appartements_augustine_gonzalez.jpg',
    description:"L'organisme offre sécurité, confort, soutien éducatif et accompagnement personnalisé aux jeunes mamans. On essaie de les avoir le plus tôt possible. Le contexte de fonctionnement et les programmes en place font toutefois qu'elle ne peut accueillir de future maman avant la 20e semaine de grossesse.",
  }
];

const {name, picture_url, description} = partner;

storiesOf('Partner', module)
  .add('Single Partner', () => (
    <Partner
      name = {name}
      picture_url =  {picture_url}
      description =  {description}
    />
  ))
  .add('List of Partners', () => (
    <PartnerList  partners={partnerList} />
    ))
  .add('Empty List of Partners', () => (
    <PartnerList  partners={emptyPartnerList} />
    ));;
