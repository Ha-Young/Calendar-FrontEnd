import React from "react";

const startTimeOptions = [];
const endTimeOptions = [];

const makeTimeOptions = (array, start, end) => {
  for (let i = start; i <= end; i++) {
    let time;
    if (i < 10) {
      time = `0${i}:00`;
    } else {
      time = `${i}:00`;
    }
    array.push(<option key={`time-${i}`} value={i}>{time}</option>);
  }
};

makeTimeOptions(startTimeOptions, 0, 23);
makeTimeOptions(endTimeOptions, 1, 24);

export default function InputTime({ name, value, handleChange, isStartTime, isEndTime}) {
  return (
    <select key={name} name={name} onChange={handleChange} value={value}>
      {isStartTime && startTimeOptions}
      {isEndTime && endTimeOptions}
    </select>
  )
}
