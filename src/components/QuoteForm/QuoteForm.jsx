import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import history from "../../history";
import "./QuoteForm.scss";
import * as Yup from "yup";
import axios from "axios";
import { updateQuotes } from "../../actions/quoteActions";
import PropTypes from "prop-types";

const { REACT_APP_API_HOST } = process.env;

export class QuoteForm extends Component {
  constructor() {
    super();
    this.inputFocus = React.createRef();
  }
  componentDidMount() {
    this.inputFocus.current.focus();
  }
  handleGoBack = e => {
    e.preventDefault();
    history.goBack();
  };
  render() {
    const { errors, touched, isSubmiting, isLogged } = this.props;

    return (
      <div className="form-handler">
        <Form className="add-edit-form">
          <p className="label">
            Quote:{" "}
            <span className="error">{touched.quote && errors.quote}</span>
          </p>
          <Field
            component="textarea"
            placeholder="Write Quote"
            name="quote"
            innerRef={this.inputFocus}
          />
          <p className="label">
            Quote Author:
            <span className="error">
              {touched.quoteAuthor && errors.quoteAuthor}
            </span>
          </p>

          <Field type="text" placeholder="Quote Author" name="quoteAuthor" />
          <p className="label">
            Insertion Author:
            <span className="error">
              {touched.insertAuthor && errors.insertAuthor}
            </span>
          </p>
          <Field
            type="text"
            placeholder="Insertion Author"
            name="insertAuthor"
            disabled={isLogged}
          />
          <p className="label">
            Language:
            <span className="error">{touched.lang && errors.lang}</span>
          </p>
          <Field type="text" placeholder="Language" name="lang" />
          <button className="btn" type="submit" disabled={isSubmiting}>
            Submit quote
          </button>
          <button className="btn btn-info" onClick={this.handleGoBack}>
            Go back
          </button>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  quoteId: ownProps.id,
  isLogged: state.appParamsReducer.isLogged,
  userName: state.appParamsReducer.userName,
  token: state.appParamsReducer.jwt
});

const mapDispatchToProps = {
  updateQuotes
};

const myFormik = withFormik({
  mapPropsToValues({
    quote,
    quoteAuthor,
    insertAuthor,
    lang,
    id,
    userName,
    isLogged
  }) {
    return {
      quote: quote || "",
      quoteAuthor: quoteAuthor || "",
      insertAuthor:
        (isLogged ? (id ? insertAuthor : userName) : insertAuthor) || "",
      lang: lang || "",
      id: id || ""
    };
  },
  validationSchema: Yup.object().shape({
    quoteAuthor: Yup.string()
      .min(3)
      .max(50)
      .required("Author is required"),
    quote: Yup.string()
      .min(5)
      .max(255)
      .required("Quote is required"),
    lang: Yup.string()
      .min(2)
      .max(10)
      .required("Language is required"),
    insertAuthor: Yup.string()
      .min(3)
      .max(50)
      .required("Insertion author is required")
  }),
  handleSubmit(values, { props, resetForm, setErrors }) {
    const urlAdd = REACT_APP_API_HOST + `/quotes/add`;
    const urlUpdate = REACT_APP_API_HOST + `/quotes/update`;
    if (values.id === "") {
      delete values.id;
      axios
        .post(urlAdd, values, {
          headers: {
            "content-type": "application/json",
            Authorization: props.token
          }
        })
        .then(response => {
          if (response.status === 200) {
            resetForm();
            setTimeout(() => {
              history.push("/quotes");
            }, 500);
          } else {
          }
        })
        .catch(error => {
          setErrors({ quote: `${error.response.data.message}` });
          alert("You should log In to add quotes", error.response.data.message);
        });
    } else {
      const id = values.id;
      delete values.id;
      const idValues = {
        id,
        quote: values
      };

      axios
        .put(urlUpdate, idValues, {
          headers: {
            "content-type": "application/json",
            Authorization: props.token
          }
        })
        .then(response => {
          props.history.push("/quotes");
        })
        .catch(error => {
          setErrors({ quote: `${error}` });
          alert("You should log In to add quotes", error);
        });
    }
  }
});

QuoteForm.propTypes = {
  quoteId: PropTypes.string,
  isLogged: PropTypes.bool,
  userName: PropTypes.string,
  token: PropTypes.string,
  updateQuotes: PropTypes.func
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  myFormik
)(QuoteForm);
