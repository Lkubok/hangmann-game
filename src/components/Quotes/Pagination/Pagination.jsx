import React, { PureComponent } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import * as selectors from "../../../reducers/selectors";
import { changeActualPage } from "../../../actions/quoteActions";
import "./Pagination.scss";

export class Pagination extends PureComponent {
  handlePageClick = e => this.props.changePage(e.selected);

  render() {
    const { filterQuery, pagesCount, actualPage, pageLimit } = this.props;
    return (
      <ReactPaginate
        key={`${filterQuery}+${pageLimit}`}
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.handlePageClick}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="page-active"
        initialPage={actualPage}
      />
    );
  }
}

const mapStateToPops = (state, ownProps) => ({
  pagesCount: selectors.pagesCount(state),
  actualPage: selectors.getActualPage(state),
  filterQuery: selectors.getFilterQuery(state),
  pageLimit: selectors.getPageLimit(state)
});

const mapDispatchToProps = dispatch => ({
  changePage: arg => dispatch(changeActualPage(arg))
});

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(Pagination);
