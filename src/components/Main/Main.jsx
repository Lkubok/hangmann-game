import React, { Component } from "react";
import "./Main.scss";

export default class Main extends Component {
  render() {
    const { children } = this.props;
    return <div className="app-main">{children}</div>;
  }
}
