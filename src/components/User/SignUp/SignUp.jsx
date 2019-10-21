import React, { Component } from "react";
import { withFormik, Form, Field, FieldArray, getIn } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import history from "../../../history";

import { setUserLogIn } from "../../../actions/appActions";

import "./SignUp.scss";
const { REACT_APP_API_HOST } = process.env;

export class SignForm extends Component {
  constructor() {
    super();
    this.inputFocus = React.createRef();
  }
  componentDidMount() {
    this.inputFocus.current.focus();
  }
  validatePassword = value => {
    let error;
    if (value === "admin") {
      error = "dont use admin as password";
    }
    return error;
  };
  render() {
    const { errors, touched, isSubmiting } = this.props;

    return (
      <>
        <Form className="add-edit-form">
          <p className="label">
            First Name:{" "}
            <span className="error">
              {touched.firstname && errors.firstname}
            </span>
          </p>
          <Field
            placeholder="Write your first name"
            name="firstname"
            innerRef={this.inputFocus}
          />
          <p className="label">
            Last name:
            <span className="error">{touched.lastname && errors.lastname}</span>
          </p>
          <Field placeholder="Write your last name" name="lastname" />

          <p className="label">
            Game username:
            <span className="error">{touched.username && errors.username}</span>
          </p>
          <Field placeholder="Write your Game username" name="username" />

          <p className="label">
            Password:
            <span className="error">{touched.password && errors.password}</span>
          </p>
          <Field
            type="password"
            placeholder="Write your password"
            name="password"
            validate={this.validatePassword}
          />

          <p className="label">
            Retype your Password:
            <span className="error">
              {touched.passwordVerification && errors.passwordVerification}
            </span>
          </p>
          <Field
            type="password"
            placeholder="Retype your password"
            name="passwordVerification"
          />

          <p className="label">
            E-mail:
            <span className="error">{touched.email && errors.email}</span>
          </p>
          <Field type="email" placeholder="Write your e-mail" name="email" />

          <p className="label">
            Age:
            <span className="error">{touched.age && errors.age}</span>
          </p>
          <Field type="number" placeholder="What your age ?" name="age" />

          <p className="label">
            Country:
            <span className="error">
              {getIn(touched, "address.country") &&
                getIn(errors, "address.country")}
            </span>
          </p>
          <Field type="text" placeholder="Country" name="address.country" />

          <p className="label">
            City:
            <span className="error">
              {getIn(touched, "address.city") && getIn(errors, "address.city")}
            </span>
          </p>
          <Field type="text" placeholder="City" name="address.city" />

          <FieldArray />

          <button className="btn" type="submit" disabled={isSubmiting}>
            Sign Up
          </button>
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = { setUserLogIn };

const loginFormik = withFormik({
  mapPropsToValues({
    firstname,
    lastname,
    email,
    age,
    username,
    password,
    passwordVerification,
    address
  }) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      username: username || "",
      password: password || "",
      passwordVerification: passwordVerification || "",
      email: email || "",
      age: age || "",
      address: address || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstname: Yup.string()
      .min(3)
      .max(50)
      .required("First name is required"),
    lastname: Yup.string()
      .min(5)
      .max(255)
      .required("Last name is required"),
    username: Yup.string()
      .min(5)
      .max(255)
      .required("Game username is required"),
    password: Yup.string()
      .min(5)
      .max(255)
      .required("Password is required"),
    passwordVerification: Yup.string()
      .min(5)
      .max(255)
      .required("Password is required"),
    email: Yup.string()
      .email()
      .min(5)
      .max(255)
      .required("Email is required"),
    age: Yup.number()
      .min(6)
      .max(115)
      .required("Age is required"),
    address: Yup.object().shape({
      country: Yup.string()
        .min(3)
        .max(255)
        .required("Country is Required"),
      city: Yup.string()
        .min(3)
        .max(255)
        .required("City is Required")
    })
  }),
  handleSubmit(values, { props, resetForm, setErrors }) {
    if (values.passwordVerification !== values.password) {
      setErrors({ passwordVerification: `Passwords should be equal` });
    } else {
      axios
        .post(REACT_APP_API_HOST + `/auth/signup`, values)
        .then(response => {
          if (response.status === 200) {
            resetForm();
            history.push("/user");
          }
        })
        .catch(error => {
          setErrors({ password: `${error.response.data.msg}` });
        });
    }
  }
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  loginFormik
)(SignForm);
