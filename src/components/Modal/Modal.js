import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./style.css";

export default function Modal({ event }) {
  console.log(useRouteMatch().url);
  return (
    <div className="modal-container">
      <Link to="/calendar/daily">x</Link>
      <div className="modal-content-container">
        <h3>title: {event.title}</h3>
        <h4>date: {event.date}</h4>
        <h4>start hour: {event.startHour}</h4>
        <h4>end hour: {event.endHour}</h4>
        <h4>description: {event.description}</h4>
      </div>
    </div >
  );
}
