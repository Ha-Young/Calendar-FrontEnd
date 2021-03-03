import React from "react";

const startTimeOptions = [];
const endTimeOptions = [];

const makeTimeOptions = (array, start, end) => {
  for (let i = start; i <= end; i++) {
    array.push(<option key={`time-${i}`} value={i}>{i}</option>);
  }
};

makeTimeOptions(startTimeOptions, 0, 23);
makeTimeOptions(endTimeOptions, 1, 24);

export default function InputTime({ name, handleChange, isStartTime, isEndTime}) {
  return (
    <select key={name} name={name} onChange={handleChange}>
      {isStartTime && startTimeOptions}
      {isEndTime && endTimeOptions}
    </select>
  )
}
