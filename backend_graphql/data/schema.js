// Imports: GraphQL
import { ApolloServer } from "apollo-server-express";
// Imports: GraphQL TypeDefs & Resolvers
import typeDefs from "./types.js";
import resolvers from "./resolvers/resolvers";
// GraphQL: Schema
const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      "editor.theme": "dark"
    }
  }
});
// Exports
export default SERVER;
