import React, { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import Event from "../../containers/Event";
import { getRecord } from "../../api";

function App({ onInitialLoad }) {
  useEffect(() => {
    (async function(){
      const data = await getRecord();
      onInitialLoad(data);
    })();
  }, []);

  return (
   <Fragment>
     <Header />
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/event">
          <Event />
        </Route>
   </Fragment>
  );
}

export default App;
