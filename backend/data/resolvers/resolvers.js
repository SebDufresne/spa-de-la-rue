// Imports: database
const db = require("../../database");
// GraphQL: Resolvers
const users = db.module.table("users");
console.log('query: ', db.module.table("users"))

const resolvers = {
  Query: {
    // return all the users
    users: () => {
      return users;
    },
    user: (root, args, context) => {
      return db.module.from("users").where({ id: 1 });
    }
  }
};
// Exports
export default resolvers;
