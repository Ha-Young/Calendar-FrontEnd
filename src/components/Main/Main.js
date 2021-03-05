import React from "react"
import Calendar from "../Calendar/Calendar";
import Event from "../Event/Event";
import { Route, Link, Switch } from "react-router-dom";

const Main = () => (
  <main>
    <Route path="calendar" component={Calendar} />
    <Route path="event" component={Event} />
  </main>
)

export default Main;
