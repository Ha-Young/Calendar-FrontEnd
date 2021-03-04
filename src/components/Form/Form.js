import React, { useState } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import styles from "./Form.module.css";

export default function Form({ onSubmit, formTime, currentDay }) {
  const history = useHistory();
  const initialState = {
    eventDate: currentDay,
    title: "",
    description: "",
    start: formTime,
    end: formTime + 1,
  };
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{currentDay}</h1>
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
      <button type="submit">Submit</button>
      {/* // disabled={submitting} */}
    </form>
  );
}
