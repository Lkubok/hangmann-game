import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUserLogOut } from "../../actions/appActions";
import * as selectors from "../../reducers/selectors";
import PropTypes from "prop-types";

import "./Navbar.scss";

export class Navbar extends Component {
  handleClick = e => {
    if (this.props.gameId && !this.props.isFinished) e.preventDefault();
  };
  render() {
    const { gameId, isFinished } = this.props;
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
              className={
                gameId
                  ? isFinished
                    ? "nav-item"
                    : "nav-item nav-item-disabled"
                  : "nav-item"
              }
              activeClassName="nav-item-active"
              onClick={this.handleClick}
            >
              Quotes
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/addquote"
              className={
                gameId
                  ? isFinished
                    ? "nav-item"
                    : "nav-item nav-item-disabled"
                  : "nav-item"
              }
              activeClassName="nav-item-active"
              onClick={this.handleClick}
            >
              {" "}
              AddQuote
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className={
                gameId
                  ? isFinished
                    ? "nav-item"
                    : "nav-item nav-item-disabled"
                  : "nav-item"
              }
              activeClassName="nav-item-active"
              onClick={this.handleClick}
            >
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={
                gameId
                  ? isFinished
                    ? "nav-item"
                    : "nav-item nav-item-disabled"
                  : "nav-item"
              }
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
                  gameId && !isFinished
                    ? "nav-item nav-item-danger nav-item-disabled"
                    : "nav-item nav-item-danger"
                }
                onClick={() => this.props.setUserLogOut()}
                disabled={gameId && !isFinished ? true : false}
              >
                LogOut
              </button>
            ) : (
              <NavLink
                to="/user"
                className={
                  gameId
                    ? isFinished
                      ? "nav-item"
                      : "nav-item nav-item-disabled"
                    : "nav-item"
                }
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
  gameId: state.gameReducer.gameId,
  isFinished: selectors.getIsFinished(state)
});

const mapDispatchToProps = {
  setUserLogOut
};

Navbar.propTypes = {
  userName: PropTypes.string,
  isLogged: PropTypes.bool,
  gameId: PropTypes.string,
  isFinished: PropTypes.bool,
  setUserLogOut: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
