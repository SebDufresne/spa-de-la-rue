
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
          date:'2019-09-21',
          start_time: '10:00:00',
          end_time: '12:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 1,
          administrator_id: 3,
          date:'2019-10-04',
          start_time: '10:00:00',
          end_time: '12:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 1,
          administrator_id: 3,
          date:'2019-10-18',
          start_time: '10:00:00',
          end_time: '12:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        },{
          event_id: 1,
          administrator_id: 3,
          date:'2019-11-02',
          start_time: '10:00:00',
          end_time: '12:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
        }
      ]);
    }),
  ]);
};
