import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Event from "../Event/Event";

const Events = function () {
  //redux state에 이거 array 같은거 하나 저장시켜줘야할듯?
  const events = ["a", "b", "c"];

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/events/new">New</NavLink>
          </li>
          <li>
            {events.map((event, i) => <NavLink key={event} to={`/events/${i}`}>{`event${i}`}</NavLink>)}
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/events/new" >
          <div>Redirect to Calendar</div>
        </Route>
        <Route path="/events/:eventId">
          <Event />
        </Route>
      </Switch>
    </div >
  );
};

export default Events;
