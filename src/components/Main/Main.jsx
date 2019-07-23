import React, { Component } from "react";
import "./Main.scss";

export default class Main extends Component {
  constructor({ props }) {
    super(props);
  }
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}
