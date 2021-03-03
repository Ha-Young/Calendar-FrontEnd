import React from "react";

export default function InputText({ name, value, handleChange }) {
  return (
    <input type="text" name={name} onChange={handleChange} value={value} />
  )
}
