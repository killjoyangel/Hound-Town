import React from "react";

const MeetUpForm = (props) => {
  return (
    <div>
      <form
        className="text-center border border-light p-5"
        onSubmit={props.handleSubmit}
      >
        <div className="row">
          <input
            className="form-control"
            id="eventName"
            type="text"
            placeholder="Event Name"
            name="name"
            value={props.name}
            onChange={(event) => {
              props.setName(event.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <input
            className="form-control"
            id="date"
            type="date"
            name="date"
            value={props.date}
            onChange={(event) => {
              props.setDate(event.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <input
            className="form-control"
            id="location"
            type="text"
            placeholder="Location"
            name="location"
            value={props.location}
            onChange={(event) => {
              props.setLocation(event.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <textarea
            className="form-control rounded-0"
            rows="10"
            id="description"
            type="text"
            name="description"
            value={props.description}
            onChange={(event) => {
              props.setDescription(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-light-blue">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MeetUpForm;