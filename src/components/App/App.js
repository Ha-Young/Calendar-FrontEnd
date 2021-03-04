import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import Event from "../Event/Event";
import { getRecord } from "../../api";

function App({ onInitialLoad }) {
  useEffect(() => {
    (async function(){
      const data = await getRecord();
      console.log(data);
      onInitialLoad(data);
    })();
    
  }, []);

  return (
   <Fragment>
     <Header />
      <Switch>
        <Route path="/" exact>
          <Calendar />
        </Route>
        <Route path="/event">
          <Event />
        </Route>
      </Switch>
   </Fragment>
  );
}

export default App;
