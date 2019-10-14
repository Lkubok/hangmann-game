import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUserLogOut } from "../../actions/appActions";

import "./Navbar.scss";

class Navbar extends Component {
  handleClick = e => {
    if (this.props.gameId) e.preventDefault();
  };
  render() {
    const { gameId } = this.props;
    return (
      <nav>
        <ul className="app-navbar">
          <li>
            <NavLink
              to="/game"
              className="nav-item"
              activeClassName="nav-item-active"
              onClick={this.handleClick}
            >
              Game
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/quotes"
              className={gameId ? "nav-item nav-item-disabled" : "nav-item"}
              activeClassName="nav-item-active"
              onClick={this.handleClick}
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
              className={gameId ? "nav-item nav-item-disabled" : "nav-item"}
              activeClassName="nav-item-active"
              onClick={this.handleClick}
            >
              {" "}
              AddQuote
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={gameId ? "nav-item nav-item-disabled" : "nav-item"}
              activeClassName="nav-item-active"
              onClick={this.handleClick}
            >
              About
            </NavLink>
          </li>
          <li>
            {this.props.isLogged ? (
              <button
                className={
                  gameId
                    ? "nav-item nav-item-disabled"
                    : "nav-item nav-item-danger"
                }
                onClick={() => this.props.setUserLogOut()}
                disabled={gameId ? true : false}
              >
                LogOut
              </button>
            ) : (
              <NavLink
                to="/user"
                className="nav-item"
                activeClassName="nav-item-active"
                onClick={this.handleClick}
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
  isLogged: state.appParamsReducer.isLogged,
  gameId: state.gameReducer.gameId
});

const mapDispatchToProps = {
  setUserLogOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
