import React from 'react';

export default function EventTime({ name, value, onChange }) {
  return (
    <div>
      <p>{name}</p>
      <input
        type="time"
        required step="3600"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
