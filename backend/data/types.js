// Imports: GraphQL
import { gql } from "apollo-server-express";
// GraphQL: TypeDefs
const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
  }
  type Mutation {
    addUser(
      first_name: String!
      last_name: String!
      gender: String!
      contact_email: String!
      contact_phone: String
      contact_prefered: String
      description: String
      picture: String
      total_hours: Int
      password_hash: String
      status: String
      is_admin: Boolean
      is_disable: Boolean
    ): User
  }

  type User {
    id: ID
    first_name: String!
    last_name: String!
    gender: String!
    contact_email: String!
    contact_phone: String
    contact_prefered: String
    description: String
    picture: String
    total_hours: Int
    password_hash: String
    status: String
    is_admin: Boolean
    is_disable: Boolean
  }
`;

// Exports
export default typeDefs;
