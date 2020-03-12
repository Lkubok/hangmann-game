import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ProblematicButton from "../ProblematicButon/ProblematicButton";
import "./Welcome.scss";

export class Welcome extends Component {
  render() {
    const { history, isLogged } = this.props;
    return (
      <div className="app-welcome">
        <div className="hang-container">
          <img className="hang-image" src="./img/hanged-man.png" alt="" />
        </div>
        <div className="welcome-buttons">
          <button
            className="button-play"
            data-tooltip="CSS EVALUATION"
            onClick={() => history.push("/game")}
          >
            {isLogged ? <>Play</> : <>Play without login for free</>}
          </button>
          {isLogged ? null : (
            <button onClick={() => history.push("/signup")}>Sign Up</button>
          )}
          <button onClick={() => history.push("/quotes")}>
            Browse available quotes
          </button>
          <ErrorBoundary>
            <ProblematicButton />
          </ErrorBoundary>
        </div>
        <div className="app-info">
          <p className="info info-header">Why play Hangman ?</p>
          <p className="info info-body">
            Learn languages with Hangman! No more dry, out of date textbook
            story lines! Here at Hangmann you'll learn languages with fun,
            interesting and cultural relevant lessons that are easy to listen
            to. But not only are they fun - they're effective too! Join the
            hundreds of thousands of people already learning languages through
            the power of this app!
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state.appParamsReducer.isLogged
});

const mapDispatchToProps = {};

Welcome.propTypes = {
  isLogged: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
