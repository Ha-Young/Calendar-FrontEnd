import React from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.scss";
import Header from "../Header/Header";
import Weekly from "../../containers/Weekly";
import Daily from "../../containers/Daily";
import EventEdit from "../Event/EventEdit";
import EventView from "../Event/EventView";
import PageNotFound from "../Error/PageNotFound";
import Login from "../../containers/Login";

function App({
  userId,
  selectedDate,
  setSelectedDate,
  eventMode,
  setCreateEventMode,
  setUpdateEventMode,
  eventsInStore,
  saveEventInStore,
  deleteEventInStore
}) {
  return (
    <div className={styles.App}>
      {userId === ""
        ? <Login />
        : (
          <>
            <Header
              selectedDate={selectedDate}
              setCreateEventMode={setCreateEventMode}
              setSelectedDate={setSelectedDate}
            />
            <Route path="/" exact component={Weekly} />
            <Switch>
              <Route path="/calendar" component={Weekly} />
              <Route path="/daily" component={Daily} />
              <Route path={["/events/new", "/events/edit/:event_id"]}>
                <EventEdit
                  userId={userId}
                  eventMode={eventMode}
                  eventsInStore={eventsInStore}
                  deleteEventInStore={deleteEventInStore}
                  saveEventInStore={saveEventInStore}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              </Route>
              <Route path="/events/:event_id">
                <EventView
                  userId={userId}
                  setUpdateEventMode={setUpdateEventMode}
                  eventsInStore={eventsInStore}
                  saveEventInStore={saveEventInStore}
                  deleteEventInStore={deleteEventInStore}
                  setSelectedDate={setSelectedDate}
                />
              </Route>
              <Route>
                <PageNotFound text="존재하지 않는 페이지입니다."/>
              </Route>
            </Switch>
          </>
        )
      }
    </div>
  );
}

export default App;
