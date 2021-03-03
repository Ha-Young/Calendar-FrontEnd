import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import Event from "../Event/Event";
import EventForm from "./EventForm/EventForm";

const Events = function () {
  //redux state에 이거 array 같은거 하나 저장시켜줘야할듯?
  const events = ["a", "b", "c"];
  let { path, url } = useRouteMatch();

  console.log(path);
  return (
    <div>
      hi
      {/* <nav>
        <ul>
          <li>
            <NavLink to="/events/new">New</NavLink>
          </li>
          <li>
            {events.map((event, i) => <NavLink key={event} to={`/events/${i}`}>{`event${i}`}</NavLink>)}
          </li>
        </ul>
      </nav> */}
      <Switch>
        <Route path={`${path}/new`} >
          <EventForm />
        </Route>
        {/* <Route path="/events/:eventId">
          <Event />
        </Route> */}
      </Switch>
    </div >
  );
};

export default Events;
