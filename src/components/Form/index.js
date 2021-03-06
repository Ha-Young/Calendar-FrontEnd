import React, { useState } from "react";
import { useHistory } from "react-router";
import ColorPicker, { useColor } from "react-color-palette";
import TextInput from "../TextInput";
import styles from "./Form.module.css";
import { validateText, validateTime } from "../../utils/vailidation";
import * as form from "../../constants/form";

const Form = ({
  onSubmit,
  initialFormState,
  children,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState(initialFormState);
  const [color, setColor] = useColor(initialFormState.color);
  const history = useHistory();

  const handleInputChange = ({
    target: {
      name,
      value,
    },
  }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateData = (data) => {
    if
    (
      !validateText(data.title) ||
      !validateText(data.description) ||
      !validateTime(data.startTime,data.endTime)
    ) {
      return false;
    }

    return true;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setErrorMessage("");

    if (!validateData(formData)) {
      setErrorMessage(form.FORM_ERROR_MESSAGE);
      return;
    }

    const hexColor = color?.hex;

    onSubmit({
      ...formData,
      color: hexColor,
    });

    history.goBack();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.column}>
          <TextInput
            name={form.TITLE}
            onChange={handleInputChange}
            value={formData.title}
          />
          <TextInput
            name={form.DESCRIPTION}
            onChange={handleInputChange}
            value={formData.description}
          />
        </div>
        <div className={styles[`same-type`]}>
          <input
            className={styles.input}
            name={form.DATE}
            type="date"
            onChange={handleInputChange}
            value={formData.date}
          />
          <input
            className={styles.input}
            name={form.START_TIME}
            type="time"
            step={form.TIME_STEP}
            onChange={handleInputChange}
            value={formData.startTime}
          />
          <input
            className={styles.input}
            name={form.END_TIME}
            type="time"
            step={form.TIME_STEP}
            onChange={handleInputChange}
            value={formData.endTime}
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
