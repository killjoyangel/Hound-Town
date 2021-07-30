import React from "react";
// import {Container} from 'react-bootstrap'
import "../App.css"
import { useQuery } from "@apollo/client";
import { GET_ME, QUERY_PETS } from "../utils/queries";

const Home = () => {
  const { data: me } = useQuery(GET_ME);
  const { data: pets } = useQuery(QUERY_PETS);
  let user;
  let allPets;
  if (me) {
    user = me.me;
  }

  if (pets) {
    allPets = pets.pets;
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap"
        rel="stylesheet"
      />
      {user ? (
        <>
          <h2>Welcome {user.username}!</h2>
        </>
      ) : (
        <p>Please sign in</p>
      )}
      <h3>ALL PETS</h3>
      {allPets &&
        allPets.map((pet) => (
          <div key={pet._id}>
            <div className="pups">
              <ul>
                <li>Name: {pet.dogName}</li>
                <li>Age: {pet.dogAge}</li>
                <li>Gender: {pet.dogGender}</li>
                <li>Breed: {pet.dogBreed}</li>
              </ul>
            </div>
          </div>
        ))}
    </>
  );
};

export default Home;
