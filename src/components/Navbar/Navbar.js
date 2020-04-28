import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <Link class="navbar-brand" to="/turningreact">
            Turning React
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/political">
                  Political
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/sport">
                  Sport
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/art">
                  Art
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/education">
                  Education
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/finance">
                  Finance <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/covid19">
                  COVID-19<span class="badge badge-secondary">New</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
