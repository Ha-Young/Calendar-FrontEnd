import React from "react";
import { Route, useLocation, useHistory } from "react-router-dom";

import Container from "../Shared/Container";
import { removeEvents } from "../../api/index";
import styles from "./EventView.module.scss";

export default function EventView() {
  const history = useHistory();
  const location = useLocation();
  const event = location.state.event;

  const deleteEvents = async () => {
    await removeEvents(event.date, event.startTime);
    console.log("remove...");
    history.push("/");
  }

  return (
    <div className={styles.ViewEvent}>
      <ul>
        <li className={styles.title}>{event.title}</li>
        <li>{event.date}</li>
        <li>
          <p>{event.startTime}</p>
          <p>{event.endTime}</p>
        </li>
        <li>{event.location}</li>
        <li>{event.description}</li>
      </ul>
      <div className={styles.Buttons}>
        <button type="button">EDIT</button>
        <button type="button" onClick={deleteEvents}>DELETE</button>
      </div>
    </div>
  )
}
