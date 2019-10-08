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
import SignUp from "./components/User/SignUp";
import history from "./history";

import jwt_decode from "jwt-decode";
import { options } from "./options/connection";
import { token } from "./options/connection";

import { setUserLogIn } from "./actions/appActions";
import { connect } from "react-redux";

import { Router, Route, Switch } from "react-router-dom";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios(options)
      .then(response => {
        if (response.status === 200) {
          let decoded = jwt_decode(token);
          this.props.setUserLogIn(decoded.username);
        } else {
        }
      })
      .catch(error => {
        console.log("errors!!!! -> ", error);
      });
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
            <Route exact path={"/signup"} component={SignUp} />
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
