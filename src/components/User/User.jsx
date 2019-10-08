import React, { Component } from "react";
import { connect } from "react-redux";
import UserPanel from "./UserPanel";
import SignForm from "./SignForm";

import "./User.scss";

class User extends Component {
  render() {
    const { isLogged } = this.props;
    return <>{isLogged ? <UserPanel /> : <SignForm />}</>;
  }
}

const mapStateToProps = state => ({
  isLogged: state.appParamsReducer.isLogged
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
