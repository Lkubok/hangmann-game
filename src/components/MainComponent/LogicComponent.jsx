import React, { Component } from "react";

class LogicComponent extends Component {
  state = { x: 0, y: 0 };

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove} style={{ height: "100%" }}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default LogicComponent;
