import { gql } from "apollo-server";

export const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
    firstName: String
    lastName: String
    email: String
    address: String
    nationalSecurity: String
    age: Int
    dogname: String
  }

  input UserInput {
    firstName: String
    lastName: String
    email: String
    address: String
    nationalSecurity: String
    age: Int
    dogname: String
  }

  input UserUpdateInput {
    id: String!
    firstName: String
    lastName: String
    email: String
    address: String
    nationalSecurity: String
    age: Int
    dogname: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(user: UserInput!): User
    deleteUser(id: String!): String
    updateUser(user: UserUpdateInput!): User
  }
`;
