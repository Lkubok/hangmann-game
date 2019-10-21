import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteForm from "../../QuoteForm/QuoteForm";
import * as selectors from "../../../reducers/selectors";
import PropTypes from "prop-types";
import "./Loaded.scss";

export class Loaded extends Component {
  render() {
    const { quote, quoteAuthor, insertAuthor, lang } = this.props.fetchedQuote;
    return (
      <div>
        <QuoteForm
          id={this.props.quoteId}
          touched=""
          error=""
          quote={quote}
          quoteAuthor={quoteAuthor}
          insertAuthor={insertAuthor}
          lang={lang}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  fetchedQuote: selectors.getFetchedQuote(state)
});

const mapDispatchToProps = dispatch => ({});

Loaded.propTypes = {
  fetchedQuote: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loaded);
