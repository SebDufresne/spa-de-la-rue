import { ActionTS } from './types';

export const SET_ADMINISTRATOR_ID = 'SET_ADMINISTRATOR_ID';
export const SET_PARTNER_ID = 'SET_PARTNER_ID';
export const SET_ADDRESS_ID = 'SET_ADDRESS_ID';
export const SET_NAME = 'SET_NAME';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';
export const SET_DAY_OF_WEEK = 'SET_DAT_OF_WEEK';
export const SET_FREQUENCY = 'SET_FREQUENCY';
export const SET_START_TIME = 'SET_START_TIME';
export const SET_END_TIME = 'SET_END_TIME';
export const SET_HOURS_OF_WORK = 'SET_HOURS_OF_WORK';
export const SET_THERAPIST_NEEDED = 'SET_THERAPIST_NEEDED';
export const SET_COLOR = 'SET_COLOR';


export function reducer(state : any, action : ActionTS) {
  const { 
    administrator_id,
    partner_id,
    address_id,
    name,
    description,
    start_date,
    end_date,
    day_of_week,
    frequency,
    start_time,
    end_time,
    hours_of_work,
    therapist_needed,
    color,
    type } = action;

  switch (type) {
    case SET_ADMINISTRATOR_ID:
      return { ...state, administrator_id };
    case SET_PARTNER_ID:
      return { ...state, partner_id };
    case SET_ADDRESS_ID:
      return { ...state, address_id };
    case SET_NAME:
      return { ...state, name };
    case SET_DESCRIPTION:
      return { ...state, description };
    case SET_START_DATE:
      return { ...state, start_date };
    case SET_END_DATE:
      return { ...state, end_date };
    case SET_DAY_OF_WEEK:
      return { ...state, day_of_week };        
    case SET_FREQUENCY:
      return { ...state, frequency };
    case SET_START_TIME:
      return { ...state, start_time };
    case SET_END_TIME:
      return { ...state, end_time };
    case SET_HOURS_OF_WORK:
      return { ...state, hours_of_work };
    case SET_THERAPIST_NEEDED:
      return { ...state, therapist_needed };
    case SET_COLOR:
      return { ...state, color };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${type}`);
  }
}
