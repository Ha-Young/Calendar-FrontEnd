import React from "react";

export default function InputRadio({ name, value, checked, handleChange }) {
  return (
    <input type="radio" value={value} name={name} checked={checked} onChange={handleChange} />
  );
}
