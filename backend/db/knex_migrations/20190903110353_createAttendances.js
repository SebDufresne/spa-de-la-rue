exports.up = function(knex) {
  return knex.schema.createTable('attendances', table => {
    table.increments('id').primary();
    table.integer('clinic_id');
    table.integer('volunteer_id');
    table.boolean('is_absent');
    
    table.foreign('clinic_id').references('id').inTable('clinics');
    table.foreign('volunteer_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('attendances');
};
