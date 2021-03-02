import React from "react";
import { Route, Switch } from "react-router-dom";

function Events() {
  return (
    <Switch>
      <Route path="/events" exact>
        <div>Events page</div>
      </Route>
      <Route path="/events/:eventId">
        <div>event id</div>
      </Route>
    </Switch>
  );
}

export default Events;
