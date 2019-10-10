import React, { Component } from "react";
import { css } from "@emotion/core";
import { GridLoader } from "react-spinners";
import "./Loading.scss";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  color: green;
`;

export default class Loading extends Component {
  state = {
    dots: ""
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        return {
          dots: prevState.dots + "."
        };
      });
    }, 250);
  }
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div className="loading-holder">
        <div className="sweet-loading">
          <GridLoader
            css={override}
            sizeUnit={"px"}
            size={25}
            color={"#6dba0a"}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}
