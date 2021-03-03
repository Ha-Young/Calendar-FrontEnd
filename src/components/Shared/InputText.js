import React from "react";

export default function InputText({ name, handleChange }) {
  return (
    <input type="text" name={name} onChange={handleChange} />
  )
}
