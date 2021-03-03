import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import NewEvent from "../Events/NewEvent";
import Events from "../Events/Events";

function App({ writeUserData, getUserData }) {
  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/calendar">
          <Calendar getUserData={getUserData} />
        </Route>
        <Route exact path="/event">
          <Events getUserData={getUserData} />
        </Route>
        <Route exact path="/event/new">
          <NewEvent writeUserData={writeUserData} />
        </Route>
        <Route exact path="/event/:date">
          <div>EVENT of selected date</div>
        </Route>
        <Route exact path="/event/:date/:hours">
          <NewEvent writeUserData={writeUserData} /> 
        </Route>
        <Route path="*">
          <Redirect to="/calendar" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
