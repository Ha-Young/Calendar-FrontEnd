import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import Create from "../../containers/CreateEvent";
import Update from "../../containers/UpdateEvent";

export default function Event() {
  const match = useRouteMatch();
  return (
    <>
      <Route path={`${match.path}`} exact>
        <Link to={`${match.path}/new`}>New Event</Link>
        <Link to={`${match.path}/1`}>target</Link>
      </Route>

      <Switch>
       <Route path={`${match.path}/new`}>
         <Create />
       </Route>
       <Route path={`${match.path}/1`}>
         <Update />
       </Route>
     </Switch>
    </>
  );
}
