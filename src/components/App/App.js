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

function App({
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
      <Header
        selectedDate={selectedDate}
        setCreateEventMode={setCreateEventMode}
        setSelectedDate={setSelectedDate}
      />
      <Switch>
        <Route path={["/", "/daily"]} exact>
          <Daily/>
        </Route>
        <Route path="/schedule">
          <Weekly />
        </Route>
        <Route path={["/events/new", "/events/edit/:event_id"]}>
          <EventEdit
            eventMode={eventMode}
            eventsInStore={eventsInStore}
            deleteEventInStore={deleteEventInStore}
            saveEventInStore={saveEventInStore}
          />
        </Route>
        <Route path="/events/:event_id">
          <EventView
            setUpdateEventMode={setUpdateEventMode}
            eventsInStore={eventsInStore}
            deleteEventInStore={deleteEventInStore}
          />
        </Route>
        <Route>
          <PageNotFound text="존재하지 않는 페이지입니다."/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
