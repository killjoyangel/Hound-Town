import React, { useState, useContext } from "react";
import axios from "axios";
import MeetUpForm from "./MeetUpForm";
import UserContext from "../utils/UserContext";


const NewPlayDate = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  // const status = useContext(StatusContext);
  const user = useContext(UserContext);

  const handleSubmit = (event) => {
    let config = {
      headers: {
        auth: user.jwt,
      },
    };
    event.preventDefault();
    axios
      .post("/api/playdate", { name, date, location, description }, config)
      .then((response) => {
        // console.log(response.data);
        // When clicking submit will redirect to playdate page
        props.history.push("/meetup");
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
      <h1>Submit an Event Idea</h1>
      <MeetUpForm
        handleSubmit={handleSubmit}
        setName={setName}
        setDate={setDate}
        setLocation={setLocation}
        setDescription={setDescription}
        name={name}
        date={date}
        location={location}
        description={description}
      />
    </div>
  );
};

export default NewPlayDate;