import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";
import UserContext from "./UserContext";
import { Header, Navigation} from "react-mdl";

function Navbar() {
  const user = useContext(UserContext);
  const history = useHistory();

  function handleLogout() {
    // console.log("handle logout")
    user.handleLogin("");
    history.push("/Login");
  }

  return (
    <Header>
      <Navigation>
        <br></br>
          <Link to="/">Hound Town</Link>
          <br></br>
          <Link to="/AddPet">Add Pet</Link>
          <br></br>
          <Link to="/Petprofile">Pet Profile</Link>
          <br></br>
          <Link to="/playdate">Matches</Link>
          <br></br>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <ul className="mx-1" onClick={handleLogout}>
            <Link to="/">Logout</Link>
          </ul>
          </Navigation>
    </Header>
  );
}

export default Navbar;
