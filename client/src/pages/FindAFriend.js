import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";


function FindAFriend () {
  return (
    <Router>
      <Navbar />
      <div className="flex-column justify-flex-start min-100-vh"></div>
    </Router>
  );
}

export default FindAFriend;
