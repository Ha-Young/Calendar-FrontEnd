import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../Header/Header";
import Daily from "../Daily/Daily";
import Weekly from "../Weekly/Weekly";
import EventForm from "../EventForm/EventForm";
import EventDetails from "../EventDetails/EventDetails";

function App(props) {
  const [isDaily, setIsDaily] = useState(true);

  return (
    <div className={styles.App}>
      <Header
        isDaily = {isDaily}
        setIsDaily = {setIsDaily}
        currentDate={props.currentDate}
        dispatch={props.actToCurrentDate}
      />
      <Switch>
        <Route path="/calendar" exact>
          <Daily
            role={"daily"}
            eventDate={props.currentDate}
            userEvents={props.dailyEvents}
            dispatch={props.actToEventForm.setAllDate}
          />
        </Route>
        <Route exact path="/calendar/weekly">
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
            clearEvent={props.actToUserEvent.clearEvent}
            eventById={props.eventById}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
