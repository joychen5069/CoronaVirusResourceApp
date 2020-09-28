import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../pages/Pages.css";

const Navbar = ({ logout }) => {
  const [redirectTo, setRedirectTo] = useState(null);

  const handleSubmit = (event) => {
    // event.preventDefault();
    const isLoggedOut = logout();

    console.log("logout clicked");
    if (isLoggedOut) {
      setRedirectTo("/");
    }
    setRedirectTo("/");
  };
  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  }

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/members">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hospitals">
                  Hospital Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li>
                <button className="btn logoutBtn" onClick={handleSubmit}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
