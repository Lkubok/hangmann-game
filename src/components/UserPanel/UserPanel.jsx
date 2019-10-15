import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserPanel.scss";

export class UserPanel extends Component {
  render() {
    return (
      <>
        <div></div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state.appParamsReducer.isLogged
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPanel);
