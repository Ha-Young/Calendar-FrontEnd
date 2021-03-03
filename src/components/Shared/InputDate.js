import React from "react";

export default function InputDate({ name, handleChange }) {
  return (
    <input type="date" name={name} onChange={handleChange} />
  )
}
