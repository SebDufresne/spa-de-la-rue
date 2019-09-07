
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('clinic_reports').del(),
    knex.raw('ALTER SEQUENCE clinic_reports_id_seq RESTART WITH 1'),
    knex('clinic_reports').then(function() {
      // Inserts seed entries
      return knex('clinic_reports').insert([
        {
          clinic_id: 2,
          administrator_id: 2,
          number_of_clients: 32,
          notes: 'Had an issue with a client that...',
        }
      ]);
    }),
  ]);
};
