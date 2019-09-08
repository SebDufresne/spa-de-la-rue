exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('addresses').del(),
    knex.raw('ALTER SEQUENCE addresses_id_seq RESTART WITH 1'),
    knex('addresses').then(function() {
      // Inserts seed entries
      return knex('addresses').insert([
        {
          address1: '427 de la Commune Est',
          address2: null,
          city: 'Montréal',
          state: 'Québec',
          zip: 'H2Y 1J4',
          country: 'Canada',
          google_coords_X: 45.5101847,
          google_coords_Y: -73.5507545
        },
        {
          address1: '6000 De La Roche St',
          address2: null,
          city: 'Montréal',
          state: 'Québec',
          zip: 'H2S 2C7',
          country: 'Canada',
          google_coords_X: 45.5364709,
          google_coords_Y: -73.5965922
        },
        {
          address1: '633 Boul Crémazie E Suite 100',
          address2: null,
          city: 'Montréal',
          state: 'Québec',
          zip: 'H2M 1L9',
          country: 'Canada',
          google_coords_X: 45.5473735,
          google_coords_Y: -73.6375877
        },
        {
          address1: 'Sera révélée au besoin',
          address2: null,
          city: 'Montréal',
          state: 'Québec',
          zip: 'H2M 1L9',
          country: 'Canada',
          google_coords_X: 45.5391864,
          google_coords_Y: -73.5756277
        },
      ]);
    }),
  ]);
};
