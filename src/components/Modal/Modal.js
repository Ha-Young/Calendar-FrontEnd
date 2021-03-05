import React from "react";
import "./style.css";

export default function Modal({ event }) {

  console.log(event);
  return (
    <div className="modal-container">
      <div className="modal-content-container">
        <span>{event.startDate}</span>
        <span>{event.startHour}</span>
        <span>{event.endHour}</span>
      </div>
      <div>{event.title}</div>
      <div>{event.description}</div>
    </div>
  );
}
