import React, { Component } from "react";
import "./Loading.scss";
import { clearInterval } from "timers";

export default class Loading extends Component {
  state = {
    dots: ""
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        return {
          dots: prevState.dots + "."
        };
      });
    }, 250);
  }

  componentDidUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div className="loading-content">
        <h1>Loading</h1>
        <br />
        <h3>{this.state.dots}</h3>
      </div>
    );
  }
}
