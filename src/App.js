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
// import { options } from "./options/connection";
// import { token } from "./options/connection";

import { setUserLogIn } from "./actions/appActions";
import { connect } from "react-redux";

import { setJwt, setUserEmail } from "./actions/appActions";

import { Router, Route, Switch } from "react-router-dom";
import axios from "axios";

const { REACT_APP_API_HOST } = process.env;
const token = localStorage.getItem("JWT_HANG_TOKEN");

const connectionOptions = {
  headers: {
    "content-type": "application/json",
    Authorization: token
  },
  method: "GET",
  url: REACT_APP_API_HOST + `/islogged`
};

class App extends Component {
  componentDidMount() {
    if (token) {
      axios({ ...connectionOptions })
        .then(response => {
          if (response.status === 200) {
            let decoded = jwt_decode(token);
            this.props.setUserLogIn(decoded.username);
            this.props.setJwt(token);
            this.props.setUserEmail(response.data.email);
          } else if (response.status !== 200) {
            localStorage.removeItem("JWT_HANG_TOKEN");
          }
        })
        .catch(error => {
          console.log("errors!!!! -> ", error);
        });
    }
  }
  render() {
    return (
      <Router history={history}>
        <Header />
        <Navbar />
        <Main>
          <Switch>
            {/* PROTECTED ROUTE 0 inside this another route  */}
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
        {/* FOOTER */}
      </Router>
    );
  }
}

const mapDispatchToProps = { setUserLogIn, setJwt, setUserEmail };

export default connect(
  null,
  mapDispatchToProps
)(App);
