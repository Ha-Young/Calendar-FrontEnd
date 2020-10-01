import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./NewEvent.module.css";
import moment from "moment";

export default function NewEvent ({ addEvent }) {
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

  const handleChange = (event) => {
    const { value, name } = event.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const handleSubmitButton = () => {
    const id = "event" + Date.now();
    addEvent({
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
    <div className={styles.NewEvent}>
      <h2>Create Events</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventName">Event Name</label>
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={eventName}
          onChange={handleChange}
          required
        />
        <label htmlFor="eventDescription">Event Description</label>
        <input
          type="text"
          name="eventDescription"
          placeholder="Event Description"
          value={eventDescription}
          onChange={handleChange}
          required
        />
        <label htmlFor="eventDate">Event Date</label>
        <input
          type="date"
          name="eventDate"
          value={eventDate}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="startTime"
          value={startTime}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="endTime"
          value={endTime}
          onChange={handleChange}
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
  );
}
