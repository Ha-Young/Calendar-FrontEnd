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
    <Switch>
      <>
        {isLoggedIn ? (
          <section>
            <Header />
            <Route exact path="/" component={Weekly} />
            <Route exact path="/daily" component={Daily} />
            <Route exact path="/weekly" component={Weekly} />
            <Route exact path="/events/:eventId" component={EventDetail} />
            <Route exact path="/events/:eventId/edit">
              <HandleEvent /*{prop Event}*/ />
            </Route>
            <Route exact path="/events/new" component={HandleEvent} />
            <Route exact path="/profile" />
            <Redirect from="/calender" to="/" />
          </section>
        ) : (
          <Route exact path="/">
            <Login />
          </Route>
        )}
      </>
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AppRouter);
