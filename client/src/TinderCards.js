import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios";

function TinderCards() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");

      setPets(req.data);
    }

    fetchData();
  }, []);

  console.log(pets);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {pets.map((pet) => (
          <TinderCard
            className="swipe"
            key={pet.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, pet.name)}
            onCardLeftScreen={() => outOfFrame(pet.name)}
          >
            <div style={{ backgroundImage: `${pet.image}` }} className="card">
              <h3>{pet.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
<<<<<<< HEAD
  );
};
=======
  )
};

>>>>>>> c3f40e38306a85efb0217d519aebd8c9e7b48131
export default TinderCards;
