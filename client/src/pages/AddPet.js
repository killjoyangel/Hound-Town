import React, { useState } from "react";
import axios from "axios";
import ProfileForm from "./ProfileForm";

const AddPet = (props) => {
  const [dogBreed, setBreed] = useState("");
  const [dogAge, setAge] = useState("");
  const [dogGender, setGender] = useState("");
  const [dogName, setName] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/profiles", { dogBreed,dogAge, dogGender, dogName})
      .then((response) => {
        // console.log(response.data);
        // When clicking submit will redirect to profile page
        props.history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const mystyle = {
    color: "white",
    backgroundColor: "rgb(124, 67, 189, .5)",
    padding: "10px",
    fontFamily: "Arial",
    maxLength: "100%",
  };

  return (
    <div className="container" style={mystyle}>
      <h1>Pet Info</h1>
      <ProfileForm
        handleSubmit={handleSubmit}
        setBreed={setBreed}
        setAge={setAge}
        setGender={setGender}
        setName={setName}
        dogBreed={dogBreed}
        dogAge={dogAge}
        dogGender={dogGender}
        dogName={dogName}
      />
    </div>
  );
};

export default AddPet;