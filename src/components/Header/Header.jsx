import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <img src="./img/logo.png" alt="" />
        {this.props.isLogged && (
          // <NavLink to="/userpanel">
          <h5 className="user">
            Logged as: <span>{this.props.userName}</span>
          </h5>
          // </NavLink>
        )}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.appParamsReducer.userName,
  isLogged: state.appParamsReducer.isLogged
});

export default connect(
  mapStateToProps,
  null
)(Header);
