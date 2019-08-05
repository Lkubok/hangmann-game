import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import * as Yup from "yup";
import { launchNewGame, setUserParams } from "../../../actions/gameActions";
import { withFormik, Form, Field } from "formik";

import * as selectors from "../../../reducers/selectors";
import Loading from "../../EditQuote/Loading";
import axios from "axios";

import "./StartGame.scss";
const { REACT_APP_API_HOST } = process.env;

export class StartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langs: []
    };
  }
  handleSubmitting = e => {
    e.preventDefault();
    const { launchNewGame, setUserParams, isValid } = this.props;
    const { email, username, lang, level } = this.props.values;

    if (isValid && username) {
      launchNewGame(username, level, lang);
      setUserParams(username, level, lang, email);
    }
  };
  componentDidMount() {
    axios
      .get(REACT_APP_API_HOST + "/quotes/langs")
      .then(response => response.data)
      .then(data => this.setState({ langs: data }));
  }
  renderSelectOptions = () => {
    return this.state.langs.map(el => (
      <option key={el} value={el}>
        {el}
      </option>
    ));
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
            {this.renderSelectOptions()}
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
          <button disabled={isRequesting}>Start Game</button>
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
    getUserLang,
    getUserLevel
  }) {
    return {
      username: username || getUserName,
      email: email || getUserEmail,
      lang: lang || getUserLang,
      level: level || getUserLevel
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
  }),
  isInitialValid: true
});

const mapStateToProps = state => {
  return {
    isRequesting: selectors.getIsRequesting(state),
    getUserName: selectors.getLastUserName(state),
    getUserEmail: selectors.getLastUserEmail(state),
    getUserLevel: selectors.getLastGameLevel(state),
    getUserLang: selectors.getLastGameLang(state)
  };
};

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
