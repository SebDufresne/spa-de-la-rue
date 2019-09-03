
exports.up = function(knex) {
  return knex.schema.createTable('clinic_reports', table => {
    table.increments('id').primary();
    table.integer('clinic_id');
    table.integer('administrator_id');
    table.integer('number_of_clients');
    table.integer('notes');
    
    table.foreign('clinic_id').references('id').inTable('clinics');
    table.foreign('administrator_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clinic_reports');
};
