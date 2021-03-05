import React from "react";
import { FORM_ID } from "../../../constants/common";
import Form from "../EventItem/Form";
import styles from "./NewEvent.module.css";

function NewEvent({ history }) {
  return (
    <>
      <h1>new event</h1>
      <div className={styles.eventContainer}>
        <Form history={history} formId={FORM_ID.ADD}/>
        <button type='submit' form={FORM_ID.ADD}>Add Event</button>
      </div>
    </>
  );
}

export default NewEvent;
