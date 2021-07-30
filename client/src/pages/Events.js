import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
// import Typical from "react-typical";

class PlayDate extends Component {
  state = {
    playdates: [],
  };

  componentDidMount() {
    this.getPlayDates();
  }

  getPlayDates = () => {
    axios
      .get("/api/playdate")
      .then((response) => {
        // console.log(response.data);
        this.setState({
          playdates: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deletePlayDate = (id) => {
    axios
      .delete(`/api/playdate/${id}`)
      .then((response) => {
        // console.log(response.data);
        this.getPlayDates();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "rgb(124, 67, 189, .5)",
      padding: "10px",
      fontFamily: "Arial",
      maxLength: "100%",
    };
    const tablestyle = {
      color: "black",
      backgroundColor: "rgb(255, 255, 255, .5)",
      padding: "10px",
      fontFamily: "Arial",
      maxLength: "100%",
    };
    return (
      <div>
        <div className="container" style={mystyle}>
          <h1>Play Dates</h1>
        <div
            steps={[
              "Welcome to PlayDate!",
              1000,
              "The doggy date app",
              1000,
              "Click on an event to attend",
              1000,
              "Or create your own event!",
              1000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
          {/* <li className="list-group-item">
                    <Link to={`/playdate/${playdate._id}`}>
                    {playdate.name} - <Moment format="MM-DD-YYYY">{playdate.date}</Moment> - {playdate.location} - {playdate.description}
                    </Link>
                    
                  </li> */}
          <table className="table" style={tablestyle}>
            <thead>
              <tr>
                <th scope="col">Event</th>
                <th scope="col">Date</th>
                <th scope="col">Location</th>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.playdates.map((playdate) => (
                <tr key={playdate._id}>
                  <td>{playdate.name}</td>
                  <td>
                    <Moment format="MM-DD-YYYY">{playdate.date}</Moment>
                  </td>
                  <td>{playdate.location}</td>
                  <td>{playdate.description}</td>
                  <td>
                    <Link to={`/playdate/${playdate._id}`}>
                      <button type="button" className="btn btn-light-blue">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-light-blue"
                      onClick={() => {
                        this.deletePlayDate(playdate._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>{this.state.playdates.length === 0 && <p>no play dates</p>}</div>
        </div>
      </div>
    );
  }
}

export default PlayDate;