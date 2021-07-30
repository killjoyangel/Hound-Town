const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    pets: [Pet]
  }

  type Pet {
    _id: String
    dogName: String!
    dogBreed: String!
    dogGender: String
    dogAge: String
  }

  input petInput {
    dogName: String
    dogBreed: String
    dogGender: String
    dogAge: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    pets(username: String): [Pet]
    me: User
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      pets: String
    ): Auth
    login(email: String!, password: String!): Auth
    addPet(
      dogBreed: String!
      dogName: String!
      dogGender: String
      dogAge: String
    ): Pet
    # savePet(username: String!,  dogBreed: String!, dogName: String!, dogGender: String, dogAge: String ): Pet
    removePet(
      username: String!
      dogBreed: String!
      dogName: String!
      dogGender: String
      dogAge: String
    ): Pet
  }
`;

module.exports = typeDefs;
