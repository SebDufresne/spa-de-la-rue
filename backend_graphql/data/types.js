// Imports: GraphQL
import { gql } from "apollo-server-express";
// GraphQL: TypeDefs
const typeDefs = gql`
  type Query {
    users: [User]
  }
  type User {
    id: Int
    firstName: String
    lastName: String
  }
`;
// Exports
export default typeDefs;
