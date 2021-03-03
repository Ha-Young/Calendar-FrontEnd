import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Container from "../Shared/Container";
import InputDate from "../Shared/InputDate";
import InputText from "../Shared/InputText";
import InputTime from "../Shared/InputTime";
import Textarea from "../Shared/Textarea";
import { createEvent } from "../../api/index";

import styles from "./EventEdit.module.scss";

export default function EventEdit() {
  const result = {};
  const history = useHistory();

  const handleChange = (event) => {
    const value = event.target.value;
    result[event.target.name] = value;
  };

  const saveEvent = async () => {
    await createEvent(result);
    history.goBack();
  }

  return (
    <div className={styles.NewEvent}>
      <p>NEW EVENT</p>
      <Container className={styles.Title}>
        <div>
          <label>Event Title</label>
          <InputText name="title" handleChange={handleChange}/>
        </div>
      </Container>
      <Container className={styles.Date}>
        <div>
          <label>Date</label>
          <InputDate name="date" handleChange={handleChange} />
        </div>
      </Container>
      <Container className={styles.Time}>
        <div>
          <label>Start Time</label>
          <InputTime name="startTime" isStartTime={true} handleChange={handleChange} />
        </div>
        <div>
          <label>End Time</label>
          <InputTime name="endTime" isEndTime={true} handleChange={handleChange} />
        </div>
      </Container>
      <Container className={styles.Location}>
        <div>
          <label>Location</label>
          <InputText name="location" handleChange={handleChange} />
        </div>
      </Container>
      <Container className={styles.Description}>
        <div>
          <label>Description</label>
          <Textarea name="description" handleChange={handleChange} />
        </div>
      </Container>
      <div className={styles.Buttons}>
        <button type="button" onClick={() => history.goBack()}>BACK</button>
        <button type="button" onClick={saveEvent}>CREATE</button>
      </div>
    </div>
  )
}
