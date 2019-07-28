import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  changeFilterQuery,
  updateSortedQuotes,
  updatePageSize
} from "../../../actions/quoteActions";
import * as selectors from "../../../reducers/selectors";
import "./SearchBoxAndPageSize.scss";

export class SearchBoxAndPageSize extends PureComponent {
  handleChange = e => {
    const { value, name } = e.target;
    console.log(name);
    if (name === "pageSize") this.props.updatePageSize(parseInt(value));
    else {
      this.props.changeFilter(value);
      this.props.updateSortedQuotes(this.props.quotes);
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
          <option value="">--- chose limit per page ---</option>
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

const mapStateToProps = (state, ownProps) => ({
  filterQuery: state.quotesReducer.filterQuery,
  pageSize: state.quotesReducer.pageSize,
  quotes: selectors.getSortedQuotes(state)
});

const mapDispatchToProps = dispatch => ({
  changeFilter: arg => dispatch(changeFilterQuery(arg)),
  updateSortedQuotes: arg => dispatch(updateSortedQuotes(arg)),
  updatePageSize: arg => dispatch(updatePageSize(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBoxAndPageSize);
