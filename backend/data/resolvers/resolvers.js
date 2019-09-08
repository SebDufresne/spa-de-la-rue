import { argsToArgsConfig } from "graphql/type/definition";
import { insertClinics } from "../../lib/helpers";
const nodemailer = require("nodemailer");

// Imports: database
const db = require("../../database");
// GraphQL: Resolvers

let smtpTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    type: "OAuth2",
    user: "spiritxhx@gmail.com",
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN
  }
});

const resolvers = {
  Query: {
    active_partners: () => {
      return db.knex("active_partners");
    },
    active_volunteers: () => {
      return db.knex("users").where({ status: "active" });
    },
    clinic_info: (root, args, context) => {
      return db
        .knex("clinic_info")
        .where("id", args.id)
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
      console.log("Inside addEvent");
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
          let mailOptions = {
            from: "spiritxhx@gmail.com",
            to: args.contact_email,
            subject: "Hello world",
            generateTextFromHTML: true,
            html: "<b>Hello world</b>"
          };
          smtpTransport.sendMail(mailOptions, (err, res) => {
            if (err) {
              console.log(err);
            } else {
              console.log("res: ", res);
            }
          });
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
    updateProfile: (root, args) => {
      return db
        .knex("users")
        .where({ contact_email: args.contact_email })
        .update({
          first_name: args.first_name,
          last_name: args.last_name,
          contact_phone: args.contact_phone,
          description: args.description,
          contact_prefered: args.contact_prefered
        })
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
