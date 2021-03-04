import React, { useEffect, useRef, useState, } from "react";
import styles from "./EventEditor.module.css";
import InputBox from "./InputBox";
import testEventValidation from "../../util/testEventValidation";
import { Link, useLocation, useHistory } from "react-router-dom";

export default function EventEditor(props) {
  const { 
    userId,
    allEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    createEventInFirebase,
    deleteEventInFirebase,
  } = props;

  const history = useHistory();
  const location = useLocation();
  const selectedEvent = location?.state?.selectedEvent;
  const isUpdate = location?.state?.isUpdate;
  const isReadMode = location?.state?.isReadMode;

  const inputTextClassName = isReadMode ? `${styles.InputText} ${styles.ReadModeInput}` : styles.InputText;
  const inputDateClassName = isReadMode ? `${styles.InputDate} ${styles.ReadModeInput}` : styles.InputDate;
  const inputTimeClassName = isReadMode ? `${styles.InputTime} ${styles.ReadModeInput}` : styles.InputTime;

  const [message, setMessage] = useState("");

  const $inputTitle = useRef();
  const $inputDescription = useRef();
  const $inputDate = useRef();
  const $inputStartTime = useRef();
  const $inputEndTime = useRef();

  const linkToEdit = isReadMode ? {
    pathname:`/events/${selectedEvent.id}`,
    state: { 
      selectedEvent,
      isReadMode: false,
      isUpdate: true,
    }
  } : null;

  useEffect(() => {
    if (selectedEvent) {
      $inputTitle.current.value = selectedEvent.title ?? "";
      $inputDescription.current.value = selectedEvent.description ?? "";
      $inputDate.current.value = selectedEvent.date ?? "";
      $inputStartTime.current.value = selectedEvent.startTime ? `${selectedEvent.startTime}:00` : "";
      $inputEndTime.current.value = selectedEvent.endTime ? `${selectedEvent.endTime}:00` : "";
    } else {
      $inputTitle.current.value = "";
      $inputDescription.current.value = "";
      $inputDate.current.value = "";
      $inputStartTime.current.value = "";
      $inputEndTime.current.value = "";
    }
  }, [selectedEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.currentTarget.title.value.trim();
    const description = e.currentTarget.description.value.trim();
    const date = e.currentTarget.date.value;
    const startTime = e.currentTarget.start.value.slice(0,2);
    const endTime = e.currentTarget.end.value.slice(0,2);
    const id = `${date}-${startTime}-${endTime}`;
    const length = Number(endTime) - Number(startTime);

    const newEvent = {
      title,
      description,
      date,
      startTime,
      endTime,
      length,
      id,
    };

    if (!testEventValidation(e, newEvent, allEvents, setMessage)) {
      return;
    }

    if (isUpdate) {
      updateEvent(selectedEvent, newEvent);
      deleteEventInFirebase(userId, selectedEvent);
      createEventInFirebase(userId, newEvent);
    } else {
      createEvent(newEvent);
      createEventInFirebase(userId, newEvent);
    }

    history.push("/calendar/week")
  }
  
  const handleDateChange = (e) => {
    const timeString = e.currentTarget.value;
    const hour = timeString.slice(0, 2);
    const minute = timeString.slice(3);

    if (minute !== "00") {
      e.currentTarget.value = `${hour}:00`;
    }
  }

  const handleDeleteButtonClick = (e) => {
    deleteEvent(selectedEvent);
    deleteEventInFirebase(userId, selectedEvent);
    history.push("/calendar/week")
  }

  return (
    <div className={styles.NewEvent}>
      <form 
        className={styles.NewEventForm}
        onSubmit={handleSubmit}
      >
        <InputBox 
          labelFor="title"
          labelContent="Title"
        >
          <input 
            className={inputTextClassName} 
            type="text" 
            name="title" 
            ref={$inputTitle}
            readOnly={!!isReadMode}
          />
        </InputBox>
        <InputBox 
          labelFor="description"
          labelContent="Description"
        >
          <textarea 
            className={inputTextClassName} 
            name="description" 
            cols="30" 
            rows="10"
            ref={$inputDescription}
            readOnly={!!isReadMode}
          />
        </InputBox>
        <InputBox 
          labelFor="date"
          labelContent="Date"
        >
          <input 
            className={inputDateClassName} 
            type="date" 
            name="date"
            ref={$inputDate}
            readOnly={!!isReadMode}
          />
        </InputBox>
        <div className={styles.InputStartEndTimeBox}>
          <InputBox 
            labelFor="start"
            labelContent="Start"
          >
            <input 
              className={inputTimeClassName} 
              type="time" 
              name="start"
              onChange={handleDateChange}
              ref={$inputStartTime}
              readOnly={!!isReadMode}
            />
          </InputBox>
          <InputBox 
            labelFor="end"
            labelContent="End"
          >
            <input 
              className={inputTimeClassName} 
              type="time" 
              name="end"
              onChange={handleDateChange}
              ref={$inputEndTime}
              readOnly={!!isReadMode}
            />
          </InputBox>
        </div>
        <hr />
        <div className={styles.MessageBox}>
          {message}
        </div>

        {isReadMode 
          ? <div className={styles.ButtonBox}>
              <Link to={linkToEdit}>
                <button 
                  className={styles.Button} 
                  type="button"
                >
                  Edit Event
                </button>
              </Link>
              <button 
                className={styles.Button} 
                type="button"
                onClick={handleDeleteButtonClick}
              >
                Delete Event
              </button>
            </div>
          : <div className={styles.ButtonBox}>
              <button className={styles.Button} type="submit">
                {isUpdate ? "Update Event" : "Create Event"}
              </button>
            </div>}
      </form>
    </div>
  );
}