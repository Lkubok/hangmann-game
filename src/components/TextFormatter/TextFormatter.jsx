import React, { Component } from "react";

export default function TextFormatter(WrappedComponent) {
  return class TextFormatter extends Component {
    render() {
      const { text } = this.props;
      return <WrappedComponent text={text} version={" v_1.0"} />;
    }
  };
}
