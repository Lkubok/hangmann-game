import React, { Component } from "react";
import { connect } from "react-redux";
import { loadStatistics, unloadStatistics } from "../../actions/statsActions";

export class Stats extends Component {
  render() {
    return <div>Stats</div>;
  }
  componentDidMount() {
    const { loadStatistics } = this.props;
    loadStatistics();
  }
  componentWillUnmount() {
    const { unloadStatistics } = this.props;
    unloadStatistics();
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  loadStatistics,
  unloadStatistics
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
