import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import MonthlyCalendar from "../MonthlyCalendar/MonthlyCalendar";
import Events from "../Events/Events";
import Auth from "../Auth/Auth";

const Main = function ({ isLoggedIn }) {
  return (
    <Switch>
      {isLoggedIn
        ? (
          <>
            <Route exact path="/" >
              <MonthlyCalendar />
            </Route>
            <Route exact path="/events">
              <Events />
            </Route>
            <Route exact path="/calendar">
              <MonthlyCalendar />
            </Route>
            <Route exact path="/profile" >
              <Profile />
            </Route>
          </>
        )
        : (
          <>
            <Route exact path="/" >
              <Auth />
            </Route>
          </>
        )
      }
    </Switch>
  );
};

export default Main;
