// Imports: database
const db = require("../../database");
// GraphQL: Resolvers

const getUser = (args) => {
  db.knex("users")
    .where({id: args.id})
    .then(userData => userData);
}

const resolvers = {
  Query: {
    users: () => {
      return db.knex("users");
    },
    user: (root, args, context) => {
      return db.knex("users")
        .where({id: args.id})
        .then(userData => {
          return userData[0]
        });
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
    }
  }
};
// Exports
export default resolvers;
