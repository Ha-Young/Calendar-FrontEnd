import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { fetchDataFromFirebaseDB } from "../../api";
import { getPathString } from "../../utils";
import Header from "../Header/Header";
import Daily from "../Daily/Daily";
import Weekly from "../Weekly/Weekly";
import EventForm from "../EventForm/EventForm";
import EventDetails from "../EventDetails/EventDetails";

function App({ updateEventForm, actToUserEvent, actToCurrentDate, eventInfo, currentDate, dailyEvents, weeklyEvents, eventById }) {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

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
        if (eventAll) actToUserEvent.setEventAll(eventAll);
      });
  }, [yearMonth, actToUserEvent]);

  return (
    <div>
      <Header
        currentDate={currentDate}
        dispatch={actToCurrentDate}
      />
      <Switch>
        <Route exact path="/" children={<Redirect to="/calendar"/>} />
        <Route exact path="/calendar">
          <Daily
            role={"daily"}
            eventDate={currentDate}
            userEvents={dailyEvents}
            updateEventForm={updateEventForm}
          />
        </Route>
        <Route path="/calendar/weekly">
          <Weekly
            eventDate={currentDate}
            userEvents={weeklyEvents}
            updateEventForm={updateEventForm}
          />
        </Route>
        <Route path="/events/new">
          <EventForm
            inputData={eventInfo}
            updateEventForm={updateEventForm}
            setUserEvent={actToUserEvent}
            eventById={eventById}
          />
        </Route>
        <Route path="/events/:eventId">
          <EventDetails
            updateEventForm={updateEventForm}
            deleteEvent={actToUserEvent.deleteEvent}
            eventById={eventById}
            setEvent={actToUserEvent.setEvent}
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
