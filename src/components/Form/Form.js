import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form(props) {
  console.log(props);

  const [values, setValues] = useState({
    title: "hi",
    desc: "aa",
    start: "11",
    end: "14",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
  }

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
          value={values.desc}
          onChange={handleChange}
        />
      </label>
      <label>
        Start time :
        <input
          name="startTime"
          type="text"
          value="11"
          value={values.start}
          onChange={handleChange}
        />
      </label>
      <label>
        End time :
        <input
          name="endTime"
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
