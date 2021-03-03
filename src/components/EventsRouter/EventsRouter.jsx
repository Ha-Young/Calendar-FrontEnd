import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import EventForm from "../../containers/EventForm";

function EventsRouter() {
  return (
    <Switch>
      <Route path="/events/new" exact component={EventForm} />
      <Route path="/events/:eventId">
        <div>event id</div>
      </Route>
      <Route>
        <Redirect to="/events/new"/>
      </Route>
    </Switch>
  );
}

export default EventsRouter;
