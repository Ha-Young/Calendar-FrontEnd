import React, { useState } from "react";
import ColorPicker, { useColor } from "react-color-palette";
import styles from "./NewEventPage.module.css";
import { validateText, validateTime } from "../../utils/vailidation";
import { currentDay, today } from "../../utils/date";

import "react-datepicker/dist/react-datepicker.css";

const initialFormState = {
  title: "",
  description: "",
  date: currentDay(today),
  startTime: "",
  endTime: "",
};

const NewEventPage = ({ onSubmit }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [newEventData, setNewEventData] = useState({
    title: "",
    description: "",
    date: currentDay(today),
    startTime: "",
    endTime: "",
  });
  const [color, setColor] = useColor(null);

  const handleInputChange = ({
    target: {
      name,
      value,
    },
  }) => {
    setNewEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateData = (eventData) => {
    if
    (
      !validateText(eventData.title) ||
      !validateText(eventData.description) ||
      !validateTime(eventData.startTime,eventData.endTime)
    ) {
      return false;
    }

    return true;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setErrorMessage("");

    if (!validateData(newEventData)) {
      setErrorMessage("error"); // 에러메시지 처리... 이것도 리덕스에서...?
      return;
    }
    const hexColor = color.hex;

    onSubmit({
      ...newEventData,
      id: newEventData.date,
      color: hexColor,
    });

    setNewEventData(initialFormState);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.column}>
          <input
            className={styles.input}
            name="title"
            type="text"
            onChange={handleInputChange}
            value={newEventData.title}
          />
          <input
            className={styles.input}
            name="description"
            type="text"
            onChange={handleInputChange}
            value={newEventData.description}
          />
        </div>
        <div className={styles[`same-type`]}>
          <input
            className={styles.input}
            name="date"
            type="date"
            onChange={handleInputChange}
            value={newEventData.date}
          />
          <input
            className={styles.input}
            name="startTime"
            type="time"
            step="3600"
            onChange={handleInputChange}
            value={newEventData.startTime}
          />
          <input
            className={styles.input}
            name="endTime"
            type="time"
            step="3600"
            onChange={handleInputChange}
            value={newEventData.endTime}
          />
        </div>
        <div className={styles.center}>
          <ColorPicker
            width={200}
            height={100}
            color={color}
            onChange={setColor}
            white
            hideHEX
            hideRGB
            hideHSB
          />
        </div>
        {errorMessage}
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};

export default NewEventPage;
