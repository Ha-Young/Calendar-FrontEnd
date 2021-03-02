import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import Schedule from "../Schedule/Schedule";
import Events from "../Events/Events";
import Auth from "../Auth/Auth";

const Main = function ({ isWeeklySchedule, dateObject, isLoggedIn }) {
  return (
    <Switch>
      {isLoggedIn
        ? (
          <>
            <Route exact path="/" >
              <Schedule isWeeklySchedule={isWeeklySchedule} dateObject={dateObject} />
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>
            <Route exact path="/calendar">
              <Schedule isWeeklySchedule={isWeeklySchedule} dateObject={dateObject} />
            </Route>
            <Route exact path="/profile" >
              <Profile />
            </Route>
          </>
        )
        : (
          <Route exact path="/" >
            <Auth />
          </Route>
        )
      }
    </Switch>
  );
};

export default Main;
