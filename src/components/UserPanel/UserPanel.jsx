import React, { Component } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import "./UserPanel.scss";

export class UserPanel extends Component {
  render() {
    // const { isLogged } = this.props;
    return (
      <>
        <div>USERPANEL</div> }
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
