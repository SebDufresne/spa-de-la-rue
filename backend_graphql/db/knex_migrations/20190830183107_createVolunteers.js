exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.enu('gender', ['F', 'M', 'O']).notNullable();
    table.string('contact_email').unique().notNullable();
    table.string('contact_phone');
    table.enu('contact_prefered', ['email', 'phone']).notNullable().defaultTo('email');
    table.text('description');
    table.string('picture').notNullable().defaultTo('');
    table.integer('total_hours').notNullable().defaultTo(0);
    table.string('password_hash');
    table.boolean('is_admin').notNullable().defaultTo(false);
    table.boolean('is_active').notNullable().defaultTo(true);
    table.boolean('is_disable').notNullable().defaultTo(false);
    table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
