import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ onSubmit }) {
  const initialState = {
    title: "",
    description: "",
    start: "",
    end: "",
  };
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
    setValues(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
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
          type="text"
          value={values.start}
          onChange={handleChange}
        />
      </label>
      <label>
        End time :
        <input
          name="end"
          type="text"
          value={values.end}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
      {/* // disabled={submitting} */}
    </form>
  );
}
