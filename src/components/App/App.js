import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { fetchDataFromFirebaseDB } from "../../api";
import { getPathString } from "../../utils";
import Header from "../Header/Header";
import Daily from "../Daily/Daily";
import Weekly from "../Weekly/Weekly";
import EventForm from "../EventForm/EventForm";
import EventDetails from "../EventDetails/EventDetails";

function App(props) {
  const currentYear = props.currentDate.getFullYear();
  const currentMonth = props.currentDate.getMonth() + 1;

  const [yearMonth, setYearMonth] = useState([currentYear, currentMonth]);

  const beforeYear = yearMonth[0];
  const beforeMonth = yearMonth[1];

  if (currentYear !== beforeYear || currentMonth !== beforeMonth) {
    setYearMonth([currentYear, currentMonth]);
  }

  useEffect(() => {
    const path = getPathString(yearMonth[0], yearMonth[1], "events");
    fetchDataFromFirebaseDB(path)
      .then((snapShot) => {
        const eventAll = snapShot.val();
        if (eventAll) props.actToUserEvent.setEventAll(eventAll);
      });
  }, [yearMonth, props.actToUserEvent]);

  return (
    <div>
      <Header
        currentDate={props.currentDate}
        dispatch={props.actToCurrentDate}
      />
      <Switch>
        <Route exact path="/" children={<Redirect to="/calendar"/>} />
        <Route exact path="/calendar">
          <Daily
            role={"daily"}
            eventDate={props.currentDate}
            userEvents={props.dailyEvents}
            dispatch={props.actToEventForm.setAllDate}
          />
        </Route>
        <Route path="/calendar/weekly">
          <Weekly
            eventDate={props.currentDate}
            userEvents={props.weeklyEvents}
            dispatch={props.actToEventForm.setAllDate}
          />
        </Route>
        <Route path="/events/new">
          <EventForm
            inputData={props.eventInfo}
            setEventForm={props.actToEventForm}
            setUserEvent={props.actToUserEvent}
            eventById={props.eventById}
          />
        </Route>
        <Route path="/events/:eventId">
          <EventDetails
            setEventForm={props.actToEventForm.correct}
            deleteEvent={props.actToUserEvent.deleteEvent}
            eventById={props.eventById}
            setEvent={props.actToUserEvent.setEvent}
          />
        </Route>
        <Route path="*">
          <Redirect to="/calendar" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
