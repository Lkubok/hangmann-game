import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import { Persist } from "formik-persist";
import "./QuoteForm.scss";
import * as Yup from "yup";

export class QuoteForm extends Component {
  render() {
    const { errors, touched, isSubmiting } = this.props;
    console.log(this.props);
    return (
      <div className="form-handler">
        <Form className="add-edit-form">
          {/* <div style={{ color: "red" }}>{errors.name && errors.name}</div> */}
          <Field component="textarea" placeholder="Write Quote" name="quote" />
          <Field type="text" placeholder="Quote Author" name="quoteAuthor" />
          <Field
            type="text"
            placeholder="Insertion Author"
            name="insertAuthor"
          />
          <Field type="text" placeholder="Language" name="lang" />
          <Persist name="quote-form" />
          <button type="submit" disbaled={isSubmiting}>
            Submit quote
          </button>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

const QuoteFormik = withFormik({
  mapPropsToValues({ quote, quoteAuthor, insertAuthor, lang }) {
    return {
      quote: quote || "",
      quoteAuthor: quoteAuthor || "",
      insertAuthor: insertAuthor || "",
      lang: lang || ""
    };
  },
  validationSchema: Yup.object().shape({
    author: Yup.string()
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
  handleSubmit(values, { setSubmitting, resetForm }) {
    console.log("submitting", values);
  }
})(QuoteForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteFormik);
