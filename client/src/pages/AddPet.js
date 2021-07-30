import React, { useState } from "react";
// import axios from "axios";
import ProfileForm from "./ProfileForm";
import {useMutation} from "@apollo/client";
import {ADD_PET} from "../utils/mutations";

const AddPet = (props) => {
  const [dogBreed, setBreed] = useState("");
  const [dogAge, setAge] = useState("");
  const [dogGender, setGender] = useState("");
  const [dogName, setName] = useState("");
  
  const [addPet, {error}]  = useMutation(ADD_PET) 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPet({
        variables: {
          dogAge, dogBreed, dogGender, dogName,
        },
      });
      console.log(data)
    } catch (err) {
      console.error(err, error);
    }

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