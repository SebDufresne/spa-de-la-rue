// Imports: GraphQL
import { gql } from "apollo-server-express";
// GraphQL: TypeDefs
const typeDefs = gql`
  type Query {
    active_partners: [Partner_Brief]
    active_volunteers: [User_Brief]
    clinic_summary: [Clinic_Summary]
    users: [User]
    user(contact_email: String!): User
    partners: [Partner]
    sponsors: [Sponsor]
    volunteers: [User]
  }
  type Mutation {
    addEvent(
      administrator_id: Int!
      partner_id: Int!
      address_id: Int!
      name: String!
      description: String!
      start_date: String!
      end_date: String!
      day_of_week: Int!
      frequency: String!
      start_time: String!
      end_time: String!
      hours_of_work: Int!
      therapist_needed: Int!
      google_coords_X: Int
      google_coords_Y: Int
      color: String!
    ): Event

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
      status: String
      is_admin: Boolean
      is_disable: Boolean
    ): User 

    updateUser(
      contact_email: String!
      status: String!
    ): User

    updateProfile(
      contact_email: String!
      first_name: String!
      last_name: String!
      contact_phone: String
      description: String
    ): User

    addSponsor(
      name: String
      picture_url: String
      description: String
      sponsor_url: String
      is_active: Boolean
    ): Sponsor
  }

  type Clinic_Summary {
    id: ID
    picture_url: String
    name: String
    description: String
    color: String
    date: String
    start_time: String
    end_time: String
    therapist_needed: Int
    volunteers_registered: Int
    free_spots: Int
  }

  type Event {
    administrator_id: ID
    partner_id: Int!
    address_id: Int!
    name: String!
    description: String!
    start_date: String!
    end_date: String!
    day_of_week: Int!
    frequency: String!
    start_time: String!
    end_time: String!
    hours_of_work: Int!
    therapist_needed: Int!
    google_coords_X: Int
    google_coords_Y: Int
    color: String!
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

  type User_Brief {
    id: ID
    first_name: String
    last_name: String
  }

  type Partner_Brief {
    id: ID
    name: String
    address_id: Int
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
