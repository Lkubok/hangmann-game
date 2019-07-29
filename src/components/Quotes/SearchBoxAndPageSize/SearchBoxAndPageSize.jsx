import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  changeFilter,
  changeSortedQuotes,
  changePageSize
} from "../../../actions/quoteActions";
import * as selectors from "../../../reducers/selectors";
import "./SearchBoxAndPageSize.scss";

export class SearchBoxAndPageSize extends PureComponent {
  handleChange = e => {
    const { value, name } = e.target;
    const { changePageSize, changeFilter, changeSortedQuotes } = this.props;
    if (name === "pageSize") changePageSize(parseInt(value));
    else {
      changeFilter(value);
      changeSortedQuotes(this.props.quotes);
    }
  };
  render() {
    return (
      <>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.props.filterQuery}
          className="quote-query-input"
          placeholder="Type search query.."
        />
        <select
          name="pageSize"
          value={this.props.pageSize}
          onChange={this.handleChange}
          className="quote-page-size"
        >
          <option value="10">--- chose limit per page ---</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </>
    );
  }
}

const mapStateToProps = state => ({
  filterQuery: state.quotesReducer.filterQuery,
  pageSize: state.quotesReducer.pageSize,
  quotes: selectors.getSortedQuotes(state)
});

const mapDispatchToProps = {
  changeFilter,
  changeSortedQuotes,
  changePageSize
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBoxAndPageSize);
