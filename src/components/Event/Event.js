import React from "react";
import { Route, Switch, Link, useRouteMatch, useLocation } from "react-router-dom";
import Create from "../../containers/CreateEvent";
import Update from "../../containers/UpdateEvent";
import styles from "./Event.module.css";

export default function Event() {
  const match = useRouteMatch();
  return (
    <div className={styles.event_nav}>
      <Route path={`${match.url}`} exact>
        <h3><Link to={`${match.url}/new`}>New Event</Link></h3>
        <Link to={`${match.url}/update`}>target</Link>
      </Route>

      <Switch>
       <Route path={`${match.url}/new`}>
         <Create />
       </Route>
       <Route path={`${match.url}/update`}>
         <Update />
       </Route>
     </Switch>
    </div>
  );
}
