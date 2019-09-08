import { argsToArgsConfig } from "graphql/type/definition";
import { insertClinics } from "../../lib/helpers";

// Imports: database
const db = require("../../database");
// GraphQL: Resolvers

const resolvers = {
  Query: {
    active_partners: () => {
      return db.knex("active_partners");
    },
    active_volunteers: () => {
      return db.knex("users").where({ status: "active" });
    },
    clinic_info: (root, args, context) => {
      console.log("Yest");
      return db
        .knex("clinic_info")
        .where('id', args.id )
        .then(userData => {
          return userData[0];
        });
    },
    clinic_summary: () => {
      return db.knex("clinic_summary");
    },
    partners: () => {
      return db.knex("partners");
    },
    sponsors: () => {
      return db.knex("sponsors");
    },
    users: () => {
      return db.knex("users");
    },
    user: (root, args, context) => {
      return db
        .knex("users")
        .where({ contact_email: args.contact_email })
        .then(userData => {
          return userData[0];
        });
    },
    volunteers: () => {
      return db.knex("users");
    }
  },
  Mutation: {
    addEvent: (root, args) => {
      return db
        .knex("events")
        .insert({
          administrator_id: args.administrator_id,
          partner_id: args.partner_id,
          address_id: args.address_id,
          name: args.name,
          description: args.description,
          start_date: args.start_date,
          end_date: args.end_date,
          day_of_week: args.day_of_week,
          frequency: argsToArgsConfig,
          frequency: args.frequency,
          start_time: args.start_time,
          end_time: args.end_time,
          hours_of_work: args.hours_of_work,
          therapist_needed: args.therapist_needed,
          color: args.color,
          google_coords_X: args.google_coords_X,
          google_coords_Y: args.google_coords_Y
        })
        .returning("*")
        .then(([event]) => insertClinics(event));
    },
    addUser: (root, args) => {
      return db
        .knex("users")
        .insert({
          first_name: args.first_name,
          last_name: args.last_name,
          gender: args.gender,
          contact_email: args.contact_email,
          contact_phone: args.contact_phone,
          contact_prefered: args.contact_prefered,
          description: args.description,
          picture_url: args.picture_url,
          total_hours: args.total_hours,
          status: args.status,
          is_admin: args.is_admin,
          is_disable: args.is_disable
        })
        .returning("id")
        .then(id => {
          return { id: id[0] };
        });
    },
    updateUser: (root, args) => {
      return db
        .knex("users")
        .where({ contact_email: args.contact_email })
        .update({ status: args.status })
        .returning("id")
        .then(id => {
          return { id: id[0] };
        });
    },
    addSponsor: (root, args) => {
      return db
        .knex("sponsors")
        .insert({
          name: args.name,
          description: args.description,
          picture_url: args.picture_url,
          sponsor_url: args.sponsor_url
        })
        .returning("id")
        .then(id => {
          return { id: id[0] };
        });
    }
  }
};
// Exports
export default resolvers;
