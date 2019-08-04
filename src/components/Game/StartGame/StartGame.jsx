import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import * as Yup from "yup";
import { launchNewGame, setUserParams } from "../../../actions/gameActions";
import { withFormik, Form, Field } from "formik";

import * as selectors from "../../../reducers/selectors";
import Loading from "../../EditQuote/Loading";

import "./StartGame.scss";

export class StartGame extends Component {
  handleSubmitting = e => {
    e.preventDefault();
    const { launchNewGame, errors, setUserParams } = this.props;
    const isErrors = Object.keys(errors);
    const { email, username, lang, level } = this.props.values;
    if (
      isErrors.length > 0 ||
      username.length === 0 ||
      level.length === 0 ||
      email.length === 0 ||
      lang.length === 0
    )
      this.forceUpdate();
    else {
      launchNewGame(username, level, lang);
      setUserParams(username, level, lang, email);
    }
  };
  renderLoading() {
    const { errors, touched, isRequesting } = this.props;

    return isRequesting ? (
      <Loading />
    ) : (
      <div className="form-holder">
        <Form className="user-params-form" onSubmit={this.handleSubmitting}>
          <p className="game-select-label">
            User name: <span>{touched.username && errors.username}</span>
          </p>
          <Field type="text" name="username" />
          <p className="game-select-label">
            Email: <span>{touched.email && errors.email}</span>
          </p>
          <Field type="email" name="email" />
          <p className="game-select-label">
            Language: <span>{touched.lang && errors.lang}</span>
          </p>
          <Field component="select" name="lang">
            <option>--- select lang ---</option>
            <option value="pl">pl</option>
            <option value="eng">eng</option>
          </Field>
          <p className="game-select-label">
            Level: <span>{touched.level && errors.level}</span>
          </p>
          <Field component="select" name="level">
            <option>--- select level ---</option>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </Field>
          <button disabled={isRequesting}>Submit</button>
        </Form>
      </div>
    );
  }
  render() {
    return <>{this.renderLoading()}</>;
  }
}

const MyForm = withFormik({
  mapPropsToValues({
    username,
    email,
    lang,
    level,
    getUserName,
    getUserEmail,
    getGameLang,
    getGameLevel
  }) {
    return {
      username: username || getUserName,
      email: email || getUserEmail,
      lang: lang || getGameLang,
      level: level || getGameLevel
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3)
      .max(50)
      .required("Username is required"),
    email: Yup.string()
      .email()
      .required("E-mail is required"),
    lang: Yup.string()
      .min(2)
      .max(50)
      .required("Select a language!"),
    level: Yup.string()
      .min(3)
      .max(25)
      .required("Select level!")
  })
});

const mapStateToProps = state => ({
  isRequesting: selectors.getIsRequesting(state),
  getUserName: selectors.getGameUserName(state),
  getUserEmail: selectors.getUserEmail(state),
  getUserLevel: selectors.getGameLevel(state),
  getUserLang: selectors.getGameLang(state)
});

const mapDispatchToProps = {
  launchNewGame,
  setUserParams
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  MyForm
)(StartGame);
