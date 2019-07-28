import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { updateQuotes, deleteQuote } from "../../../actions/quoteActions";
import "./ButtonBox.scss";
const { REACT_APP_API_HOST } = process.env;

export class ButtonBox extends PureComponent {
  handleEdit = e => () => console.log(e);
  handleDelete = e => () => this.props.deleteQuote(REACT_APP_API_HOST, e);
  render() {
    return (
      <div className="btn-box">
        <button
          className="btn btn-edit"
          onClick={this.handleEdit(this.props.id)}
        >
          Edit
        </button>
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
