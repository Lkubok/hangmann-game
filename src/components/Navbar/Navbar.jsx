import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="app-navbar">
          <li>
            <NavLink
              to="/game"
              className="nav-item"
              activeClassName="nav-item-active"
            >
              Game
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-item"
              activeClassName="nav-item-active"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quotes"
              className="nav-item"
              activeClassName="nav-item-active"
            >
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className="nav-item"
              activeClassName="nav-item-active"
            >
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addquote"
              className="nav-item"
              activeClassName="nav-item-active"
            >
              {" "}
              AddQuote
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="nav-item"
              activeClassName="nav-item-active"
            >
              Login / Sign in
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
