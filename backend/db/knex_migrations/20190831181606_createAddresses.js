
exports.up = function(knex) {
  return knex.schema.createTable('addresses', table => {
    table.increments('id').primary();
    table.string('address1').notNullable();
    table.string('address2');
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('zip').notNullable();
    table.string('country').notNullable();
    table.float('google_coords_X').nullable();
    table.float('google_coords_Y').nullable();
    table.timestamps(true,true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('addresses');
};
