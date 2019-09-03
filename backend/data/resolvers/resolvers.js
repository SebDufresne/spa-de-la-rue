// Imports: database
const db = require("../../database");
// GraphQL: Resolvers
const users = db.knex("users");
console.log("query: ", db.knex("users"));

const resolvers = {
  Query: {
    // return all the users
    users: () => {
      return users;
    },
    user: (root, { id }, context) => {
      console.log(id);
      return db.knex("users").where("id", id);
    }
  },
  Mutation: {
    addUser: (root, args) => {
      return db.knex("users").insert([{
        first_name: args.first_name,
        last_name: args.last_name,
        gender: args.gender,
        contact_email: args.contact_email,
        contact_phone: args.contact_phone,
        contact_prefered: args.contact_prefered,
        description: args.description,
        picture: args.picture,
        total_hours: args.total_hours,
        password_hash: args.password_hash,
        status: args.status,
        is_admin: args.is_admin,
        is_disable: args.is_disable,
      }]).returning('id')
      .then(([id]) => id);
    }
  }
};
// Exports
export default resolvers;
