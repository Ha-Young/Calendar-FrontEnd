import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Event from "../../containers/Event";
import Calendar from "../Calendar/Calendar";
import { getRecord } from "../../api";

function App({ onInitialLoad }) {
  useEffect(() => {
    getRecord().then(data => {
      onInitialLoad(data);
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/calendar" component={Calendar}></Route>
        <Route path="/event" component={Event}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
