import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import Event from "../Event/Event";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
   <Fragment>
     <Header />
      <Switch>
        <Route path="/" exact>
          <div>Main</div>
          <Calendar />
        </Route>
        <Route path="/event">
          <div>Event</div>
          <Event />
        </Route>
      </Switch>
   </Fragment>
  );
}

export default App;
