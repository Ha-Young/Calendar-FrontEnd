import React from "react";

export default function InputRadio({ name, value, handleChange }) {
  return (
    <input type="radio" value={value} name={name} onChange={handleChange} />
  );
}
