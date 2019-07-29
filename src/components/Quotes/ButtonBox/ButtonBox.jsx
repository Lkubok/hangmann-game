import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { updateQuotes, deleteQuote } from "../../../actions/quoteActions";
import "./ButtonBox.scss";
import { Link } from "react-router-dom";
const { REACT_APP_API_HOST } = process.env;

export class ButtonBox extends PureComponent {
  handleDelete = id => () => this.props.deleteQuote(REACT_APP_API_HOST, id);
  render() {
    return (
      <div className="btn-box">
        <Link to={`/quotes/${this.props.id}/edit`}>
          <button className="btn btn-edit">Edit</button>
        </Link>
        <button
          className="btn btn-danger"
          onClick={this.handleDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id
});

const mapDispatchToProps = {
  updateQuotes,
  deleteQuote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonBox);
