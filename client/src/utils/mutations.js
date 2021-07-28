import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
addUser(username: $username, password: $password, email: $email) {
  token
  user {
    username
    email 
  }
}
}
`;

export const SAVE_PET = gql`
mutation savePet($petData: petInput!) {
  savePet(petData: $petData) {
    _id
    username
    email
    pets {
      dogBreed
      dogAge
      dogGender
      dogName
    }
  }
}
`;

export const REMOVE_PET= gql`
mutation removePet($petId: ID!) {
  removePet(petId: $petId) {
    _id
    username
    email
    pets {
      dogBreed
      dogAge
      dogGender
      dogName
    }
    }
  }
`;


