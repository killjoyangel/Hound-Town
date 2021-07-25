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

  input PutInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  } 

  type Mutation {
    addUser(username: String!, email: String!, password: String! pets: String!): Auth
    login(email: String!, password: String!): Auth
    addPet(username: String!,  dogBreed: String!, dogName: String!, dogGender: String,   dogAge: Int ): Pet
   
  }
`;

module.exports = typeDefs;