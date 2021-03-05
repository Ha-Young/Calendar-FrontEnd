import React from 'react';

export default function EventDescription({ value, onChange }) {
  return (
    <div>
      <p>이벤트 설명</p>
      <textarea
        onChange={onChange}
        form="eventForm"
        rows="5"
        cols="30"
        value={value}
      ></textarea>
    </div>
  );
}

