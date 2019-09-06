import { useReducer } from 'react';

import {
  reducer,
  SET_ADMINISTRATOR_ID,
  SET_PARTNER_ID,
  SET_ADDRESS_ID,
  SET_NAME,
  SET_DESCRIPTION,
  SET_START_DATE,
  SET_END_DATE,
  SET_DAY_OF_WEEK,
  SET_FREQUENCY,
  SET_START_TIME,
  SET_END_TIME,
  SET_HOURS_OF_WORK,
  SET_THERAPIST_NEEDED,
  SET_COLOR
} from '../reducers/forms';

export default function useFormData() {

  // Manages the state
  // Interacts with the reducer
  const [state, dispatch] = useReducer(reducer, {
    administrator_id: 1,
    partner_id: 1,
    address_id: 1,
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    day_of_week: 0,
    frequency: 'weekly',
    start_time: '',
    end_time: '',
    hours_of_work: 0,
    therapist_needed: 0,
    color: ''
  });

  const setAdministrator = (administrator_id : number) => {
    dispatch({ type: SET_ADMINISTRATOR_ID, administrator_id }); 
  }

  const setPartner = (partner_id : number) => {
    dispatch({ type: SET_PARTNER_ID, partner_id })
  };

  const setAddress = (address_id : number) => {
    dispatch({ type: SET_ADDRESS_ID, address_id })
  };

  const setName = (name : string) => {
    dispatch({ type: SET_NAME, name });
  }

  const setDescription = (description : string) => {
    dispatch({ type: SET_DESCRIPTION, description });
  }

  const setStartDate = (start_date: string) => {
    dispatch({ type: SET_START_DATE, start_date });
  }

  const setEndDate = (end_date : string) => {
    dispatch({ type: SET_END_DATE, end_date });
  }

  const setDayOfWeek = (day_of_week : number) => {
    dispatch({ type: SET_DAY_OF_WEEK, day_of_week });
  }

  const setFrequency = (frequency : string) => {
    dispatch({ type: SET_FREQUENCY, frequency });
  }

  const setStartTime = (start_time : string) => {
    dispatch({ type: SET_START_TIME, start_time });
  }

  const setEndTime = (end_time : string) => {
    dispatch({ type: SET_END_TIME, end_time });
  }

  const setHoursOfWork = (hours_of_work : number) => {
    dispatch({ type: SET_HOURS_OF_WORK, hours_of_work });
  }

  const setTherapistNeeded = (therapist_needed : number) => {
    dispatch({ type: SET_THERAPIST_NEEDED, therapist_needed });
  }

  const setColor = (color : string) => {
    dispatch({ type: SET_COLOR, color });
  }

  return {
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
  };
}
