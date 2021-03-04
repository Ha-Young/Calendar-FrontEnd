import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../Header/Header";
import Daily from "../Daily/Daily";
import Weekly from "../Weekly/Weekly";
import EventForm from "../EventDetails/EventForm";

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
          <Daily role={"daily"} eventDate={props.currentDate} userEvents={props.dailyEvents} />
        </Route>
        <Route path="/weekly">
          <Weekly eventDate={props.currentDate} userEvents={props.weeklyEvents}/>
        </Route>
        <Route path="/events/new">
          <EventForm inputData={props.eventFormInfo} setEventForm={props.actToEventForm} setUserEvent={props.actToUserEvent}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
