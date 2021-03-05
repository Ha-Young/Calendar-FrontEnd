import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import uniqid from "uniqid";
import Dropdown from "../../Dropdown/Dropdown";
import { START_TIME_LIST, END_TIME_LIST } from "../../../constants/calendarConstants";
import { generateDateAndTimeString } from "../../../utils/calendarUtils";
import { generateRandomColor } from "../../../utils/uiUtils";
import styles from "./EventForm.module.css";
import { saveEventInDatabase } from "../../../api";

const EventForm = function ({ addEvent, date, setIsSchedule }) {
  const [initialDate, initialStartTime, initialEndTime] = generateDateAndTimeString(date);
  const [inputDate, setInputDate] = useState(initialDate);
  const [startTime, setStartTime] = useState(initialStartTime);
  const [endTime, setEndTime] = useState(initialEndTime);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let location = useLocation();
  const { goBack } = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    if (startTime > endTime) {
      alert("Check the time please");
      return;
    }

    const eventObject = {
      id: uniqid(),
      color: generateRandomColor(),
      date: inputDate,
      startTime,
      endTime,
      title,
      description,
    };

    saveEventInDatabase(eventObject);
    addEvent(eventObject);
    goBack();
  }

  function createItemTag(item) {
    return (
      <div>{item}</div>
    );
  }

  useEffect(() => {
    setIsSchedule(location.pathname);
  }, [setIsSchedule, location.pathname]);

  return (
    <form className={styles["event-form"]} onSubmit={handleSubmit}>
      <h3>Event Form</h3>
      <div className={styles["title-container"]}>
        <input
          type="text"
          className={styles["event-title"]}
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="ADD TITLE"
          required
        />
      </div>
      <div className={styles["time-container"]}>
        <input
          type="date"
          value={inputDate}
          onChange={event => setInputDate(event.target.value)}
          required
        />
        <Dropdown
          className="start-time"
          initialValue={startTime}
          list={START_TIME_LIST}
          chooseItem={value => setStartTime(value)}
          createItemTag={createItemTag}
        />
        <p>-</p>
        <Dropdown
          className="end-time"
          initialValue={endTime}
          list={END_TIME_LIST}
          chooseItem={value => setEndTime(value)}
          createItemTag={createItemTag}
        />
      </div>
      <div className={styles["description-container"]}>
        <textarea
          className={styles["description"]}
          value={description}
          placeholder="Type your event description here..."
          onChange={event => setDescription(event.target.value)}
          required
        />
      </div>
      <div className={styles["submit-button-container"]}>
        <input
          type="submit"
          className={styles["submit-button"]}
          value="Submit"
        />
      </div>
    </form>
  );
};

export default EventForm;
