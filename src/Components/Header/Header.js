import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerStyle">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Al@min
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Explore
              </a>
            </li>
            <li>
              <form className="form-inline paa">
                <label>
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  ></input>
                </label>
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit">
                  Search
                </button>
              </form>
            </li>
          </ul>

          <span className="navbar-text">
            <button className="btn btn-success mr-4">Sign in</button>
            <button className="btn btn-success">Sign up</button>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
