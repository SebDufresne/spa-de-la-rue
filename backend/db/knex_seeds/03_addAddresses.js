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
          country: 'Canada'
        },
      ]);
    }),
  ]);
};
