import React from "react";

export default function Textarea({ handleChange, name }) {
  return (
    <textarea name={name} onChange={handleChange}></textarea>
  )
}
