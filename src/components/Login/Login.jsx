import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { setUserLogIn } from "../../actions/appActions";
const { REACT_APP_API_HOST } = process.env;

class Login extends Component {
  render() {
    const { errors, touched, isSubmiting } = this.props;

    return (
      <Form className="add-edit-form">
        <p className="label">
          Username:{" "}
          <span className="error">{touched.username && errors.username}</span>
        </p>
        <Field placeholder="Write username" name="username" />
        <p className="label">
          Password:
          <span className="error">{touched.password && errors.password}</span>
        </p>

        <Field
          type="password"
          placeholder="Write your password"
          name="password"
        />
        <button className="btn" type="submit" disbaled={isSubmiting}>
          Sign In
        </button>
      </Form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = { setUserLogIn };

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
    axios
      .post(REACT_APP_API_HOST + `/auth/signin`, values)
      .then(response => {
        if (response.status === 200) {
          resetForm();
          localStorage.setItem("JWT_HANG_TOKEN", response.data.token);
          props.setUserLogIn(values.username);
        }
      })
      .catch(error => {
        setErrors({ password: `${error.response.data.msg}` });
      });
  }
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  loginFormik
)(Login);
