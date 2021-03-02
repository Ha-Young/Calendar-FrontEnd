import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from '../Calendar/Calendar';
import Background from '../publicComponent/Background/Background';

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <Background>
      <div className={styles.App}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Calendar></Calendar>
          </Route>
          <Route path="/event">
            <div>Event</div>
          </Route>
        </Switch>
      </div>
    </Background>
  );
}

export default App;
