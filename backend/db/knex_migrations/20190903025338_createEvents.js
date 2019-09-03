
exports.up = function(knex) {
  return knex.schema.createTable('events', table => {
    table.increments('id').primary();
    table.integer('administrator_id');
    table.integer('partner_id');
    table.integer('address_id');
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.date('start_date').notNullable();
    table.date('end_date').notNullable();
    table.integer('day_of_week').notNullable();
    table.enu('frequency', ['once', 'weekly', 'bi-weekly', 'monthly']).notNullable().defaultTo('weekly');
    table.time('start_time').notNullable();
    table.time('end_time').notNullable();
    table.integer('number_of_spots').notNullable();
    table.float('google_coords_X').notNullable();
    table.float('google_coords_Y').notNullable();
    table.string('color').notNullable();
  
    table.foreign('administrator_id').references('id').inTable('users');
    table.foreign('partner_id').references('id').inTable('partners');
    table.foreign('address_id').references('id').inTable('addresses');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('events');
};