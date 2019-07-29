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
import Game from "./components/Game";

import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from "react-router-dom";
const EditComponent = props => {
  console.log(props);
  return <div>{"Edit"}</div>;
};

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
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
              <Route path={"/quotes/:quoteId/edit"} component={EditComponent} />
              <Route exact path={"/login"} component={Login} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Main>
        </Router>
      </>
    );
  }
}
