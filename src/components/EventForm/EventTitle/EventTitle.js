import React from 'react';

export default function EventTitle({ value, onChange }) {
  return (
    <div>
      <p>이벤트 제목</p>
      <input
        value={value}
        type="text"
        onChange={onChange}
      />
    </div>
  );
}
