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
    user: (root, args, context) => {
      // console.log(Number(args.id));
      return db.knex("users").where("id", args.id);
    }
  }
};
// Exports
export default resolvers;
