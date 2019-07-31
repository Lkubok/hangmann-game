import React, { Component } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Stats from "./components/Stats";
import Quotes from "./components/Quotes";
import NotFoundPage from "./components/NotFoundPage";
import About from "./components/About";
import AddQuote from "./components/AddQuote";
import EditQuote from "./components/EditQuote";
import Game from "./components/Game";
import history from "./history";

import { Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
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
              <Route exact path={"/login"} component={Login} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Main>
        </Router>
      </>
    );
  }
}
