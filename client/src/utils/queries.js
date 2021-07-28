import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
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

export const QUERY_PETS = gql`
  query getPets {
    pets {
      _id
      dogBreed
      dogAge
      dogGender
      dogName
    }
  }
`;
