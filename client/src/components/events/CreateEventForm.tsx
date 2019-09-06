import React, { useState } from 'react';

import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { EventSummary } from './types';
import { ActivePartner } from '../partners/types';

import useHookData from 'hooks/useFormData';

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
  partners: ActivePartner[];
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

export default function CreateEventForm () {
  const {
    state,
    setAdministrator,
    setPartner,
    setAddress,
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
    console.log(data);
    return (
    
      <div>
        <h3>Create an Event</h3>
        <form>
          <p>
            <label>Name</label>
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
              onChange={e => setHoursOfWork(+e.target.value)}
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
          <button onClick={() => state.name && state.hours_of_work && state.description && saveEvent()}>
            Create Event
          </button>
        </form>
      </div>
    );
  }
  return <p>Loading...</p>
}
