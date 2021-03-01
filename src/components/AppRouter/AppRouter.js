import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CalenderPageContainer from "../../containers/CalenderPageContainer";
import NewEventPage from "../../routes/NewEventPage";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <CalenderPageContainer />
      </Route>
      <Route path="/events/new">
        <NewEventPage />
      </Route>
      <Route path="/events/:eventId">
        <div>Event/eventId</div>
      </Route>
      <Redirect path="*" to="/" />
    </Switch>
  );
};

export default AppRouter;
