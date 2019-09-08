exports.up = function(knex) {
  return knex.schema.createTable('partners', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.integer('address_id');
    table.string('picture_url').notNullable();
    table.string('partner_url').nullable();
    table.string('private_contact_name').nullable();
    table.string('private_phone_number').nullable();
    table.string('private_email').nullable();
    table.boolean('is_active').notNullable().defaultTo(true);
    table.boolean('is_address_visible').notNullable().defaultTo(true);
    table.timestamps(true,true);
    table.foreign('address_id').references('id').inTable('addresses');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('partners');
};
