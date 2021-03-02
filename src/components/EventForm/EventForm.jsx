import React from "react";
import { dateConst } from "constants/constants";
// import styles from "./EventForm.module.css";

const EventForm = ({
  onSubmit,
  onChange,
  value: { title, description, date, startTime, endTime },
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={onChange}
        required
      />
      <input
        name="description"
        type="textarea"
        placeholder="Event Description"
        onChange={onChange}
        value={description}
        required
      />
      <input
        name="date"
        type="date"
        value={date}
        onChange={onChange}
        required
      />
      <select
        name="startTime"
        id="start-time"
        onChange={onChange}
        value={startTime}
        required
      >
        {dateConst.TIME_LIST.map((time) => (
          <option key={time}>{time}시</option>
        ))}
      </select>
      <select
        name="endTime"
        id="end-time"
        onChange={onChange}
        value={endTime}
        required
      >
        {dateConst.TIME_LIST.map((time) => (
          <option key={time}>{time}시</option>
        ))}
      </select>
      <button>Add</button>
    </form>
  );
};

export default EventForm;
