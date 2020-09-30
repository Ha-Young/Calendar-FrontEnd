import React, { useState } from "react";
import styles from "./NewEvent.module.css";
import { useHistory } from "react-router-dom";
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

  const { eventName, eventDescription, eventDate, startTime, endTime } = eventDetails;

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    const { value, name } = event.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const onClick = () => {
    const id = "event" + Date.now();
    addEvent({...eventDetails, createdAt: moment().toISOString(), id: id});
  };

  const handleClick = (event) => {
    event.preventDefault();
    history.push("/calendar");
  };

  const isEventDetailsFilled = eventName && eventDescription && eventDate && startTime && endTime;

  return (
    <div className={styles.NewEvent}>
      <h2>Create Events</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="eventName">Event Name</label>
        <input type="text" name="eventName" placeholder="Event Name" value={eventName} onChange={onChange} required/>
        <label htmlFor="eventDescription">Event Description</label>
        <input type="text" name="eventDescription" placeholder="Event Description" value={eventDescription} onChange={onChange} required/>
        <label htmlFor="eventDate">Event Date</label>
        <input type="date" name="eventDate" value={eventDate} onChange={onChange} required/>
        <input type="time" name="startTime" value={startTime} onChange={onChange} required/>
        <input type="time" name="endTime" value={endTime} onChange={onChange} required/>
        <button className={styles.submitButton} onClick={onClick} disabled={isEventDetailsFilled ? false : true}>Submit</button>
        <button className={styles.cancelButton} onClick={handleClick}>Cancel</button>
      </form>
    </div>
  );
}
