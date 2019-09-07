
exports.up = function(knex) {
  return knex.schema.raw(`
    CREATE VIEW clinic_summary AS
    SELECT cli.id, par.picture_url, eve.name, eve.description, eve.color, cli.date, cli.start_time, cli.end_time, cli.therapist_needed, COUNT(cli.*) AS volunteers_registered, cli.therapist_needed - COUNT(cli.*) AS free_spots
    FROM clinics as cli
    JOIN attendances as att ON cli.id = att.clinic_id
    JOIN events as eve ON cli.event_id = eve.id
    JOIN partners as par ON eve.partner_id = par.id
    WHERE att.is_absent = false
    GROUP BY cli.id, eve.id, par.id;
  `);
};

exports.down = function(knex) {
  return knex.schema.raw(`DROP VIEW clinic_summary;`);
};
