import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

function Events() {
  return (
    <Switch>
      <Route path="/events/new" exact>
        <div>Events page</div>
      </Route>
      <Route path="/events/:eventId">
        <div>event id</div>
      </Route>
      <Route>
        <Redirect to="/events/new"/>
      </Route>
    </Switch>
  );
}

export default Events;
