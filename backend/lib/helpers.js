const formatDate = (date) => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

const getDaysIncrement = (frequency) => {
  switch (frequency) {
  case 'once':
    return 0;
  case 'daily':
    return 1;
  case 'weekly':
    return 7;
  case "bi-weekly":
    return 14;
  default:
    return 1;
  }
};

const generateDateList = (start_date, end_date, frequency, day_of_week) => {
  const startDate = new Date(start_date);
  const endDate = new Date(end_date);

  const increment = getDaysIncrement(frequency);
  const dateList = [];

  let evalDate = new Date(startDate);

  do {
    if (evalDate.getDay() === day_of_week) {
      dateList.push(formatDate(evalDate));
    }
    evalDate.setDate(evalDate.getDate() + increment);

  } while (Date.parse(evalDate) <= Date.parse(endDate));

  return dateList;
};

const generateClinics = (eventInfo) => {
  const {id,
    administrator_id,
    start_time,
    end_time,
    hours_of_work,
    therapist_needed,
    start_date,
    end_date,
    frequency,
    day_of_week} = eventInfo;

  const clinic = {
    event_id: id,
    administrator_id,
    date: undefined,
    start_time,
    end_time,
    hours_of_work,
    therapist_needed
  };

  const clinicListWithDate = [];

  const clinicDates = generateDateList(start_date, end_date, frequency, day_of_week);
  
  for (const clinicDate of clinicDates) {
    let currentClinic = {...clinic};
    currentClinic.date = clinicDate;
    clinicListWithDate.push(currentClinic);
  }

  return clinicListWithDate;
};

const insertClinics = (eventInfo) => {
  const db = require("../database");

  const clinicList = generateClinics(eventInfo);
  console.log(clinicList);
  return db.knex("clinics")
    .insert(clinicList)
    .then(id => {
      console.log("Yeah");
    });

};

module.exports = { generateDateList, getDaysIncrement, insertClinics };