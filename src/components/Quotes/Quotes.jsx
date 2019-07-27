import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQuotes } from "../../ations/quoteActions";
import "./Quotes.scss";
const { REACT_APP_API_HOST } = process.env;

export class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      columns: {
        quote: "Quote",
        author: "Author",
        insertAuthor: "Inserted By",
        dateInsert: "Date of insertion",
        lang: "Language",
        modify: ""
      }
    };
  }
  componentDidMount() {
    this.props.updateQuotes(REACT_APP_API_HOST);
  }

  handleClick = el => () => this.props.triggerChange(el);
  renderTableHeads() {
    return Object.values(this.state.columns).map(el => (
      <th onClick={this.handleClick(el)}>{el}</th>
    ));
  }
  returnTableContets() {
    if (this.props.quotes.length === 0)
      return (
        <div className="contents-loading">
          <p>Loading...</p>
        </div>
      );
    return this.props.quotes.map(el => (
      <tr>
        <td>{el.quote}</td>
        <td>{el.quoteAuthor}</td>
        <td>{el.insertAuthor}</td>
        <td>{el.dateInsert}</td>
        <td>{el.lang}</td>
        <td>Edit / DELETE</td>
      </tr>
    ));
  }
  render() {
    return (
      <table>
        <thead>
          <tr>{this.renderTableHeads()}</tr>
        </thead>
        <tbody>{this.returnTableContets()}</tbody>
      </table>
    );
  }
}

const mapStateToPops = (state, ownProps) => ({
  quotes: state.quotesReducer.quotes
});

const mapDispatchToProps = {
  updateQuotes
};

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(Quotes);
