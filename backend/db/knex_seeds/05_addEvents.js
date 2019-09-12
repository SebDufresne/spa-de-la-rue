
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
          name: 'Accueil Bonneau',
          description: "Une opportunité de venir travailler avec les gens de l'Accueil Bonneau",
          start_date: '2019-08-21',
          end_date: '2019-11-02',
          day_of_week: 3,
          frequency: 'bi-weekly',
          start_time: '10:00:00',
          end_time: '12:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
          google_coords_X: 45.5101847,
          google_coords_Y: -73.5507545,
          color:'clinic-color-orange-1'
        },
        {
          administrator_id: 1,
          partner_id: 4,
          address_id: 4,
          name: 'Auberge Madeleine',
          description: "Joignez-vous à nous pour cette expérience inoubliable auprès de la clientèle de l'Auberge Madeleine.",
          start_date: '2019-09-02',
          end_date: '2019-09-23',
          day_of_week: 3,
          frequency: 'weekly',
          start_time: '14:00:00',
          end_time: '16:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
          google_coords_X: 45.5391864,
          google_coords_Y: -73.5756277,
          color:'clinic-color-pink-1'
        },
        {
          administrator_id: 2,
          partner_id: 3,
          address_id: 3,
          name: 'Association de Montréal pour la déficience intellectuelle',
          description: "Venez rencontrer et apprendre des clients d'AMDI, une expérience des plus transformatrice.",
          start_date: '2019-09-21',
          end_date: '2019-09-21',
          day_of_week: 3,
          frequency: 'once',
          start_time: '19:00:00',
          end_time: '21:00:00',
          hours_of_work: 3,
          therapist_needed: 3,
          google_coords_X: 45.5473735,
          google_coords_Y: -73.6375877,
          color:'clinic-color-purple-1'
        },
      ]);
    }),
  ]);
};
