// Imports: GraphQL
import { gql } from "apollo-server-express";
// GraphQL: TypeDefs
const typeDefs = gql`
  type Query {
    test_query: User
  }
  type User {
    id: Int
    test_field_1: String
    test_field_3: Boolean
  }
`;
// Exports
export default typeDefs;
