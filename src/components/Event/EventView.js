import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import { removeEvent } from "../../api/index";
import styles from "./EventView.module.scss";

export default function EventView({ setUpdateEventMode }) {
  const history = useHistory();
  const location = useLocation();
  const event = location.state.event;

  const deleteEvents = async () => {
    await removeEvent(event.date, event.startTime);
    console.log("remove...");
    history.push("/");
  };

  const handleEditEvent = () => {
    setUpdateEventMode();
  };

  return (
    <div className={styles.EventView}>
      <ul>
        <li className={styles.itle}>{event.title}</li>
        <li>{event.date}</li>
        <li>
          <p>{event.startTime}</p>
          <p>{event.endTime}</p>
        </li>
        <li>{event.location}</li>
        <li>{event.description}</li>
      </ul>
      <div className={styles.Buttons}>
        <Link to={{
          pathname: "/event",
          state: { event }
        }}>
          <button type="button" onClick={handleEditEvent}>EDIT</button>
        </Link>
        <button type="button" onClick={deleteEvents}>DELETE</button>
      </div>
    </div>
  )
}
