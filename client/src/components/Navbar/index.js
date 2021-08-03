import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { NavLink} from  "react-router-dom";
import "./Navbar.css";
import UserContext from "./UserContext";
import {Navbar, Nav, Container} from 'react-bootstrap'
import Auth from "../../utils/auth";

function MyNavbar () {
  const user = useContext(UserContext);
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem('id_token');
    window.location.reload();

    // console.log("handle logout")
    user.handleLogin("");
    history.replace("/Login");
  }
console.log(Auth.loggedIn())
  return (


<Navbar collapseOnSelect expand="lg">
  <Container className="me-auto">
  <Navbar.Brand as={NavLink} exact to="/">Hound Town</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav>
      <Nav.Link as={NavLink} to="/Signup">Signup</Nav.Link>
      {Auth.loggedIn() ?  <Nav.Link as={NavLink} to="/Login" onClick={handleLogout}>Logout</Nav.Link> : <Nav.Link as={NavLink} to="/Login">Login</Nav.Link>}
      <Nav.Link as={NavLink} to="/AddPet">Add Pet</Nav.Link>
      <Nav.Link as={NavLink} to="/FindAFriend">Find A Friend</Nav.Link>
      <Nav.Link as={NavLink} to="/MeetUps">MeetUps</Nav.Link>   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default MyNavbar;
