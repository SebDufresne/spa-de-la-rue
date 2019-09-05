// Imports: database
const db = require("../../database");
// GraphQL: Resolvers

const resolvers = {
  Query: {
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
      return db.knex("users")
        .where({id: args.id})
        .then(userData => {
          return userData[0]
        });
    },
    volunteers: () => {
      return db.knex("users");
    }
  },
  Mutation: {
    addUser: (root, args) => {
      return db.knex("users").insert({
        first_name: args.first_name,
        last_name: args.last_name,
        gender: args.gender,
        contact_email: args.contact_email,
        contact_phone: args.contact_phone,
        contact_prefered: args.contact_prefered,
        description: args.description,
        picture_url: args.picture_url,
        total_hours: args.total_hours,
        password_hash: args.password_hash,
        status: args.status,
        is_admin: args.is_admin,
        is_disable: args.is_disable,
      }).returning('id')
      .then(id => {
        return {id: id[0]}
      });
    }, 
    addSponsor: (root, args) =>{
      return db.knex("sponsors").insert({
        name: args.name, 
        description: args.description, 
        picture_url: args.picture_url, 
        sponsor_url: args.sponsor_url
      }).returning('id')
      .then(id=>{
        return {id: id[0]}
      });
    }
  }
};
// Exports
export default resolvers;
