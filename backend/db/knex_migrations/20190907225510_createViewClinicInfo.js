
exports.up = function(knex) {
  return knex.schema.raw(`
    CREATE VIEW clinic_info AS
    SELECT cli.id, par.picture_url, par.name AS "partner_name", eve.name AS "event_name", par.description AS "partner_description", eve.description AS "event_description", eve."google_coords_X", eve."google_coords_Y", addr.address1, addr.address2, addr.city, addr.state, addr.zip, addr.country, eve.color, cli.date, cli.start_time, cli.end_time, cli.therapist_needed, COUNT(att.*) AS volunteers_registered, cli.therapist_needed - COUNT(att.*) AS free_spots
    FROM clinics AS cli
    JOIN events AS eve ON cli.event_id = eve.id
    JOIN partners AS par ON eve.partner_id = par.id
	  JOIN addresses AS addr ON addr.id = par.address_id
    LEFT JOIN attendances as att ON cli.id = att.clinic_id
    GROUP BY cli.id, par.id, eve.id, att.clinic_id, addr.id
  `);
};

exports.down = function(knex) {
  return knex.schema.raw(`DROP VIEW clinic_info;`);
};
