import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import {
  setUserLogIn,
  setJwt,
  setUserEmail,
  setRequesting
} from "../../../actions/appActions";
import history from "../../../history";
import Loading from "../../EditQuote/Loading";
import "./SignForm.scss";

const { REACT_APP_API_HOST } = process.env;

export class SignForm extends Component {
  constructor() {
    super();
    this.focusInput = React.createRef();
  }
  componentDidMount() {
    this.focusInput.current.focus();
  }
  handleButton = e => {
    e.preventDefault();
    history.push("/signup");
  };
  render() {
    const { errors, touched, isSubmiting, isRequesting } = this.props;

    return (
      <>
        {isRequesting ? (
          <Loading />
        ) : (
          <Form className="add-edit-form">
            <p className="label">
              Username:{" "}
              <span className="error">
                {touched.username && errors.username}
              </span>
            </p>
            <Field
              placeholder="Write username"
              name="username"
              innerRef={this.focusInput}
            />
            <p className="label">
              Password:
              <span className="error">
                {touched.password && errors.password}
              </span>
            </p>
            <Field
              type="password"
              placeholder="Write your password"
              name="password"
            />
            <button className="btn" type="submit" disabled={isSubmiting}>
              Sign In
            </button>

            <p
              className="label"
              style={{ textAlign: "center", width: "100%", marginTop: "20px" }}
            >
              If You don't have an account please sign up:
            </p>
            <button className="btn" onClick={this.handleButton}>
              Sign Up
            </button>
          </Form>
        )}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isRequesting: state.appParamsReducer.isRequesting
});

const mapDispatchToProps = {
  setUserLogIn,
  setJwt,
  setUserEmail,
  setRequesting
};

const loginFormik = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3)
      .max(50)
      .required("Username is required"),
    password: Yup.string()
      .min(5)
      .max(255)
      .required("Password is required")
  }),
  handleSubmit(values, { props, resetForm, setErrors }) {
    props.setRequesting(true);
    axios
      .post(REACT_APP_API_HOST + `/auth/signin`, values)
      .then(response => {
        if (response.status === 200) {
          resetForm();
          localStorage.setItem("JWT_HANG_TOKEN", response.data.token);
          props.setUserLogIn(values.username, response.data.email);
          props.setJwt(response.data.token);
          props.setRequesting(false);
        }
      })
      .catch(error => {
        setErrors({ password: `${error.response.data.msg}` });
        if (error.response.status === 401) {
          props.setRequesting(false);
        }
      });
  }
});

SignForm.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  setUserLogIn: PropTypes.func.isRequired,
  setJwt: PropTypes.func.isRequired,
  setUserEmail: PropTypes.func.isRequired,
  setRequesting: PropTypes.func.isRequired
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  loginFormik
)(SignForm);
