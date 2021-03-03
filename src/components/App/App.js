import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Monthly from "../Monthly/Monthly";
import Weekly from "../Weekly/Weekly";

function App(props) {

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Monthly />
        </Route>
        <Route path="/event">
          <Weekly />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
