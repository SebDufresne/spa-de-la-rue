
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('clinics').del(),
    knex.raw('ALTER SEQUENCE clinics_id_seq RESTART WITH 1'),
    knex('events').then(function() {
      // Inserts seed entries
      return knex('clinics').insert([
        {
          event_id: 1,
          administrator_id: 3,
          date:'2019-08-21',
          start_time: '10:00:00',
          end_time: '12:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 1,
          administrator_id: 3,
          date:'2019-09-04',
          start_time: '10:00:00',
          end_time: '12:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 1,
          administrator_id: 3,
          date:'2019-09-18',
          start_time: '10:00:00',
          end_time: '12:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 1,
          administrator_id: 3,
          date:'2019-10-02',
          start_time: '10:00:00',
          end_time: '12:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 1,
          administrator_id: 3,
          date:'2019-10-16',
          start_time: '10:00:00',
          end_time: '12:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 1,
          administrator_id: 3,
          date:'2019-10-30',
          start_time: '10:00:00',
          end_time: '12:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 2,
          administrator_id: 1,
          date:'2019-09-02',
          start_time: '14:00:00',
          end_time: '16:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 2,
          administrator_id: 1,
          date:'2019-09-09',
          start_time: '14:00:00',
          end_time: '16:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 2,
          administrator_id: 1,
          date:'2019-09-16',
          start_time: '14:00:00',
          end_time: '16:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 2,
          administrator_id: 1,
          date:'2019-09-23',
          start_time: '14:00:00',
          end_time: '16:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 2,
          administrator_id: 1,
          date:'2019-09-30',
          start_time: '14:00:00',
          end_time: '16:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 2,
          administrator_id: 1,
          date:'2019-10-07',
          start_time: '14:00:00',
          end_time: '16:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 3,
          administrator_id: 1,
          date:'2019-09-21',
          start_time: '19:00:00',
          end_time: '21:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        }
      ]);
    }),
  ]);
};
