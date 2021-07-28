import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "../components/Header";

import TinderCards from "../TinderCards";
import SwipeButtons from "../SwipeButtons";
// import Navbar from "../Navbar"

function Tinder () {
    return (
      <Router>
            <Header>
            <TinderCards />
            <SwipeButtons />
          <div className="flex-column justify-flex-start min-100-vh"></div>
          </Header>
        </Router>
    );
  }
  
  export default Tinder;