
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('attendances').del(),
    knex.raw('ALTER SEQUENCE attendances_id_seq RESTART WITH 1'),
    knex('attendances').then(function() {
      // Inserts seed entries
      return knex('attendances').insert([
        {
          clinic_id: 1,
          volunteer_id: 1,
          is_absent: false,
        },
        {
          clinic_id: 1,
          volunteer_id: 2,
          is_absent: false,
        }
      ]);
    }),
  ]);
};
