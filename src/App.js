import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions/auth";
import Header from "./components/Header";
import Registration from "./components/Registration";
import LiveBets from "./components/LiveBets";
import SportsBook from "./components/SportsBook";
import Footer from "./components/Footer";
import Login from "./components/Login";
import MyAccount from "./components/MyAccountComponents/MyAccount";

function App(props) {
  useEffect(() => {
    props.onTryAutoSignup();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header {...props} />
            <Registration {...props} />
            <LiveBets />
            <SportsBook />
            <Footer />
          </Route>
          <Route exact path="/casino/">
            <Header {...props} />
            <Registration {...props} />
            <LiveBets />
            <SportsBook />
            <Footer />
          </Route>
          <Route exact path="/register/">
            <Header {...props} />
            <Registration {...props} />
            <LiveBets />
            <SportsBook />
            <Footer />
          </Route>
          <Route exact path="/about-as/">
            <Header {...props} />
            <Registration {...props} />
            <LiveBets />
            <SportsBook />
            <Footer />
          </Route>
          <Route exact path="/contact-us/">
            <Header {...props} />
            <Registration {...props} />
            <LiveBets />
            <SportsBook />
            <Footer />
          </Route>
          <Route exact path="/my-account/">
            <Header {...props} />
            <MyAccount/>
            <Footer />
          </Route>
          <Route exact path="/login/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
