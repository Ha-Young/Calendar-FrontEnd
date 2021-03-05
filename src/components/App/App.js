import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header";
import Main from "../Main/"
import EventForm from "../EventForm";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (

    <div className={styles.App}>

      <Switch>
        <Route path="/calender" exact>
          <Header />
          <Main/>
        </Route>

        <Route path="/events">
          <EventForm />
        </Route>

        <Route path="/event/:id">
          <EventForm />
        </Route>

        <Redirect path="/" to="/calender"/>
      </Switch>
    </div>
  );
}

export default App;
