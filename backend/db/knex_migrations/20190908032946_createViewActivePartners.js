
exports.up = function(knex) {
  return knex.schema.raw(`
    CREATE VIEW active_partners AS
      SELECT par.id, par.name, address_id, addr."google_coords_X", addr."google_coords_Y"
      FROM partners AS par
      JOIN addresses AS addr ON par.address_id = addr.id
      WHERE is_active = true;
  `);
};

exports.down = function(knex) {
  return knex.schema.raw(`DROP VIEW active_partners;`);
};
