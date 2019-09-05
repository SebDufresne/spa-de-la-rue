
exports.up = function(knex) {
  return knex.schema.createTable('clinics', table => {
    table.increments('id').primary();
    table.integer('event_id');
    table.integer('administrator_id');
    table.date('date').notNullable();
    table.time('start_time').notNullable();
    table.time('end_time').notNullable();
    table.integer('hours_of_work').notNullable();
    table.integer('therapist_needed').notNullable();
    
    table.foreign('event_id').references('id').inTable('events');
    table.foreign('administrator_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clinics');
};
