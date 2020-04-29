import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <Link className="navbar-brand" to="/turningreact">
            Turning React
          </Link>
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
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/science">
                  Science <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/technology">
                  Technology <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/covid19">
                  COVID-19<span className="badge badge-secondary">New</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
