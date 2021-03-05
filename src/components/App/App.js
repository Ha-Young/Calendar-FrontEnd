import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import NewEvent from "../Events/NewEvent";
import Events from "../Events/Events";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import EventDetail from "../Events/EventDetail";

function App({ events, addEvents, removeEvents, onClickLogin, auth }) {
  const { userId } = auth;
  
  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/calendar">
          <Dashboard 
            main={<Calendar userId={userId} events={events} addEvents={addEvents} />}
            login={<Login onClickLogin={onClickLogin} auth={auth} />}
          />
        </Route>
        <Route exact path="/event">
          <Events userId={userId} removeEvents={removeEvents} />
        </Route>
        <Route exact path="/event/new">
          <NewEvent userId={userId} />
        </Route>
        <Route exact path="/event/detail/:date/:hours">
          <EventDetail userId={userId} removeEvents={removeEvents} />
        </Route>
        <Route exact path="/event/:date/:hours">
          <NewEvent userId={userId} /> 
        </Route>
        <Route path="*">
          <Redirect to="/calendar" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
