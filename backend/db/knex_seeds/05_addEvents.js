
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('events').del(),
    knex.raw('ALTER SEQUENCE events_id_seq RESTART WITH 1'),
    knex('events').then(function() {
      // Inserts seed entries
      return knex('events').insert([
        {
          administrator_id: 3,
          partner_id: 1,
          address_id: 1,
          name: 'Acceuil Bonneau',
          description: "Une opportunitée de venir travailler avec les gens de l'Accueuil Bonneau",
          start_date: '2019-08-21',
          end_date: '1999-11-02',
          day_of_week: 3,
          frequency: 'bi-weekly',
          start_time: '10:00:00',
          end_time: '12:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
          google_coords_X: 45.5101847,
          google_coords_Y: -73.5507545,
          color:'bg-warning'
        }
      ]);
    }),
  ]);
};
