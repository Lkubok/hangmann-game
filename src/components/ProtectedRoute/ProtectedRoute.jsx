import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export default class ProtectedRoute extends Component {
  render() {
    const { isAuth } = this.props;
    return isAuth ? (
      <Route path={this.props.path} component={this.props.component} />
    ) : (
      <Redirect to="/user" />
    );
  }
}
