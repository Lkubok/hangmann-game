import React, { Component } from "react";
import DateFormatter from "../DateFormatter";

import "./DateDisplay.scss";

export class DateDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="test-app-hoc">Today is: {this.props.date}</div>;
  }
}

export default DateFormatter(DateDisplay);
