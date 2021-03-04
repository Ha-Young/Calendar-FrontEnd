import React, { useEffect, useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Container from "../Shared/Container";
import Button from "../Shared/Button";
import InputRadio from "../Shared/InputRadio";
import InputDate from "../Shared/InputDate";
import InputText from "../Shared/InputText";
import InputTime from "../Shared/InputTime";
import Textarea from "../Shared/Textarea";
import { createEvent, updateEvent } from "../../api/index";

import { CgAsterisk } from "react-icons/cg";
import styles from "./EventEdit.module.scss";

const validationTextList = {
  startTimeError: "시작 시간은 종료 시간보다 빨라야 합니다.",
  requiredError: "필수값을 모두 입력해주세요."
};

export default function EventEdit({ userId, eventMode, eventsInStore, saveEventInStore, deleteEventInStore, setSelectedDate }) {
  const [ validationText, setValidationText ] = useState("");
  const [ currentEvent, setCurrentEvent ] = useState({
    userId,
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    eventColor: "#B721FF",
    description: "",
  });

  const history = useHistory();
  const params = useParams();
  const oldEvent = useRef();

  useEffect(() => {
    if (eventMode === "update") {
      const eventDate = params.event_id.slice(6, 16);
      const eventStartTime = params.event_id.slice(17, 23);
      const event = eventsInStore.byDates[eventDate][eventStartTime];
      oldEvent.current = event;
      setCurrentEvent(() => {
        return {
          ...event,
          userId,
        }
      });
    } else {
      setCurrentEvent({
        userId,
        title: "",
        date: "",
        startTime: "",
        endTime: "",
        location: "",
        eventColor: "#B721FF",
        description: "",
      });
    }
  }, [eventMode]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCurrentEvent({
      ...currentEvent,
      [name]: value,
    });
  };

  const saveEvent = async () => {
    if (currentEvent.startTime > currentEvent.endTime) {
      setValidationText(validationTextList.startTimeError);
      return;
    }

    if (currentEvent.title === "" || currentEvent.date === "" || currentEvent.startTime === "" || currentEvent.endTime === "") {
      setValidationText(validationTextList.requiredError);
      return;
    }

    if (eventMode === "update") {
      console.log(currentEvent);
      updateEvent(userId, oldEvent.current.date, oldEvent.current.startTime, currentEvent);
      deleteEventInStore(oldEvent.current.date, oldEvent.current.startTime);
      saveEventInStore(currentEvent.date, [currentEvent]);
    } else {
      await createEvent(currentEvent);
      saveEventInStore(currentEvent.date, [currentEvent]);
    }

    setSelectedDate(new Date(currentEvent.date));
    history.push("/daily");
  };

  return (
    <div className={styles.NewEvent}>
      <div className={styles.header}>
        <p className={styles.eventMode}>{eventMode === "create" ? "NEW EVENT" : "EDIT EVENT"}</p>
        <p className={styles.validationGuide}><CgAsterisk className={styles.asterisk}/> 필수값</p>
      </div>
      <Container className={styles.Title}>
        <div>
          <label>Event Title <CgAsterisk className={styles.asterisk}/></label>
          <InputText name="title" handleChange={handleChange} value={currentEvent.title} required={true}/>
        </div>
      </Container>
      <Container className={styles.Date}>
        <div>
          <label>Date <CgAsterisk className={styles.asterisk}/></label>
          <InputDate name="date" handleChange={handleChange} value={currentEvent.date}/>
        </div>
      </Container>
      <Container className={styles.Time}>
        <div>
          <label>Start Time <CgAsterisk className={styles.asterisk}/></label>
          <InputTime name="startTime" isStartTime={true} handleChange={handleChange} value={currentEvent.startTime}/>
        </div>
        <div>
          <label>End Time <CgAsterisk className={styles.asterisk}/></label>
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
          <Textarea name="description" rows="4" handleChange={handleChange} value={currentEvent.description}/>
        </div>
      </Container>
      <Container>
        <div>
          <label>Color</label>
          <InputRadio name="eventColor" handleChange={handleChange} value="#B721FF" />
          <span className={`${styles.eventColor} ${styles.purple}`}></span>
          <InputRadio name="eventColor" handleChange={handleChange} value="#21D4FD" />
          <span className={`${styles.eventColor} ${styles.blue}`}></span>
          <InputRadio name="eventColor" handleChange={handleChange} value="#F39237" />
          <span className={`${styles.eventColor} ${styles.orange}`}></span>
          <InputRadio name="eventColor" handleChange={handleChange} value="#ff6c91" />
          <span className={`${styles.eventColor} ${styles.pink}`}></span>
        </div>
      </Container>
      <p className={styles.validationText}>{validationText}</p>
      <div className={styles.Buttons}>
        <Button handleClickEvent={() => history.goBack()}>BACK</Button>
        <Button handleClickEvent={saveEvent}>
          {eventMode === "update" ? "EDIT" : "SAVE"}
        </Button>
      </div>
    </div>
  )
}
