import React from 'react';
import MonthView from 'react-calendar';
import moment from 'moment';

interface scheduleItem {
  dates: string[],
  class: string,
}

interface scheduleDetails {
  schedule: scheduleItem[]
}

export default function displayCalendar(props: scheduleDetails) {
  const { schedule } = props;

  const dateToClass = (classList : scheduleItem[], date: Date) => {
    for (const clinic of classList) {
      const dateList = clinic.dates.map(e => moment(parseInt(e)).format('YYYY-MM-DD'));
      if (dateList.includes(moment(date).format('YYYY-MM-DD'))) {
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
