import React from "react";

export default function Textarea({ handleChange, name, value }) {
  return (
    <textarea name={name} onChange={handleChange} value={value}></textarea>
  )
}
