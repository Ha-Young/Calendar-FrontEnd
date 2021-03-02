import React, { useState } from "react";
import TimePicker from "../../components/TimePicker/TimePicker";
import ColorPicker, { useColor } from "react-color-palette";
import DatePicker from "react-datepicker";
import styles from "./NewEventPage.module.css";
import { validateText, validateTime } from "../../utils/vailidation";

import "react-datepicker/dist/react-datepicker.css";

const initialFormState = {
  title: "",
  description: "",
  date: new Date(),
  startTime: "",
  endTime: "",
};

const NewEventPage = ({ onSubmit }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [newEventData, setNewEventData] = useState({
    title: "",
    description: "",
    date: new Date(),
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

  const handleDateChange = (date) => {
    setNewEventData((prev) => ({
      ...prev,
      date,
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

    onSubmit({
      ...newEventData,
      color,
    });

    setNewEventData(initialFormState);
  };

  return (
    <div className={styles.NewEventPage}>
      <form onSubmit={handleSubmit}> 
        <div className={styles.column}>
          <input 
            className={styles.input} 
            name="title" 
            type="text" 
            value={newEventData.title}
            onChange={handleInputChange}
          />
          <input 
            className={styles.input} 
            name="description" 
            type="text" 
            value={newEventData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles[`same-type`]}>
          <DatePicker 
            className={styles.input} 
            name="date"
            selected={newEventData.date} 
            onChange={handleDateChange}
          />
          <TimePicker 
            name="startTime" 
            selected={newEventData.startTime}
            onChange={handleInputChange}
          />
          <TimePicker 
            name="endTime"
            selected={newEventData.endTime}
            onChange={handleInputChange}
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
