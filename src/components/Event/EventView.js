import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import Button from "../Shared/Button";
import PageNotFound from "../Error/PageNotFound";
import { removeEvent } from "../../api/index";
import { IoLocationSharp, IoTimeSharp, IoCalendarClearSharp, IoPencilSharp } from "react-icons/io5";

import styles from "./EventView.module.scss";

export default function EventView({ setUpdateEventMode, eventsInStore, deleteEventInStore, setSelectedDate }) {
  const [ currentEvent, setCurrentEvent ] = useState({});
  const history = useHistory();
  const params = useParams();
  const eventDate = params.event_id.slice(6, 16);
  const eventStartTime = params.event_id.slice(17, 23);

  useEffect(() => {
    if (eventsInStore.byDates.hasOwnProperty(eventDate)) {
      const event = eventsInStore.byDates[eventDate][eventStartTime];
      setCurrentEvent(event);
    } else {
      setCurrentEvent(null);
    }
  }, []);

  const deleteEvent = async () => {
    await removeEvent(currentEvent.date, currentEvent.startTime);
    deleteEventInStore(currentEvent.date, currentEvent.startTime);
    setSelectedDate(new Date(currentEvent.date));
    history.push("/daily");
  };

  const handleEditEvent = () => {
    setUpdateEventMode();
  };

  return (
    <>
      {currentEvent === null
        ? <PageNotFound text="잘못된 접근입니다."/>
        : (
          <div className={styles.EventView}>
          <p className={styles.title}>{currentEvent.title}</p>
          <dl>
            <dt><IoCalendarClearSharp className="icon"/> Date</dt>
            <dd>{currentEvent.date}</dd>
          </dl>
          <dl>
            <dt><IoTimeSharp className="icon"/> Time</dt>
            <dd>{currentEvent.startTime} - {currentEvent.endTime}</dd>
          </dl>
          <dl>
            <dt><IoLocationSharp className="icon"/> Location</dt>
            <dd>{currentEvent.location}</dd>
          </dl>
          <dl>
            <dt><IoPencilSharp className="icon" /> Description</dt>
            <dd>{currentEvent.description}</dd>
          </dl>
          <div className={styles.Buttons}>
            <Link to={`/events/edit/event-${currentEvent.date}-${currentEvent.startTime}`}>
              <Button handleClickEvent={handleEditEvent}>EDIT</Button>
            </Link>
            <Button handleClickEvent={deleteEvent}>DELETE</Button>
          </div>
        </div>
        )
      }
    </>
  )
}
