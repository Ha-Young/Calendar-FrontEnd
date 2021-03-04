import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Daily from "../../containers/Daily";
import Event from "../Event/Event";

function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Daily />
        </Route>
        <Route path="/weekly">
          <div>Weekly</div>
        </Route>
        <Route path="/event/:time">
          <Event />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
