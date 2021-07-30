import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import ProfileForm from "./ProfileForm";
import { useMutation } from "@apollo/client";
import { ADD_PET } from "../utils/mutations";

const AddPet = (props) => {
  const [dogBreed, setBreed] = useState("");
  const [dogAge, setAge] = useState("");
  const [dogGender, setGender] = useState("");
  const [dogName, setName] = useState("");
  const [addPet, { error }] = useMutation(ADD_PET);
  let history = useHistory()
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPet({
        variables: {
          dogAge,
          dogBreed,
          dogGender,
          dogName,
        },
      });
      console.log(data);
      setBreed("");
      setAge("");
      setGender("");
      setName("");
      history.push("/")
    } catch (err) {
      console.error(err, error);
    }
  };

  return (
    <div className="container">
       <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap" rel="stylesheet"/>
       <fieldset>
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
      </fieldset>
    </div>
  );
};

export default AddPet;
