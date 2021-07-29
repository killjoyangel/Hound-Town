import React from "react";

const ProfileForm = (props) => {
  return (
    <div>
      <form
        className="text-center border border-light p-5"
        onSubmit={props.handleSubmit}
      >
        <div className="row">
          <input
            className="form-control"
            id="profileName"
            type="text"
            placeholder="Dog Name"
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
            id="dogAge"
            type="text"
            placeholder="Dog Age"
            name="dogAge"
            value={props.dogAge}
            onChange={(event) => {
              props.setAge(event.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <input
            className="form-control"
            id="dogGender"
            type="text"
            placeholder="Dog Gender"
            name="dogGender"
            value={props.dogGender}
            onChange={(event) => {
              props.setGender(event.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <input
            className="form-control"
            id="dogBreed"
            type="text"
            placeholder="Dog Breed"
            name="dogBreed"
            value={props.dogBreed}
            onChange={(event) => {
              props.setBreed(event.target.value);
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

export default ProfileForm;