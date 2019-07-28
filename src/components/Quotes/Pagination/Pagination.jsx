import React, { PureComponent } from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import * as selectors from "../../../reducers/selectors";
import { updateActualPage } from "../../../actions/quoteActions";
import "./Pagination.scss";

export class Pagination extends PureComponent {
  handlePageClick = e => this.props.updateActualPage(e.selected);

  render() {
    return (
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={this.props.pagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"page-active"}
      />
    );
  }
}

const mapStateToPops = (state, ownProps) => ({
  pagesCount: selectors.pagesCount(state)
});

const mapDispatchToProps = {
  updateActualPage
};

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(Pagination);
