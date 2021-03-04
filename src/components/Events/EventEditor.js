import React, { useEffect, useRef, useState, } from "react";
import styles from "./EventEditor.module.css";
import InputBox from "./InputBox";
import parseDateString from "date-fns/parse";
import { format } from "date-fns";
import testEventValidation from "../../util/testEventValidation";
import { Link, useLocation, useHistory } from "react-router-dom";

export default function EventEditor(props) {
  const { 
    allEvents,
    createEvent,
    updateEvent,
    deleteEvent,
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
      selectedEvent: {
        ...selectedEvent,
        date: format(selectedEvent.startDate, "yyyy-MM-dd"),
        start: format(selectedEvent.startDate, "HH:mm"),
        end: format(selectedEvent.endDate, "HH:mm"),
      },
      isReadMode: false,
      isUpdate: true,
    }
  } : null;

  useEffect(() => {
    if (selectedEvent) {
      $inputTitle.current.value = selectedEvent.title ?? "";
      $inputDescription.current.value = selectedEvent.description ?? "";
      $inputDate.current.value = selectedEvent.date ?? "";
      $inputStartTime.current.value = selectedEvent.start ?? "";
      $inputEndTime.current.value = selectedEvent.end ?? "";
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
    const startHour = e.currentTarget.start.value.slice(0, 2);
    const endHour = e.currentTarget.end.value.slice(0, 2);
    const id = `${date}-${startHour}-${endHour}`;
    const length = Number(endHour) - Number(startHour);

    const eventData = {
      title,
      date,
      startHour,
      endHour,
      id,
    };

    const startDate = parseDateString(`${date} ${startHour}`,"yyyy-MM-dd HH", new Date());
    const endDate = parseDateString(`${date} ${endHour}`,"yyyy-MM-dd HH", new Date());

    if (!testEventValidation(e, eventData, allEvents, setMessage)) {
      return;
    }

    const newEvent = {
      title,
      description,
      startDate,
      endDate,
      id,
      length,
    }

    if (isUpdate) {
      updateEvent(selectedEvent, newEvent);
    } else {
      createEvent(newEvent);
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