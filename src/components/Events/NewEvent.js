import React, { useState } from "react";
import Form from "./Form";
import styles from "./Events.module.css";

export default function NewEvent({ writeUserData }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const date = startAt.substring(0, 10);
    const startHour = startAt.substring(11,13);
    const endHour = endAt.substring(11,13);
    writeUserData("guest", date, title, detail, startHour, endHour);
  }

  function onTitleChange(value) {
    setTitle(value);
  }

  function onDetailChange(value) {
    setDetail(value);
  }

  function onStartAtChange(value) {
    setStartAt(value);
  }

  function onEndAtChange(value) {
    setEndAt(value);
  }

  return (
    <div className={`${styles.eventFormContainer} ${styles.flexCenter}`}>
      <Form
        title={title}
        detail={detail}
        startAt={startAt}
        endAt={endAt}
        onSubmit={onSubmit}
        onTitleChange={onTitleChange}
        onDetailChange={onDetailChange}
        onStartAtChange={onStartAtChange}
        onEndAtChange={onEndAtChange}
      />
    </div>
  );
}
