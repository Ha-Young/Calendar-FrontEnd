import React from "react";
import Form from "../EventItem/Form";
import styles from "./NewEvent.module.css";

function NewEvent({ history }) {
  return (
    <>
      <h1>new event</h1>
      <div className={styles.eventContainer}>
        <Form history={history} formId={"add"}/>
        <button type='submit' form="add">Add Event</button>
      </div>
    </>
  );
}

export default NewEvent;
