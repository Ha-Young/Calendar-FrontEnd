import React from 'react';

export default function EventDate({ value, onChange }) {
  return (
    <div>
      <p>이벤트 날짜</p>
      <input
        type="date"
        onChange={onChange}
        value={value}
        />
    </div>
  );
}
