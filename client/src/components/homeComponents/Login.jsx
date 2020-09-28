import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = ({ login }) => {
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
  });
  const [redirectTo, setRedirectTo] = useState(null);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setUserObject({
      ...userObject,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isLoggedin = login(userObject.email, userObject.password);
    if (isLoggedin) {
      setRedirectTo("/members");
    }
   else {
     alert("Wrong email or password")
   }
  };

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  }
  return (
    <>
      <div className="col-sm-12 col-md-6 px-5">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={userObject.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={userObject.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn mb-4 loginBtn"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
