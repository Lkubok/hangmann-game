import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { deleteQuote } from "../../../actions/quoteActions";
import "./ButtonBox.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const { REACT_APP_API_HOST } = process.env;

export class ButtonBox extends PureComponent {
  handleDelete = id => () => {
    this.props.deleteQuote(REACT_APP_API_HOST, id, this.props.token);
  };
  render() {
    return (
      <div className="btn-box">
        <Link to={`/quotes/${this.props.id}/edit`} className="btn btn-edit">
          Edit
        </Link>
        {this.props.canDelete ? (
          <button
            className="btn btn-danger"
            onClick={this.handleDelete(this.props.id)}
          >
            Delete
          </button>
        ) : (
          <button className="btn btn-disabled" disabled={true}>
            Delete
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  token: state.appParamsReducer.jwt
});

const mapDispatchToProps = {
  deleteQuote
};

ButtonBox.propTypes = {
  id: PropTypes.string,
  token: PropTypes.string,
  deleteQuote: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonBox);
