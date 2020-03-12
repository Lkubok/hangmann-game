import React, { Component } from "react";

import LogicComponent from "./LogicComponent";

export default class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <LogicComponent
          render={({ x, y }) => (
            <h1 id="test">
              Coordinates: ({x}, {y})
            </h1>
          )}
        />
      </div>
    );
  }
}
