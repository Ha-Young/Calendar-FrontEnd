import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { fetchDataFromFirebaseDB } from "../../api";
import { getPathString } from "../../utils";
import Header from "../Header/Header";
import Daily from "../Daily/Daily";
import Weekly from "../Weekly/Weekly";
import EventForm from "../EventForm/EventForm";
import EventDetails from "../EventDetails/EventDetails";

function App({ updateEventForm, updateCurrentDate, updateUserEvent, deleteUserEvent, eventInfo, currentDate, dailyEvents, weeklyEvents, eventById }) {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  useEffect(() => {
    const path = getPathString(currentYear, currentMonth, "events");
    fetchDataFromFirebaseDB(path)
      .then((snapShot) => {
        const events = snapShot.val();
        if (events) updateUserEvent(events);
      })
      .catch((err) => {
        // add error handling
      });
  }, [currentYear, currentMonth, updateUserEvent]);

  return (
    <div>
      <Header
        currentDate={currentDate}
        updateCurrentDate={updateCurrentDate}
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
            updateUserEvent={updateUserEvent}
            eventById={eventById}
          />
        </Route>
        <Route path="/events/:eventId">
          <EventDetails
            updateEventForm={updateEventForm}
            updateUserEvent={updateUserEvent}
            deleteUserEvent={deleteUserEvent}
            eventById={eventById}
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
