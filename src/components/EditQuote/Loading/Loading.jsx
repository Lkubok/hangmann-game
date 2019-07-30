import React, { Component } from "react";
import "./Loading.scss";

export default class Loading extends Component {
  state = {
    dots: ""
  };
  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        return {
          dots: prevState.dots + "."
        };
      });
    }, 250);
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
