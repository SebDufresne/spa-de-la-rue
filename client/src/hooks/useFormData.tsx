import { useReducer } from 'react';
import moment from 'moment';

import { ActivePartner } from 'components/partners/types';

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
  SET_COLOR,
  SET_GOOGLE_COORDS_X,
  SET_GOOGLE_COORDS_Y
} from '../reducers/forms';

export default function useFormData() {
  const currentDay = new Date;

  // Manages the state
  // Interacts with the reducer
  const [state, dispatch] = useReducer(reducer, {
    administrator_id: 1,
    partner_id: 1,
    address_id: 1,
    name: '',
    description: '',
    start_date: moment(Date.now()).format('YYYY-MM-DD'),
    end_date: moment(Date.now()).format('YYYY-MM-DD'),
    day_of_week: currentDay.getDay(),
    frequency: 'weekly',
    start_time: '10:00:00',
    end_time: '12:00:00',
    hours_of_work: 3,
    therapist_needed: 3,
    color: 'bg-warning',
    google_coords_X: null,
    google_coords_Y: null
  });

  const setAdministrator = (administrator_id : number) => {
    dispatch({ type: SET_ADMINISTRATOR_ID, administrator_id }); 
  }

  const setPartner = (partner_id : number, partnerList: ActivePartner[]) => {
    dispatch({ type: SET_PARTNER_ID, partner_id })
    const selectPartner : any = partnerList.find( e => Number(e.id) === partner_id);

    const name: string = selectPartner.name;
    const address_id: number = selectPartner.address_id;
    setName(name);
    setAddress(address_id);
    setGoogleCoordsX(selectPartner.google_coords_X);
    setGoogleCoordsY(selectPartner.google_coords_Y);
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

  const setGoogleCoordsX = (google_coords_X : number) => {
    dispatch({ type: SET_GOOGLE_COORDS_X, google_coords_X });
  }

  const setGoogleCoordsY = (google_coords_Y : number) => {
    dispatch({ type: SET_GOOGLE_COORDS_Y, google_coords_Y });
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
