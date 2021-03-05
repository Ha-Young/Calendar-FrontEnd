import React from 'react';

export default function EventTime({ name, value, onChange }) {
  return (
    <div>
      <p>{name}</p>
      <input
        type="time"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
