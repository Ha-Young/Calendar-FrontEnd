import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CalendarPage from "../../routes/CalendarPage";
import EventPage from "../../routes/EventPage";

const AppRouter = ({ changeCalendarType }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <CalendarPage onClickTypeButton={changeCalendarType} />
      </Route>
      <Route path="/events/new">
        <EventPage />
      </Route>
      <Route path="/events/:eventId">
        <div>Event/eventId</div>
      </Route>
      <Redirect path="*" to="/" />
    </Switch>
  );
};

export default AppRouter;
