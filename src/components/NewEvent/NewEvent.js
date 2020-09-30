import React, { useState } from "react";
import styles from "./NewEvent.module.css";

export default function NewEvent ({ addEvent }) {
  const [inputs, setInputs] = useState({
    eventName: "",
    eventDescription: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });

  const { eventName, eventDescription, startDate, startTime, endDate, endTime } = inputs;

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClick = () => {
    addEvent(inputs);
  };

  return (
    <div className={styles.NewEvent}>
      <h2>Create Events</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="eventName">Event Name</label>
        <input type="text" name="eventName" placeholder="Event Name" value={eventName} onChange={onChange} required/>
        <label htmlFor="eventDescription">Event Description</label>
        <input type="text" name="eventDescription" placeholder="Event Description" value={eventDescription} onChange={onChange} required/>
        <label htmlFor="startDate">Start Date</label>
        <input type="date" name="startDate" value={startDate} onChange={onChange} required/>
        <input type="time" name="startTime" value={startTime} onChange={onChange} required/>
        <label htmlFor="startDate">End Date</label>
        <input type="date" name="endDate" value={endDate} onChange={onChange} required/>
        <input type="time" name="endTime" value={endTime} onChange={onChange} required/>
        <button onClick={onClick}>Submit</button>
      </form>
    </div>
  );
}

