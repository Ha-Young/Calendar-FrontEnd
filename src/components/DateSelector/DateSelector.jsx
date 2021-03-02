import React from "react";

function DateSelector() {
  const now = new Date();

  console.log(now.getFullYear());

  return (
    <div>
      <button>이전</button>
      <text></text>
      <button>다음</button>
    </div>
  );
}

export default DateSelector;
