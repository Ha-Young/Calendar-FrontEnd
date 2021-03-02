import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "components/Header/Header";
import Weekly from "containers/Weekly";
import Daily from "containers/Daily";
import HandleEvent from "containers/HandleEvent";
import EventDetail from "components/EventDetail/EventDetail";
import Login from "components/Login/Login";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <section>
          <Header />
          <Switch>
            <Route exact path="/">
              <Weekly />
            </Route>

            <Route path="/daily">
              <Daily />
            </Route>

            <Route path="/weekly">
              <Weekly />
            </Route>

            <Route path="/events/new">
              <HandleEvent />
            </Route>

            <Route path="/events/:eventId">
              <EventDetail />
            </Route>

            <Route exact path="/events/:eventId/edit">
              <HandleEvent /*{prop Event}*/ />
            </Route>

            <Route exact path="/profile"></Route>

            <Redirect from="/calender" to="/" />
          </Switch>
        </section>
      ) : (
        <Route exact path="/">
          <Login />
        </Route>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AppRouter);
