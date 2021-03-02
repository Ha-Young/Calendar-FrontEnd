import React from "react";

function DateSelector({ date, preDate, nextDate }) {
  return (
    <div>
      <button onClick={preDate}>이전</button>
      <text>{date}</text>
      <button onClick={nextDate}>다음</button>
    </div>
  );
}

export default DateSelector;
