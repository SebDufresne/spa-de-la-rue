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
      db.knex("users").insert({
        first_name: args.first_name,
        last_name: args.last_name,
        contact_email: args.contact_email
      });
    }
  }
};
// Exports
export default resolvers;
