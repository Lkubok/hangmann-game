import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserPanel.scss";
import PropTypes from "prop-types";

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

UserPanel.propTypes = {
  isLogged: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPanel);
