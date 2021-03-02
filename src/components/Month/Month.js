import React from "react";
import { DAY_COLUMN_NUMBER } from "../../constants";
import Day from "./Day";

export default function Month(props) {
  const days = [];

  for (let i = 0; i < DAY_COLUMN_NUMBER; i++) {
    days.push(<Day key ={i} day={i} />)
  }
  return (
    <ul>
      {days}
    </ul>
  );
}