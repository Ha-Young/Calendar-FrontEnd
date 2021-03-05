import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dateConst } from "constants/constants";

import { inputConst, typeConst } from "constants/constants";
import { getDateISO } from "utils/utilFunction";
import styles from "./EventForm.module.css";

const EventForm = ({ type, weeklyEvent, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(getDateISO(0));
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const { eventId } = useParams();

  useEffect(() => {
    if (type === typeConst.EDIT) {
      const currentEvent = weeklyEvent[eventId];
      const { title, description, date, startTime, endTime } = currentEvent;

      setTitle(title);
      setDescription(description);
      setDate(date);
      setStartTime(("0" + startTime + "시").slice(-3));
      setEndTime(("0" + endTime + "시").slice(-3));
    }
  }, [eventId, type, weeklyEvent]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedStartTime = parseInt(startTime.slice(0, 2));
    const parsedEndTime = parseInt(endTime.slice(0, 2));
    const newEvent = {
      title,
      description,
      date,
      startTime: parsedStartTime,
      endTime: parsedEndTime,
    };

    if (type === typeConst.EDIT) {
      newEvent.id = eventId;
    }

    onSubmit(newEvent, type);

    setDescription("");
    setDate(getDateISO(0));
    setStartTime("");
    setEndTime("");
  };

  const handleInput = (event) => {
    const {
      target: { name, value },
    } = event;

    switch (name) {
      case inputConst.TITLE:
        setTitle(value);
        break;

      case inputConst.DESCRIPTION:
        setDescription(value);
        break;

      case inputConst.DATE:
        setDate(value);
        break;

      case inputConst.START_TIME:
        setStartTime(value);
        break;

      case inputConst.END_TIME:
        setEndTime(value);
        break;

      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(event) => handleInput(event)}
        required
      />
      <input
        name="description"
        type="textarea"
        placeholder="Event Description"
        value={description}
        onChange={(event) => handleInput(event)}
        required
      />
      <input
        name="date"
        type="date"
        value={date}
        onChange={(event) => handleInput(event)}
        required
      />
      <select
        name="startTime"
        id="start-time"
        value={startTime}
        onChange={(event) => handleInput(event)}
        required
      >
        {dateConst.TIME_LIST.map((time) => (
          <option key={time}>{time}시</option>
        ))}
      </select>
      <select
        name="endTime"
        id="end-time"
        onChange={(event) => handleInput(event)}
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
