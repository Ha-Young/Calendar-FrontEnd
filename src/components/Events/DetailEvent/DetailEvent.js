import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Dropdown from "../../Dropdown/Dropdown";
import { START_TIME_LIST, END_TIME_LIST } from "../../../constants/calendarConstants";
import styles from "./DetailEvent.module.css"
import Button from "../../Button/Button";

const DetailEvent = function ({ events, updateEvent, removeEvent }) {
  let { eventId } = useParams();
  const { push } = useHistory();
  const selectedEvent = events.byIds[eventId];
  const [date, setDate] = useState(selectedEvent?.date);
  const [startTime, setStartTime] = useState(selectedEvent?.startTime);
  const [endTime, setEndTime] = useState(selectedEvent?.endTime);
  const [title, setTitle] = useState(selectedEvent?.title);
  const [description, setDescription] = useState(selectedEvent?.description);
  const [submitType, setSubmitType] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  function createItemTag(item) {
    return (
      <div>{item}</div>
    );
  }

  function chnageActive(submitType) {
    return submitType === "update" ? "active" : "";
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (startTime > endTime) {
      alert("Check the time please");
      return;
    }

    if (submitType === "update") {
      const updatedEvent = isUpdated ? {
        id: selectedEvent.id,
        color: selectedEvent.color,
        date,
        startTime,
        endTime,
        title,
        description,
      } : null;

      updateEvent(selectedEvent, updatedEvent);
    }

    if (submitType === "remove") {
      removeEvent(selectedEvent);
    }

    push("/calendar");
  }

  function handleChanges(type, value) {
    setIsUpdated(true);

    switch (type) {
      case "title":
        setTitle(value);
        break;
      case "date":
        setDate(value);
        break;
      case "startTime":
        setStartTime(value);
        break;
      case "endTime":
        setEndTime(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        throw new Error("Unavailable Type");
    }
  }

  return (
    <form className={styles["detail-event"]} onSubmit={handleSubmit}>
      <h3>Detail event</h3>
      <div className={styles["buttons-container"]}>
        <Button
          className={styles["button"]}
          children="Update"
          onClick={() => setSubmitType("update")}
        />
        <Button
          className={styles["button"]}
          children="Remove"
          onClick={() => setSubmitType("remove")}
        />
      </div>
      <div className={`${styles["title-container"]} ${styles[chnageActive(submitType)]}`}>
        <input
          type="text"
          className={styles["event-title"]}
          value={title}
          onChange={event => handleChanges("title", event.target.value)}
          placeholder={title}
          required
        />
      </div>
      <div className={`${styles["time-container"]} ${styles[chnageActive(submitType)]}`}>
        <input
          type="date"
          className={styles["event-date"]}
          value={date}
          onChange={event => handleChanges("date", event.target.value)}
          required
        />
        <Dropdown
          className="start-time"
          initialValue={startTime}
          list={START_TIME_LIST}
          chooseItem={value => handleChanges("startTime", value)}
          createItemTag={createItemTag}
        />
        <p>-</p>
        <Dropdown
          className="end-time"
          initialValue={endTime}
          list={END_TIME_LIST}
          chooseItem={value => handleChanges("endTime", value)}
          createItemTag={createItemTag}
        />
      </div>
      <div className={`${styles["description-container"]} ${styles[chnageActive(submitType)]}`}>
        <textarea
          className={styles["description"]}
          value={description}
          placeholder={description}
          onChange={event => handleChanges("description", event.target.value)}
          required
        />
      </div>
      <div className={`${styles["submit-button-container"]} ${styles[chnageActive(submitType)]}`}>
        <input
          type="submit"
          className={styles["button"]}
          value="Submit"
        />
      </div>
    </form>
  );
};

export default DetailEvent;
