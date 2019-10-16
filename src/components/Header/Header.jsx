import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.scss";
import PropTypes from "prop-types";

export class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <img src="./img/logo.png" alt="" />
        {this.props.isLogged && (
          <h5 className="user">
            Logged as: <span>{this.props.userName}</span>
          </h5>
        )}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.appParamsReducer.userName,
  isLogged: state.appParamsReducer.isLogged
});

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  null
)(Header);
