
exports.up = function(knex) {
  return knex.schema.createTable('articles', table => {
    table.increments('id').primary();
    table.integer('clinic_id');
    table.integer('author_id');
    table.date('date').defaultTo(knex.fn.now());
    table.string('title').notNullable();
    table.text('text').notNullable();
    table.enu('type', ['blog', 'news']).notNullable();
    table.string('hero_image_url').nullable();
    
    table.foreign('clinic_id').references('id').inTable('clinics');
    table.foreign('author_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('articles');
};
