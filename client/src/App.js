import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddPet from "./pages/AddPet";
import MyNavbar from "./components/Navbar";
import FindAFriend from "./pages/FindAFriend";
import MeetUps from "./pages/MeetUps";


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App () {
    return (
      <ApolloProvider client={client}>
        <Router>
        <div className="home"></div>
        <MyNavbar/>
        <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap" rel="stylesheet"/>
        <h1>Your Puppy Party Portal</h1>
        <div className="container">
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
        <Route exact path="/Login">
         <Login />
         </Route>
         <Route exact path="/AddPet">
         <AddPet />
         </Route>
         <Route exact path="/FindAFriend">
         <FindAFriend />
         </Route>
         <Route exact path="/MeetUps">
         <MeetUps/>
         </Route>
         </Switch>
         </div>
        </Router>
      </ApolloProvider>
    );
  }

  
export default App;