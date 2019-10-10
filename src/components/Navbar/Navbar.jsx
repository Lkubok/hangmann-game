import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUserLogOut } from "../../actions/appActions";

import "./Navbar.scss";

class Navbar extends Component {
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
              to="/quotes"
              className="nav-item"
              activeClassName="nav-item-active"
            >
              Quotes
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/stats"
              className="nav-item"
              activeClassName="nav-item-active"
            >
              Stats
            </NavLink>
          </li> */}
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
              to="/about"
              className="nav-item"
              activeClassName="nav-item-active"
            >
              About
            </NavLink>
          </li>
          <li>
            {this.props.isLogged ? (
              <button
                className="nav-item nav-item-danger"
                onClick={() => this.props.setUserLogOut()}
              >
                LogOut
              </button>
            ) : (
              <NavLink
                to="/user"
                className="nav-item"
                activeClassName="nav-item-active"
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.appParamsReducer.userName,
  isLogged: state.appParamsReducer.isLogged
});

const mapDispatchToProps = {
  setUserLogOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
