import React, { Component } from "react";
import { connect } from "react-redux";
import SignForm from "./SignForm";
import history from "../../history";
import PropTypes from "prop-types";

import "./User.scss";

export class User extends Component {
  render() {
    const { isLogged } = this.props;
    return <>{isLogged ? history.push("/") : <SignForm />}</>;
  }
}

const mapStateToProps = state => ({
  isLogged: state.appParamsReducer.isLogged
});

const mapDispatchToProps = {};

User.propTypes = {
  isLogged: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
