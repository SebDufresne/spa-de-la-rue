
exports.up = function(knex) {
  return knex.schema.raw(`
    CREATE VIEW clinic_summary AS
    SELECT cli.id, par.picture_url, eve.name, eve.description, eve.color, cli.date, cli.start_time, cli.end_time, cli.therapist_needed, COUNT(att.*) AS volunteers_registered, cli.therapist_needed - COUNT(att.*) AS free_spots
    FROM clinics AS cli
    JOIN events AS eve ON cli.event_id = eve.id
    JOIN partners as par ON eve.partner_id = par.id
    LEFT JOIN attendances as att ON cli.id = att.clinic_id
    GROUP BY cli.id, par.id, eve.id, att.clinic_id;
  `);
};

exports.down = function(knex) {
  return knex.schema.raw(`DROP VIEW clinic_summary;`);
};
