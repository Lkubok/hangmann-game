import React, { Component } from "react";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about-box">
        <div className="about-section">
          <h2>Hangmann game github repository</h2>
          <a href="https://github.com/Lkubok/hangmann-game" target="blank">
            github.com/Lkubok/hangmann-game
          </a>
        </div>
        <div className="about-section">
          <h2>API used in game</h2>
          <a href="https://hangmann-backend.herokuapp.com" target="blank">
            hangmann-backend.herokuapp.com
          </a>
        </div>
        <div className="about-section">
          <h2>Contact With author</h2>
          <a href="mailto:Lkubok@gmail.com">Lkubok@gmail.com</a>
        </div>
        <div className="about-section about-section-inline">
          <h2>Used technologies</h2>
          <a href="https://reactjs.org">ReactJS</a>
          <a href="https://redux.js.org/">ReduxJS</a>
          <a href="https://jaredpalmer.com/formik/">Formik</a>
          <a href="https://sass-lang.com/">Sass</a>
        </div>
      </div>
    );
  }
}
