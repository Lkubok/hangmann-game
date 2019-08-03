import React, { Component } from "react";
import "./Loading.scss";

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
  componentWillUnmount() {
    clearInterval(this.interval);
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
