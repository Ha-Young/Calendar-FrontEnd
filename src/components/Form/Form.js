import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./Form.module.css";

export default function Form({ onSubmit, onUpdate, onDelete, type }) {
  const history = useHistory();
  const params = useLocation();
  const eventDay = params.state.eventDay;
  const eventTime = params.state.hour;
  const { title, description } = params.state.event;
  const initialState = {
    eventDay: eventDay || "",
    title: title || "",
    description: description || "",
    start: eventTime,
    end: eventTime + 1,
  };
  const [values, setValues] = useState(initialState);
  const [isDisabled, setIsDisabled] = useState(type === "new" ? false : true);

  function handleChange(ev) {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: value });
  };

  function handleSubmit(ev) {
    ev.preventDefault();
    onSubmit(values);
    history.goBack();
  };

  function handleClick(ev) {
    const buttonAction = ev.target.innerText;
    if (buttonAction === "Submit") {
      onUpdate(params.state.event, values);
      history.goBack();
    }
    if (buttonAction === "Update") {
      setIsDisabled(false);
    }
    if (buttonAction === "Delete") {
      onDelete(params.state.event);
      history.goBack();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={isDisabled}>
        <h1>{values.eventDay}</h1>
        <label>
          Title :
          <input
            name="title"
            type="text"
            value={values.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Description :
          <input
            name="description"
            type="text"
            value={values.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Start time :
          <input
            name="start"
            type="number"
            value={values.start}
            onChange={handleChange}
          />
        </label>
        <label>
          End time :
          <input
            name="end"
            type="number"
            value={values.end}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      {type === "new"
        ? (
          <button className={styles.form_button} onSubmit={handleSubmit}>
            Submit
          </button>
        ) : (
          <div className={styles.flex}>
            <div className={styles.form_button} onClick={handleClick}>
              {isDisabled ? "Update" : "Submit"}
            </div>
            <div className={styles.form_button} onClick={handleClick}>Delete</div>
          </div>
        )
      }
    </form>
  );
}
