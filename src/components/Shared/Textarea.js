import React from "react";

export default function Textarea({ handleChange, name, value, rows }) {
  return (
    <textarea name={name} rows={rows} onChange={handleChange} value={value}></textarea>
  );
}
