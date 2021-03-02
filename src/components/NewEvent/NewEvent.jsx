import { dateConst } from "constants/constants";
import React, { useState } from "react";

// import styles from "./NewEvent.module.css";

const NewEvent = (props) => {
  const [event, setEvent] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setEvent({ ...event, [key]: value });
    console.log(event);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Event Title"
        onChange={onChange}
        required
      />
      <input
        name="description"
        type="textarea"
        placeholder="Event Description"
        onChange={onChange}
        required
      />
      <input
        name="date"
        type="date"
        // value={date}
        onChange={onChange}
        required
      />
      <select name="startTime" id="start-time" onChange={onChange} required>
        {dateConst.TIME_LIST.map((time) => (
          <option key={time} value={time}>
            {time}시
          </option>
        ))}
      </select>
      <select name="endTime" id="end-time" onChange={onChange} required>
        {dateConst.TIME_LIST.map((time) => (
          <option key={time} value={time}>
            {time}시
          </option>
        ))}
      </select>
      <button>Add</button>
    </form>
  );
};

export default NewEvent;
