import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import Schedule from "../Schedule/Schedule";
import Events from "../Events/Events";
import EventForm from "../Events/EventForm/EventForm";

const Main = function ({ isWeeklySchedule, date }) {
  return (
    <Switch>
      {(
        <>
          <Route exact path="/" >
            <Schedule isWeeklySchedule={isWeeklySchedule} date={date} />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/events/new">
            <EventForm />
          </Route>
          <Route exact path="/calendar">
            <Schedule isWeeklySchedule={isWeeklySchedule} date={date} />
          </Route>
          <Route exact path="/profile" >
            <Profile />
          </Route>
        </>
      )}
    </Switch>
  );
};

export default Main;
