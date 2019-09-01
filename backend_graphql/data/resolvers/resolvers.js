// Imports: database
const db = require("../../database");
// GraphQL: Resolvers

const resolvers = {
  Query: {
    users: async () => {
      const users = await db.module.table("users");
      // console.log("users: ", users);
      return users;
    }
  }
};
// Exports
export default resolvers;
