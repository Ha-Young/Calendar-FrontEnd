import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "components/Header/Header";
import Weekly from "containers/Weekly";
import Daily from "containers/Daily";
import HandleEvent from "containers/HandleEvent";
import EventDetail from "components/EventDetail/EventDetail";
import Login from "components/Login/Login";
import { typeConst } from "constants/constants";
import { actionCreators } from "actions/actionCreators";

const AppRouter = ({ weeklyEvent, deleteEvent, isLoggedIn }) => {
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
              <HandleEvent type={typeConst.ADD} />
            </Route>

            <Route exact path="/events/edit/:eventId">
              <HandleEvent type={typeConst.EDIT} />
            </Route>

            <Route exact path="/events/:eventId">
              <EventDetail
                weeklyEvent={weeklyEvent}
                deleteEvent={(id, date) => deleteEvent(id, date)}
              />
            </Route>

            <Route exact path="/profile"></Route>

            <Redirect from="/calender" to="/" />
          </Switch>
        </section>
      ) : (
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent: (id, date) => dispatch(actionCreators.deleteEvent(id, date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
