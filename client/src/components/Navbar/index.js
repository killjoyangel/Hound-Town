import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import UserContext from "./UserContext";
import {Navbar, Nav, Container} from 'react-bootstrap'
import Auth from "../../utils/auth";

function MyNavbar () {
  const user = useContext(UserContext);
  const history = useHistory();

  function handleLogout() {
    // console.log("handle logout")
    user.handleLogin("");
    history.replace("/Login");
  }

  return (

//       <div>
//         <Navbar>
// <Container>
//                 <NavLink exact to="/">Hound Town</NavLink>

//                 <NavLink to="/AddPet">Add Pet</NavLink>

//                 <NavLink to="/Petprofile">Pet Profile</NavLink>

//                 <NavLink to="/SavePetProfile">Matches</NavLink>

//                 <NavLink to="/Signup">Sign Up</NavLink>

//                 <NavLink to="/Login">Login</NavLink>
//  <p className="mx-1" onClick={handleLogout}>
//    <NavLink to="/">Logout</NavLink>
//  </p> 
//  </Container>
//  </Navbar>
// </div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={NavLink} exact to="/">Hound Town</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/Signup">Signup</Nav.Link>
      <Nav.Link as={NavLink} to="/AddPet">Add Pet</Nav.Link>
      <Nav.Link as={NavLink} to="/FindAFriend">FindAFriend</Nav.Link>
      <Nav.Link as={NavLink} to="/SavePetProfile">Matches</Nav.Link>
      {Auth.loggedIn() ?  <Nav.Link as={NavLink} to="/Login" onClick={handleLogout}>Logout</Nav.Link> : <Nav.Link as={NavLink} to="/Login">Login</Nav.Link>} 
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default MyNavbar;
