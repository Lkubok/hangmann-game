import React, { Component } from "react";
import { dateToHuman } from "../../functions/dateToHuman";

export default function DateFormatter(WrappedComponent) {
  return class Formatter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: ""
      };
    }
    componentDidMount() {
      const { date } = this.props;
      const newDate = dateToHuman(date);
      this.setState({ date: newDate });
    }
    render() {
      return (
        <div>
          <WrappedComponent {...this.state} />
        </div>
      );
    }
  };
}
