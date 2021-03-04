import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from "../../containers/Calendar";
import EventEditor from "../Events/EventEditor";

function App({ onInitialLoad, userId, allEvents, createEvent, updateEvent, deleteEvent }) {
  useEffect(() => {
    onInitialLoad(userId);
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/calendar/:dateUnit">
          <Calendar />
        </Route>
        <Route path={["/events/new", "/events/:eventId"]}>
          <EventEditor
            allEvents={allEvents}
            createEvent={createEvent}
            updateEvent={updateEvent}
            deleteEvent={deleteEvent}
          />
        </Route>
        <Redirect path="*" to="/calendar/week" />
      </Switch>
    </div>
  );
}

export default App;
