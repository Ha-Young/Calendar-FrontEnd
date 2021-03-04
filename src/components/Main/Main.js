import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import Schedule from "../../containers/Schedule";
import DetailEvent from "../Events/DetailEvent/DetailEvent";
import EventForm from "../Events/EventForm/EventForm";

const Main = function ({ events, updateEvent, removeEvent, addEvent, date, setIsSchedule }) {
  return (
    <Switch>
      {(
        <>
          <Route exact path="/">
            <Schedule
              date={date}
              setIsSchedule={setIsSchedule}
              events={events}
            />
          </Route>
          <Route exact path="/events/new">
            <EventForm
              date={date}
              setIsSchedule={setIsSchedule}
              addEvent={addEvent}
            />
          </Route>
          <Route exact path="/events/:eventId">
            <DetailEvent
              events={events}
              updateEvent={updateEvent}
              removeEvent={removeEvent}
            />
          </Route>
          <Route exact path="/calendar">
            <Schedule
              date={date}
              setIsSchedule={setIsSchedule}
              events={events}
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
