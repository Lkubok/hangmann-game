import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loadQuotes } from "../../ations/quoteActions";
const { REACT_APP_API_HOST } = process.env;

export class Quotes extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(REACT_APP_API_HOST);
    axios
      .get(REACT_APP_API_HOST + "/quotes")
      .then(response => this.props.loadQuotes(response.data))
      .catch(err => console.log(err));
  }
  render() {
    return <div>QUOTES</div>;
  }
}

const mapStateToPops = (state, ownProps) => ({
  quotes: state.quotesReducer.quotes
});

const mapDispatchToProps = dispatch => ({
  loadQuotes: arrayWithQuotes => dispatch(loadQuotes(arrayWithQuotes))
});

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(Quotes);
