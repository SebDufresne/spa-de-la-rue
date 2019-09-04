import React from 'react';
import MonthView from 'react-calendar';
import moment from 'moment';

interface scheduleItem {
  dates: string[],
  class: string,
}

interface scheduleDetails {
  [key: string]: scheduleItem[],
  onClick: any
}

export default function displayCalendar(props: scheduleDetails) {
  const { schedule, onClick } = props;

  const dateToClass = (schedule : scheduleItem[], date: Date) => {
    for (const clinic of schedule) {
      if (clinic.dates.includes(moment(date).format('YYYY-MM-DD'))) {
        return clinic.class;
      }
    }
    return null;
  }

  return (
    <MonthView
        calendarType = 'US'
        tileClassName = {({ date }) =>  dateToClass(schedule, date) }
    />
  );
}
