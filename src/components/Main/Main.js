import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import Schedule from "../../containers/Schedule";
import Events from "../Events/Events";
import EventForm from "../Events/EventForm/EventForm";

const Main = function ({ addEvent, date, setIsSchedule }) {
  return (
    <Switch>
      {(
        <>
          <Route exact path="/">
            <Schedule
              date={date}
              setIsSchedule={setIsSchedule}
            />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/events/new">
            <EventForm
              date={date}
              setIsSchedule={setIsSchedule}
              addEvent={addEvent}
            />
          </Route>
          <Route exact path="/calendar">
            <Schedule
              date={date}
              setIsSchedule={setIsSchedule}
            />
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
