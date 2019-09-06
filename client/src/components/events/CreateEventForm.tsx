import React, { useState } from 'react';

import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { EventSummary } from './types';
import { ActivePartner } from '../partners/types';
import DatePicker from "react-datepicker";

import useHookData from 'hooks/useFormData';
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const SAVE_EVENT = gql`
  mutation saveEvent($rocket: RocketInput!) {
    addRocket(rocket: $rocket) {
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
}

const GET_ACTIVE_PARTNERS = gql`
  query getPartnerList {
    active_partners {
      id
      name
      address_id
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
    setFrequency,
    setStartTime,
    setEndTime,
    setHoursOfWork,
    setTherapistNeeded,
    setColor
  } = useHookData();
;

  const [saveEvent] = useMutation<
    { saveEvent: EventSummary }
  >(SAVE_EVENT, {
    variables: { event: { state } }
  });

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
        <form>
          <label>Partner Name</label>
          <select
            value={state.partner_id}
            onChange={e => {
              setPartner(parseInt(e.target.value), data.active_partners)
            }}          
            name="partner"
          >
            {data.active_partners.map(partner => (
              <option value={partner.id}>
                {partner.name}
              </option>
            ))}
          </select>

          <p>
            <label>Event Name</label>
            <input
              name="name"
              type="text"
              placeholder="name"
              value={state.name} 
              onChange={e => setName(e.target.value)}
            />
          </p>

          <p>
            <label>Hours Of Volunteering</label>
            <input
              type="number"
              name="hours_of_work"
              value={state.hours_of_work} 
              onChange={e => setHoursOfWork(parseInt(e.target.value))}
            />
          </p>

          <p>
            <label>Numbers of Therapist</label>
            <input
              type="number"
              name="therapist_needed"
              value={state.therapist_needed} 
              onChange={e => setTherapistNeeded(parseInt(e.target.value))}
            />
          </p>

          <p>
            <label>Description</label>
            <textarea
              name="description"
              rows={5}
              onChange={e => setDescription(e.target.value)}
            />
          </p>

          <p>
            <label>Start Date</label>
            <DatePicker
              selected={new Date(state.start_date)}
              onChange={e => {
                const dateAsStr = e ? moment(e).format('YYYY-MM-DD') : ''; 
                setStartDate(moment(dateAsStr).format('YYYY-MM-DD'));
              }}
            />
          </p>

          <p>
            <label>End Date</label>
            <DatePicker
              selected={new Date(state.end_date)}
              onChange={e => {
                const dateAsStr = e ? moment(e).format('YYYY-MM-DD') : ''; 
                setEndDate(moment(dateAsStr).format('YYYY-MM-DD'));
              }}
            />
          </p>

          <button onClick={() => state.name && state.hours_of_work && state.description && saveEvent()}>
            Create Event
          </button>
        </form>
      </div>
    );
  }
  return <p>Loading...</p>
}
