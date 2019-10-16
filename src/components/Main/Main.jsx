import React, { Component } from "react";
import "./Main.scss";

export class Main extends Component {
  render() {
    const { children } = this.props;
    return <div className="app-main">{children}</div>;
  }
}
export default Main;
