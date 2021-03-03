import React from "react";

export default function InputDate({ name, value, handleChange }) {
  return (
    <input type="date" name={name} onChange={handleChange} value={value} />
  )
}
