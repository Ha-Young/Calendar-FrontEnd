import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NewEventForm from "../../containers/NewEventForm";
import EventDetail from "../../containers/EventDetail";

function EventsRouter() {
  return (
    <Switch>
      <Route path="/events/new" exact component={NewEventForm} />
      <Route path="/events/:eventId" component={EventDetail} />
      <Route>
        <Redirect to="/events/new"/>
      </Route>
    </Switch>
  );
}

export default EventsRouter;
