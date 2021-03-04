import React from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.scss";
import Header from "../Header/Header";
import Weekly from "../Schedule/Weekly";
import Daily from "../Schedule/Daily";
import EventEdit from "../Event/EventEdit";
import EventView from "../Event/EventView";
import PageNotFound from "../Error/PageNotFound";

function App({ selectedDate, setSelectedDateWithToday, eventMode, setCreateEventMode, setUpdateEventMode }) {
  return (
    <div className={styles.App}>
      <Header
        selectedDate={selectedDate}
        setCreateEventMode={setCreateEventMode}
        setSelectedDateWithToday={setSelectedDateWithToday}
      />
      <Switch>
        <Route path="/" exact>
          <Daily/>
        </Route>
        <Route path="/schedule">
          <Weekly />
        </Route>
        <Route path="/events" exact>
          <EventEdit
            eventMode={eventMode}
            setCreateEventMode={setCreateEventMode}
            setUpdateEventMode={setUpdateEventMode}
          />
        </Route>
        <Route path="/events/:event_id">
          <EventView setUpdateEventMode={setUpdateEventMode}/>
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
