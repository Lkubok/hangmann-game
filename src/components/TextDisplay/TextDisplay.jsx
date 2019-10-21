import React, { Component } from "react";
import TextFormatter from "../TextFormatter";

import "./TextDisplay.scss";

export class TextDisplay extends Component {
  render() {
    const { text, version } = this.props;
    return (
      <div className="test-app-hoc">
        {text}
        <span>{version}</span>
      </div>
    );
  }
}

export default TextFormatter(TextDisplay);
