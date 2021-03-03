import React, { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Container from "../Shared/Container";
import InputDate from "../Shared/InputDate";
import InputText from "../Shared/InputText";
import InputTime from "../Shared/InputTime";
import Textarea from "../Shared/Textarea";
import { createEvent, updateEvent } from "../../api/index";

import styles from "./EventEdit.module.scss";

export default function EventEdit({ eventMode }) {
  const [ currentEvent, setCurrentEvent ] = useState({});
  let oldEvent = useRef();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (eventMode === "update") {
      const event = location.state.event;
      oldEvent.current = event;
      setCurrentEvent(event);
      console.log(oldEvent.current);
    }
  }, []);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCurrentEvent({
      ...currentEvent,
      [name]: value,
    });
  };

  const saveEvent = async () => {
    if (eventMode === "update") {
      await updateEvent(oldEvent.current.date, oldEvent.current.startTime, currentEvent);
    } else {
      await createEvent(currentEvent);
    }
    history.push("/");
  };

  return (
    <div className={styles.NewEvent}>
      <p>{eventMode === "create" ? "NEW EVENT" : "EDIT EVENT"}</p>
      <Container className={styles.Title}>
        <div>
          <label>Event Title</label>
          <InputText name="title" handleChange={handleChange} value={currentEvent.title}/>
        </div>
      </Container>
      <Container className={styles.Date}>
        <div>
          <label>Date</label>
          <InputDate name="date" handleChange={handleChange} value={currentEvent.date}/>
        </div>
      </Container>
      <Container className={styles.Time}>
        <div>
          <label>Start Time</label>
          <InputTime name="startTime" isStartTime={true} handleChange={handleChange} value={currentEvent.startTime}/>
        </div>
        <div>
          <label>End Time</label>
          <InputTime name="endTime" isEndTime={true} handleChange={handleChange} value={currentEvent.endTime}/>
        </div>
      </Container>
      <Container className={styles.Location}>
        <div>
          <label>Location</label>
          <InputText name="location" handleChange={handleChange} value={currentEvent.location}/>
        </div>
      </Container>
      <Container className={styles.Description}>
        <div>
          <label>Description</label>
          <Textarea name="description" handleChange={handleChange} value={currentEvent.description}/>
        </div>
      </Container>
      <div className={styles.Buttons}>
        <button type="button" onClick={() => history.goBack()}>BACK</button>
        <button type="button" onClick={saveEvent}>
          {eventMode === "update" ? "EDIT" : "SAVE"}
        </button>
      </div>
    </div>
  )
}
