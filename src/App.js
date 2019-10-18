import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
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
import Footer from "./components/Footer";
import UserPanel from "./components/UserPanel";
import ProtectedRoute from "./components/ProtectedRoute";
// import DateFormatter from "./components/DateFormatter";
import DateDisplay from "./components/DateDisplay";
import { setUserLogIn } from "./actions/appActions";
import { setJwt, setUserEmail } from "./actions/appActions";
import history from "./history";
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

export class App extends Component {
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
        .catch(error => {});
    }
  }
  render() {
    const { isLogged } = this.props;
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
              <Route exact path={"/signup"} component={SignUp} />
              <Route exact path={"/stats"} component={Stats} />
              <Route exact path={"/addquote"} component={AddQuote} />
              <ProtectedRoute
                isAuth={isLogged}
                path={"/userpanel"}
                component={UserPanel}
              />
              <Route path={"/quotes/:quoteId/edit"} component={EditQuote} />
              <Route exact path={"/user"} component={User} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Main>
          <Footer />
        </Router>
        <DateDisplay date={Date.now()} />
      </>
    );
  }
}
const mapStateToProps = state => ({
  isLogged: state.appParamsReducer.isLogged
});

const mapDispatchToProps = { setUserLogIn, setJwt, setUserEmail };

App.propTypes = {
  isLogged: PropTypes.bool,
  setUserEmail: PropTypes.func,
  setJwt: PropTypes.func,
  setUserLogIn: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
