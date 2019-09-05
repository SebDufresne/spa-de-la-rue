// Imports: GraphQL
import { gql } from "apollo-server-express";
// GraphQL: TypeDefs
const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    partners: [Partner]
    sponsors: [Sponsor]
    volunteers: [User]
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
      picture_url: String
      total_hours: Int
      password_hash: String
      status: String
      is_admin: Boolean
      is_disable: Boolean
    ): User 
    addSponsor(
      name: String
      picture_url: String
      description: String
      sponsor_url: String
      is_active: Boolean
    ): Sponsor
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
    picture_url: String
    total_hours: Int
    password_hash: String
    status: String
    is_admin: Boolean
    is_disable: Boolean
  }

  type Partner {
    id: ID
    name: String
    picture_url: String
    description: String
    partner_url: String
    is_active: Boolean
  }

  type Sponsor {
    id: ID
    name: String
    picture_url: String
    description: String
    sponsor_url: String
    is_active: Boolean
  }

`;

// Exports
export default typeDefs;
