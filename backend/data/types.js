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
    clinic_info(id: ID!): Clinic_Info
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
      color: String!
      google_coords_X: Float!
      google_coords_Y: Float!
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

  type Clinic_Info {
    id: ID
    picture_url: String
    partner_name: String
    event_name: String
    partner_description: String
    event_description: String
    google_coords_X: Float
    google_coords_Y: Float
    address1: String
    address2: String
    city: String
    state: String
    zip: String
    country: String
    color: String
    date: String
    start_time: String
    end_time: String
    therapist_needed: Int
    volunteers_registered: Int
    free_spots: Int
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
    color: String!
    google_coords_X: Float!
    google_coords_Y: Float!
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
    google_coords_X: Float
    google_coords_Y: Float
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
