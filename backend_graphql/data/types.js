// Imports: GraphQL
import { gql } from "apollo-server-express";
// GraphQL: TypeDefs
const typeDefs = gql`
  type Query {
    users: [User]
  }
  type User {
    id: Int
    first_name: String
    last_name: String
    gender: String
    contact_email: String
    contsct_phone: String
    contact_prefered: String
    description: String
    picture: String
    total_hours: String
    password_hash: String
    is_admin: Boolean
    is_active: Boolean
    is_disable: Boolean
  }
`;
// Exports
export default typeDefs;
