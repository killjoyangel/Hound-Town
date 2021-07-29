import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

import TinderCards from "../TinderCards";

function Home() {
  return (
    <Router>
      <Navbar />
      <TinderCards></TinderCards>
      <div className="flex-column justify-flex-start min-100-vh"></div>
    </Router>
  );
}

export default Home;
