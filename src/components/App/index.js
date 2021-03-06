import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import CalenderHeaderContainer from "../../containers/CalendarHeaderContainer";
import CalendarMain from "../CalendarMain";
import EventFormContainer from "../../containers/EventFormContainer";
import InvaildIdModal from "../InvailIdModal";

function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/calendar" exact>
          <CalenderHeaderContainer />
          <CalendarMain />
        </Route>

        <Route path="/events">
          <EventFormContainer/>
        </Route>

        <Route>
          <InvaildIdModal/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
