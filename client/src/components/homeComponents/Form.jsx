import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Form.css";

function SignupForm(props) {
  const [userObject, setUserObject] = useState({
    name: "",
    age: "",
    race: "",
    gender: "",
    email: "",
    password: "",
    redirectTo: null,
  });
  const [redirectTo, setRedirectTo] = useState(null);

  const handleChange = (event) => {
    setUserObject({
      ...userObject,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO - validate!
    props.signUpUser({
      name: userObject.name,
      age: userObject.age,
      race: userObject.race,
      gender: userObject.gender,
      email: userObject.email,
      password: userObject.password,
      isLoggedIn: true,
    });
    setRedirectTo("/members");
  };
  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  }

  return (
    <>
      <div className="col-sm-12 col-md-6 formCol">
        <h5 className="text-center pb-4">
          New users: fill out this form to sign up.
        </h5>
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="name"
              value={userObject.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Age</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="age"
              value={userObject.age}
              onChange={handleChange}
              placeholder="Enter your age"
            />
          </div>

          <div className="col-12 raceBtnWrapper">
            <div className="btn-group">
              <button
                className="btn btn-secondary dropdown-toggle raceBtn"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {userObject.race || "Race"}
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenu2"
                value={userObject.race}
                onClick={handleChange}
              >
                <button
                  className="dropdown-item"
                  type="button"
                  name="race"
                  value="White"
                >
                  White
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  name="race"
                  value="Hispanic"
                >
                  Hispanic/Latino
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  name="race"
                  value="Black"
                >
                  Black/African American
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  name="race"
                  value="Asian"
                >
                  Asian
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  name="race"
                  value="AmericanIndian"
                >
                  American Indian/Alaska Native
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  name="race"
                  value="Other"
                >
                  Other/Prefer not to say
                </button>
              </div>
            </div>
            <div className="btn-group ml-5">
              <button
                className="btn btn-secondary dropdown-toggle genderBtn"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {userObject.gender || "Gender"}
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenu2"
                value={userObject.gender}
                onClick={handleChange}
              >
                <button
                  className="dropdown-item"
                  type="button"
                  name="gender"
                  value="Male"
                >
                  Male
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  name="gender"
                  value="Female"
                >
                  Female
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  name="gender"
                  value="NoAnswer"
                >
                  Prefer not to answer
                </button>
              </div>
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Email</span>
            </div>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={userObject.email}
              onChange={handleChange}
              aria-describedby="emailHelp"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Password</span>
            </div>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={userObject.password}
              onChange={handleChange}
              placeholder="Enter you password"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Confirm Password</span>
            </div>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              name="confirmPassword"
              value={userObject.confirmPassword}
              onChange={handleChange}
              placeholder="Re-Enter you password"
            />
          </div>

          <div className="signUpBtnWrapper text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn signUpBtn text-center"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default SignupForm;
