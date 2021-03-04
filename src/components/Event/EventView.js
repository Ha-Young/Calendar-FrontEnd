import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import Button from "../Shared/Button";
import { removeEvent } from "../../api/index";
import { IoLocationSharp, IoTimeSharp, IoCalendarClearSharp, IoPencilSharp } from "react-icons/io5";

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
      <p className={styles.title}>{event.title}</p>
      <dl>
        <dt><IoCalendarClearSharp className="icon"/> Date</dt>
        <dd>{event.date}</dd>
      </dl>
      <dl>
        <dt><IoTimeSharp className="icon"/> Time</dt>
        <dd>{event.startTime} - {event.endTime}</dd>
      </dl>
      <dl>
        <dt><IoLocationSharp className="icon"/> Location</dt>
        <dd>{event.location}</dd>
      </dl>
      <dl>
        <dt><IoPencilSharp className="icon" /> Description</dt>
        <dd>{event.description}</dd>
      </dl>
      <div className={styles.Buttons}>
        <Link to={{
          pathname: "/event",
          state: { event }
        }}>
          <Button handleClickEvent={handleEditEvent}>EDIT</Button>
        </Link>
        <Button handleClickEvent={deleteEvents}>DELETE</Button>
      </div>
    </div>
  )
}
