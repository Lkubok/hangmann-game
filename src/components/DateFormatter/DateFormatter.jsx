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
      console.log(date);
      const newDate = dateToHuman(date);
      console.log(newDate);
      this.setState({ date: newDate });
    }
    render() {
      const { date } = this.props;
      return (
        <div>
          <WrappedComponent {...this.state} />
        </div>
      );
    }
  };
}
