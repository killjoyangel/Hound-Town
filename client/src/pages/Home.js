import React from "react";
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
            <ul>
              <li>Name: {pet.dogName}</li>
              <li>Age: {pet.dogAge}</li>
              <li>Gender: {pet.dogGender}</li>
              <li>Breed: {pet.dogBreed}</li>
            </ul>
          </div>
        ))}
    </>
  );
};

export default Home;
