import React, { Component } from "react";
import "./About.scss";

export class About extends Component {
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org"
          >
            ReactJS
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://redux.js.org/"
          >
            ReduxJS
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://jaredpalmer.com/formik/"
          >
            Formik
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sass-lang.com/"
          >
            Sass
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.highcharts.com/"
          >
            HighCharts
          </a>
        </div>
      </div>
    );
  }
}
export default About;
