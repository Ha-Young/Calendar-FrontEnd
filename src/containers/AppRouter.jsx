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
import routes from "constants/routes";
import Profile from "components/Profile/Profile";

const AppRouter = ({ weeklyEvent, deleteEvent, isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <section>
          <Header />
          <Switch>
            <Route exact path={routes.HOME}>
              <Weekly />
            </Route>

            <Route path={routes.DAILY}>
              <Daily />
            </Route>

            <Route path={routes.WEEKLY}>
              <Weekly />
            </Route>

            <Route path={routes.ADD_EVENT}>
              <HandleEvent type={typeConst.ADD} />
            </Route>

            <Route exact path={routes.EDIT_EVENT}>
              <HandleEvent type={typeConst.EDIT} />
            </Route>

            <Route exact path={routes.EVENT_DETAIL}>
              <EventDetail
                weeklyEvent={weeklyEvent}
                deleteEvent={(id, date) => deleteEvent(id, date)}
              />
            </Route>

            <Route exact path={routes.PROFILE}>
              <Profile />
            </Route>

            <Redirect from="/calender" to={routes.HOME} />
          </Switch>
        </section>
      ) : (
        <Switch>
          <Route path={routes.HOME}>
            <Login />
          </Route>
          <Redirect from="*" to={routes.HOME} />
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
    showDaily: (events) => dispatch(actionCreators.showDaily(events)),
    deleteEvent: (id, date) => dispatch(actionCreators.deleteEvent(id, date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
