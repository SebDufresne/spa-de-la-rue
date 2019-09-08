import React from 'react';

import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { EventSummary } from './types';
import { ActivePartner } from '../partners/types';
import { ActiveVolunteer } from '../volunteers/types';
import DatePicker from "react-datepicker";

import useHookData from 'hooks/useFormData';
import moment from 'moment';

import ChooseRadio from "components/form/ChooseRadio";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const dateFix = (setDate: any) : any => {

  if(setDate) {
    const date = new Date(setDate);

    return date.setDate(date.getDate() + 1);
  }
  return new Date(setDate);
}

const ADD_EVENT = gql`
  mutation addEvent(
    $administrator_id: Int!
    $partner_id: Int!
    $address_id: Int!
    $name: String!
    $description: String!
    $start_date: String!
    $end_date: String!
    $day_of_week: Int!
    $frequency: String!
    $start_time: String!
    $end_time: String!
    $hours_of_work: Int!
    $therapist_needed: Int!
    $color: String!
  ) {
    addEvent(
      administrator_id: $administrator_id
      partner_id: $partner_id
      address_id: $address_id
      name: $name
      description: $description
      start_date: $start_date
      end_date: $end_date
      day_of_week: $day_of_week
      frequency: $frequency
      start_time: $start_time
      end_time: $end_time
      hours_of_work: $hours_of_work
      therapist_needed: $therapist_needed
      color: $color
    ) {
      administrator_id
      partner_id
      address_id
      name
      description
      start_date
      end_date
      day_of_week
      frequency
      start_time
      end_time
      hours_of_work
      therapist_needed
      color
    }
  }
`;

interface ActivePartnerList {
  active_partners: ActivePartner[];
  active_volunteers: ActiveVolunteer[];
}

const GET_ACTIVE_PARTNERS = gql`
  query getPartnerList {
    active_partners {
      id
      name
      address_id
      google_coords_x
      google_coords_y
    },
    active_volunteers {
      id
      first_name
      last_name
    }
  }
`;

export default function CreateEventForm (this: any) {
  const {
    state,
    setAdministrator,
    setPartner,
    setName,
    setDescription,
    setStartDate,
    setEndDate,
    setDayOfWeek,
    setFrequency,
    setStartTime,
    setEndTime,
    setHoursOfWork,
    setTherapistNeeded,
    setColor
  } = useHookData();

  // const [addEvent] = useMutation(ADD_EVENT, {
  //   variables: state });

  const [addEvent] = useMutation(ADD_EVENT);


  console.log(state);

  const { loading, error, data } = useQuery<ActivePartnerList>(
    GET_ACTIVE_PARTNERS
  );

  if (loading) {
    return <p>Loading...</p>
  }
  
  if (error) {
    return <p>{error.message}</p>
  }

  if (data) {
    return (
    
      <div>
        <h3>Create an Event</h3>
        <form onSubmit={event => event.preventDefault()}>
          <label>Partner Name</label>
          <select
            value={state.partner_id}
            onChange={e => {
              setPartner(parseInt(e.target.value), data.active_partners)
            }}          
            name="partner"
          >
            {data.active_partners.map(partner => (
              <option value={partner.id} key={partner.id}>
                {partner.name}
              </option>
            ))}
          </select>

          <div>
            <label>Event Name</label>
            <input
              name="name"
              type="text"
              placeholder="name"
              value={state.name} 
              onChange={e => setName(e.target.value)}
            />
          </div>

          <label>Administrator Name</label>
          <select
            value={state.administrator_id}
            onChange={e => {
              setAdministrator(parseInt(e.target.value))
            }}          
            name="volunteer"
          >
            {data.active_volunteers.map(volunteer => (
              <option value={volunteer.id} key={volunteer.id} >
                {`${volunteer.first_name} ${volunteer.last_name}`}
              </option>
            ))}
          </select>

          <div>
            <ChooseRadio
              legend="Gender"
              options={["AM - 10h00 à 12h00", "PM - 14h00 à 16h00", "Soir - 19h00 à 21h00"]}
              getValue={(e: { target: { value: string; }; }) => {
                switch(e.target.value) {
                  case "AM - 10h00 à 12h00":
                      setStartTime('10:00:00');
                      setEndTime('12:00:00');
                      break;
                  case "PM - 14h00 à 16h00":
                      setStartTime('14:00:00');
                      setEndTime('16:00:00');
                      break;
                  case "Soir - 19h00 à 21h00":
                      setStartTime('19:00:00');
                      setEndTime('21:00:00');
                      break;
                }
              }}
            />
          </div>
          <div>
            <label>Hours Of Volunteering</label>
            <input
              type="number"
              name="hours_of_work"
              value={state.hours_of_work} 
              onChange={e => setHoursOfWork(parseInt(e.target.value))}
            />
          </div>

          <div>
            <label>Numbers of Therapist</label>
            <input
              type="number"
              name="therapist_needed"
              value={state.therapist_needed} 
              onChange={e => setTherapistNeeded(parseInt(e.target.value))}
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              name="description"
              rows={5}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label>Start Date</label>
            <DatePicker
              inline
              selected={dateFix(state.start_date)}
              onChange={e => {
                if (e) {
                  setDayOfWeek(e.getDay());
                  setStartDate(moment(e).format('YYYY-MM-DD'));  
                }
              }}
            />
          </div>
          <label>Frequency?</label>
          <select value={state.frequency} onChange={e => setFrequency(e.target.value)}>
            <option value="once">once</option>
            <option value="weekly">weekly</option>
            <option value="bi-weekly">bi-weekly</option>
            <option value="monthly">monthly</option>
          </select> 
     
          <div>
            <label>End Date</label>
            <DatePicker
              inline
              selected={dateFix(state.end_date)}
              onChange={e => {
                if (e) {
                  setDayOfWeek(e.getDay());
                  setEndDate(moment(e).format('YYYY-MM-DD'));  
                }
              }}
            />
          </div>
          <button onClick={() => addEvent({ variables: state })}>
            Create Event
          </button>
        </form>
      </div>
    );
  }
  return <p>Loading...</p>
}
