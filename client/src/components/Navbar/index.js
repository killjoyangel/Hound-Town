import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// import "./style.css";
import UserContext from "./UserContext";


function NavBar() {
  const user = useContext(UserContext);
  const history = useHistory();

  function handleLogout() {
    // console.log("handle logout")
    user.handleLogin("");
    history.push("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
      <Link to="/" className="navbar-brand">
        Hound Town
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#basicExampleNav"
        aria-controls="basicExampleNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="basicExampleNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              href="/"
            >
            </a>
            <div
              className="dropdown-menu dropdown-primary"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to="/Petprofile" className="dropdown-item">
                Profile
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/playdate" className="nav-link">
             Liked Doggos 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item" onClick={handleLogout}>
            <Link to="/" className="nav-link">
              Logout
            </Link>
          </li>
          <li className="nav-item" target="_blank">
            <a href='https://maps.google.com/'>
              Find a Park in Your Area
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;