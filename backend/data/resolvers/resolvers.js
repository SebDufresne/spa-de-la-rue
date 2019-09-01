// Imports: database
const db = require("../../database");
// GraphQL: Resolvers
const users = db.module.table("users");
console.log("query: ", db.module("users").where('id', '1'));

const resolvers = {
  Query: {
    // return all the users
    users: () => {
      return users;
    },
    user: (root, args, context) => {
      console.log(Number(args.id));
      return db.module
        ("users")
        .where('id', args.id);
    }
  }
};
// Exports
export default resolvers;
