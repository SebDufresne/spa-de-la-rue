import React from 'react';
import { storiesOf } from '@storybook/react';

import Clinic from "../src/components/clinics/SingleClinic";
import ClinicList from "../src/components/clinics/ClinicList";

const clinic = {
  id: 1,
  picture_url: "images/partners/acceuil_bonneau.jpg",
  name: "Acceuil Bonneau",
  description: "Une opportunitée de venir travailler avec les gens de l'Accueuil Bonneau",
  date: "1569038400000",
  start_time: "10:00:00",
  end_time: "12:00:00",
  free_spots: 1,
  therapist_needed: 3,
  volunteers_registered: 2,
  color: "bg-warning",
};

const clinicList = [{
  id: 1,
  picture_url: "images/partners/acceuil_bonneau.jpg",
  name: "Acceuil Bonneau",
  description: "Une opportunitée de venir travailler avec les gens de l'Accueuil Bonneau",
  date: "1569038400000",
  start_time: "10:00:00",
  end_time: "12:00:00",
  free_spots: 1,
  therapist_needed: 3,
  volunteers_registered: 2,
  color: "bg-warning",
},
{
  id: 1,
  picture_url: "images/partners/acceuil_bonneau.jpg",
  name: "Acceuil Bonneau",
  description: "Une opportunitée de venir travailler avec les gens de l'Accueuil Bonneau",
  date: "1569038400000",
  start_time: "10:00:00",
  end_time: "12:00:00",
  free_spots: 1,
  therapist_needed: 3,
  volunteers_registered: 2,
  color: "bg-warning",
}
];

const {
  id,
  picture_url,
  name,
  description,
  date,
  start_time,
  end_time,
  free_spots,
  therapist_needed,
  volunteers_registered,
  color,
} = clinic;

storiesOf('Clinic', module)
  .add('Single Clinic', () => (
    <Clinic
      id = {id}
      picture_url = {picture_url}
      name = {name}
      description = {description}
      date = {date}
      start_time = {start_time}
      end_time = {end_time}
      free_spots = {free_spots}
      therapist_needed = {therapist_needed}
      volunteers_registered = {volunteers_registered}
      color = {color}
    />
  ))
  .add('List of Clinics', () => (
    <ClinicList clinic_summary = {clinicList} />
  ));
