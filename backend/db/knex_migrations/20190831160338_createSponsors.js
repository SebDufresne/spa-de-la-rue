exports.up = function(knex) {
  return knex.schema.createTable('sponsors', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('picture_url').notNullable();
    table.text('description').nullable();
    table.string('sponsor_url').nullable();
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamps(true,true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('sponsors');
};
