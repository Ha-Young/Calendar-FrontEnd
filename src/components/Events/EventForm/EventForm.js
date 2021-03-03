import React, { useState } from "react";
import styles from "./EventForm.module.css";

const EventForm = function () {
  const [title, setTitle] = useState("");
  const [startDateString, setStartDateString] = useState("");
  const [endDateString, setEndDateString] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //event object만들어서 redux state에 저장해주고
    //redirect to calendar
    // (돌아갈 때 무조건 daily 뜨게 해놓고)
    // (Calendar도 event들어간거 update해줘야됨)

  }

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
        />
      </div>
      <div className={styles["time-container"]}>
        <input
          type="datetime-local"
          step="3600"
          value={startDateString}
          onChange={event => setStartDateString(event.target.value)}
        />
        <p>-</p>
        <input
          type="datetime-local"
          step="3600"
          value={endDateString}
          onChange={event => setEndDateString(event.target.value)}
        />
      </div>
      <div className={styles["description-container"]}>
        <textarea
          value={description}
          placeholder="Type your event description here..."
          onChange={event => setDescription(event.target.value)}
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
