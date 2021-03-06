import React, { useState } from "react";
import { useHistory } from "react-router";
import ColorPicker, { useColor } from "react-color-palette";
import TextInput from "../TextInput/TextInput";
import styles from "./Form.module.css";
import { validateText, validateTime } from "../../utils/vailidation";
import * as form from "../../constants/form";

const Form = ({
  onSubmit,
  initialState,
  children,
  onLoad = () => {},
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [newEventData, setNewEventData] = useState(initialState);
  const [color, setColor] = useColor(initialState.color);
  const history = useHistory();

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
      setErrorMessage(form.FORM_ERROR_MESSAGE);
      return;
    }

    const hexColor = color.hex;

    onSubmit({
      ...newEventData,
      color: hexColor,
    });

    onLoad([newEventData.date]);

    history.goBack();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.column}>
          <TextInput
            name={form.TITLE}
            onChange={handleInputChange}
            value={newEventData.title}
          />
          <TextInput
            name={form.DESCRIPTION}
            onChange={handleInputChange}
            value={newEventData.description}
          />
        </div>
        <div className={styles[`same-type`]}>
          <input
            className={styles.input}
            name={form.DATE}
            type="date"
            onChange={handleInputChange}
            value={newEventData.date}
          />
          <input
            className={styles.input}
            name={form.START_TIME}
            type="time"
            step={form.TIME_STEP}
            onChange={handleInputChange}
            value={newEventData.startTime}
          />
          <input
            className={styles.input}
            name={form.END_TIME}
            type="time"
            step={form.TIME_STEP}
            onChange={handleInputChange}
            value={newEventData.endTime}
          />
        </div>
        <div className={styles.center}>
          <ColorPicker
            width={form.COLOR_PICKER_WIDTH}
            height={form.COLOR_PICKER_HEIGHT}
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
      {children}
    </div>
  );
};

export default Form;
