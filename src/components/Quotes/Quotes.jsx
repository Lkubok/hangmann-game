import React, { Component } from "react";
import Pagination from "./Pagination";
import ButtonBox from "./ButtonBox";
import SearchBoxAndPageSize from "./SearchBoxAndPageSize";
import { connect } from "react-redux";
import {
  tableHeaders as columns,
  columnNames,
  columnKeys
} from "./tableHeaders";
import { updateQuotes, changeSorting } from "../../actions/quoteActions";
import * as selectors from "../../reducers/selectors";
import "./Quotes.scss";
const { REACT_APP_API_HOST } = process.env;

export class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns
    };
  }
  componentDidMount() {
    if (this.props.quotes.length === 0)
      this.props.updateQuotes(REACT_APP_API_HOST);
  }

  handleClick = newSortByElem => () => {
    const { sortBy, sortOrder } = this.props;
    this.props.changeSorting(newSortByElem, sortBy, sortOrder);
  };

  renderTableHeads() {
    return columnNames.map(this.renderSingleHeader);
  }
  renderSingleHeader = (el, index) => {
    const { sortBy, sortOrder } = this.props;
    const key = columnKeys[index];
    const active = sortBy === key;
    return (
      <td className="table-headings" key={el} onClick={this.handleClick(key)}>
        {el}
        {active && (sortOrder === "ASC" ? "↑" : "↓")}
      </td>
    );
  };
  dateToHuman = dateStamp => {
    const date = new Date(dateStamp);
    return `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
  returnTableContets() {
    const { quotes, sortedQuotes, actualPage, pageLimit } = this.props;
    if (quotes.length === 0 || sortedQuotes.length === 0)
      return (
        <tr className="contents-loading">
          <td />
          <td>{quotes.length === 0 ? "Loading..." : "No match found"}</td>
        </tr>
      );
    const arrayStart = actualPage * pageLimit;
    const arrayToRender = sortedQuotes.slice(
      arrayStart,
      arrayStart + pageLimit
    );
    return arrayToRender.map((el, index) => (
      <tr key={index}>
        <td>{index + arrayStart + 1}</td>
        <td>{el.quote}</td>
        <td>{el.quoteAuthor}</td>
        <td>{el.insertAuthor}</td>
        <td>{this.dateToHuman(el.dateInsert)}</td>
        <td>{this.dateToHuman(el.dateModify)}</td>
        <td>{el.lang}</td>
        <td>{el.difficulty}</td>
        <td>
          <ButtonBox id={el._id} />
        </td>
      </tr>
    ));
  }
  render() {
    return (
      <div className="quotes-wrapper">
        <div className="quotes-navigation">
          <Pagination />
          <SearchBoxAndPageSize />
        </div>
        <div className="quotes-body">
          <table className="quote-table">
            <thead className="quote-table-header">
              <tr>{this.renderTableHeads()}</tr>
            </thead>
            <tbody className="quote-table-body">
              {this.returnTableContets()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToPops = (state, ownProps) => ({
  quotes: selectors.getQuotes(state),
  sortedQuotes: selectors.getSortedQuotes(state),
  actualPage: selectors.getActualPage(state),
  pageLimit: selectors.getPageLimit(state),
  sortOrder: selectors.getSortingOrder(state),
  sortBy: selectors.getSortingBy(state)
});

const mapDispatchToProps = {
  updateQuotes,
  changeSorting
};

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(Quotes);
