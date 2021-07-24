const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    pets: [Pet]!
  }

  type Pet {
  username: String!
   dogName: String!
   dogBreed: String!
   dogGender: String
   dogAge: Int
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
    addUser(username: String!, email: String!, password: String! pets: string!): Auth
    login(email: String!, password: String!): Auth
    addPet(username: String!,  dogBreed: String!, dogBreed: String!, dogGender: String,   dogAge: Int ): Pet
   
  }
`;

module.exports = typeDefs;