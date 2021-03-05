import React from "react";
import { Link } from "react-router-dom";
import styles from "./EventForm.module.css";

export default function EventForm() {

  return (
    <div className={styles.formWrap}>
      <Link to="/calendar">
        Back
      </Link>

      <form>
        <label>
            <input
            type="text"
            placeholder="event title"
            name="title"
            required
            // onChange={handleUserInputChange}
            // value={userEventInfo.title}
             />
        </label>

        <label>
            <input
            type="text"
            placeholder="event description"
            name="description"
            // value={userEventInfo.description}
            required
            // onChange={handleUserInputChange}
             />
        </label>

        <label>
            <input
            type="date"
            placeholder="event description"
            name="date"
            // value={userEventInfo.date}
            required
            // onChange={handleUserInputChange}
             />
        </label>

        <label>
            <input
            type="time"
            placeholder="event start time"
            name="startTime"
            // value={userEventInfo.startTime}
            step="3600"
            required
            // onChange={handleUserInputChange}
             />
        </label>

        <label>
            <input 
            type="time" 
            placeholder="event end time"
            name="endTime"
            // value={userEventInfo.endTime}
            step="3600"
            required
            // onChange={handleUserInputChange}
             />
        </label>

        <input type="submit" value="제출!"></input>
        <input type="submit" value="delete"></input>
      </form>
    </div>
  )
}
