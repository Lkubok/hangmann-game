import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../../actions/editQuoteActions";
import * as selectors from "../../reducers/selectors";
import Loading from "./Loading";
import Loaded from "./Loaded";
import PropTypes from "prop-types";
import "./EditQuote.scss";

export class EditQuote extends PureComponent {
  componentDidMount() {
    const { quoteId } = this.props.match.params;
    this.props.fetchQuote(quoteId);
  }
  renderContent = () => {
    return this.props.isFetching ? (
      <Loading />
    ) : (
      <Loaded quoteId={this.props.match.params.quoteId} />
    );
  };
  render() {
    return <div className="edit-wrapper">{this.renderContent()}</div>;
  }
}

const mapStateToProps = state => ({
  isFetching: selectors.getFetchingStatus(state)
});

const mapDispatchToProps = {
  fetchQuote
};

EditQuote.propTypes = {
  fetchQuote: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditQuote);
