import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";


function TinderCards() {
  const [pets, setPets] = useState([
    {
      name: "Snickers",
      image: "./public/images/snickers.png",
    },
    {
      name: "Snickers Again",
      imgFile: "snickers2.png",
    },
  ]);

const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
   
};
const outOfFrame = (name) => {
    console.log(name + " left the screen");
}




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
              <div style={{ backgroundImage: `${pet.image}`}}
              className="card"
              >
                  <h3>{pet.name}</h3>
                  </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
