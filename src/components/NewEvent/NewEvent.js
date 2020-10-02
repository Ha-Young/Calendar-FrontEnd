import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import styles from "./NewEvent.module.css";
import Modal from "../Modal/Modal";

export default function NewEvent ({ addEvent, errorMessage }) {
  const history = useHistory();
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    startTime: "",
    endTime: "",
  });
  const {
    eventName,
    eventDescription,
    eventDate,
    startTime,
    endTime
  } = eventDetails;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputsChange = (event) => {
    const { value, name } = event.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const handleSubmitButton = async () => {
    const id = "event" + Date.now();
    await addEvent({
      id: id,
      createdAt: moment().toISOString(),
      ...eventDetails,
    });

    history.push("/calendar");
  };

  const handleCancelButton = (event) => {
    event.preventDefault();
    history.push("/calendar");
  };

  const isEventDetailsFilled = eventName && eventDescription && eventDate && startTime && endTime;

  return (
    <>
      {
        errorMessage
        && <Modal title={errorMessage} />
      }
      <div className={styles.NewEvent}>
        <h2>Create Events</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            name="eventName"
            placeholder="Event Name"
            value={eventName}
            onChange={handleInputsChange}
            required
          />
          <label htmlFor="eventDescription">Event Description</label>
          <input
            type="text"
            name="eventDescription"
            placeholder="Event Description"
            value={eventDescription}
            onChange={handleInputsChange}
            required
          />
          <label htmlFor="eventDate">Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={eventDate}
            onChange={handleInputsChange}
            required
          />
          <input
            type="time"
            name="startTime"
            value={startTime}
            onChange={handleInputsChange}
            required
          />
          <input
            type="time"
            name="endTime"
            value={endTime}
            onChange={handleInputsChange}
            required
          />
          <button
            className={styles.submitButton}
            onClick={handleSubmitButton}
            disabled={isEventDetailsFilled ? false : true}
          >
            Submit
          </button>
          <button
            className={styles.cancelButton}
            onClick={handleCancelButton}
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}
