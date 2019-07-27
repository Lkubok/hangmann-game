import React, { Component } from "react";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import {
  updateQuotes,
  updateActualPage,
  deleteQuote
} from "../../actions/quoteActions";
import * as selectors from "../../reducers/selectors";
import "./Quotes.scss";
const { REACT_APP_API_HOST } = process.env;

export class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: {
        number: "index",
        quote: "Quote",
        author: "Author",
        insertAuthor: "Inserted By",
        dateInsert: "Date of insertion",
        lang: "Language",
        difficulty: "difficulty",
        modify: ""
      }
    };
  }
  componentDidMount() {
    if (this.props.quotes.length === 0) {
      this.props.updateQuotes(REACT_APP_API_HOST);
    }
  }

  handleClick = el => () => this.props.triggerChange(el);
  handlePageClick = e => this.props.updateActualPage(e.selected);
  handleEdit = e => () => console.log(e);
  handleDelete = e => () => this.props.deleteQuote(REACT_APP_API_HOST, e);
  renderTableHeads() {
    return Object.values(this.state.columns).map(el => (
      <th key={el} onClick={this.handleClick(el)}>
        {el}
      </th>
    ));
  }
  returnTableContets() {
    if (this.props.quotes.length === 0)
      return (
        <tr className="contents-loading">
          <td>Loading...</td>
        </tr>
      );
    const { quotes, actualPage, pagesCount, pageLimit } = this.props;
    const arrayToRender = quotes.slice(
      actualPage * pageLimit,
      actualPage * pageLimit + pageLimit
    );
    return arrayToRender.map((el, index) => (
      <tr key={index}>
        <td>{index + actualPage * pageLimit + 1}</td>
        <td>{el.quote}</td>
        <td>{el.quoteAuthor}</td>
        <td>{el.insertAuthor}</td>
        <td>{el.dateInsert}</td>
        <td>{el.lang}</td>
        <td>{el.difficulty}</td>
        <td>
          <button onClick={this.handleEdit(el._id)}>Edit</button> /{" "}
          <button onClick={this.handleDelete(el._id)}>Delete</button>
        </td>
      </tr>
    ));
  }
  render() {
    return (
      <>
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
          activeClassName={"active"}
        />
        <table>
          <thead>
            <tr>{this.renderTableHeads()}</tr>
          </thead>
          <tbody>{this.returnTableContets()}</tbody>
        </table>
      </>
    );
  }
}

const mapStateToPops = (state, ownProps) => ({
  quotes: state.quotesReducer.quotes,
  pagesCount: selectors.pagesCount(state),
  actualPage: selectors.getActualPage(state),
  pageLimit: selectors.getPageLimit(state)
});

const mapDispatchToProps = {
  updateQuotes,
  updateActualPage,
  deleteQuote
};

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(Quotes);
