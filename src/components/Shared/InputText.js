import React from "react";

export default function InputText({ required, name, value, handleChange }) {
  return (
    <input type="text" name={name} onChange={handleChange} value={value} required={required} />
  )
}
