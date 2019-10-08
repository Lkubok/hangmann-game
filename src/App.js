import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Welcome from "./components/Welcome";
import User from "./components/User";
import Stats from "./components/Stats";
import Quotes from "./components/Quotes";
import NotFoundPage from "./components/NotFoundPage";
import About from "./components/About";
import AddQuote from "./components/AddQuote";
import EditQuote from "./components/EditQuote";
import Game from "./components/Game";
import history from "./history";

import jwt_decode from "jwt-decode";
import { setUserLogIn } from "./actions/appActions";
import { connect } from "react-redux";

import { Router, Route, Switch } from "react-router-dom";
import axios from "axios";
const { REACT_APP_API_HOST } = process.env;

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("JWT_HANG_TOKEN");
    const options = {
      method: "GET",
      headers: { "content-type": "application/json", Authorization: token },
      url: REACT_APP_API_HOST + `/islogged`
    };
    axios(options)
      .then(response => {
        if (response.status === 200) {
          let decoded = jwt_decode(token);
          console.log(decoded);
          this.props.setUserLogIn(decoded.username);
        } else {
        }
      })
      .catch(error => {
        console.log("errors!!!! -> ", error);
      });

    // axios
    //   .post(REACT_APP_API_HOST + `/auth/signin`, values)
    //   .then(response => {
    //     if (response.status === 200) {
    //       resetForm();
    //       localStorage.setItem("JWT_HANG_TOKEN", response.data.token);
    //       props.setUserLogIn(values.username);
    //     }
    //   })
    //   .catch(error => {
    //     setErrors({ password: `${error.response.data.msg}` });
    //   });
  }
  render() {
    return (
      <Router history={history}>
        <Header />
        <Navbar />
        <Main>
          <Switch>
            <Route exact path={"/"} component={Welcome} />
            <Route exact path={"/game"} component={Game} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/quotes"} component={Quotes} />
            <Route exact path={"/stats"} component={Stats} />
            <Route exact path={"/addquote"} component={AddQuote} />
            <Route path={"/quotes/:quoteId/edit"} component={EditQuote} />
            <Route exact path={"/user"} component={User} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

const mapDispatchToProps = { setUserLogIn };

export default connect(
  null,
  mapDispatchToProps
)(App);
