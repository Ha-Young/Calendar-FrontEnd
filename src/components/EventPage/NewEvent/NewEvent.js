import React from "react";
import Form from "../EventItem/Form";
import styles from "./NewEvent.module.css";

function NewEvent() {
  return (
    <>
      <h1>new event</h1>
      <div className={styles.eventContainer}>
        <Form />
      </div>
    </>
  );
}

export default NewEvent;
