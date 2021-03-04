import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NewEventForm from "../../containers/NewEventForm";

function EventsRouter() {
  return (
    <Switch>
      <Route path="/events/new" exact component={NewEventForm} />
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
